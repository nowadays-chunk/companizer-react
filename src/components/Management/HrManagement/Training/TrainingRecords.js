
export const fieldsConfig = {

  record_id: { label: 'Record ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  program_id: { label: 'Program ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.recent' },
  score: { label: 'Score', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'attended', label: 'Attended' }, { id: 'no_show', label: 'No Show' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  certificate_url: { label: 'Certificate URL', type: 'text', faker: 'internet.url' },
  e: 'text', faker: 'lorem.sentence',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'HR Training Records';
export const collectionName = 'hr_training_records';
