
export const fieldsConfig = {

  goal_id: { label: 'Goal ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  deadline: { label: 'Deadline', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  status: { label: 'Status', type: 'select', options: [{ id: 'on_track', label: 'On Track' }, { id: 'at_risk', label: 'At Risk' }, { id: 'behind', label: 'Behind' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  progress_percentage: { label: 'Progress (%)', type: 'number', faker: 'datatype.number' },
  owner_id: { label: 'Owner ID', type: 'text', faker: 'datatype.uuid' },
  department_id: { label: 'Department ID', type: 'text', faker: 'datatype.uuid' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Strategic Goals';
export const collectionName = 'strategic_goals';