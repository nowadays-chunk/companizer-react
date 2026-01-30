
export const fieldsConfig = {
  benchmark_id: { label: 'Benchmark ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  metric_name: { label: 'Metric Name', type: 'text', faker: 'lorem.words' },
  industry_avg: { label: 'Industry Avg', type: 'number', faker: 'datatype.float' },
  company_value: { label: 'Company Value', type: 'number', faker: 'datatype.float' },

  unit: { label: 'Unit', type: 'text', faker: 'scientific.unit' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  date_recorded: { label: 'Date Recorded', type: 'date', faker: 'date.recent' },
  source: { label: 'Source', type: 'text', faker: 'lorem.words' }, // e.g. "Gartner Report"
  competitor_best: { label: 'Competitor Best', type: 'number', faker: 'datatype.float' },
  gap_analysis: { label: 'Gap Analysis', type: 'text', faker: 'lorem.sentence' },
  target_value: { label: 'Target Value', type: 'number', faker: 'datatype.float' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Benchmarking';
export const collectionName = 'benchmarking';