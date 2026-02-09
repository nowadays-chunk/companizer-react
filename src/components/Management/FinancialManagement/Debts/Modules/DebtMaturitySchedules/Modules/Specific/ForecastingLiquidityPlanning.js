
export const fieldsConfig = {
    month: { label: 'Month', type: 'text', required: true },
    debt_service: { label: 'Debt Service', type: 'number' },
    projected_cash: { label: 'Projected Cash', type: 'number' },
    gap: { label: 'Liquidity Gap', type: 'number' }
};

export const entityName = 'Liquidity Forecast';
export const collectionName = 'liquidity_forecasts';
