
export const fieldsConfig = {

  disposal_id: { label: 'Disposal ID', type: 'text', faker: 'datatype.uuid' },
  asset_id: { label: 'Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  disposal_date: { label: 'Disposal Date', type: 'date', faker: 'date.recent' },
  method: { label: 'Method', type: 'select', options: [{ id: 'sale', label: 'Sale' }, { id: 'scrape', label: 'Scrap' }, { id: 'donation', label: 'Donation' }], faker: 'random.arrayElement' },

  sale_price: { label: 'Sale Price', type: 'number', faker: 'finance.amount' },
  book_value_at_disposal: { label: 'Book Value', type: 'number', faker: 'finance.amount' },
  gain_loss: { label: 'Gain/Loss', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  buyer: { label: 'Buyer', type: 'text', faker: 'company.name' },
  authorized_by: { label: 'Authorized By', type: 'text', faker: 'name.fullName' },
  reason: { label: 'Reason', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Asset Disposal';
export const collectionName = 'asset_disposal_ops';
