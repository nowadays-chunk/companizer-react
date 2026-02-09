
export const fieldsConfig = {
    title: { label: 'Rule Title', type: 'text', required: true },
    condition: { label: 'Trigger Condition', type: 'text', required: true },
    role: { label: 'Notify Roles', type: 'text' },
    active: { label: 'Active', type: 'boolean', defaultValue: true }
};

export const entityName = 'Variance Threshold Alerts';
export const collectionName = 'variance_alerts';
