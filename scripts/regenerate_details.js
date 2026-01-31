const fs = require('fs');
const path = require('path');

const MANAGEMENT_DIR = path.join(__dirname, '../src/components/Management');

// Standard template for Details files
const DETAILS_TEMPLATE = `
export const fieldsConfig = {
  // Standard Detail Fields
  detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
  parent_id: { label: 'Parent ID', type: 'text', faker: 'datatype.uuid' }, // Foreign key to parent entity

  item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },

  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' }
};

export const entityName = '{{ENTITY_NAME}} Details';
export const collectionName = '{{COLLECTION_NAME}}_details';
`;

const isDetailsFile = (fileName) => {
    return /^[A-Z]/.test(fileName) &&
        fileName.endsWith('.js') &&
        !fileName.includes('index.js') &&
        fileName.endsWith('Details.js');
};

const regenerateDetailsFile = (filePath) => {
    try {
        // Extract entity name from file name
        const fileName = path.basename(filePath, '.js');
        const entityName = fileName.replace('Details', '');

        // Convert to collection name (camelCase to snake_case)
        const collectionName = entityName
            .replace(/([A-Z])/g, '_$1')
            .toLowerCase()
            .replace(/^_/, '');

        // Generate content from template
        let content = DETAILS_TEMPLATE
            .replace('{{ENTITY_NAME}}', entityName.replace(/([A-Z])/g, ' $1').trim())
            .replace('{{COLLECTION_NAME}}', collectionName);

        // Write the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✅ Regenerated ${path.basename(filePath)}`);
        return true;
    } catch (err) {
        console.error(`  ❌ Error regenerating ${path.basename(filePath)}:`, err.message);
        return false;
    }
};

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

            // Process Details folders
            if (file === 'Details') {
                console.log(`\n📁 Processing Details folder: ${dir}`);
            }

            processDirectory(fullPath);
        } else if (isDetailsFile(file)) {
            const entityName = path.basename(file, '.js').replace('Details', '');
            console.log(`\n📝 Regenerating ${entityName} Details...`);
            regenerateDetailsFile(fullPath);
        }
    });
};

console.log('🚀 Starting to regenerate all Details files...\n');
if (fs.existsSync(MANAGEMENT_DIR)) {
    processDirectory(MANAGEMENT_DIR);
    console.log('\n✨ Regeneration complete!');
} else {
    console.error('Management directory not found:', MANAGEMENT_DIR);
}
