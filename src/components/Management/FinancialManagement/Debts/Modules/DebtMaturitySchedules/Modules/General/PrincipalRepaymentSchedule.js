
export const fieldsConfig = {
    loan_reference: { label: 'Loan Reference', type: 'text', required: true },
    date: { label: 'Payment Date', type: 'date', required: true },
    principal_amount: { label: 'Principal Amount', type: 'number', required: true },
    status: { label: 'Status', type: 'select', options: ['Scheduled', 'Paid', 'Overdue'], defaultValue: 'Scheduled' }
};

export const entityName = 'Repayment Schedule';
export const collectionName = 'repayment_schedules';
