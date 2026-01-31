
export const fieldsConfig = {

  schedule_id: { label: 'Schedule ID', type: 'text', faker: 'datatype.uuid' },
  asset_id: { label: 'Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  task_name: { label: 'Task Name', type: 'text', faker: 'hacker.verb' },
  frequency: { label: 'Frequency', type: 'select', options: [{ id: 'daily', label: 'Daily' }, { id: 'weekly', label: 'Weekly' }, { id: 'monthly', label: 'Monthly' }, { id: 'quarterly', label: 'Quarterly' }, { id: 'annually', label: 'Annually' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  next_due_date: { label: 'Next Due Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  assigned_to: { label: 'Assigned To', type: 'text', faker: 'name.fullName' },
  instructions: { label: 'Instructions', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  estimated_duration: { label: 'Estimated Duration', type: 'number', faker: 'datatype.number' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  e: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Preventive Maintenance Schedules';
export const collectionName = 'preventive_maintenance_schedules';
