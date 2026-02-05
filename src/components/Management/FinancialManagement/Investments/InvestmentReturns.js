import { modules } from './Modules/InvestmentReturns';

export const fieldsConfig = {

  return_id: { label: 'Return ID', type: 'text', faker: 'datatype.uuid' },
  investment_id: { label: 'Investment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period_start: { label: 'Period Start', type: 'date', faker: 'date.past' },
  period_end: { label: 'Period End', type: 'date', faker: 'date.past' },

  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },
  type: { label: 'Type', type: 'select', options: [{ id: 'dividend', label: 'Dividend' }, { id: 'interest', label: 'Interest' }, { id: 'capital_gain', label: 'Capital Gain' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  roi_percentage: { label: 'ROI (%)', type: 'number', faker: 'datatype.float' },
  date_received: { label: 'Date Received', type: 'date', faker: 'date.recent' },
  tax_withheld: { label: 'Tax Withheld', type: 'number', faker: 'finance.amount' },
  type: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Investment Returns';
export const collectionName = 'investment_returns';

export { modules };