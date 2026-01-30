
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  current_location: { label: 'Current Location', type: 'text', faker: 'address.city' },
  status_update: { label: 'Status Update', type: 'text', faker: 'lorem.sentence' }, // "Arrived at sorting facility"

  update_time: { label: 'Update Time', type: 'datetime', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  carrier: { label: 'Carrier', type: 'text', faker: 'company.name' },
  estimated_delivery: { label: 'Estimated Delivery', type: 'datetime', faker: 'date.future' }
};

export const entityName = 'Order Tracking';
export const collectionName = 'order_tracking';
