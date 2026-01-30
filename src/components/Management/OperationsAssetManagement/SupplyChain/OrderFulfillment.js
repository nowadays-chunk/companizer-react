
export const fieldsConfig = {
  fulfillment_id: { label: 'Fulfillment ID', type: 'text', faker: 'datatype.uuid' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'picked', label: 'Picked' }, { id: 'packed', label: 'Packed' }, { id: 'shipped', label: 'Shipped' }, { id: 'delivered', label: 'Delivered' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.recent' },
  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  warehouse_id: { label: 'Warehouse ID', type: 'text', faker: 'datatype.uuid' },
  shipping_method: { label: 'Shipping Method', type: 'text', faker: 'lorem.word' },
  tracking_number: { label: 'Tracking Number', type: 'text', faker: 'finance.account' },
  packed_by: { label: 'Packed By', type: 'text', faker: 'name.fullName' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Order Fulfillment';
export const collectionName = 'order_fulfillment_ops';
