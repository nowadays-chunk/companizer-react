
export const fieldsConfig = {
  backorder_id: { label: 'Backorder ID', type: 'text', faker: 'datatype.uuid' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  quantity_backordered: { label: 'Quantity Backordered', type: 'number', faker: 'datatype.number' },
  estimated_availability: { label: 'Estimated Availability', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'fulfilled', label: 'Fulfilled' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'normal', label: 'Normal' }], faker: 'random.arrayElement' },
  notification_sent: { label: 'Notification Sent', type: 'checkbox', faker: 'datatype.boolean' },
  supplier_po_id: { label: 'Supplier PO ID', type: 'text', faker: 'datatype.uuid' },
  created_date: { label: 'Created Date', type: 'date', faker: 'date.recent' },
  reason: { label: 'Reason', type: 'text', faker: 'lorem.sentence' },
  shipping_method: { label: 'Shipping Method', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'Backorders';
export const collectionName = 'backorders';
