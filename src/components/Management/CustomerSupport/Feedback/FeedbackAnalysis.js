
export const fieldsConfig = {

  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period: { label: 'Period', type: 'text', faker: 'date.month' },
  total_feedback_count: { label: 'Total Feedback Count', type: 'number', faker: 'datatype.number' },
  average_score: { label: 'Average Score', type: 'number', faker: 'datatype.float' },

  top_keywords: { label: 'Top Keywords', type: 'text', faker: 'lorem.words' },

  // Mandated
  // Extras
  positive_count: { label: 'Positive Count', type: 'number', faker: 'datatype.number' },
  negative_count: { label: 'Negative Count', type: 'number', faker: 'datatype.number' },
  neutral_count: { label: 'Neutral Count', type: 'number', faker: 'datatype.number' },
  trend_description: { label: 'Trend Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  generated_date: { label: 'Generated Date', type: 'date', faker: 'date.recent' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' }, // Specific to a product
  region: { label: 'Region', type: 'text', faker: 'address.country' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Feedback Analysis';
export const collectionName = 'feedback_analysis';
