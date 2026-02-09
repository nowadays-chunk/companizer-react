
export const fieldsConfig = {
    budget_id: { label: 'Budget ID', type: 'text', required: true },
    month: { label: 'Month', type: 'text' },
    revenue: { label: 'Revenue', type: 'number' },
    expenses: { label: 'Expenses', type: 'number' },
    gross_margin: { label: 'Gross Margin', type: 'number' }
};

export const entityName = 'Rolling Forecast Engine';
export const collectionName = 'rolling_forecasts';
