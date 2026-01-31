
export const fieldsConfig = {

  integration_id: { label: 'Integration ID', type: 'text', faker: 'datatype.uuid' },
  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  initiative_name: { label: 'Initiative Name', type: 'text', faker: 'lorem.words' },
  focus_area: { label: 'Focus Area', type: 'select', options: [{ id: 'values', label: 'Values' }, { id: 'communication', label: 'Communication' }, { id: 'leadership', label: 'Leadership' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },

  // Mandated
  // Extras
  employee_feedback_score: { label: 'Employee Feedback Score', type: 'number', faker: 'datatype.number' },
  participation_rate: { label: 'Participation Rate (%)', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'active', label: 'Active' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Cultural Integration';
export const collectionName = 'cultural_integration';