
export const fieldsConfig = {
  credit_id: { label: 'Credit ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  credit_name: { label: 'Credit Name', type: 'text', faker: 'lorem.words' }, // e.g. R&D Credit
  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },

  fiscal_year: { label: 'Fiscal Year', type: 'number', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  expiration_date: { label: 'Expiration Date', type: 'date', faker: 'date.future' },
  claimed_amount: { label: 'Claimed Amount', type: 'number', faker: 'finance.amount' },
  remaining_amount: { label: 'Remaining Amount', type: 'number', faker: 'finance.amount' },
  eligibility_criteria: { label: 'Eligibility', type: 'text', faker: 'lorem.sentence' },
  supporting_doc_url: { label: 'Supporting Doc', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Tax Credits';
export const collectionName = 'tax_credits';
