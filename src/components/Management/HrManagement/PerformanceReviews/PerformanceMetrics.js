
export const fieldsConfig = {

  metric_id: { label: 'Metric ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  metric_name: { label: 'Metric Name', type: 'text', faker: 'lorem.words' },
  target_value: { label: 'Target Value', type: 'number', faker: 'datatype.number' },
  actual_value: { label: 'Actual Value', type: 'number', faker: 'datatype.number' },

  period: { label: 'Period', type: 'text', faker: 'lorem.word' }, // Q1 2024

  // Mandated
  // Extras
  score: { label: 'Score', type: 'number', faker: 'datatype.float' }, // 0-5
  weight: { label: 'Weight (%)', type: 'number', faker: 'datatype.number' },
  comments: { label: 'Comments', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  evaluated_by: { label: 'Evaluated By', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Performance Metrics';
export const collectionName = 'performance_metrics';
