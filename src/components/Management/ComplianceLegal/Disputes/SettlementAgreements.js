
export const fieldsConfig = {

  settlement_id: { label: 'Settlement ID', type: 'text', faker: 'datatype.uuid' },
  dispute_id: { label: 'Dispute ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  settlement_date: { label: 'Settlement Date', type: 'date', faker: 'date.recent' },
  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  terms: { label: 'Terms', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },
  signed_by_plaintiff: { label: 'Signed By Plaintiff', type: 'checkbox', faker: 'datatype.boolean' },
  signed_by_defendant: { label: 'Signed By Defendant', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Settlement Agreements';
export const collectionName = 'settlement_agreements';
