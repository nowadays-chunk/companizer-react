
export const fieldsConfig = {

  promotion_id: { label: 'Promotion ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  promo_name: { label: 'Promo Name', type: 'text', faker: 'commerce.productAdjective' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  type: { label: 'Type', type: 'select', options: [{ id: 'bogo', label: 'BOGO' }, { id: 'discount', label: 'Discount' }, { id: 'bundle', label: 'Bundle' }], faker: 'random.arrayElement' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  target_audience: { label: 'Target Audience', type: 'text', faker: 'lorem.word' },
  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Promotions';
export const collectionName = 'promotions_ops';
