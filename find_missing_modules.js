const fs = require('fs');
const path = require('path');

const managementPath = String.raw`c:\Users\DELL\Documents\tailored_bridge_app\frontend\src\components\Management`;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            callback(dirPath);
        }
    });
}

const missingModules = [];

// Iterate Categories
if (fs.existsSync(managementPath)) {
    fs.readdirSync(managementPath).forEach(category => {
        const categoryPath = path.join(managementPath, category);
        if (fs.statSync(categoryPath).isDirectory()) {
            // Iterate Subcategories
            fs.readdirSync(categoryPath).forEach(subcategory => {
                const subcategoryPath = path.join(categoryPath, subcategory);
                if (fs.statSync(subcategoryPath).isDirectory()) {
                    // Check for .js files in Subcategory (Module Groups)
                    // Exclude Modules folder itself and directories
                    const files = fs.readdirSync(subcategoryPath);
                    files.forEach(file => {
                        if (file.endsWith('.js') && file !== 'index.js') {
                            const moduleName = path.basename(file, '.js');
                            const expectedModuleDir = path.join(subcategoryPath, 'Modules', moduleName);
                            const expectedIndex = path.join(expectedModuleDir, 'index.js');

                            if (!fs.existsSync(expectedIndex)) {
                                missingModules.push({
                                    category,
                                    subcategory,
                                    moduleName,
                                    file: path.join(subcategoryPath, file)
                                });
                            }
                        }
                    });
                }
            });
        }
    });

}

console.log(JSON.stringify(missingModules, null, 2));
