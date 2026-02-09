
export const fieldsConfig = {
    customer_name: { label: 'Customer', type: 'text', required: true },
    frequency: { label: 'Frequency', type: 'select', options: ['Monthly', 'Quarterly', 'Annually'] },
    next_run_date: { label: 'Next Run Date', type: 'date' },
    amount: { label: 'Amount', type: 'number' },
    status: { label: 'Status', type: 'select', options: ['Active', 'Paused', 'Cancelled'], defaultValue: 'Active' }
};

export const collectionName = 'ar_recurring_billing';
