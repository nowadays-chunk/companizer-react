
export const fieldsConfig = {
  log_id: { label: 'Log ID', type: 'text', faker: 'datatype.uuid' },
  entity_type: { label: 'Entity Type', type: 'text', faker: 'lorem.word' }, // e.g. "Invoice", "Policy"
  entity_id: { label: 'Entity ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  change_date: { label: 'Change Date', type: 'date', faker: 'date.recent' },
  changed_by: { label: 'Changed By', type: 'text', faker: 'name.fullName' },

  change_type: { label: 'Change Type', type: 'select', options: [{ id: 'create', label: 'Create' }, { id: 'update', label: 'Update' }, { id: 'delete', label: 'Delete' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  old_value: { label: 'Old Value', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  new_value: { label: 'New Value', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  reason: { label: 'Reason', type: 'text', faker: 'lorem.sentence' },
  ip_address: { label: 'IP Address', type: 'text', faker: 'internet.ip' },
  system_component: { label: 'System Component', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'Change Logs';
export const collectionName = 'change_logs';