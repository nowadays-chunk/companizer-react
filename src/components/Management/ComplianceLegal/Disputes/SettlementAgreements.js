
export const fieldsConfig = {
  settlement_id: { label: 'Settlement ID', type: 'text', faker: 'datatype.uuid' },
  dispute_id: { label: 'Dispute ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  settlement_date: { label: 'Settlement Date', type: 'date', faker: 'date.recent' },
  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  terms: { label: 'Terms', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },
  signed_by_plaintiff: { label: 'Signed By Plaintiff', type: 'checkbox', faker: 'datatype.boolean' },
  signed_by_defendant: { label: 'Signed By Defendant', type: 'checkbox', faker: 'datatype.boolean' },
  payment_status: { label: 'Payment Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'paid', label: 'Paid' }], faker: 'random.arrayElement' }
};

export const entityName = 'Settlement Agreements';
export const collectionName = 'settlement_agreements';
