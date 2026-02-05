import { modules } from './Modules/FiscalPeriods';

export const fieldsConfig = {

  period_id: { label: 'Period ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  fiscal_year: { label: 'Fiscal Year', type: 'number', faker: 'date.past' },
  period_number: { label: 'Period Number', type: 'number', faker: 'datatype.number' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }, { id: 'locked', label: 'Locked' }], faker: 'random.arrayElement' },
  is_adjustment_period: { label: 'Is Adjustment', type: 'checkbox', faker: 'datatype.boolean' },
  closed_by: { label: 'Closed By', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Fiscal Periods';
export const collectionName = 'fiscal_periods';

export { modules };
