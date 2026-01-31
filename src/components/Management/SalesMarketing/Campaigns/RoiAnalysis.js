
export const fieldsConfig = {

  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  campaign_id: { label: 'Campaign ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  total_revenue: { label: 'Total Revenue', type: 'number', faker: 'finance.amount' },
  total_cost: { label: 'Total Cost', type: 'number', faker: 'finance.amount' },

  roi_percentage: { label: 'ROI (%)', type: 'number', faker: 'datatype.float' },
  net_profit: { label: 'Net Profit', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  analysis_date: { label: 'Analysis Date', type: 'date', faker: 'date.recent' },
  customer_acquisition_cost: { label: 'CAC', type: 'number', faker: 'finance.amount' },
  lifetime_value_projection: { label: 'LTV Projection', type: 'number', faker: 'finance.amount' },
  conversion_rate: { label: 'Conversion Rate', type: 'number', faker: 'datatype.float' },
  analyst_notes: { label: 'Analyst Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  benchmark_roi: { label: 'Benchmark ROI', type: 'number', faker: 'datatype.float' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'ROI Analysis';
export const collectionName = 'roi_analysis';