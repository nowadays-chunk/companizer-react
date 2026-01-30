
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  asset_id: { label: 'Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  current_location: { label: 'Current Location', type: 'text', faker: 'address.city' },
  check_in_date: { label: 'Check-in Date', type: 'date', faker: 'date.recent' },

  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'maintenance', label: 'Maintenance' }, { id: 'transit', label: 'In Transit' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  custodian: { label: 'Custodian', type: 'text', faker: 'name.fullName' },
  rfid_tag: { label: 'RFID Tag', type: 'text', faker: 'random.alphaNumeric' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  condition: { label: 'Condition', type: 'select', options: [{ id: 'excellent', label: 'Excellent' }, { id: 'good', label: 'Good' }, { id: 'fair', label: 'Fair' }, { id: 'poor', label: 'Poor' }], faker: 'random.arrayElement' },
  last_audit_date: { label: 'Last Audit Date', type: 'date', faker: 'date.past' }
};

export const entityName = 'Asset Tracking';
export const collectionName = 'asset_tracking_ops';
