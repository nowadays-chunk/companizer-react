const fs = require('fs');
const path = require('path');

const lang = process.argv[2];
const patchFile = process.argv[3];

if (!lang || !patchFile) {
    console.error("Usage: node patch_locale.js <lang> <patch.json>");
    process.exit(1);
}

const localePath = path.join(__dirname, `../src/locales/${lang}.js`);
const patchPath = path.resolve(patchFile);

if (!fs.existsSync(patchPath)) {
    console.error(`Patch file not found: ${patchPath}`);
    process.exit(1);
}

const patchData = JSON.parse(fs.readFileSync(patchPath, 'utf8'));

// Read existing locale file
let existingData = {};
if (fs.existsSync(localePath)) {
    const fileContent = fs.readFileSync(localePath, 'utf8');
    try {
        const match = fileContent.match(/export const \w+ = ({[\s\S]*?});/);
        if (match) {
            // Safe eval the object literal
            existingData = eval('(' + match[1] + ')');
        }
    } catch (e) {
        console.error("Error parsing JS:", e);
    }
}

// Merge
const merged = { ...existingData, ...patchData };

// Write back
const keys = Object.keys(merged).sort();
const lines = [`export const ${lang} = {`];
keys.forEach(key => {
    // Escape double quotes and backslashes in Keys
    const k = key.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    // Escape double quotes and backslashes in Values
    const v = String(merged[key]).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    lines.push(`    "${k}": "${v}",`);
});
lines.push('};');
lines.push('');

fs.writeFileSync(localePath, lines.join('\n'));
console.log(`Patched ${lang}.js with ${Object.keys(patchData).length} updates.`);
