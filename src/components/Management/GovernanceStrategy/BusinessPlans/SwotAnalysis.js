
export const fieldsConfig = {

  swot_id: { label: 'SWOT ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.words' },
  date: { label: 'Date', type: 'date', faker: 'date.recent' },

  strengths: { label: 'Strengths', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  weaknesses: { label: 'Weaknesses', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  opportunities: { label: 'Opportunities', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  threats: { label: 'Threats', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  analyst: { label: 'Analyst', type: 'text', faker: 'name.fullName' },
  related_product_id: { label: 'Related Product ID', type: 'text', faker: 'datatype.uuid' },
  conclusion: { label: 'Conclusion', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Swot Analysis';
export const collectionName = 'swot_analysis';