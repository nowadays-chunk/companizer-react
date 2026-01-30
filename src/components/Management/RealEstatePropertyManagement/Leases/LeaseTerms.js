
export const fieldsConfig = {
  term_id: { label: 'Term ID', type: 'text', faker: 'datatype.uuid' },
  agreement_id: { label: 'Agreement ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  clause_title: { label: 'Clause Title', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  is_mandatory: { label: 'Is Mandatory', type: 'checkbox', faker: 'datatype.boolean' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
  penalty_for_breach: { label: 'Penalty', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Lease Terms';
export const collectionName = 'lease_terms';