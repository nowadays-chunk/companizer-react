
export const fieldsConfig = {
  schedule_id: { label: 'Schedule ID', type: 'text', faker: 'datatype.uuid' },
  loan_id: { label: 'Loan ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  maturity_date: { label: 'Maturity Date', type: 'date', faker: 'date.future' },
  principal_amount: { label: 'Principal Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  interest_amount: { label: 'Interest Amount', type: 'number', faker: 'finance.amount' },
  total_payment: { label: 'Total Payment', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'paid', label: 'Paid' }, { id: 'pending', label: 'Pending' }, { id: 'overdue', label: 'Overdue' }], faker: 'random.arrayElement' },
  payment_method: { label: 'Payment Method', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'Debt Maturity Schedules';
export const collectionName = 'debt_maturity_schedules';
