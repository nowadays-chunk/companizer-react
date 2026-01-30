
export const fieldsConfig = {
  fulfillment_id: { label: 'Fulfillment ID', type: 'text', faker: 'datatype.uuid' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  picked_date: { label: 'Picked Date', type: 'datetime', faker: 'date.recent' },
  packed_date: { label: 'Packed Date', type: 'datetime', faker: 'date.recent' },
  shipped_date: { label: 'Shipped Date', type: 'datetime', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  warehouse_id: { label: 'Warehouse ID', type: 'text', faker: 'datatype.uuid' },
  shipping_carrier: { label: 'Carrier', type: 'text', faker: 'company.name' },
  tracking_number: { label: 'Tracking Number', type: 'text', faker: 'random.alphaNumeric' },
  status: { label: 'Status', type: 'select', options: [{ id: 'processing', label: 'Processing' }, { id: 'shipped', label: 'Shipped' }, { id: 'delivered', label: 'Delivered' }], faker: 'random.arrayElement' }
};

export const entityName = 'Order Fulfillment';
export const collectionName = 'order_fulfillment';
