
export const fieldsConfig = {

  term_id: { label: 'Term ID', type: 'text', faker: 'datatype.uuid' },
  agreement_id: { label: 'Agreement ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  clause_title: { label: 'Clause Title', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  is_mandatory: { label: 'Is Mandatory', type: 'checkbox', faker: 'datatype.boolean' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Lease Terms';
export const collectionName = 'lease_terms';