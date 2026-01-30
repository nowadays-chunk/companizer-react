
export const fieldsConfig = {
  filing_id: { label: 'Filing ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  form_type: { label: 'Form Type', type: 'text', faker: 'random.alphaNumeric' }, // 1040, 1120
  period_end: { label: 'Period End', type: 'date', faker: 'date.past' },

  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  filed_date: { label: 'Filed Date', type: 'date', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  total_tax_liability: { label: 'Total Liability', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'filed', label: 'Filed' }, { id: 'accepted', label: 'Accepted' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  confirmation_number: { label: 'Confirmation #', type: 'text', faker: 'random.alphaNumeric' },
  prepared_by: { label: 'Prepared By', type: 'text', faker: 'name.fullName' },
  payment_amount: { label: 'Payment Amount', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Tax Filings';
export const collectionName = 'tax_filings';
