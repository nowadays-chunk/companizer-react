
export const fieldsConfig = {

  dependency_id: { label: 'Dependency ID', type: 'text', faker: 'datatype.uuid' },
  predecessor_task_id: { label: 'Predecessor Task ID', type: 'text', faker: 'datatype.uuid' },
  successor_task_id: { label: 'Successor Task ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  dependency_type: { label: 'Dependency Type', type: 'select', options: [{ id: 'fs', label: 'Finish to Start' }, { id: 'ss', label: 'Start to Start' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  lag_hours: { label: 'Lag Hours', type: 'number', faker: 'datatype.number' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  is_critical: { label: 'Is Critical', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Task Dependencies';
export const collectionName = 'task_dependencies';