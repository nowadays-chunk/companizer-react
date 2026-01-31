
export const fieldsConfig = {

  statement_id: { label: 'Statement ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  topic: { label: 'Topic', type: 'text', faker: 'lorem.words' },
  spokesperson: { label: 'Spokesperson', type: 'text', faker: 'name.fullName' },

  statement_text: { label: 'Statement', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  date_issued: { label: 'Date Issued', type: 'date', faker: 'date.recent' },
  context: { label: 'Context', type: 'text', faker: 'lorem.sentence' },
  url_link: { label: 'Link', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Public Statements';
export const collectionName = 'public_statements';
