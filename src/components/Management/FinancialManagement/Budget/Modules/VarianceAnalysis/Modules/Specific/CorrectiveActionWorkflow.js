
export const fieldsConfig = {
    variance_id: { label: 'Related Variance ID', type: 'text', required: true },
    description: { label: 'Action Plan Description', type: 'text', multiline: true, required: true },
    responsible_party: { label: 'Responsible Party', type: 'text' },
    status: { label: 'Status', type: 'select', options: ['Pending Approval', 'Approved', 'Rejected'], defaultValue: 'Pending Approval' }
};

export const entityName = 'Corrective Action';
export const collectionName = 'corrective_actions';
