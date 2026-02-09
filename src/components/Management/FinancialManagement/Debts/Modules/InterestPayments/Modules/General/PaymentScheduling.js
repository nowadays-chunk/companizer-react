
export const fieldsConfig = {
    loan: { label: 'Loan Agreement', type: 'text', required: true },
    amount: { label: 'Amount Due', type: 'number', required: true },
    due_date: { label: 'Due Date', type: 'date', required: true },
    status: { label: 'Status', type: 'select', options: ['Scheduled', 'Pending Review', 'Approved'], defaultValue: 'Scheduled' }
};

export const entityName = 'Payment Schedule';
export const collectionName = 'payment_schedules';
