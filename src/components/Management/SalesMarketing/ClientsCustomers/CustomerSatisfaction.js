
export const fieldsConfig = {
  csat_id: { label: 'CSAT ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  score: { label: 'Score', type: 'number', faker: 'datatype.number' }, // 1-5 or 1-10
  survey_date: { label: 'Survey Date', type: 'date', faker: 'date.recent' },

  comments: { label: 'Comments', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  interaction_id: { label: 'Interaction ID', type: 'text', faker: 'datatype.uuid' },
  agent_id: { label: 'Agent ID', type: 'text', faker: 'datatype.uuid' },
  sentiment: { label: 'Sentiment', type: 'select', options: [{ id: 'positive', label: 'Positive' }, { id: 'neutral', label: 'Neutral' }, { id: 'negative', label: 'Negative' }], faker: 'random.arrayElement' },
  is_resolved: { label: 'Is Resolved', type: 'checkbox', faker: 'datatype.boolean' },
  response_time: { label: 'Response Time', type: 'text', faker: 'lorem.words' },
  contact_method: { label: 'Contact Method', type: 'select', options: [{ id: 'email', label: 'Email' }, { id: 'phone', label: 'Phone' }], faker: 'random.arrayElement' }
};

export const entityName = 'Customer Satisfaction';
export const collectionName = 'customer_satisfaction';
