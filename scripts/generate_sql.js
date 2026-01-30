
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

function generateSQL() {
    console.log(`Scanning ${SRC_DIR}...`);

    // Find all .js files in Management recursively
    const files = glob.sync('**/*.js', { cwd: SRC_DIR, absolute: true });

    let sqlOutput = `-- Auto-generated MySQL Schema\n\n`;

    let count = 0;

    files.forEach(file => {
        try {
            // Check if file exports fieldsConfig
            const content = fs.readFileSync(file, 'utf8');
            if (!content.includes('export const fieldsConfig')) return;

            // Extremely basic regex parsing to avoid needing babel/import
            // We look for collectionName
            const collectionMatch = content.match(/export const collectionName = ['"](.+?)['"]/);
            if (!collectionMatch) return;

            const tableName = collectionMatch[1];

            // Parse fieldsConfig using a sloppy eval-like approach or regex since we can't require ES modules easily in this CJS script without setup
            // Actually, simplest implies regex parsing for keys and types.
            // fieldsConfig = { key: { ... }, key2: { ... } }

            // Let's try to extract the object body
            const fieldsConfigMatch = content.match(/export const fieldsConfig = ({[\s\S]+?});/);
            if (!fieldsConfigMatch) return;

            const configBody = fieldsConfigMatch[1];

            sqlOutput += `CREATE TABLE IF NOT EXISTS \`${tableName}\` (\n`;
            sqlOutput += `  \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n`; // Requested AUTO_INCREMENT
            sqlOutput += `  \`organization_id\` VARCHAR(255) NOT NULL,\n`; // Requested field

            // Regex to find keys:   key: { ... }
            const fieldRegex = /\s+([a-zA-Z0-9_]+):\s*{([^}]+)}/g;
            let match;

            while ((match = fieldRegex.exec(configBody)) !== null) {
                const key = match[1];
                const props = match[2];

                // Extract type
                const typeMatch = props.match(/type:\s*['"](.+?)['"]/);
                const type = typeMatch ? typeMatch[1] : 'text';

                // Extract faker to check for uuid
                const fakerMatch = props.match(/faker:\s*['"](.+?)['"]/);
                const faker = fakerMatch ? fakerMatch[1] : '';

                const sqlType = mapToSQLType({ type, faker });

                sqlOutput += `  \`${key}\` ${sqlType},\n`;
            }

            sqlOutput += `  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP,\n`;
            sqlOutput += `  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n`;
            sqlOutput += `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n\n`;

            count++;
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    });

    fs.writeFileSync(OUTPUT_FILE, sqlOutput);
    console.log(`Generated SQL for ${count} tables to ${OUTPUT_FILE}`);
}

generateSQL();
