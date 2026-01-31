
export const fieldsConfig = {

  stock_id: { label: 'Stock ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  location_id: { label: 'Location ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  quantity_available: { label: 'Quantity Available', type: 'number', faker: 'datatype.number' },
  quantity_reserved: { label: 'Quantity Reserved', type: 'number', faker: 'datatype.number' },
  quantity_total: { label: 'Quantity Total', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  aisle: { label: 'Aisle', type: 'text', faker: 'random.alphaNumeric' },
  bin: { label: 'Bin', type: 'text', faker: 'random.alphaNumeric' },
  last_counted_date: { label: 'Last Counted', type: 'date', faker: 'date.recent' },
  discrepancy_flag: { label: 'Discrepancy Flag', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Stock Levels';
export const collectionName = 'stock_levels';
