const fs = require('fs');
const path = require('path');

// Mapping from config types to MySQL types
const TYPE_MAPPING = {
    'number': 'DECIMAL(15, 2) DEFAULT 0',
    'text': 'VARCHAR(255)',
    'string': 'VARCHAR(255)',
    'textarea': 'TEXT',
    'date': 'DATE',
    'datetime': 'DATETIME',
    'boolean': 'BOOLEAN DEFAULT FALSE',
    'select': 'VARCHAR(50)',
    'email': 'VARCHAR(255)',
    'phone': 'VARCHAR(50)',
    'url': 'VARCHAR(500)',
    'currency': 'DECIMAL(15, 2) DEFAULT 0.00',
    'percent': 'DECIMAL(5, 2) DEFAULT 0.00'
};

const generateSchema = (filePath) => {
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`Error: File not found at ${filePath}`);
            process.exit(1);
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Simple regex parsing to extract collectionName
        const collectionNameMatch = fileContent.match(/export const collectionName = ['"](.+?)['"];/);
        let tableName = 'unknown_table';
        if (collectionNameMatch && collectionNameMatch[1]) {
            tableName = collectionNameMatch[1];
        } else {
            // Fallback: use filename
            tableName = path.basename(filePath, '.js').toLowerCase().replace('config', '');
            console.warn(`Warning: collectionName not found. Using filename '${tableName}' as table name.`);
        }

        // Extract fieldsConfig object string
        // This regex looks for "export const fieldsConfig = {" and captures until the closing brace of that block
        // Note: usage of greedy matching might be risky if complex, but sufficient for this specific file structure
        const fieldsConfigMatch = fileContent.match(/export const fieldsConfig = ({[\s\S]+?});/);

        if (!fieldsConfigMatch || !fieldsConfigMatch[1]) {
            console.error('Error: fieldsConfig object not found in the file.');
            return;
        }

        // Evaluate the object string to get the actual object
        // We use a safe-ish eval by wrapping in parenthesis
        let fieldsConfig;
        try {
            // Replace simple property keys that might not be quoted if necessary, though format is usually valid JS
            const objectString = fieldsConfigMatch[1];
            // Use Function constructor as a safer alternative to eval, assuming simple data objects
            const getObj = new Function(`return ${objectString};`);
            fieldsConfig = getObj();
        } catch (e) {
            console.error('Error parsing fieldsConfig object:', e.message);
            // Fallback: Try removing comments and trailing commas if JSON.parse fails, but simple eval is best for JS objects
            return;
        }

        // Generate SQL
        let sql = `CREATE TABLE IF NOT EXISTS \`${tableName}\` (\n`;
        sql += `    \`id\` INT AUTO_INCREMENT PRIMARY KEY,\n`;

        const lines = [];
        for (const [key, config] of Object.entries(fieldsConfig)) {
            const fieldName = key;
            // Handle shorthand config where value might be just type string? No, example shows object.
            const fieldType = config.type || 'text';
            const sqlType = TYPE_MAPPING[fieldType] || 'VARCHAR(255)';
            const comment = config.label ? ` COMMENT '${config.label.replace(/'/g, "''")}'` : '';

            lines.push(`    \`${fieldName}\` ${sqlType}${comment}`);
        }

        // Add standard timestamp columns
        lines.push(`    \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        lines.push(`    \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);

        sql += lines.join(',\n');
        sql += `\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

        console.log(`-- Schema for ${tableName}`);
        console.log(sql);
        console.log(''); // Empty line

    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
};

// Get file path from command line args
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log('Usage: node generate_schema.js <path_to_config_file>');
    process.exit(0);
}

generateSchema(args[0]);
