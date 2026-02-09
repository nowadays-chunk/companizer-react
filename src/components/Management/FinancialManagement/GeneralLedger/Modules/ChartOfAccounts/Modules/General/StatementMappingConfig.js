export const fieldsConfig = {
    account_code: { label: 'Account Code', type: 'text' },
    financial_statement: { label: 'Financial Statement', type: 'select', options: [{ id: 'bs', label: 'Balance Sheet' }, { id: 'pl', label: 'Profit & Loss' }, { id: 'cf', label: 'Cash Flow' }] },
    line_item: { label: 'Line Item', type: 'text' },
    sign: { label: 'Sign', type: 'select', options: [{ id: 'positive', label: 'Positive' }, { id: 'negative', label: 'Negative' }] }
};

export const collectionName = 'coa_mappings';
export const entityName = 'Statement Mapping';
