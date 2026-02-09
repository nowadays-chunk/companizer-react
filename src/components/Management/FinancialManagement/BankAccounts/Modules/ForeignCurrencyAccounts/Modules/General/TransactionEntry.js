
export const fieldsConfig = {
    transaction_type: { label: 'Transaction Type', type: 'select', options: ['Payment', 'Receipt', 'Transfer', 'Fee'], defaultValue: 'Payment' },
    transaction_date: { label: 'Date', type: 'date', required: true },
    description: { label: 'Description', type: 'text' },
    currency: { label: 'Currency', type: 'text', required: true },
    foreign_amount: { label: 'Foreign Amount', type: 'number', required: true },
    exchange_rate: { label: 'Exchange Rate', type: 'number', required: true },
    base_amount: { label: 'Base Amount', type: 'number' }
};

export const entityName = 'Transaction Entry';
export const collectionName = 'foreign_transactions';
