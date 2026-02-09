
export const fieldsConfig = {
    currency_pair: { label: 'Currency Pair', type: 'text', required: true },
    rate_type: { label: 'Rate Type', type: 'select', options: ['Spot', 'Average', 'MonthEnd'], defaultValue: 'Spot' },
    rate: { label: 'Rate', type: 'number', required: true },
    effective_date: { label: 'Effective Date', type: 'date', required: true },
    source: { label: 'Source', type: 'text' }
};

export const entityName = 'Exchange Rate Manager';
export const collectionName = 'exchange_rates';
