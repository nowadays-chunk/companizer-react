
export const fieldsConfig = {
  reorder_id: { label: 'Reorder ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  min_level: { label: 'Min Level', type: 'number', faker: 'datatype.number' },
  max_level: { label: 'Max Level', type: 'number', faker: 'datatype.number' },
  reorder_point: { label: 'Reorder Point', type: 'number', faker: 'datatype.number' },

  current_stock: { label: 'Current Stock', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  lead_time_days: { label: 'Lead Time (Days)', type: 'number', faker: 'datatype.number' },
  safety_stock: { label: 'Safety Stock', type: 'number', faker: 'datatype.number' },
  auto_reorder_enabled: { label: 'Auto Reorder', type: 'checkbox', faker: 'datatype.boolean' },
  preferred_vendor_id: { label: 'Preferred Vendor ID', type: 'text', faker: 'datatype.uuid' },
  last_reorder_date: { label: 'Last Reorder Date', type: 'date', faker: 'date.past' }
};

export const entityName = 'Reorder Points';
export const collectionName = 'reorder_points';
