
export const fieldsConfig = {

  contact_id: { label: 'Contact ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  outlet_name: { label: 'Outlet Name', type: 'text', faker: 'company.name' },
  contact_name: { label: 'Contact Name', type: 'text', faker: 'name.fullName' },

  email: { label: 'Email', type: 'email', faker: 'internet.email' },
  phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },

  // Mandated
  // Extras
  role: { label: 'Role', type: 'text', faker: 'name.jobTitle' }, // Journalist, Editor
  sentiment: { label: 'Sentiment', type: 'select', options: [{ id: 'positive', label: 'Positive' }, { id: 'neutral', label: 'Neutral' }, { id: 'negative', label: 'Negative' }], faker: 'random.arrayElement' },
  last_contact_date: { label: 'Last Contact', type: 'date', faker: 'date.past' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Media Relations';
export const collectionName = 'media_relations';
