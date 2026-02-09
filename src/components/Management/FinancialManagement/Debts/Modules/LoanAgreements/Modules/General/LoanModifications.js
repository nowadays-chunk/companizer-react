
export const fieldsConfig = {
    modification_type: { label: 'Modification Type', type: 'select', options: ['Interest Rate Change', 'Term Extension', 'Principal Rescheduling', 'Payment Holiday'], defaultValue: 'Interest Rate Change' },
    effective_date: { label: 'Effective Date', type: 'date', required: true },
    new_interest_rate: { label: 'New Interest Rate (%)', type: 'number' },
    new_maturity_date: { label: 'New Maturity Date', type: 'date' },
    status: { label: 'Status', type: 'select', options: ['Pending Approval', 'Active', 'Completed'], defaultValue: 'Pending Approval' }
};

export const entityName = 'Loan Modification';
export const collectionName = 'loan_modifications';
