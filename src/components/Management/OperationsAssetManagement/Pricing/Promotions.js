
export const fieldsConfig = {
  promotion_id: { label: 'Promotion ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  promo_name: { label: 'Promo Name', type: 'text', faker: 'commerce.productAdjective' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  type: { label: 'Type', type: 'select', options: [{ id: 'bogo', label: 'BOGO' }, { id: 'discount', label: 'Discount' }, { id: 'bundle', label: 'Bundle' }], faker: 'random.arrayElement' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  target_audience: { label: 'Target Audience', type: 'text', faker: 'lorem.word' },
  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'active', label: 'Active' }, { id: 'ended', label: 'Ended' }], faker: 'random.arrayElement' }
};

export const entityName = 'Promotions';
export const collectionName = 'promotions_ops';
