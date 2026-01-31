
export const fieldsConfig = {

  mentorship_id: { label: 'Mentorship ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  mentor_id: { label: 'Mentor ID', type: 'text', faker: 'datatype.uuid' },
  mentee_id: { label: 'Mentee ID', type: 'text', faker: 'datatype.uuid' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  meeting_frequency: { label: 'Frequency', type: 'select', options: [{ id: 'weekly', label: 'Weekly' }, { id: 'monthly', label: 'Monthly' }, { id: 'quarterly', label: 'Quarterly' }], faker: 'random.arrayElement' },
  goals: { label: 'Goals', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'completed', label: 'Completed' }, { id: 'terminated', label: 'Terminated' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Mentorship Programs';
export const collectionName = 'mentorship_programs';
