
export const fieldsConfig = {

  forecast_id: { label: 'Forecast ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period_start: { label: 'Period Start', type: 'date', faker: 'date.recent' },
  period_end: { label: 'Period End', type: 'date', faker: 'date.future' },

  forecasted_revenue: { label: 'Forecasted Revenue', type: 'number', faker: 'finance.amount' },
  forecasted_expenses: { label: 'Forecasted Expenses', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  forecasted_profit: { label: 'Forecasted Profit', type: 'number', faker: 'finance.amount' },
  methodology: { label: 'Methodology', type: 'select', options: [{ id: 'historical', label: 'Historical' }, { id: 'trend_analysis', label: 'Trend Analysis' }, { id: 'bottom_up', label: 'Bottom Up' }], faker: 'random.arrayElement' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  confidence_level: { label: 'Confidence Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Financial Forecasting';
export const collectionName = 'financial_forecasting';
