
export const fieldsConfig = {
  tenant_id: { label: 'Tenant ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  tenant_name: { label: 'Tenant Name', type: 'text', faker: 'company.name' },
  contact_person: { label: 'Contact Person', type: 'text', faker: 'name.fullName' },

  email: { label: 'Email', type: 'email', faker: 'internet.email' },
  phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  industry: { label: 'Industry', type: 'text', faker: 'commerce.department' },
  credit_rating: { label: 'Credit Rating', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'vacated', label: 'Vacated' }, { id: 'evicted', label: 'Evicted' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  move_in_date: { label: 'Move In Date', type: 'date', faker: 'date.past' }
};

export const entityName = 'Tenant Records';
export const collectionName = 'tenant_records';