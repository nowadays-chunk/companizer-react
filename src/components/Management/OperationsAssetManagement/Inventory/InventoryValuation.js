import { modules } from './Modules/InventoryValuation';
export { modules };

export const fieldsConfig = {

  valuation_id: { label: 'Valuation ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  valuation_date: { label: 'Valuation Date', type: 'date', faker: 'date.recent' },
  method: { label: 'Method', type: 'select', options: [{ id: 'fifo', label: 'FIFO' }, { id: 'lifo', label: 'LIFO' }, { id: 'weighted_avg', label: 'Weighted Avg' }], faker: 'random.arrayElement' },

  quantity_on_hand: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
  total_value: { label: 'Total Value', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },
  adjusted_value: { label: 'Adjusted Value', type: 'number', faker: 'finance.amount' },
  adjustment_reason: { label: 'Adjustment Reason', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Inventory Valuation';
export const collectionName = 'inventory_valuation';
