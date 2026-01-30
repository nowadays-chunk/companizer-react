
export const fieldsConfig = {
  loan_id: { label: 'Loan ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  lender: { label: 'Lender', type: 'text', faker: 'company.name' },
  principal_amount: { label: 'Principal', type: 'number', faker: 'finance.amount' },

  interest_rate: { label: 'Interest Rate', type: 'number', faker: 'datatype.float' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  type: { label: 'Type', type: 'select', options: [{ id: 'term', label: 'Term Loan' }, { id: 'revolver', label: 'Revolver' }, { id: 'line_of_credit', label: 'Line of Credit' }], faker: 'random.arrayElement' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'paid_off', label: 'Paid Off' }, { id: 'defaulted', label: 'Defaulted' }], faker: 'random.arrayElement' },
  collateral: { label: 'Collateral', type: 'text', faker: 'lorem.sentence' },
  outstanding_balance: { label: 'Outstanding Balance', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Loan Agreements';
export const collectionName = 'loan_agreements';
