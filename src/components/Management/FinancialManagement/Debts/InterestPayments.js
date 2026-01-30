
export const fieldsConfig = {
  payment_id: { label: 'Payment ID', type: 'text', faker: 'datatype.uuid' },
  loan_id: { label: 'Loan ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  payment_date: { label: 'Payment Date', type: 'date', faker: 'date.recent' },
  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },

  rate_applied: { label: 'Rate Applied', type: 'number', faker: 'datatype.float' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  period_start: { label: 'Period Start', type: 'date', faker: 'date.past' },
  period_end: { label: 'Period End', type: 'date', faker: 'date.past' },
  recipient: { label: 'Recipient', type: 'text', faker: 'company.name' },
  transaction_ref: { label: 'Transaction Ref', type: 'text', faker: 'finance.bitcoinAddress' } // Just a hash
};

export const entityName = 'Interest Payments';
export const collectionName = 'interest_payments';