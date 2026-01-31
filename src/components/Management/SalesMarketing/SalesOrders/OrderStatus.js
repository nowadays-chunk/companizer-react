
export const fieldsConfig = {

  status_id: { label: 'Status ID', type: 'text', faker: 'datatype.uuid' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  current_status: { label: 'Current Status', type: 'select', options: [{ id: 'new', label: 'New' }, { id: 'processing', label: 'Processing' }, { id: 'shipped', label: 'Shipped' }, { id: 'delivered', label: 'Delivered' }, { id: 'returned', label: 'Returned' }], faker: 'random.arrayElement' },
  status_date: { label: 'Status Date', type: 'date', faker: 'date.recent' },

  updated_by: { label: 'Updated By', type: 'text', faker: 'name.fullName' },

  // Mandated
  // Extras
  comments: { label: 'Comments', type: 'text', faker: 'lorem.sentence' },
  is_visible_to_customer: { label: 'Visible to Customer', type: 'checkbox', faker: 'datatype.boolean' },
  location: { label: 'Location', type: 'text', faker: 'address.city' }, // E.g., Warehouse A
  next_step: { label: 'Next Step', type: 'text', faker: 'hacker.verb' },
  cycle_time_hours: { label: 'Cycle Time (Hours)', type: 'number', faker: 'datatype.float' },
  type: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Order Status';
export const collectionName = 'order_status_history';