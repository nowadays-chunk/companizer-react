
export const fieldsConfig = {

  control_id: { label: 'Control ID', type: 'text', faker: 'datatype.uuid' },
  system_id: { label: 'System ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  user_role: { label: 'User Role', type: 'text', faker: 'hacker.noun' },
  permission_level: { label: 'Permission Level', type: 'select', options: [{ id: 'read', label: 'Read' }, { id: 'write', label: 'Write' }, { id: 'admin', label: 'Admin' }], faker: 'random.arrayElement' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'security', label: 'Security' }, { id: 'config', label: 'Config' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  last_review_date: { label: 'Last Review Date', type: 'date', faker: 'date.recent' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  mfa_required: { label: 'MFA Required', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Access Controls';
export const collectionName = 'access_controls';