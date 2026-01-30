
export const fieldsConfig = {
  update_id: { label: 'Update ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  version: { label: 'Version', type: 'text', faker: 'system.semver' },
  release_date: { label: 'Release Date', type: 'date', faker: 'date.future' },

  update_type: { label: 'Type', type: 'select', options: [{ id: 'minor', label: 'Minor' }, { id: 'major', label: 'Major' }, { id: 'patch', label: 'Patch' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  changelog: { label: 'Changelog', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'released', label: 'Released' }, { id: 'rolled_back', label: 'Rolled Back' }], faker: 'random.arrayElement' },
  impact_analysis: { label: 'Impact Analysis', type: 'text', faker: 'lorem.sentence' },
  customer_notification_sent: { label: 'Notification Sent', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Product Updates';
export const collectionName = 'product_updates';
