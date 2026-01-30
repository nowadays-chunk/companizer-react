
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  user_id: { label: 'User ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  activity_type: { label: 'Activity Type', type: 'select', options: [{ id: 'login', label: 'Login' }, { id: 'logout', label: 'Logout' }, { id: 'file_access', label: 'File Access' }, { id: 'config_change', label: 'Config Change' }], faker: 'random.arrayElement' },
  timestamp: { label: 'Timestamp', type: 'text', faker: 'date.recent' },

  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  ip_address: { label: 'IP Address', type: 'text', faker: 'internet.ip' },
  device_info: { label: 'Device Info', type: 'text', faker: 'lorem.words' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  success: { label: 'Success', type: 'checkbox', faker: 'datatype.boolean' },
  module_accessed: { label: 'Module Accessed', type: 'text', faker: 'hacker.noun' }
};

export const entityName = 'User Activity Tracking';
export const collectionName = 'user_activity_tracking';