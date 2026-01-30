
export const fieldsConfig = {
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  asset_id: { label: 'Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  requested_by: { label: 'Requested By', type: 'text', faker: 'name.fullName' },
  request_date: { label: 'Request Date', type: 'date', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  assigned_technician: { label: 'Assigned Technician', type: 'text', faker: 'name.fullName' },
  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.future' },
  priority: { label: 'Priority', type: 'select', options: [{ id: 'urgent', label: 'Urgent' }, { id: 'normal', label: 'Normal' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Work Orders';
export const collectionName = 'work_orders_ops';
