
export const fieldsConfig = {
    reconciliation_id: { label: 'Reconciliation ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    bank_account_id: { label: 'Bank Account', type: 'related', collection: 'bank_accounts', displayField: 'account_name', required: true, faker: 'datatype.uuid' },
    statement_date: { label: 'Statement Date', type: 'date', required: true, faker: 'date.recent' },
    statement_balance: { label: 'Statement Balance', type: 'number', required: true, faker: 'finance.amount' },
    ledger_balance: { label: 'Ledger Balance', type: 'number', required: true, faker: 'finance.amount' },
    difference: { label: 'Difference', type: 'number', faker: 'finance.amount' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'draft', label: 'Draft' },
            { id: 'in_progress', label: 'In Progress' },
            { id: 'reconciled', label: 'Reconciled' }
        ],
        defaultValue: 'draft'
    },
    items_matched: { label: 'Items Matched', type: 'number', defaultValue: 0 },
    items_open: { label: 'Items Open', type: 'number', defaultValue: 0 }
};

export const entityName = 'Bank Reconciliation';
export const collectionName = 'bank_reconciliations';
