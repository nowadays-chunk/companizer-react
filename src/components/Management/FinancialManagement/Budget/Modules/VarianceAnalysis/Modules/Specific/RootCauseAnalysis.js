
export const fieldsConfig = {
    line_item: { label: 'Line Item', type: 'text', required: true },
    variance_impact: { label: 'Variance Impact', type: 'number' },
    cause: { label: 'Identified Root Cause', type: 'text', required: true },
    category: { label: 'Category', type: 'select', options: ['Operational', 'Timing', 'Economic'], defaultValue: 'Operational' }
};

export const entityName = 'Root Cause Analysis';
export const collectionName = 'root_cause_logs';
