
export const fieldsConfig = {
    title: { label: 'Request Title', type: 'text' },
    requester: { label: 'Requester', type: 'text' },
    amount: { label: 'Amount', type: 'number' },
    status: { label: 'Status', type: 'select', options: ['Pending', 'Approved', 'Rejected'], defaultValue: 'Pending' }
};

export const entityName = 'Budget Approval Workflow';
export const collectionName = 'budget_approvals';
