
export const fieldsConfig = {
  communication_id: { label: 'Communication ID', type: 'text', faker: 'datatype.uuid' },
  stakeholder_id: { label: 'Stakeholder ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  date: { label: 'Date', type: 'date', faker: 'date.recent' },
  method: { label: 'Method', type: 'select', options: [{ id: 'email', label: 'Email' }, { id: 'meeting', label: 'Meeting' }, { id: 'report', label: 'Report' }], faker: 'random.arrayElement' },

  summary: { label: 'Summary', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  participants: { label: 'Participants', type: 'text', faker: 'name.fullName' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.sentence' },
  next_steps: { label: 'Next Steps', type: 'text', faker: 'lorem.sentence' },
  attachments_url: { label: 'Attachments URL', type: 'text', faker: 'internet.url' },
  sentiment: { label: 'Sentiment', type: 'select', options: [{ id: 'positive', label: 'Positive' }, { id: 'neutral', label: 'Neutral' }, { id: 'negative', label: 'Negative' }], faker: 'random.arrayElement' }
};

export const entityName = 'Stakeholder Communication';
export const collectionName = 'stakeholder_communication';
