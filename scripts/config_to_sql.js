const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. Get input file path
const filePath = process.argv[2];
if (!filePath) {
    console.error('Usage: node scripts/config_to_sql.js <path_to_config_file.js>');
    process.exit(1);
}

// 2. Resolve absolute path
const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(process.cwd(), filePath);

if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    process.exit(1);
}

try {
    // 3. Read File Content
    let code = fs.readFileSync(absolutePath, 'utf8');

    // 4. Pre-process code to be VM-safe
    // Remove imports
    code = code.replace(/import\s+.*?from\s+['"].*?['"];?/g, '');

    // Replace 'export const' with 'const' (or 'var' for safety in VM context)
    // We treat top-level exports as globals in the context
    code = code.replace(/export\s+const/g, 'var');
    code = code.replace(/export\s+default/g, 'var _default =');

    // 5. Create Sandbox Context
    const sandbox = {
        require: () => ({}), // Mock require
        console: console     // Allow logging
    };
    vm.createContext(sandbox);

    // 6. Execute Code
    vm.runInContext(code, sandbox);

    // 7. Extract Config
    const fieldsConfig = sandbox.fieldsConfig;
    const tableName = sandbox.collectionName || 'generated_table';

    if (!fieldsConfig) {
        console.error('Error: fieldsConfig not found in file.');
        process.exit(1);
    }

    // 8. Generate SQL
    // Mapping React/App types to MySQL Data Types
    const typeMapping = {
        'text': 'VARCHAR(255)',
        'number': 'DECIMAL(15,2)',
        'date': 'DATE',
        'checkbox': 'TINYINT(1) DEFAULT 0',
        'select': 'VARCHAR(100)',
        'related': 'CHAR(36)', // Assuming related IDs are UUIDs/CHAR(36)
        'multiline': 'TEXT',
        'email': 'VARCHAR(255)',
        'url': 'VARCHAR(255)',
        'uuid': 'CHAR(36)' // If explicit type used
    };

    let sql = `-- Auto-generated SQL for ${tableName}\n`;
    sql += `CREATE TABLE IF NOT EXISTS \`${tableName}\` (\n`;

    // Standard ID field (commonly needed even if not in config, but let's check config)
    // If invoice_id is hidden, use it? Or add auto-increment ID like schema.sql
    sql += `  \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n`;
    sql += `  \`organization_id\` VARCHAR(255) NOT NULL,\n`; // Common multi-tenant field found in schema.sql

    const lines = [];

    // Iterate fields
    Object.entries(fieldsConfig).forEach(([key, config]) => {
        // Skip Header/Section keys if they are just grouping comments (not case here, config is flat)
        // Check if 'type' exists
        if (!config.type) return;

        let sqlType = typeMapping[config.type] || 'VARCHAR(255)';

        // Overrides based on properties
        if (config.multiline) sqlType = 'TEXT';
        if (config.hidden && config.faker === 'datatype.uuid') sqlType = 'CHAR(36)';

        // Handle select options as comment or CHECK constraint?
        // For simple MySQL, we stick to VARCHAR usually.

        let line = `  \`${key}\` ${sqlType}`;

        // Nullability
        if (config.required) {
            line += ' NOT NULL';
        }

        // Comment
        if (config.label) {
            line += ` COMMENT '${config.label.replace(/'/g, "''")}'`;
        }

        lines.push(line);
    });

    // Add standard tracking fields seen in schema.sql
    if (!fieldsConfig['total_price']) lines.push(`  \`total_price\` DECIMAL(15,2)`);
    if (!fieldsConfig['processing_step']) lines.push(`  \`processing_step\` VARCHAR(100)`);

    lines.push(`  \`created_at\` DATETIME DEFAULT CURRENT_TIMESTAMP`);
    lines.push(`  \`updated_at\` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);

    sql += lines.join(',\n');
    sql += `\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`;

    console.log(sql);

} catch (err) {
    console.error('Error generating SQL:', err);
    process.exit(1);
}
