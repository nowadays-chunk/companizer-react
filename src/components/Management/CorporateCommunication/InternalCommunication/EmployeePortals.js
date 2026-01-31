
export const fieldsConfig = {

  portal_id: { label: 'Portal ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  portal_name: { label: 'Portal Name', type: 'text', faker: 'lorem.words' },
  url: { label: 'URL', type: 'text', faker: 'internet.url' },

  // Mandated
  // Extras
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  access_level: { label: 'Access Level', type: 'text', faker: 'random.alphaNumeric' },
  admin_contact: { label: 'Admin Contact', type: 'email', faker: 'internet.email' },
  type: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Employee Portals';
export const collectionName = 'employee_portals';
