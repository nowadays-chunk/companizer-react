
export const fieldsConfig = {

  encryption_id: { label: 'Encryption ID', type: 'text', faker: 'datatype.uuid' },
  data_set_id: { label: 'Data Set ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  algorithm: { label: 'Algorithm', type: 'select', options: [{ id: 'aes256', label: 'AES-256' }, { id: 'rsa', label: 'RSA' }], faker: 'random.arrayElement' },
  key_rotation_date: { label: 'Key Rotation Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'deprecated', label: 'Deprecated' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  encryption_level: { label: 'Encryption Level', type: 'select', options: [{ id: 'field', label: 'Field' }, { id: 'database', label: 'Database' }, { id: 'disk', label: 'Disk' }], faker: 'random.arrayElement' },
  compliance_standard: { label: 'Compliance Standard', type: 'text', faker: 'lorem.word' },
  managed_by: { label: 'Managed By', type: 'text', faker: 'name.fullName' },
  last_audit_date: { label: 'Last Audit Date', type: 'date', faker: 'date.past' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Data Encryption';
export const collectionName = 'data_encryption';
