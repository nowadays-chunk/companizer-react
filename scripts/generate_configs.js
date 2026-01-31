const fs = require('fs');
const path = require('path');

const MANAGEMENT_DIR = path.join(__dirname, '../src/components/Management');

// Helper to check if a file is an entity component (PascalCase.js and excludes index/Details/Config)
const isEntityFile = (fileName) => {
    return /^[A-Z]/.test(fileName) &&
        fileName.endsWith('.js') &&
        !fileName.includes('index.js');
};

// Generic Config Template
const generateConfigContent = (entityName) => `
export const stepsConfig = {
    initialStep: 'draft',
    steps: [
        {
            name: 'draft',
            label: 'Draft',
            actions: ['submit_for_review']
        },
        {
            name: 'in_review',
            label: 'In Review',
            actions: ['approve', 'reject']
        },
        {
            name: 'approved',
            label: 'Approved',
            actions: ['process_payment'] // Example action
        },
        {
            name: 'rejected',
            label: 'Rejected',
            actions: ['reopen']
        }
    ]
};

export const actionsConfig = {
    submit_for_review: {
        label: 'Submit for Review',
        type: 'primary',
        nextStep: 'in_review',
        icon: 'Send'
    },
    approve: {
        label: 'Approve',
        type: 'success',
        nextStep: 'approved',
        icon: 'CheckCircle'
    },
    reject: {
        label: 'Reject',
        type: 'error',
        nextStep: 'rejected',
        icon: 'Cancel'
    },
    reopen: {
        label: 'Reopen',
        type: 'warning',
        nextStep: 'draft',
        icon: 'Restore'
    },
    process_payment: {
        label: 'Process Payment',
        type: 'primary',
        nextStep: 'paid', // Assuming a paid step exists or stays in approved
        icon: 'Paid'
    }
};

export const collectionName = '${entityName.toLowerCase().replace(/ /g, '_')}_config';
export const fieldsConfig = {
    // Standard Config Fields if needed for the "Configure" dialog
    auto_approve_limit: { label: 'Auto Approve Limit', type: 'number' },
    approver_email: { label: 'Approver Email', type: 'text' }
};
`;

// Generic Details Template
const generateDetailsContent = (entityName) => `
export const fieldsConfig = {
    // Standard Detail Fields
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    parent_id: { label: 'Parent ID', type: 'text', faker: 'datatype.uuid' }, // Generic FK
    
    item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },
    
    quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount', decimals: 2 },
    total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },
    
    created_at: { label: 'Created At', type: 'date', faker: 'date.past' }
};

export const entityName = '${entityName} Details';
export const collectionName = '${entityName.toLowerCase().replace(/ /g, '_')}_details';
`;

// Recursive function to walk directories
const processDirectory = (dir) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (file === 'Details' || file === 'Config') return; // Skip existing special folders to avoid recursion loops if we scan them
            processDirectory(fullPath);
        } else if (isEntityFile(file)) {
            const entityName = path.basename(file, '.js');

            // 1. Create Config Folder and File
            const configDir = path.join(dir, 'Config');
            if (!fs.existsSync(configDir)) fs.mkdirSync(configDir);

            const configFilePath = path.join(configDir, `${entityName}Config.js`);
            if (!fs.existsSync(configFilePath)) {
                console.log(`Generating Config for ${entityName}...`);
                fs.writeFileSync(configFilePath, generateConfigContent(entityName));
            }

            // 2. Create Details Folder and File
            const detailsDir = path.join(dir, 'Details');
            if (!fs.existsSync(detailsDir)) fs.mkdirSync(detailsDir);

            const detailsFilePath = path.join(detailsDir, `${entityName}Details.js`);
            if (!fs.existsSync(detailsFilePath)) {
                console.log(`Generating Details for ${entityName}...`);
                fs.writeFileSync(detailsFilePath, generateDetailsContent(entityName));
            }
        }
    });
};

console.log('Starting Configuration and Details Generation...');
if (fs.existsSync(MANAGEMENT_DIR)) {
    processDirectory(MANAGEMENT_DIR);
    console.log('Generation Complete.');
} else {
    console.error('Management directory not found:', MANAGEMENT_DIR);
}
