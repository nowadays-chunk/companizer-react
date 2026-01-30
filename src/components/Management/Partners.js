
export const fieldsConfig = {
  partner_id: { label: 'Partner ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  partner_name: { label: 'Partner Name', type: 'text', faker: 'company.name' },
  type: { label: 'Type', type: 'select', options: [{ id: 'tech', label: 'Technology' }, { id: 'service', label: 'Service' }, { id: 'channel', label: 'Channel' }, { id: 'strategic', label: 'Strategic' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  contact_person: { label: 'Contact Person', type: 'text', faker: 'name.fullName' },
  email: { label: 'Email', type: 'email', faker: 'internet.email' },
  phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },
  contract_start: { label: 'Contract Start', type: 'date', faker: 'date.past' },
  contract_end: { label: 'Contract End', type: 'date', faker: 'date.future' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'inactive', label: 'Inactive' }], faker: 'random.arrayElement' },
  website: { label: 'Website', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Partners';
export const collectionName = 'partners';
