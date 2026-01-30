
export const fieldsConfig = {
  deadline_id: { label: 'Deadline ID', type: 'text', faker: 'datatype.uuid' },
  obligation_id: { label: 'Obligation ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  assigned_to: { label: 'Assigned To', type: 'text', faker: 'name.fullName' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'completed', label: 'Completed' }, { id: 'overdue', label: 'Overdue' }], faker: 'random.arrayElement' },
  priority: { label: 'Priority', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'high', label: 'High' }, { id: 'normal', label: 'Normal' }], faker: 'random.arrayElement' },
  reminder_days: { label: 'Reminder Days', type: 'number', faker: 'datatype.number' },
  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.recent' },
  evidence_link: { label: 'Evidence Link', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Compliance Deadlines';
export const collectionName = 'compliance_deadlines';
