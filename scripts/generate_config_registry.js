const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, '../src/components/Management');
const REGISTRY_FILE = path.resolve(SRC_DIR, 'configRegistry.js');

console.log('Generating configRegistry.js...');

function generateRegistry() {
    // Get all JS files
    const allFiles = glob.sync('**/*.js', { cwd: SRC_DIR });

    // Filter for real entity files
    // Rules:
    // 1. Not in a "Config" folder
    // 2. Not in a "Details" folder
    // 3. Not in "Base" folder
    // 4. Not index.js or configRegistry.js
    // 5. Not the old *Config.js files (though those are likely in Config folder anyway)

    const entityFiles = allFiles.filter(file => {
        const parts = file.split('/');
        if (parts.includes('Config')) return false;
        if (parts.includes('Details')) return false;
        if (parts.includes('Base')) return false;
        if (file.endsWith('index.js')) return false;
        if (file.endsWith('configRegistry.js')) return false;
        // Exclude test files if any
        if (file.includes('.test.') || file.includes('.spec.')) return false;

        return true;
    });

    // Map to track usage of entity/variable names
    // name -> [ { file, importPath, originalName } ]
    const nameMap = {};

    // 1. Collect all files and group by their default entity name
    entityFiles.forEach(file => {
        const fileName = path.basename(file, '.js'); // e.g. "VendorInvoices"
        const entityName = fileName; // Use filename directly as entity name

        if (!nameMap[entityName]) {
            nameMap[entityName] = [];
        }
        nameMap[entityName].push({
            file,
            fileName,
            entityName
        });
    });

    const imports = [];
    const mapping = [];

    // 2. Process each group
    Object.keys(nameMap).sort().forEach(baseEntityName => {
        const group = nameMap[baseEntityName];

        if (group.length === 1) {
            // No conflict
            const item = group[0];
            const importPath = './' + item.file.replace(/\\/g, '/');
            imports.push(`import * as ${item.fileName} from '${importPath}';`);
            mapping.push(`    '${baseEntityName}': ${item.fileName},`);
        } else {
            // Conflict! Disambiguate using parent folder
            group.forEach(item => {
                // file: "FinancialManagement/AccountsPayable/VendorInvoices.js"
                const parts = item.file.split('/');

                // Try parent folder
                let prefix = '';
                if (parts.length >= 2) {
                    prefix = parts[parts.length - 2];
                }

                // Clean prefix
                prefix = prefix.replace(/[^a-zA-Z0-9]/g, '');

                const uniqueEntityName = `${prefix}${baseEntityName}`; // e.g. AccountsPayableVendorInvoices if desired, or keep underscore
                // Let's stick to unique var name but maybe keep key cleaner if possible?
                // Actually the user wants keys to match likely what they see in URL or logic. 
                // Let's use underscore for clarity in variable, but key?

                const uniqueVarName = `${prefix}_${item.fileName}`;
                const importPath = './' + item.file.replace(/\\/g, '/');

                imports.push(`import * as ${uniqueVarName} from '${importPath}';`);
                // Use Disambiguated Key
                mapping.push(`    '${uniqueVarName}': ${uniqueVarName}, // Disambiguated from ${baseEntityName}`);
            });
        }
    });

    const fileContent = `// Auto-generated Config Registry
// Run 'node scripts/generate_config_registry.js' to update

${imports.join('\n')}

export const configRegistry = {
${mapping.join('\n')}
};

export function getConfig(entityName) {
    return configRegistry[entityName] || null;
}
`;

    fs.writeFileSync(REGISTRY_FILE, fileContent);
    console.log(`Registry generated with ${entityFiles.length} files processed at ${REGISTRY_FILE}`);
}

generateRegistry();
