
export const fieldsConfig = {

  deadline_id: { label: 'Deadline ID', type: 'text', faker: 'datatype.uuid' },
  task_id: { label: 'Task ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  original_deadline: { label: 'Original Deadline', type: 'date', faker: 'date.future' },
  current_deadline: { label: 'Current Deadline', type: 'date', faker: 'date.future' },

  extension_count: { label: 'Extension Count', type: 'number', faker: 'datatype.number' },
  reason_for_change: { label: 'Reason For Change', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  date_changed: { label: 'Date Changed', type: 'date', faker: 'date.recent' },
  impact_assessment: { label: 'Impact Assessment', type: 'text', faker: 'lorem.sentence' },
  is_hard_deadline: { label: 'Is Hard Deadline', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Task Deadlines';
export const collectionName = 'task_deadlines';