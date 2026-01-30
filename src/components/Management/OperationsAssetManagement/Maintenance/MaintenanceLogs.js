
export const fieldsConfig = {
  log_id: { label: 'Log ID', type: 'text', faker: 'datatype.uuid' },
  asset_id: { label: 'Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  maintenance_date: { label: 'Maintenance Date', type: 'date', faker: 'date.recent' },
  performed_by: { label: 'Performed By', type: 'text', faker: 'name.fullName' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  cost: { label: 'Cost', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  maintenance_type: { label: 'Type', type: 'select', options: [{ id: 'preventive', label: 'Preventive' }, { id: 'corrective', label: 'Corrective' }, { id: 'emergency', label: 'Emergency' }], faker: 'random.arrayElement' },
  duration_hours: { label: 'Duration (Hours)', type: 'number', faker: 'datatype.float' },
  parts_used: { label: 'Parts Used', type: 'text', faker: 'lorem.sentence' },
  next_maintenance_due: { label: 'Next Maintenance Due', type: 'date', faker: 'date.future' },
  status: { label: 'Status', type: 'select', options: [{ id: 'completed', label: 'Completed' }, { id: 'pending_review', label: 'Pending Review' }], faker: 'random.arrayElement' }
};

export const entityName = 'Maintenance Logs';
export const collectionName = 'maintenance_logs';
