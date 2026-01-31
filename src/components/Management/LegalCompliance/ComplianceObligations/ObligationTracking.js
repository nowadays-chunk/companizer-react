
export const fieldsConfig = {

  obligation_id: { label: 'Obligation ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  source: { label: 'Source', type: 'text', faker: 'lorem.words' }, // e.g. "GDPR Article 32"

  category: { label: 'Category', type: 'select', options: [{ id: 'regulatory', label: 'Regulatory' }, { id: 'contractual', label: 'Contractual' }, { id: 'internal', label: 'InternalPolicy' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  risk_level: { label: 'Risk Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  frequency: { label: 'Frequency', type: 'text', faker: 'lorem.word' }, // Annual, Quarterly,
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Obligation Tracking';
export const collectionName = 'obligation_tracking';
