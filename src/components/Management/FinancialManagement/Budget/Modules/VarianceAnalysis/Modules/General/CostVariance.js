
export const fieldsConfig = {
    cost_category: { label: 'Cost Category', type: 'text', required: true },
    budgeted_amount: { label: 'Budgeted Amount', type: 'number', required: true },
    actual_amount: { label: 'Actual Amount', type: 'number', required: true },
    variance: { label: 'Variance', type: 'number' }
};

export const entityName = 'Cost Variance';
export const collectionName = 'cost_variances';
