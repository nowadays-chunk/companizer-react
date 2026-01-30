
export const fieldsConfig = {
  deadline_id: { label: 'Deadline ID', type: 'text', faker: 'datatype.uuid' },
  task_id: { label: 'Task ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  original_deadline: { label: 'Original Deadline', type: 'date', faker: 'date.future' },
  current_deadline: { label: 'Current Deadline', type: 'date', faker: 'date.future' },

  extension_count: { label: 'Extension Count', type: 'number', faker: 'datatype.number' },
  reason_for_change: { label: 'Reason For Change', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  date_changed: { label: 'Date Changed', type: 'date', faker: 'date.recent' },
  impact_assessment: { label: 'Impact Assessment', type: 'text', faker: 'lorem.sentence' },
  is_hard_deadline: { label: 'Is Hard Deadline', type: 'checkbox', faker: 'datatype.boolean' },
  reminder_set: { label: 'Reminder Set', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Task Deadlines';
export const collectionName = 'task_deadlines';