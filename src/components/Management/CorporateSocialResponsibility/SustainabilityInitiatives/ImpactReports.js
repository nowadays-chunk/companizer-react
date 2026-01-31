
export const fieldsConfig = {

  report_id: { label: 'Report ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.words' }, // Annual Sustainability Report
  year: { label: 'Year', type: 'number', faker: 'date.past' },

  // Mandated
  // Extras
  file_url: { label: 'File URL', type: 'text', faker: 'internet.url' },
  prepared_by: { label: 'Prepared By', type: 'text', faker: 'name.fullName' },
  key_highlights: { label: 'Highlights', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  published_date: { label: 'Published Date', type: 'date', faker: 'date.recent' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Impact Reports';
export const collectionName = 'impact_reports';
