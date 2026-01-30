
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  invoice_id: { label: 'Invoice ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  payment_date: { label: 'Payment Date', type: 'date', faker: 'date.recent' },
  amount_received: { label: 'Amount Received', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  payment_method: { label: 'Payment Method', type: 'select', options: [{ id: 'credit_card', label: 'Credit Card' }, { id: 'bank_transfer', label: 'Bank Transfer' }, { id: 'check', label: 'Check' }, { id: 'paypal', label: 'PayPal' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  transaction_reference: { label: 'Transaction Reference', type: 'text', faker: 'finance.bitcoinAddress' },
  status: { label: 'Status', type: 'select', options: [{ id: 'completed', label: 'Completed' }, { id: 'pending', label: 'Pending' }, { id: 'failed', label: 'Failed' }], faker: 'random.arrayElement' },
  payer_name: { label: 'Payer Name', type: 'text', faker: 'name.fullName' },
  bank_fees: { label: 'Bank Fees', type: 'number', faker: 'finance.amount' },
  net_amount: { label: 'Net Amount', type: 'number', faker: 'finance.amount' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  receipt_url: { label: 'Receipt URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Payment Tracking';
export const collectionName = 'payment_tracking';