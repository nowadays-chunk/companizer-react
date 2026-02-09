
export const fieldsConfig = {
    creditor_name: { label: 'Creditor Name', type: 'text', required: true },
    subledger_balance: { label: 'Subledger Balance', type: 'number', required: true },
    gl_balance: { label: 'GL Balance', type: 'number', required: true },
    variance: { label: 'Variance', type: 'number' },
    status: { label: 'Status', type: 'select', options: ['reconciled', 'out_of_balance', 'pending_approval'], defaultValue: 'out_of_balance' },
    last_reconciliation_date: { label: 'Last Reconciled', type: 'datetime' }
};

export const collectionName = 'accounts_payable_reconciliation';
