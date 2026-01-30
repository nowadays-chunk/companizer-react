
export const fieldsConfig = {
  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  campaign_id: { label: 'Campaign ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  total_revenue: { label: 'Total Revenue', type: 'number', faker: 'finance.amount' },
  total_cost: { label: 'Total Cost', type: 'number', faker: 'finance.amount' },

  roi_percentage: { label: 'ROI (%)', type: 'number', faker: 'datatype.float' },
  net_profit: { label: 'Net Profit', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  analysis_date: { label: 'Analysis Date', type: 'date', faker: 'date.recent' },
  customer_acquisition_cost: { label: 'CAC', type: 'number', faker: 'finance.amount' },
  lifetime_value_projection: { label: 'LTV Projection', type: 'number', faker: 'finance.amount' },
  conversion_rate: { label: 'Conversion Rate', type: 'number', faker: 'datatype.float' },
  analyst_notes: { label: 'Analyst Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  benchmark_roi: { label: 'Benchmark ROI', type: 'number', faker: 'datatype.float' },
  is_above_target: { label: 'Is Above Target', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'ROI Analysis';
export const collectionName = 'roi_analysis';