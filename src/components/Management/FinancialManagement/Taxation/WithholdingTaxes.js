
export const fieldsConfig = {
  record_id: { label: 'Record ID', type: 'text', faker: 'datatype.uuid' },
  payee_id: { label: 'Payee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  payment_amount: { label: 'Payment Amount', type: 'number', faker: 'finance.amount' },
  withholding_rate: { label: 'Withholding Rate', type: 'number', faker: 'datatype.float' },
  withheld_amount: { label: 'Withheld Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  payment_date: { label: 'Payment Date', type: 'date', faker: 'date.recent' },
  tax_type: { label: 'Tax Type', type: 'text', faker: 'lorem.word' }, // Dividend, Interest, Royalty
  certificate_issued: { label: 'Certificate Issued', type: 'checkbox', faker: 'datatype.boolean' },
  remitted_date: { label: 'Remitted Date', type: 'date', faker: 'date.future' }
};

export const entityName = 'Withholding Taxes';
export const collectionName = 'withholding_taxes';
