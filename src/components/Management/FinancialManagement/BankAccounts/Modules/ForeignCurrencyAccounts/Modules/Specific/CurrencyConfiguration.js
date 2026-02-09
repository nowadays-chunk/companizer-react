
export const fieldsConfig = {
    base_currency: { label: 'Base Currency', type: 'text', defaultValue: 'USD' },
    functional_currency: { label: 'Functional Currency', type: 'text', defaultValue: 'USD' },
    allow_multi_currency: { label: 'Allow Multi-Currency', type: 'boolean', defaultValue: true },
    rate_provider: { label: 'Rate Provider', type: 'select', options: ['ECB', 'OANDA', 'Reuters', 'Manual'], defaultValue: 'ECB' }
};

export const entityName = 'Currency Configuration';
export const collectionName = 'currency_configs';
