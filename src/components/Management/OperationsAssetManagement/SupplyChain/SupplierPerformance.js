
export const fieldsConfig = {

  performance_id: { label: 'Performance ID', type: 'text', faker: 'datatype.uuid' },
  supplier_id: { label: 'Supplier ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period: { label: 'Period', type: 'text', faker: 'lorem.word' }, // Oct 2023
  score: { label: 'Score', type: 'number', faker: 'datatype.number' }, // 0-100

  // Mandated
  // Extras
  on_time_delivery_rate: { label: 'On-Time Rate (%)', type: 'number', faker: 'datatype.float' },
  quality_defect_rate: { label: 'Defect Rate (%)', type: 'number', faker: 'datatype.float' },
  response_time_avg: { label: 'Avg Response Time (Hrs)', type: 'number', faker: 'datatype.float' },
  cost_competitiveness: { label: 'Cost Competitiveness', type: 'number', faker: 'datatype.number' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  evaluated_by: { label: 'Evaluated By', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Supplier Performance';
export const collectionName = 'supplier_performance_ops';
