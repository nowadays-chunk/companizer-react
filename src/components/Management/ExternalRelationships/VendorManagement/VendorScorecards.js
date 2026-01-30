
export const fieldsConfig = {
  scorecard_id: { label: 'Scorecard ID', type: 'text', faker: 'datatype.uuid' },
  vendor_id: { label: 'Vendor ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period: { label: 'Period', type: 'text', faker: 'lorem.word' }, // Q1 2024
  average_score: { label: 'Average Score', type: 'number', faker: 'datatype.float' },

  grade: { label: 'Grade', type: 'select', options: [{ id: 'A', label: 'A' }, { id: 'B', label: 'B' }, { id: 'C', label: 'C' }, { id: 'D', label: 'D' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  quality_rating: { label: 'Quality Rating', type: 'number', faker: 'datatype.number' },
  timeliness_rating: { label: 'Timeliness Rating', type: 'number', faker: 'datatype.number' },
  cost_rating: { label: 'Cost Rating', type: 'number', faker: 'datatype.number' },
  innovation_rating: { label: 'Innovation Rating', type: 'number', faker: 'datatype.number' },
  generated_date: { label: 'Generated Date', type: 'date', faker: 'date.recent' },
  review_meeting_date: { label: 'Review Meeting Date', type: 'date', faker: 'date.future' },
  comments: { label: 'Comments', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Vendor Scorecards';
export const collectionName = 'vendor_scorecards';
