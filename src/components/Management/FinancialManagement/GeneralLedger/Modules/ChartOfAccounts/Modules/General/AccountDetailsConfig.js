export const fieldsConfig = {
    account_code: { label: 'Account Code', type: 'text' },
    account_name: { label: 'Account Name', type: 'text' },
    account_type: { label: 'Account Type', type: 'select', options: [{ id: 'asset', label: 'Asset' }, { id: 'liability', label: 'Liability' }, { id: 'equity', label: 'Equity' }, { id: 'revenue', label: 'Revenue' }, { id: 'expense', label: 'Expense' }] },
    currency: { label: 'Currency', type: 'text' },
    tax_code: { label: 'Tax Code', type: 'text' },
    is_active: { label: 'Active', type: 'checkbox' },
    allow_reconciliation: { label: 'Allow Reconciliation', type: 'checkbox' }
};

export const collectionName = 'coa_accounts';
export const entityName = 'Account Details';
