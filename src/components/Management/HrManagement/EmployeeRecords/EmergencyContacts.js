
export const fieldsConfig = {
  contact_id: { label: 'Contact ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Name', type: 'text', faker: 'name.fullName' },
  relationship: { label: 'Relationship', type: 'text', faker: 'lorem.word' }, // Spouse, Parent

  phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },
  email: { label: 'Email', type: 'email', faker: 'internet.email' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  address: { label: 'Address', type: 'text', faker: 'address.streetAddress' },
  is_primary: { label: 'Is Primary', type: 'checkbox', faker: 'datatype.boolean' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Emergency Contacts';
export const collectionName = 'emergency_contacts';
