
export const fieldsConfig = {

  system_integration_id: { label: 'System Integration ID', type: 'text', faker: 'datatype.uuid' },
  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  system_name: { label: 'System Name', type: 'text', faker: 'hacker.noun' },
  disposition: { label: 'Disposition', type: 'select', options: [{ id: 'migrate', label: 'Migrate' }, { id: 'retire', label: 'Retire' }, { id: 'maintain', label: 'Maintain' }], faker: 'random.arrayElement' },

  target_date: { label: 'Target Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  data_migration_status: { label: 'Data Migration Status', type: 'number', faker: 'datatype.number' }, // %
  user_migration_status: { label: 'User Migration Status', type: 'number', faker: 'datatype.number' }, // %
  technical_lead: { label: 'Technical Lead', type: 'text', faker: 'name.fullName' },
  risks: { label: 'Risks', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Systems Integration';
export const collectionName = 'systems_integration';
