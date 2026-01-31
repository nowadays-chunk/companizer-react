const fs = require('fs');
const path = require('path');

const MANAGEMENT_DIR = path.join(__dirname, '../src/components/Management');

// The default processing_step field value
const DEFAULT_PROCESSING_STEP = `processing_step: { label: 'Processing Step', type: 'select', options: [{'id':'draft','label':'Draft'}], faker: 'random.arrayElement' }`;

// Helper to check if a file is an entity component
const isEntityFile = (fileName) => {
    return /^[A-Z]/.test(fileName) &&
        fileName.endsWith('.js') &&
        !fileName.includes('index.js');
};

// Function to replace processing_step in fieldsConfig
const replaceProcessingStep = (filePath) => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if processing_step exists
        if (!content.includes('processing_step:')) {
            console.log(`  ⏭️  No processing_step in ${path.basename(filePath)}`);
            return false;
        }

        // Replace ALL occurrences of processing_step field (including duplicates)
        // This regex matches: processing_step: { ... }
        const regex = /processing_step:\s*{[^}]+}/g;

        // Count how many we're replacing
        const matches = content.match(regex);
        if (!matches) {
            console.log(`  ⚠️  Found processing_step but couldn't match pattern in ${path.basename(filePath)}`);
            return false;
        }

        // Replace the first occurrence with the default value
        content = content.replace(regex, DEFAULT_PROCESSING_STEP);

        // Now remove any remaining duplicates (they'll still match the pattern)
        // Keep replacing until no more matches
        let duplicateCount = 0;
        while (regex.test(content)) {
            content = content.replace(regex, '');
            duplicateCount++;
        }

        // Clean up any double commas or trailing commas before closing brace
        content = content.replace(/,\s*,/g, ',');
        content = content.replace(/,(\s*})/g, '$1');

        // Write back
        fs.writeFileSync(filePath, content, 'utf8');

        if (duplicateCount > 0) {
            console.log(`  ✅ Replaced processing_step and removed ${duplicateCount} duplicate(s) in ${path.basename(filePath)}`);
        } else {
            console.log(`  ✅ Replaced processing_step in ${path.basename(filePath)}`);
        }
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
                console.log(`\n⏭️  Skipping ${file} folder`);
                return;
            }
            processDirectory(fullPath);
        } else if (isEntityFile(file)) {
            const entityName = path.basename(file, '.js');
            console.log(`\n📝 Processing ${entityName}...`);
            replaceProcessingStep(fullPath);
        }
    });
};

console.log('🚀 Starting to clean processing_step fields...\n');
if (fs.existsSync(MANAGEMENT_DIR)) {
    processDirectory(MANAGEMENT_DIR);
    console.log('\n✨ Cleanup complete!');
} else {
    console.error('Management directory not found:', MANAGEMENT_DIR);
}
