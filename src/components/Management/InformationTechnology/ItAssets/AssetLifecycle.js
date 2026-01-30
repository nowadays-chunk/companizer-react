
export const fieldsConfig = {
  lifecycle_id: { label: 'Lifecycle ID', type: 'text', faker: 'datatype.uuid' },
  asset_id: { label: 'Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  stage: { label: 'Stage', type: 'select', options: [{ id: 'procurement', label: 'Procurement' }, { id: 'deployment', label: 'Deployment' }, { id: 'maintenance', label: 'Maintenance' }, { id: 'retired', label: 'Retired' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  assigned_to: { label: 'Assigned To', type: 'text', faker: 'name.fullName' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  condition: { label: 'Condition', type: 'select', options: [{ id: 'new', label: 'New' }, { id: 'good', label: 'Good' }, { id: 'poor', label: 'Poor' }], faker: 'random.arrayElement' },
  value: { label: 'Value', type: 'number', faker: 'finance.amount' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Asset Lifecycle';
export const collectionName = 'asset_lifecycle';
