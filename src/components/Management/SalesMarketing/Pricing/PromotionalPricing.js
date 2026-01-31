
export const fieldsConfig = {

  promo_id: { label: 'Promo ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  promo_name: { label: 'Promo Name', type: 'text', faker: 'commerce.productName' },
  discount_amount: { label: 'Discount Amount', type: 'number', faker: 'finance.amount' },

  start_time: { label: 'Start Time', type: 'date', faker: 'date.future' },
  end_time: { label: 'End Time', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'scheduled', label: 'Scheduled' }, { id: 'active', label: 'Active' }, { id: 'ended', label: 'Ended' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  promo_code: { label: 'Promo Code', type: 'text', faker: 'random.alphaNumeric' },
  usage_limit: { label: 'Usage Limit', type: 'number', faker: 'datatype.number' },
  usage_count: { label: 'Usage Count', type: 'number', faker: 'datatype.number' },
  conditions: { label: 'Conditions', type: 'text', faker: 'lorem.sentence' },
  marketing_channel: { label: 'Marketing Channel', type: 'text', faker: 'internet.domainWord' },
  type: 'text', faker: 'internet.url',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Promotional Pricing';
export const collectionName = 'promotional_pricing';