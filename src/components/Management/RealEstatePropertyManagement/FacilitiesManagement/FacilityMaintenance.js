
export const fieldsConfig = {
  maintenance_id: { label: 'Maintenance ID', type: 'text', faker: 'datatype.uuid' },
  facility_id: { label: 'Facility ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  task_name: { label: 'Task Name', type: 'text', faker: 'hacker.verb' },
  scheduled_date: { label: 'Scheduled Date', type: 'date', faker: 'date.future' },

  assigned_vendor: { label: 'Assigned Vendor', type: 'text', faker: 'company.name' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'scheduled', label: 'Scheduled' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }, { id: 'overdue', label: 'Overdue' }], faker: 'random.arrayElement' },
  priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  cost_estimate: { label: 'Cost Estimate', type: 'number', faker: 'finance.amount' },
  actual_cost: { label: 'Actual Cost', type: 'number', faker: 'finance.amount' },
  completion_notes: { label: 'Completion Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Facility Maintenance';
export const collectionName = 'facility_maintenance';