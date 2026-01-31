const fs = require('fs');
const path = require('path');

const filePath = 'src/components/Management/OperationsAssetManagement/ProductCatalog/Details/ProductDetailsDetails.js';
const absPath = path.resolve(__dirname, filePath);

try {
    const content = fs.readFileSync(absPath, 'utf8');
    const regex = /export const fieldsConfig = ({[\s\S]+?});/;
    const match = content.match(regex);

    if (match) {
        console.log("MATCH FOUND!");
        console.log("Length:", match[1].length);
    } else {
        console.log("NO MATCH.");
        // unexpected chars?
        console.log("First 100 chars:", content.substring(0, 100));
        console.log("Last 100 chars:", content.substring(content.length - 100));
    }
} catch (err) {
    console.error(err);
}
