
export const fieldsConfig = {
  forecast_id: { label: 'Forecast ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period_start: { label: 'Period Start', type: 'date', faker: 'date.recent' },
  period_end: { label: 'Period End', type: 'date', faker: 'date.future' },

  forecasted_revenue: { label: 'Forecasted Revenue', type: 'number', faker: 'finance.amount' },
  forecasted_expenses: { label: 'Forecasted Expenses', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  forecasted_profit: { label: 'Forecasted Profit', type: 'number', faker: 'finance.amount' },
  methodology: { label: 'Methodology', type: 'select', options: [{ id: 'historical', label: 'Historical' }, { id: 'trend_analysis', label: 'Trend Analysis' }, { id: 'bottom_up', label: 'Bottom Up' }], faker: 'random.arrayElement' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  confidence_level: { label: 'Confidence Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Financial Forecasting';
export const collectionName = 'financial_forecasting';
