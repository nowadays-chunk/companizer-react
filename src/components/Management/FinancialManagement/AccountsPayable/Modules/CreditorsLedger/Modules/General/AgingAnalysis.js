
export const fieldsConfig = {
    creditor_name: { label: 'Creditor Name', type: 'text', required: true },
    entity_code: { label: 'Entity Code', type: 'text' },
    transaction_currency: { label: 'Currency', type: 'text' },
    due_date: { label: 'Due Date', type: 'date' },
    original_amount: { label: 'Original Amount', type: 'number' },
    residual_amount: { label: 'Residual Amount', type: 'number' }
};

export const collectionName = 'accounts_payable_aging_analysis';
