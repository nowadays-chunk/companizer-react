
export const fieldsConfig = {
    functional_currency: { label: 'Functional Currency', type: 'text', defaultValue: 'USD', disabled: true },
    payment_currency: { label: 'Payment Currency', type: 'text', defaultValue: 'EUR', disabled: true },
    accrual_rate: { label: 'Accrual Rate (Avg)', type: 'number', required: true },
    payment_spot_rate: { label: 'Payment Spot Rate', type: 'number', required: true },
    fx_gain_loss: { label: 'FX Gain/Loss', type: 'number' }
};

export const entityName = 'FX Interest';
export const collectionName = 'fx_interest_calcs';
