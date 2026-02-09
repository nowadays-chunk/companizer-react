
export const fieldsConfig = {
    request_date: { label: 'Request Date', type: 'date' },
    type: { label: 'Type', type: 'text' },
    amount: { label: 'Amount', type: 'number' },
    requester: { label: 'Requester', type: 'text' },
    required_level: { label: 'Required Level', type: 'text' },
    status: { label: 'Status', type: 'select', options: ['Pending', 'Approved', 'Rejected'] }
};

export const entityName = 'Approval Workflow';
export const collectionName = 'transfer_approvals';
