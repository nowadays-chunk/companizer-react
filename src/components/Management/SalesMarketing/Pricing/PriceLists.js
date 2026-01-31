
export const fieldsConfig = {

  list_id: { label: 'List ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  list_name: { label: 'List Name', type: 'text', faker: 'commerce.productAdjective' }, // e.g. "Retail 2024"
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.recent' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Base price factor?

  tags: { label: 'Tags', type: 'select', options: [{ id: 'retail', label: 'Retail' }, { id: 'wholesale', label: 'Wholesale' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  region: { label: 'Region', type: 'text', faker: 'address.country' },
  channel: { label: 'Channel', type: 'text', faker: 'internet.domainWord' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  markup_percentage: { label: 'Markup (%)', type: 'number', faker: 'datatype.float' },
  type: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Price Lists';
export const collectionName = 'price_lists';
