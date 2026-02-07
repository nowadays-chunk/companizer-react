const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('src/pages/Analysis');
const targetFile = path.resolve('src/pages/GenericAnalyticsDashboard.js');

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.js')) {
            let content = fs.readFileSync(filePath, 'utf8');
            // Regex to find the specific import, handling potential variations in quotes or whitespace
            const oldImportRegex = /import\s+GenericAnalyticsDashboard\s+from\s+['"](.+components\/Analytics\/GenericAnalyticsDashboard)['"];?/;

            if (oldImportRegex.test(content)) {
                // Calculate new relative path
                const fileDir = path.dirname(filePath);
                let relativePath = path.relative(fileDir, targetFile);

                // Ensure starts with ./ or ../
                if (!relativePath.startsWith('.')) {
                    relativePath = './' + relativePath;
                }

                // Normalize path separators to forward slashes for JS imports
                relativePath = relativePath.split(path.sep).join('/');

                const newImport = `import GenericAnalyticsDashboard from '${relativePath}';`; // Remove .js extension if desired, but usually okay
                // Actually, let's keep it clean. relativePath will have .js at the end because targetFile has .js
                // Typically imports omit .js in React/Webpack, checking if the regex match had it.
                // The regex captures the string inside quotes. 
                // Let's strip .js from relativePath if the original didn't have it, or just strip it mainly.

                relativePath = relativePath.replace(/\.js$/, '');

                const newContent = content.replace(oldImportRegex, `import GenericAnalyticsDashboard from '${relativePath}';`);

                if (newContent !== content) {
                    console.log(`Updating ${filePath}...`);
                    fs.writeFileSync(filePath, newContent, 'utf8');
                }
            }
        }
    });
}

if (fs.existsSync(rootDir)) {
    walk(rootDir);
    console.log('Update complete.');
} else {
    console.error('Directory not found:', rootDir);
}
