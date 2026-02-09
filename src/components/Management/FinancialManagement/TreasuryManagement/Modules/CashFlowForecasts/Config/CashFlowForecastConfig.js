
export const fieldsConfig = {
    forecast_id: { label: 'Forecast ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    forecast_name: { label: 'Forecast Name', type: 'text', required: true, faker: 'commerce.productName' },
    start_date: { label: 'Start Date', type: 'date', required: true, faker: 'date.recent' },
    end_date: { label: 'End Date', type: 'date', required: true, faker: 'date.future' },
    period_type: {
        label: 'Period Type',
        type: 'select',
        options: [
            { id: 'daily', label: 'Daily' },
            { id: 'weekly', label: 'Weekly' },
            { id: 'monthly', label: 'Monthly' }
        ],
        defaultValue: 'weekly'
    },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'draft', label: 'Draft' },
            { id: 'active', label: 'Active' },
            { id: 'archived', label: 'Archived' }
        ],
        defaultValue: 'draft'
    },
    opening_balance: { label: 'Opening Balance', type: 'number', faker: 'finance.amount' },
    projected_inflow: { label: 'Projected Inflow', type: 'number', faker: 'finance.amount' },
    projected_outflow: { label: 'Projected Outflow', type: 'number', faker: 'finance.amount' },
    net_cash_flow: { label: 'Net Cash Flow', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Cash Flow Forecast';
export const collectionName = 'cash_flow_forecasts';
