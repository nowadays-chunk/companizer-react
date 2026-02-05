import { modules } from './Modules/DebtMaturitySchedules';

export const fieldsConfig = {

  schedule_id: { label: 'Schedule ID', type: 'text', faker: 'datatype.uuid' },
  loan_id: { label: 'Loan ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  maturity_date: { label: 'Maturity Date', type: 'date', faker: 'date.future' },
  principal_amount: { label: 'Principal Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  interest_amount: { label: 'Interest Amount', type: 'number', faker: 'finance.amount' },
  total_payment: { label: 'Total Payment', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'paid', label: 'Paid' }, { id: 'pending', label: 'Pending' }, { id: 'overdue', label: 'Overdue' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Debt Maturity Schedules';
export const collectionName = 'debt_maturity_schedules';

export { modules };
