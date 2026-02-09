
export const fieldsConfig = {
    period: { label: 'Period', type: 'text', required: true },
    actual_revenue: { label: 'Actual Revenue', type: 'number', required: true },
    budgeted_revenue: { label: 'Budgeted Revenue', type: 'number', required: true },
    view_type: { label: 'View Type', type: 'select', options: ['Monthly', 'Quarterly'], defaultValue: 'Monthly' }
};

export const entityName = 'Revenue Variance';
export const collectionName = 'revenue_variances';
