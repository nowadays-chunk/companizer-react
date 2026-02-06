const fs = require('fs');
const path = require('path');

const targetDir = String.raw`c:\Users\DELL\Documents\tailored_bridge_app\frontend\src\components\Management\OperationsAssetManagement\Inventory\Modules\InventoryValuation`;

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const modules = [
    { name: 'ValuationMethods', path: 'valuation/methods', label: 'Valuation Methods', icon: 'Settings', desc: 'FIFO, LIFO, Weighted Avg, Standard Cost' },
    { name: 'ValuationProcessing', path: 'valuation/processing', label: 'Processing Control', icon: 'Update', desc: 'Real-time vs Periodic Valuation Control' },
    { name: 'TransactionValuation', path: 'valuation/transactions', label: 'Transaction Valuation', icon: 'Receipt', desc: 'Valuation of Goods Receipts, Issues, Transfers' },
    { name: 'MultiEntityValuation', path: 'valuation/multi-entity', label: 'Multi-Entity Valuation', icon: 'Business', desc: 'Warehouse & Entity Specific Valuation' },
    { name: 'ProductCosting', path: 'valuation/costing', label: 'Product Costing', icon: 'Category', desc: 'Granular SKU/Category Level Costing' },
    { name: 'BatchSerialValuation', path: 'valuation/traceability', label: 'Batch/Serial Valuation', icon: 'QrCode', desc: 'Valuation by Batch, Lot, or Serial Number' },
    { name: 'CostAdjustments', path: 'valuation/adjustments', label: 'Cost Adjustments', icon: 'Edit', desc: 'Landed Costs, Overhead Allocation' },
    { name: 'GLIntegration', path: 'valuation/gl-integration', label: 'GL Integration', icon: 'AccountBalance', desc: 'Automated COGS & Asset Account Posting' },
    { name: 'ValuationAging', path: 'valuation/aging', label: 'Inventory Aging', icon: 'AccessTime', desc: 'Aging Analysis & Obsolescence Provisions' },
    { name: 'CurrencyValuation', path: 'valuation/currency', label: 'Multi-Currency', icon: 'ShowChart', desc: 'Base Currency Conversion & Reporting' },
    { name: 'ValuationAnalytics', path: 'valuation/analytics', label: 'Valuation Analytics', icon: 'Assessment', desc: 'Trends, Reports, and Valuation Insights' },
    { name: 'ValuationApprovals', path: 'valuation/approvals', label: 'Approvals & Governance', icon: 'VerifiedUser', desc: 'Workflows for Valuation Changes' },
    { name: 'ValuationSimulation', path: 'valuation/simulation', label: 'Scenario Simulation', icon: 'Science', desc: 'What-if Scenarios & Forecasting' },
    { name: 'ValuationAutomation', path: 'valuation/automation', label: 'Automation', icon: 'AutoFixHigh', desc: 'Automated Adjustments & Landed Costs' },
    { name: 'SecurityPermissions', path: 'valuation/security', label: 'Security', icon: 'Security', desc: 'Role-based Access & Controls' }
];

const componentTemplate = (name) => `import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';

const ${name} = () => {
    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4">${name.replace(/([A-Z])/g, ' $1').trim()}</Typography>
                <Button variant="contained" color="primary">Action</Button>
            </Box>
            <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="body1">
                    This module handles ${name.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} functionality.
                </Typography>
                <Grid container spacing={3} mt={2}>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                            <Typography variant="subtitle2">Metric 1</Typography>
                            <Typography variant="h6">0.00</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default ${name};
`;

// Generate Components
modules.forEach(mod => {
    fs.writeFileSync(path.join(targetDir, `${mod.name}.js`), componentTemplate(mod.name));
});

// Generate index.js
const indexContent = `
${modules.map(m => `import ${m.name} from './${m.name}';`).join('\n')}

export const modules = [
${modules.map(m => `    {
        name: '${m.label}',
        type: 'General',
        path: '/apps/inventory/${m.path}',
        icon: '${m.icon}',
        description: '${m.desc}',
        component: ${m.name}
    }`).join(',\n')}
];

export default modules;
`;

fs.writeFileSync(path.join(targetDir, 'index.js'), indexContent);

console.log('Modules generated successfully.');
