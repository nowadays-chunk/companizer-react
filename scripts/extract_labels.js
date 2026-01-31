const fs = require('fs');
const path = require('path');
const glob = require('glob'); // You might need to install 'glob' if not present, but let's try reading directory recursively basically or assumes glob is available or use native recursive readdir. 
// Since I can't easily install packages, I'll write a simple recursive walker.

const srcDir = path.join(__dirname, '../src');
const componentsDir = path.join(srcDir, 'components/Management');
const drawerFile = path.join(srcDir, 'layout/drawerItems.js');

const labels = new Set();

// 1. Scan components for fieldsConfig
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

console.log('Scanning components...');
if (fs.existsSync(componentsDir)) {
    walkDir(componentsDir, (filePath) => {
        if (filePath.endsWith('.js')) {
            const content = fs.readFileSync(filePath, 'utf8');
            // Regex to find label: "Something" inside fieldsConfig
            // This is a heuristic. A robust AST parser would be better but heavier.
            // Pattern: label:\s*['"]([^'"]+)['"]
            // We need to be careful to only catch labels inside fieldsConfig or generally typical label usage

            // Let's try to find fieldsConfig = { ... } block
            // It's hard with regex. 
            // Alternative: Look for all `label: "..."` or `label: '...'` globally in these files.
            // This might catch false positives, but it's safer to have extra keys than missing ones.

            const regex = /label:\s*(["'])(.*?)\1/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
                if (match[2] && !match[2].includes('${')) { // Exclude template literals for now if complex
                    labels.add(match[2]);
                }
            }
        }
    });
}

// 2. Scan drawerItems.js
console.log('Scanning drawerItems...');
if (fs.existsSync(drawerFile)) {
    const content = fs.readFileSync(drawerFile, 'utf8');
    const regex = /label:\s*(["'])(.*?)\1/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        if (match[2]) {
            labels.add(match[2]);
        }
    }
}

// 3. Existing keys from en.js (optional, to avoid re-adding) only if we want to merge.
// For now, let's just output the sorted list.

const sortedLabels = Array.from(labels).sort();

console.log(`Found ${sortedLabels.length} unique labels.`);

const output = {
    en: {},
    fr: {},
    ar: {}
};

sortedLabels.forEach(label => {
    output.en[label] = label;
    output.fr[label] = `[FR] ${label}`; // Placeholder
    output.ar[label] = `[AR] ${label}`; // Placeholder
});

const outputPath = path.join(__dirname, 'extracted_labels.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`Labels saved to ${outputPath}`);
