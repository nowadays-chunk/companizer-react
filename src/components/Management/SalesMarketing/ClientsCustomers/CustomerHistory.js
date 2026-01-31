
export const fieldsConfig = {

  history_id: { label: 'History ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  event_type: { label: 'Event Type', type: 'select', options: [{ id: 'purchase', label: 'Purchase' }, { id: 'complaint', label: 'Complaint' }, { id: 'visit', label: 'Visit' }, { id: 'email', label: 'Email' }], faker: 'random.arrayElement' },
  event_date: { label: 'Event Date', type: 'date', faker: 'date.past' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  // Mandated
  // Transaction value?

  tags: { label: 'Tags', type: 'select', options: [{ id: 'positive', label: 'Positive' }, { id: 'negative', label: 'Negative' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  related_order_id: { label: 'Related Order ID', type: 'text', faker: 'datatype.uuid' },
  agent_id: { label: 'Agent ID', type: 'text', faker: 'datatype.uuid' },
  duration_minutes: { label: 'Duration (Min)', type: 'number', faker: 'datatype.number' },
  channel: { label: 'Channel', type: 'text', faker: 'internet.domainWord' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.word' },
  touchpoint_score: { label: 'Touchpoint Score', type: 'number', faker: 'datatype.number' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Customer History';
export const collectionName = 'customer_history';