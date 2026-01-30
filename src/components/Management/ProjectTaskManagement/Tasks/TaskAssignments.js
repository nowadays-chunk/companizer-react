
export const fieldsConfig = {
  assignment_id: { label: 'Assignment ID', type: 'text', faker: 'datatype.uuid' },
  task_id: { label: 'Task ID', type: 'text', faker: 'datatype.uuid' },
  assignee_id: { label: 'Assignee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  assigned_date: { label: 'Assigned Date', type: 'date', faker: 'date.recent' },
  status: { label: 'Status', type: 'select', options: [{ id: 'not_started', label: 'Not Started' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },

  effort_estimated: { label: 'Effort Estimated (Hours)', type: 'number', faker: 'datatype.number' },
  effort_actual: { label: 'Effort Actual (Hours)', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'primary', label: 'Primary' }, { id: 'support', label: 'Support' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  comments: { label: 'Comments', type: 'text', faker: 'lorem.sentence' },
  priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  completed_date: { label: 'Completed Date', type: 'date', faker: 'date.future' },
  is_overdue: { label: 'Is Overdue', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Task Assignments';
export const collectionName = 'task_assignments';