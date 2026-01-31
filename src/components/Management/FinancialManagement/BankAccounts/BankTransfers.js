
export const fieldsConfig = {

  transfer_id: { label: 'Transfer ID', type: 'text', faker: 'datatype.uuid' },
  from_account_id: { label: 'From Account ID', type: 'text', faker: 'datatype.uuid' },
  to_account_id: { label: 'To Account ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  transfer_date: { label: 'Transfer Date', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  reference_number: { label: 'Reference Number', type: 'text', faker: 'finance.account' },
  status: { label: 'Status', type: 'select', options: [{ id: 'initiated', label: 'Initiated' }, { id: 'completed', label: 'Completed' }, { id: 'failed', label: 'Failed' }], faker: 'random.arrayElement' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  fee_amount: { label: 'Fee Amount', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Bank Transfers';
export const collectionName = 'bank_transfers';
