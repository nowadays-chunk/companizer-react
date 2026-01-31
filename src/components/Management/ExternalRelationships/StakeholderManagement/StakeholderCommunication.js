
export const fieldsConfig = {

  communication_id: { label: 'Communication ID', type: 'text', faker: 'datatype.uuid' },
  stakeholder_id: { label: 'Stakeholder ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  date: { label: 'Date', type: 'date', faker: 'date.recent' },
  method: { label: 'Method', type: 'select', options: [{ id: 'email', label: 'Email' }, { id: 'meeting', label: 'Meeting' }, { id: 'report', label: 'Report' }], faker: 'random.arrayElement' },

  summary: { label: 'Summary', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  participants: { label: 'Participants', type: 'text', faker: 'name.fullName' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.sentence' },
  next_steps: { label: 'Next Steps', type: 'text', faker: 'lorem.sentence' },
  attachments_url: { label: 'Attachments URL', type: 'text', faker: 'internet.url' },
  ype: 'select', options: [{ id: 'positive', label: 'Positive' }, { id: 'neutral', label: 'Neutral' }, { id: 'negative', label: 'Negative' }], faker: 'random.arrayElement',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Stakeholder Communication';
export const collectionName = 'stakeholder_communication';
