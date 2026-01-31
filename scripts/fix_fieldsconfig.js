const fs = require('fs');
const path = require('path');

const MANAGEMENT_DIR = path.join(__dirname, '../src/components/Management');

// The required fields
const PROCESSING_STEP = `processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' }`;
const UNIT_PRICE = `unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' }`;

// Helper to check if a file is an entity component
const isEntityFile = (fileName) => {
    return /^[A-Z]/.test(fileName) &&
        fileName.endsWith('.js') &&
        !fileName.includes('index.js');
};

// Function to fix fieldsConfig
const fixFieldsConfig = (filePath) => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Find fieldsConfig
        const fieldsConfigMatch = content.match(/export const fieldsConfig = ({[\s\S]+?^};)/m);
        if (!fieldsConfigMatch) {
            console.log(`  ⚠️  No fieldsConfig found in ${path.basename(filePath)}`);
            return false;
        }

        let fieldsConfigContent = fieldsConfigMatch[1];
        const originalContent = fieldsConfigContent;

        // Remove any malformed or incomplete processing_step entries
        // This matches: processing_step: {...} OR just fragments like "type: 'select'..."
        fieldsConfigContent = fieldsConfigContent.replace(/processing_step:\s*{[^}]*}/g, '');
        fieldsConfigContent = fieldsConfigContent.replace(/^\s*type:\s*'select',\s*options:\s*\[{[^\]]*}\],\s*faker:\s*'random\.arrayElement'\s*}\s*/gm, '');

        // Remove any malformed or incomplete unit_price entries
        fieldsConfigContent = fieldsConfigContent.replace(/unit_price:\s*{[^}]*}/g, '');
        fieldsConfigContent = fieldsConfigContent.replace(/^\s*type:\s*'number',\s*faker:\s*'finance\.amount'\s*},?\s*/gm, '');

        // Clean up multiple commas, whitespace issues, and orphaned fragments
        fieldsConfigContent = fieldsConfigContent.replace(/,\s*,+/g, ',');
        fieldsConfigContent = fieldsConfigContent.replace(/{\s*,/g, '{');
        fieldsConfigContent = fieldsConfigContent.replace(/,\s*}/g, '}');
        fieldsConfigContent = fieldsConfigContent.replace(/^\s*}\s*$/gm, ''); // Remove orphaned closing braces

        // Find the position to insert (before the closing brace)
        const closingBraceMatch = fieldsConfigContent.match(/([\s\S]*)(};)$/);
        if (!closingBraceMatch) {
            console.log(`  ❌ Could not find closing brace in ${path.basename(filePath)}`);
            return false;
        }

        let beforeClosing = closingBraceMatch[1].trim();

        // Ensure the last line ends with a comma if it doesn't already
        if (!beforeClosing.endsWith(',')) {
            beforeClosing += ',';
        }

        // Add the two required fields
        const newFieldsConfig = `${beforeClosing}\n  ${PROCESSING_STEP},\n  ${UNIT_PRICE}\n};`;

        // Replace in original content
        const newContent = content.replace(fieldsConfigMatch[0], `export const fieldsConfig = ${newFieldsConfig}`);

        // Validate that it's different
        if (newContent === content) {
            console.log(`  ⏭️  No changes needed in ${path.basename(filePath)}`);
            return false;
        }

        // Write back
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`  ✅ Fixed fieldsConfig in ${path.basename(filePath)}`);
        return true;
    } catch (err) {
        console.error(`  ❌ Error processing ${path.basename(filePath)}:`, err.message);
        return false;
    }
};

// Recursive function to process directories
const processDirectory = (dir) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Skip Config and Base folders
            if (file === 'Config' || file === 'Base') {
                return;
            }
            processDirectory(fullPath);
        } else if (isEntityFile(file)) {
            const entityName = path.basename(file, '.js');
            console.log(`\n📝 Processing ${entityName}...`);
            fixFieldsConfig(fullPath);
        }
    });
};

console.log('🚀 Starting to fix fieldsConfig...\n');
if (fs.existsSync(MANAGEMENT_DIR)) {
    processDirectory(MANAGEMENT_DIR);
    console.log('\n✨ Fix complete!');
} else {
    console.error('Management directory not found:', MANAGEMENT_DIR);
}
