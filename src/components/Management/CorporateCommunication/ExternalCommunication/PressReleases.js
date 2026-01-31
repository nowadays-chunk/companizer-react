
export const fieldsConfig = {

  release_id: { label: 'Release ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  headline: { label: 'Headline', type: 'text', faker: 'lorem.sentence' },
  pub_date: { label: 'Publish Date', type: 'date', faker: 'date.future' },

  content: { label: 'Content', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'published', label: 'Published' }, { id: 'scheduled', label: 'Scheduled' }], faker: 'random.arrayElement' },
  author: { label: 'Author', type: 'text', faker: 'name.fullName' },
  media_kit_url: { label: 'Media Kit', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Press Releases';
export const collectionName = 'press_releases';
