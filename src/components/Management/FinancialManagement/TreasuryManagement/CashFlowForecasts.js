
import { modules } from './Modules/CashFlowForecasts';
export { modules };

export const fieldsConfig = {

  forecast_id: { label: 'Forecast ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  date: { label: 'Date', type: 'date', faker: 'date.future' },

  opening_balance: { label: 'Opening Balance', type: 'number', faker: 'finance.amount' },
  projected_inflow: { label: 'Projected Inflow', type: 'number', faker: 'finance.amount' },
  projected_outflow: { label: 'Projected Outflow', type: 'number', faker: 'finance.amount' },

  closing_balance: { label: 'Closing Balance', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  confidence_level: { label: 'Confidence', type: 'datatype.number', faker: 'datatype.number' }, // %
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  e: 'select', options: [{ id: 'base', label: 'Base Case' }, { id: 'best', label: 'Best Case' }, { id: 'worst', label: 'Worst Case' }], faker: 'random.arrayElement',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Cash Flow Forecasts';
export const collectionName = 'cash_flow_forecasts';
