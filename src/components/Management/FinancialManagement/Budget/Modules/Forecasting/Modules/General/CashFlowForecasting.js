
export const fieldsConfig = {
    month: { label: 'Month', type: 'text', required: true },
    net_flow: { label: 'Net Cash Flow', type: 'number', required: true },
    inflow: { label: 'Cash Inflow', type: 'number' },
    outflow: { label: 'Cash Outflow', type: 'number' }
};

export const entityName = 'Cash Flow Forecasting';
export const collectionName = 'cash_flow_forecasts';
