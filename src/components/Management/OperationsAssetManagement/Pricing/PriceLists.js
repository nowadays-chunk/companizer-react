
export const fieldsConfig = {
  list_id: { label: 'List ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  list_name: { label: 'List Name', type: 'text', faker: 'commerce.productName' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'unit_price', type: 'number', faker: 'finance.amount' }, // Just a placeholder, main pricing is usually per item

  // Extras
  customer_segment: { label: 'Customer Segment', type: 'select', options: [{ id: 'retail', label: 'Retail' }, { id: 'wholesale', label: 'Wholesale' }, { id: 'distributor', label: 'Distributor' }], faker: 'random.arrayElement' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  region: { label: 'Region', type: 'text', faker: 'address.country' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Price Lists (Ops)';
export const collectionName = 'price_lists_ops';
