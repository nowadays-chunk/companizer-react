
export const fieldsConfig = {

  discount_id: { label: 'Discount ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' }, // Can apply to category too, simplified here
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  discount_code: { label: 'Discount Code', type: 'text', faker: 'random.alphaNumeric' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  discount_type: { label: 'Discount Type', type: 'select', options: [{ id: 'percentage', label: 'Percentage' }, { id: 'fixed', label: 'Fixed Amount' }], faker: 'random.arrayElement' },
  value: { label: 'Value', type: 'number', faker: 'datatype.float' },

  // Mandated
  // Extras
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },
  min_purchase_amount: { label: 'Min Purchase Amount', type: 'number', faker: 'finance.amount' },
  max_usage: { label: 'Max Usage', type: 'number', faker: 'datatype.number' },
  usage_count: { label: 'Usage Count', type: 'number', faker: 'datatype.number' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Discounts';
export const collectionName = 'discounts_ops';
