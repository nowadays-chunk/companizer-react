import { modules } from './Modules/InterestPayments';

export const fieldsConfig = {

  payment_id: { label: 'Payment ID', type: 'text', faker: 'datatype.uuid' },
  loan_id: { label: 'Loan ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  payment_date: { label: 'Payment Date', type: 'date', faker: 'date.recent' },
  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },

  rate_applied: { label: 'Rate Applied', type: 'number', faker: 'datatype.float' },

  // Mandated
  // Extras
  period_start: { label: 'Period Start', type: 'date', faker: 'date.past' },
  period_end: { label: 'Period End', type: 'date', faker: 'date.past' },
  recipient: { label: 'Recipient', type: 'text', faker: 'company.name' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Interest Payments';
export const collectionName = 'interest_payments';

export { modules };