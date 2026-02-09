
export const fieldsConfig = {
    creditor_name: { label: 'Creditor Name', type: 'text', required: true },
    subledger_balance: { label: 'Subledger Balance', type: 'number', required: true },
    gl_balance: { label: 'GL Balance', type: 'number', required: true }
};

export const entityName = 'Reconciliation Manager';
export const collectionName = 'creditor_reconciliations';
