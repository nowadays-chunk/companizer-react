
export const fieldsConfig = {
  pps_id: { label: 'PPS ID', type: 'text', faker: 'datatype.uuid' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  stage: { label: 'Stage', type: 'select', options: [{ id: 'pick', label: 'Pick' }, { id: 'pack', label: 'Pack' }, { id: 'ship', label: 'Ship' }], faker: 'random.arrayElement' },

  timestamp: { label: 'Timestamp', type: 'text', faker: 'date.recent' },
  operator: { label: 'Operator', type: 'text', faker: 'name.fullName' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  items_processed: { label: 'Items Processed', type: 'number', faker: 'datatype.number' },
  duration_minutes: { label: 'Duration (Min)', type: 'number', faker: 'datatype.number' },
  errors_logged: { label: 'Errors Logged', type: 'number', faker: 'datatype.number' },
  package_weight: { label: 'Package Weight', type: 'number', faker: 'datatype.float' },
  label_generated: { label: 'Label Generated', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Pick Pack Ship';
export const collectionName = 'pick_pack_ship';
