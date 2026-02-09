
export const fieldsConfig = {
    statement_balance: { label: 'Statement Balance', type: 'number', required: true },
    gl_balance: { label: 'GL Balance', type: 'number', required: true },
    unreconciled_difference: { label: 'Unreconciled Difference', type: 'number' },
    status: { label: 'Status', type: 'select', options: ['Balanced', 'Discrepancy', 'Pending'], defaultValue: 'Pending' }
};

export const entityName = 'Bank Reconciliation';
export const collectionName = 'bank_reconciliations';
