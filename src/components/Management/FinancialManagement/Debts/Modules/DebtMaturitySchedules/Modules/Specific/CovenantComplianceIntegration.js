
export const fieldsConfig = {
    covenant_metric: { label: 'Covenant Metric', type: 'text', required: true },
    agreement: { label: 'Agreement', type: 'text' },
    threshold: { label: 'Threshold', type: 'text', required: true },
    current_value: { label: 'Current Value', type: 'text', required: true },
    status: { label: 'Status', type: 'select', options: ['Compliant', 'Warning', 'Breached'], defaultValue: 'Compliant' }
};

export const entityName = 'Covenant Compliance';
export const collectionName = 'covenant_compliance';
