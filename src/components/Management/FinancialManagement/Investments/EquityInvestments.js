import { modules } from './Modules/EquityInvestments';

export const fieldsConfig = {

  investment_id: { label: 'Investment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  company_name: { label: 'Company Name', type: 'text', faker: 'company.name' },
  symbol: { label: 'Symbol', type: 'text', faker: 'finance.currencyCode' }, // Close enough

  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
  avg_cost: { label: 'Avg Cost', type: 'number', faker: 'finance.amount' },

  current_price: { label: 'Current Price', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  market_value: { label: 'Market Value', type: 'number', faker: 'finance.amount' },
  unrealized_gain_loss: { label: 'Unrealized Gain/Loss', type: 'number', faker: 'finance.amount' },
  purchase_date: { label: 'Purchase Date', type: 'date', faker: 'date.past' },
  dividend_yield: { label: 'Dividend Yield', type: 'number', faker: 'datatype.float' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Equity Investments';
export const collectionName = 'equity_investments';

export { modules };