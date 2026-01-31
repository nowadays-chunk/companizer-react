
export const fieldsConfig = {

  benchmark_id: { label: 'Benchmark ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  metric_name: { label: 'Metric Name', type: 'text', faker: 'lorem.words' },
  industry_avg: { label: 'Industry Avg', type: 'number', faker: 'datatype.float' },
  company_value: { label: 'Company Value', type: 'number', faker: 'datatype.float' },

  unit: { label: 'Unit', type: 'text', faker: 'scientific.unit' },

  // Mandated
  // Extras
  date_recorded: { label: 'Date Recorded', type: 'date', faker: 'date.recent' },
  source: { label: 'Source', type: 'text', faker: 'lorem.words' }, // e.g. "Gartner Report"
  competitor_best: { label: 'Competitor Best', type: 'number', faker: 'datatype.float' },
  gap_analysis: { label: 'Gap Analysis', type: 'text', faker: 'lorem.sentence' },
  target_value: { label: 'Target Value', type: 'number', faker: 'datatype.float' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Benchmarking';
export const collectionName = 'benchmarking';