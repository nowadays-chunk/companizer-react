import { modules } from './Modules/InventoryAging';
export { modules };

export const fieldsConfig = {

  aging_id: { label: 'Aging ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
  age_days: { label: 'Age (Days)', type: 'number', faker: 'datatype.number' },

  aging_bucket: { label: 'Aging Bucket', type: 'select', options: [{ id: '0-30', label: '0-30 Days' }, { id: '31-60', label: '31-60 Days' }, { id: '61-90', label: '61-90 Days' }, { id: '90+', label: '90+ Days' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  total_value: { label: 'Total Value', type: 'number', faker: 'finance.amount' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  batch_number: { label: 'Batch Number', type: 'text', faker: 'random.alphaNumeric' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Inventory Aging';
export const collectionName = 'inventory_aging';
