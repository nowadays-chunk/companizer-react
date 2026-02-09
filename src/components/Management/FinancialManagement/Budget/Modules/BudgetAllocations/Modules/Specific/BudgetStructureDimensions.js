
export const fieldsConfig = {
    dimension_name: { label: 'Dimension Name', type: 'text', required: true },
    type: { label: 'Type', type: 'select', options: ['Primary', 'Secondary', 'Reporting'], defaultValue: 'Primary' },
    status: { label: 'Status', type: 'select', options: ['Active', 'Inactive'], defaultValue: 'Active' }
};

export const entityName = 'Budget Structure';
export const collectionName = 'budget_structures';
