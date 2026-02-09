
export const fieldsConfig = {
    charge_type: { label: 'Charge Type', type: 'select', options: ['Origination Fee', 'Commitment Fee', 'Processing Fee', 'Prepayment Penalty'], defaultValue: 'Origination Fee' },
    frequency: { label: 'Frequency', type: 'select', options: ['One-time', 'Recurring'], defaultValue: 'One-time' },
    amount: { label: 'Amount', type: 'number', required: true },
    gl_mapping: { label: 'GL Mapping', type: 'select', options: ['Interest Expense', 'Bank Fees', 'Capitalized Asset'], defaultValue: 'Interest Expense' },
    status: { label: 'Status', type: 'select', options: ['Accrued', 'Paid'], defaultValue: 'Accrued' }
};

export const entityName = 'Fee Charge';
export const collectionName = 'fee_charges';
