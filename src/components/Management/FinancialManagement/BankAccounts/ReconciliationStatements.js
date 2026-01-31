
export const fieldsConfig = {

  reconciliation_id: { label: 'Reconciliation ID', type: 'text', faker: 'datatype.uuid' },
  account_id: { label: 'Account ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  statement_date: { label: 'Statement Date', type: 'date', faker: 'date.recent' },
  bank_balance: { label: 'Bank Balance', type: 'number', faker: 'finance.amount' },
  book_balance: { label: 'Book Balance', type: 'number', faker: 'finance.amount' },

  difference: { label: 'Difference', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'balanced', label: 'Balanced' }, { id: 'discrepancy', label: 'Discrepancy' }, { id: 'pending', label: 'Pending' }], faker: 'random.arrayElement' },
  reconciled_by: { label: 'Reconciled By', type: 'text', faker: 'name.fullName' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Reconciliation Statements';
export const collectionName = 'reconciliation_statements';