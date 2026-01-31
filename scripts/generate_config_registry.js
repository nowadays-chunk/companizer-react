const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, '../src/components/Management');
const REGISTRY_FILE = path.resolve(SRC_DIR, 'configRegistry.js');

console.log('Generating configRegistry.js...');

function generateRegistry() {
    // Get all config files
    const configFiles = glob.sync('**/*Config.js', { cwd: SRC_DIR });

    // Map to track usage of entity/variable names
    // name -> [ { file, importPath, originalName } ]
    const nameMap = {};

    // 1. Collect all files and group by their default entity name
    configFiles.forEach(file => {
        const fileName = path.basename(file, '.js'); // e.g. "VendorInvoicesConfig"
        const entityName = fileName.replace(/Config$/, ''); // "VendorInvoices"

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
                // file: "FinancialManagement/AccountsPayable/Config/VendorInvoicesConfig.js"
                const parts = item.file.split('/');
                // parts: [FinancialManagement, AccountsPayable, Config, VendorInvoicesConfig.js]
                // We want "AccountsPayable" (index -3)
                // Use a safe fallback if path is short
                let prefix = '';
                if (parts.length >= 3) {
                    prefix = parts[parts.length - 3]; // "AccountsPayable"
                } else if (parts.length >= 2) {
                    prefix = parts[parts.length - 2];
                }

                // Clean prefix
                prefix = prefix.replace(/[^a-zA-Z0-9]/g, '');

                const uniqueEntityName = `${prefix}_${baseEntityName}`;
                const uniqueVarName = `${prefix}_${item.fileName}`;
                const importPath = './' + item.file.replace(/\\/g, '/');

                imports.push(`import * as ${uniqueVarName} from '${importPath}';`);
                mapping.push(`    '${uniqueEntityName}': ${uniqueVarName}, // Disambiguated from ${baseEntityName}`);
                // Also keep the original name IF it's the "primary" one? 
                // No, that's ambiguous. But we might break links if we change the key.
                // Ideally the code using this uses the specific name, but if we have duplicates, the previous code was broken anyway.
                // However, we can TRY to support the bare name if one of them seems "main", but that's risky.
                // Let's just output the unique names. 
                // Wait, if the user requested "ServiceLevelAgreements", which one did they mean?
                // Probably we should also output the bare key mapping to the FIRST one found (arbitrary) or NONE?
                // If we don't output the bare key, existing lookups might fail.
                // BUT, duplicate imports caused a syntax error in the file itself (re-declaration of variable).
                // So fixing the syntax error is priority.

                // Let's also add the bare key pointing to the LAST one (or first), 
                // just so lookup doesn't return null, but warn?
                // Actually, let's NOT map the bare key, forcing the user/dev to be specific or fixing the lookup.
                // OR: Map the bare key to the one that has the shortest path?

                // For now: Just unique keys. The Application logic loading this might need adjustment if it relies on the bare name.
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
    console.log(`Registry generated with ${configFiles.length} files processed at ${REGISTRY_FILE}`);
}

generateRegistry();
