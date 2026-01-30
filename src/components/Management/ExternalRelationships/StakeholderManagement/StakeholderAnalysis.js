
export const fieldsConfig = {
  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  stakeholder_id: { label: 'Stakeholder ID', type: 'text', faker: 'datatype.uuid' }, // Can be Partner, Vendor, or Generic Stakeholder
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  influence_level: { label: 'Influence Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  interest_level: { label: 'Interest Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },

  attitude: { label: 'Attitude', type: 'select', options: [{ id: 'supportive', label: 'Supportive' }, { id: 'neutral', label: 'Neutral' }, { id: 'resistant', label: 'Resistant' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  key_concerns: { label: 'Key Concerns', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  expectations: { label: 'Expectations', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  engagement_strategy: { label: 'Engagement Strategy', type: 'text', faker: 'lorem.sentence' },
  analyst: { label: 'Analyst', type: 'text', faker: 'name.fullName' },
  analysis_date: { label: 'Analysis Date', type: 'date', faker: 'date.recent' },
  review_frequency: { label: 'Review Frequency', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'Stakeholder Analysis';
export const collectionName = 'stakeholder_analysis';
