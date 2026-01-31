const fs = require('fs');
const path = require('path');

const MANAGEMENT_DIR = path.join(__dirname, '../src/components/Management');

// The required fields to add at the end
const PROCESSING_STEP = `  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' }`;
const UNIT_PRICE = `  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' }`;

const isEntityFile = (fileName) => {
    return /^[A-Z]/.test(fileName) &&
        fileName.endsWith('.js') &&
        !fileName.includes('index.js');
};

const cleanFieldsConfig = (filePath) => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Extract everything before fieldsConfig
        const beforeMatch = content.match(/([\s\S]*?)(export const fieldsConfig = {)/);
        if (!beforeMatch) {
            console.log(`  ⚠️  No fieldsConfig found in ${path.basename(filePath)}`);
            return false;
        }

        const beforeFieldsConfig = beforeMatch[1];

        // Extract everything after fieldsConfig closing
        const afterMatch = content.match(/};([\s\S]*export const entityName[\s\S]*)/);
        if (!afterMatch) {
            console.log(`  ⚠️  Could not find entityName export in ${path.basename(filePath)}`);
            return false;
        }

        const afterFieldsConfig = afterMatch[1];

        // Extract the fieldsConfig content
        const fieldsMatch = content.match(/export const fieldsConfig = {([\s\S]+?)^};/m);
        if (!fieldsMatch) {
            console.log(`  ⚠️  Could not parse fieldsConfig in ${path.basename(filePath)}`);
            return false;
        }

        let fieldsContent = fieldsMatch[1];

        // Remove any line that doesn't start with a valid property name (alphanumeric + underscore)
        // This removes orphaned fragments like "], faker: ..." or "type: ..."
        const lines = fieldsContent.split('\n');
        const validLines = [];

        for (let line of lines) {
            const trimmed = line.trim();

            // Skip empty lines and comments (keep them)
            if (trimmed === '' || trimmed.startsWith('//')) {
                validLines.push(line);
                continue;
            }

            // Check if line starts with a valid property name
            if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*:/.test(trimmed)) {
                // Skip processing_step and unit_price - we'll add them at the end
                if (trimmed.startsWith('processing_step:') || trimmed.startsWith('unit_price:')) {
                    continue;
                }
                validLines.push(line);
            }
            // Otherwise skip this malformed line
        }

        // Rejoin the valid lines
        let cleanedFields = validLines.join('\n');

        // Ensure the last property ends with a comma
        cleanedFields = cleanedFields.trimEnd();
        if (!cleanedFields.endsWith(',')) {
            cleanedFields += ',';
        }

        // Build the new file content
        const newContent = `${beforeFieldsConfig}export const fieldsConfig = {
${cleanedFields}
${PROCESSING_STEP},
${UNIT_PRICE}
};
${afterFieldsConfig}`;

        // Write back
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`  ✅ Cleaned ${path.basename(filePath)}`);
        return true;
    } catch (err) {
        console.error(`  ❌ Error processing ${path.basename(filePath)}:`, err.message);
        return false;
    }
};

const processDirectory = (dir) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file === 'Config' || file === 'Base') {
                return;
            }
            processDirectory(fullPath);
        } else if (isEntityFile(file)) {
            const entityName = path.basename(file, '.js');
            console.log(`\n📝 Processing ${entityName}...`);
            cleanFieldsConfig(fullPath);
        }
    });
};

console.log('🚀 Starting final cleanup of fieldsConfig...\n');
if (fs.existsSync(MANAGEMENT_DIR)) {
    processDirectory(MANAGEMENT_DIR);
    console.log('\n✨ Final cleanup complete!');
} else {
    console.error('Management directory not found:', MANAGEMENT_DIR);
}
