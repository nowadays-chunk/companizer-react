
export const fieldsConfig = {

  survey_id: { label: 'Survey ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  survey_date: { label: 'Survey Date', type: 'date', faker: 'date.recent' },
  satisfaction_score: { label: 'Satisfaction Score', type: 'number', faker: 'datatype.float' }, // 0-10

  // Mandated
  // Extras
  nps_score: { label: 'NPS Score', type: 'number', faker: 'datatype.number' }, // 0-10
  comments: { label: 'Comments', type: 'text', multiline: true, rows: 3, faker: 'lorem.sentence' },
  survey_channel: { label: 'Channel', type: 'select', options: [{ id: 'email', label: 'Email' }, { id: 'sms', label: 'SMS' }, { id: 'web', label: 'Web' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Customer Surveys';
export const collectionName = 'customer_surveys';
