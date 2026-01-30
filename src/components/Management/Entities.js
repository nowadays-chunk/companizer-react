
export const fieldsConfig = {
  entity_id: { label: 'Entity ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  entity_name: { label: 'Entity Name', type: 'text', faker: 'company.name' },
  type: { label: 'Type', type: 'select', options: [{ id: 'company', label: 'Company' }, { id: 'subsidiary', label: 'Subsidiary' }, { id: 'department', label: 'Department' }, { id: 'partner', label: 'Partner' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  registration_number: { label: 'Registration #', type: 'text', faker: 'random.alphaNumeric' },
  tax_id: { label: 'Tax ID', type: 'text', faker: 'random.alphaNumeric' },
  country: { label: 'Country', type: 'text', faker: 'address.country' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'inactive', label: 'Inactive' }, { id: 'dissolved', label: 'Dissolved' }], faker: 'random.arrayElement' },
  parent_entity_id: { label: 'Parent Entity ID', type: 'text', faker: 'datatype.uuid' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Entities';
export const collectionName = 'entities';
