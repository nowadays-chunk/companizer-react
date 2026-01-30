
export const fieldsConfig = {
  term_id: { label: 'Term ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  term_name: { label: 'Term Name', type: 'text', faker: 'lorem.words' }, // e.g. Net 30
  days_due: { label: 'Days Due', type: 'number', faker: 'datatype.number' },

  discount_percentage: { label: 'Discount (%)', type: 'number', faker: 'datatype.float' },
  discount_days: { label: 'Discount Days', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  is_default: { label: 'Is Default', type: 'checkbox', faker: 'datatype.boolean' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  penalty_percentage: { label: 'Penalty (%)', type: 'number', faker: 'datatype.float' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Payment Terms';
export const collectionName = 'payment_terms';
