
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
  tags: { label: 'Tags', type: 'select', options: [{ id: 'primary', label: 'Primary' }, { id: 'support', label: 'Support' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  comments: { label: 'Comments', type: 'text', faker: 'lorem.sentence' },
  priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  completed_date: { label: 'Completed Date', type: 'date', faker: 'date.future' },
  type: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Task Assignments';
export const collectionName = 'task_assignments';