
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, '../src/components/Management');
const OUTPUT_FILE = path.resolve(__dirname, '../schema.sql');

function mapToSQLType(field) {
    if (field.type === 'number') {
        if (field.label && field.label.toLowerCase().includes('id')) return 'CHAR(36)'; // FKs are often numbers in some systems but we use UUIDs here
        return 'DECIMAL(15,2)'; // Default for money/metrics
    }
    if (field.type === 'text') {
        if (field.faker && field.faker.includes('uuid')) return 'CHAR(36)';
        if (field.multiline) return 'TEXT';
        return 'VARCHAR(255)';
    }
    if (field.type === 'email') return 'VARCHAR(255)';
    if (field.type === 'checkbox') return 'TINYINT(1) DEFAULT 0';
    if (field.type === 'date') return 'DATE';
    if (field.type === 'datetime') return 'DATETIME';
    if (field.type === 'select') return 'VARCHAR(100)';

    return 'VARCHAR(255)';
}

function camelToSnake(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '');
}

function generateSQL() {
    console.log(`Scanning ${SRC_DIR}...`);

    // Find all .js files in Management recursively (including Details folders)
    const files = glob.sync('**/*.js', { cwd: SRC_DIR, absolute: true });

    let sqlOutput = `-- Auto-generated MySQL Schema\n\n`;
    let mainTables = [];
    let detailTables = [];

    // Manually add manager_action_logs if it's not found in the scan (it should be, but let's be safe or just rely on the scan)
    // The previous implementation relied on scanning. We assume manager_action_logs.js exists in Management root.

    let count = 0;

    files.forEach(file => {
        try {
            // Skip files in Config or Base folders
            if (file.includes('/Config/') || file.includes('\\Config\\') ||
                file.includes('/Base/') || file.includes('\\Base\\') ||
                file.includes('configRegistry.js') || file.includes('entity_comments_history.js') ||
                file.endsWith('Config.js')) {
                // console.log(`Skipped (Config/Base): ${path.basename(file)}`);
                return;
            }

            // Check if file exports fieldsConfig
            let content = fs.readFileSync(file, 'utf8');
            if (!content.includes('export const fieldsConfig')) {
                console.log(`Skipped (No fieldsConfig): ${path.basename(file)}`);
                return;
            }

            // Determine if it is a Details file
            const isDetailTable = file.includes('/Details/') || file.includes('\\Details\\');

            // Auto-correct collectionName for Details files
            if (isDetailTable) {
                const filename = path.basename(file, '.js');
                // Expected: CamelCase (Filename) -> snake_case (Table Name)
                // e.g. PatentManagementDetails -> patent_management_details
                const expectedCollectionName = camelToSnake(filename);

                const collectionMatch = content.match(/export const collectionName = ['"](.+?)['"]/);
                if (collectionMatch) {
                    const currentCollectionName = collectionMatch[1];
                    if (currentCollectionName !== expectedCollectionName) {
                        console.log(`Fixing collectionName in ${filename}: ${currentCollectionName} -> ${expectedCollectionName}`);
                        content = content.replace(
                            /export const collectionName = ['"](.+?)['"]/,
                            `export const collectionName = '${expectedCollectionName}'`
                        );
                        fs.writeFileSync(file, content);
                        // Update content variable so the SQL generation uses the new name
                    }
                }
            }

            // Re-match collectionName after potential fix
            const collectionMatch = content.match(/export const collectionName = ['"](.+?)['"]/);
            if (!collectionMatch) {
                if (file.includes('ProductDetails')) console.log(`Skipped (No collectionName): ${path.basename(file)}`);
                return;
            }

            const tableName = collectionMatch[1];
            if (tableName.includes('product_details')) console.log(`Found table: ${tableName} in ${path.basename(file)}`);

            // Parse fieldsConfig using a sloppy eval-like approach or regex since we can't require ES modules easily in this CJS script without setup
            // Actually, simplest implies regex parsing for keys and types.
            // fieldsConfig = { key: { ... }, key2: { ... } }

            // Let's try to extract the object body
            const fieldsConfigMatch = content.match(/export const fieldsConfig = ({[\s\S]+?});/);
            if (!fieldsConfigMatch) {
                if (file.includes('ProductDetails')) console.log(`Skipped (Regex Failed): ${path.basename(file)}`);
                return;
            }

            const configBody = fieldsConfigMatch[1];

            let tableSQL = `CREATE TABLE IF NOT EXISTS \`${tableName}\` (\n`;
            tableSQL += `  \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n`; // Requested AUTO_INCREMENT
            tableSQL += `  \`organization_id\` VARCHAR(255) NOT NULL,\n`; // Requested field

            // Regex to find keys:   key: { ... }
            const fieldRegex = /\s+([a-zA-Z0-9_]+):\s*{([^}]+)}/g;
            let match;
            // Pre-populate with manually added fields to avoid duplication if they exist in config
            const processedFields = new Set(['id', 'organization_id']);

            while ((match = fieldRegex.exec(configBody)) !== null) {
                const key = match[1];

                // Skip if already processed (avoids duplicates from config or collision with manual fields)
                if (processedFields.has(key)) continue;

                const props = match[2];

                // Extract type
                const typeMatch = props.match(/type:\s*['"](.+?)['"]/);
                const type = typeMatch ? typeMatch[1] : 'text';

                // Extract faker to check for uuid
                const fakerMatch = props.match(/faker:\s*['"](.+?)['"]/);
                const faker = fakerMatch ? fakerMatch[1] : '';

                const sqlType = mapToSQLType({ type, faker });

                tableSQL += `  \`${key}\` ${sqlType},\n`;
                processedFields.add(key);
            }

            // Only add created_at and updated_at if they don't already exist in fieldsConfig
            if (!processedFields.has('created_at')) {
                tableSQL += `  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,\n`;
            }
            if (!processedFields.has('updated_at')) {
                tableSQL += `  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n`;
            }

            // Check for Workflow Config (stepsConfig) to inject processing_step
            try {
                const filename = path.basename(file, '.js');
                const configPath = path.join(path.dirname(file), 'Config', `${filename}Config.js`);

                if (fs.existsSync(configPath)) {
                    const configContent = fs.readFileSync(configPath, 'utf8');
                    // Check if stepsConfig is exported and has steps defined
                    if (configContent.includes('export const stepsConfig') && !processedFields.has('processing_step')) {
                        console.log(`Injecting processing_step for ${tableName} (found valid Config)`);
                        tableSQL += `  \`processing_step\` VARCHAR(255),\n`;
                    }
                }
            } catch (configErr) {
                // Ignore errors reading config
            }

            // Remove trailing comma from last field
            tableSQL = tableSQL.replace(/,\n$/, '\n');

            tableSQL += `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n`;

            // Store in appropriate array
            if (isDetailTable) {
                detailTables.push(tableSQL);
            } else {
                mainTables.push(tableSQL);
            }

            count++;
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    });

    // Combine output: main tables first, then detail tables
    sqlOutput += `-- Main Entity Tables\n\n`;
    sqlOutput += mainTables.join('');
    sqlOutput += `\n-- Detail Tables\n\n`;
    sqlOutput += detailTables.join('');

    fs.writeFileSync(OUTPUT_FILE, sqlOutput);
    console.log(`Generated SQL for ${count} tables (${mainTables.length} main, ${detailTables.length} details) to ${OUTPUT_FILE}`);
}

generateSQL();
