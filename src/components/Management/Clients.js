
export const fieldsConfig = {
  client_id: { label: 'Client ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  client_name: { label: 'Client Name', type: 'text', faker: 'company.name' },
  industry: { label: 'Industry', type: 'text', faker: 'commerce.department' },

  contact_email: { label: 'Email', type: 'email', faker: 'internet.email' },
  phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  client_type: { label: 'Client Type', type: 'select', options: [{ id: 'enterprise', label: 'Enterprise' }, { id: 'sme', label: 'SME' }, { id: 'individual', label: 'Individual' }], faker: 'random.arrayElement' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'inactive', label: 'Inactive' }, { id: 'prospect', label: 'Prospect' }], faker: 'random.arrayElement' },
  address: { label: 'Address', type: 'text', faker: 'address.streetAddress' },
  city: { label: 'City', type: 'text', faker: 'address.city' },
  country: { label: 'Country', type: 'text', faker: 'address.country' },
  account_manager: { label: 'Account Manager', type: 'text', faker: 'name.fullName' },
  total_revenue: { label: 'Total Revenue', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Clients';
export const collectionName = 'clients';
