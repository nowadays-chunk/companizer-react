
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
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  buyer: { label: 'Buyer', type: 'text', faker: 'company.name' },
  authorized_by: { label: 'Authorized By', type: 'text', faker: 'name.fullName' },
  reason: { label: 'Reason', type: 'text', faker: 'lorem.sentence' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Asset Disposal';
export const collectionName = 'asset_disposal_ops';
