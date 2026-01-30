
export const fieldsConfig = {
  forecast_id: { label: 'Forecast ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period: { label: 'Period', type: 'text', faker: 'date.month' },
  forecast_amount: { label: 'Forecast Amount', type: 'number', faker: 'finance.amount' },

  confidence_level: { label: 'Confidence Level', type: 'select', options: [{ id: 'optimistic', label: 'Optimistic' }, { id: 'realistic', label: 'Realistic' }, { id: 'pessimistic', label: 'Pessimistic' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  sales_rep_id: { label: 'Sales Rep ID', type: 'text', faker: 'datatype.uuid' },
  region: { label: 'Region', type: 'text', faker: 'address.country' },
  quota: { label: 'Quota', type: 'number', faker: 'finance.amount' },
  gap_to_quota: { label: 'Gap to Quota', type: 'number', faker: 'finance.amount' },
  generated_date: { label: 'Generated Date', type: 'date', faker: 'date.recent' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  pipeline_coverage_ratio: { label: 'Pipeline Coverage Ratio', type: 'number', faker: 'datatype.float' }
};

export const entityName = 'Sales Forecasting';
export const collectionName = 'sales_forecasting';