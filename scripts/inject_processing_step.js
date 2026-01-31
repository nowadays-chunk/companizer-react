const fs = require('fs');
const path = require('path');

const MANAGEMENT_DIR = path.join(__dirname, '../src/components/Management');

// Helper to check if a file is an entity component
const isEntityFile = (fileName) => {
    return /^[A-Z]/.test(fileName) &&
        fileName.endsWith('.js') &&
        !fileName.includes('index.js');
};

// Function to extract stepsConfig from a Config file
const extractStepsConfig = (configFilePath) => {
    try {
        const content = fs.readFileSync(configFilePath, 'utf8');

        // Extract stepsConfig using regex
        const stepsMatch = content.match(/export const stepsConfig = ({[\s\S]+?^};)/m);
        if (!stepsMatch) return null;

        // Parse the steps array
        const stepsArrayMatch = stepsMatch[1].match(/steps:\s*\[([\s\S]+?)\]/);
        if (!stepsArrayMatch) return null;

        // Extract step objects
        const stepsContent = stepsArrayMatch[1];
        const stepMatches = stepsContent.matchAll(/{\s*name:\s*['"](.+?)['"]\s*,\s*label:\s*['"](.+?)['"]/g);

        const options = [];
        for (const match of stepMatches) {
            options.push({ id: match[1], label: match[2] });
        }

        return options;
    } catch (err) {
        return null;
    }
};

// Function to inject or replace processing_step into fieldsConfig
const injectProcessingStep = (filePath, options) => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Generate the processing_step field
        const optionsStr = JSON.stringify(options).replace(/"/g, "'");
        const processingStepField = `processing_step: { label: 'Processing Step', type: 'select', options: ${optionsStr}, faker: 'random.arrayElement' }`;

        // Check if processing_step already exists
        if (content.includes('processing_step:')) {
            // Replace existing processing_step
            const regex = /processing_step:\s*{[^}]+}/;
            if (regex.test(content)) {
                content = content.replace(regex, processingStepField);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`  ✅ Updated processing_step in ${path.basename(filePath)}`);
                return true;
            }
        }

        // Find the fieldsConfig export
        const fieldsConfigMatch = content.match(/(export const fieldsConfig = {[\s\S]+?)(};)/);
        if (!fieldsConfigMatch) {
            console.log(`  ⚠️  No fieldsConfig found in ${path.basename(filePath)}`);
            return false;
        }

        // Insert before the closing brace of fieldsConfig
        const beforeClosing = fieldsConfigMatch[1];
        const newFieldsConfig = beforeClosing + `    ${processingStepField},\n` + fieldsConfigMatch[2];

        // Replace in content
        content = content.replace(fieldsConfigMatch[0], newFieldsConfig);

        // Write back
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✅ Added processing_step to ${path.basename(filePath)}`);
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
            // Skip Config folder
            if (file === 'Config' || file === 'Base') return;
            processDirectory(fullPath);
        } else if (isEntityFile(file)) {
            const entityName = path.basename(file, '.js');
            const dirName = path.dirname(fullPath);

            // Check if this is in a Details folder
            const isDetail = dirName.includes('Details');

            // Look for corresponding Config file
            let configPath;
            if (isDetail) {
                // For Details, go up one level and look in Config
                const parentDir = path.dirname(dirName);
                configPath = path.join(parentDir, 'Config', `${entityName}Config.js`);
            } else {
                // For main entities, look in Config subfolder
                configPath = path.join(dirName, 'Config', `${entityName}Config.js`);
            }

            // Extract steps from Config
            const options = extractStepsConfig(configPath);

            if (options && options.length > 0) {
                console.log(`\n📝 Processing ${entityName}...`);
                console.log(`  Found ${options.length} steps in config`);
                injectProcessingStep(fullPath, options);
            } else {
                console.log(`\n⚠️  No stepsConfig found for ${entityName}, skipping...`);
            }
        }
    });
};

console.log('🚀 Starting to inject processing_step fields...\n');
if (fs.existsSync(MANAGEMENT_DIR)) {
    processDirectory(MANAGEMENT_DIR);
    console.log('\n✨ Processing complete!');
} else {
    console.error('Management directory not found:', MANAGEMENT_DIR);
}
