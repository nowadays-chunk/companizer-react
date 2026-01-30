
export const fieldsConfig = {
  record_id: { label: 'Record ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  program_id: { label: 'Program ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.recent' },
  score: { label: 'Score', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'attended', label: 'Attended' }, { id: 'no_show', label: 'No Show' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  certificate_url: { label: 'Certificate URL', type: 'text', faker: 'internet.url' },
  feedback: { label: 'Feedback', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'HR Training Records';
export const collectionName = 'hr_training_records';
