export const fieldsConfig = {
    account_code: { label: 'Account Code', type: 'text' },
    account_name: { label: 'Account Name', type: 'text' },
    account_type: { label: 'Type', type: 'select', options: [{ id: 'asset', label: 'Asset' }, { id: 'liability', label: 'Liability' }, { id: 'equity', label: 'Equity' }, { id: 'revenue', label: 'Revenue' }, { id: 'expense', label: 'Expense' }] },
    debit: { label: 'Debit', type: 'number' },
    credit: { label: 'Credit', type: 'number' },
    net_balance: { label: 'Net Balance', type: 'number' }
};

export const collectionName = 'trial_balance';
export const entityName = 'Trial Balance';
