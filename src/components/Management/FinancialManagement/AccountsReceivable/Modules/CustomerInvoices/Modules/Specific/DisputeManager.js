
export const fieldsConfig = {
    invoice_number: { label: 'Invoice Number', type: 'text', required: true },
    customer_name: { label: 'Customer', type: 'text', required: true },
    amount: { label: 'Amount', type: 'number' },
    reason: { label: 'Reason', type: 'text' },
    status: { label: 'Status', type: 'select', options: ['New', 'Under Review', 'Finance Approval', 'Resolved'], defaultValue: 'New' },
    days_open: { label: 'Days Open', type: 'number' }
};

export const entityName = 'Dispute Manager';
export const collectionName = 'ar_disputes';
