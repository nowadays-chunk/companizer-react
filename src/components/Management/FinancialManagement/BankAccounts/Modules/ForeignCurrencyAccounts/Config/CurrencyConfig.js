
export const fieldsConfig = {
    config_id: { label: 'Config ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    base_currency: { label: 'Base Currency', type: 'text', defaultValue: 'USD', faker: 'finance.currencyCode' },
    functional_currency: { label: 'Functional Currency', type: 'text', defaultValue: 'USD', faker: 'finance.currencyCode' },
    allow_multi_currency: { label: 'Allow Multi-Currency', type: 'checkbox', defaultValue: true },
    enforce_rate_validation: { label: 'Enforce Rate Validation', type: 'checkbox', defaultValue: true },
    rate_tolerance_percent: { label: 'Rate Tolerance (%)', type: 'number', defaultValue: 2.5 },
    default_rate_provider: {
        label: 'Rate Provider',
        type: 'select',
        options: [
            { id: 'ECB', label: 'European Central Bank' },
            { id: 'OANDA', label: 'OANDA' },
            { id: 'Reuters', label: 'Reuters' },
            { id: 'Manual', label: 'Manual' }
        ],
        defaultValue: 'ECB'
    },
    revaluation_frequency: {
        label: 'Revaluation Frequency',
        type: 'select',
        options: [
            { id: 'Daily', label: 'Daily' },
            { id: 'Weekly', label: 'Weekly' },
            { id: 'Monthly', label: 'Monthly' },
            { id: 'Quarterly', label: 'Quarterly' }
        ],
        defaultValue: 'Monthly'
    },
    auto_post_unrealized: { label: 'Auto Post Unrealized', type: 'checkbox', defaultValue: false }
};

export const entityName = 'Currency Configuration';
export const collectionName = 'currency_configurations';
