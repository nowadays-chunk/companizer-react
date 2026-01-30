
export const fieldsConfig = {
  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  opportunity_id: { label: 'Opportunity ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  outcome: { label: 'Outcome', type: 'select', options: [{ id: 'won', label: 'Won' }, { id: 'lost', label: 'Lost' }], faker: 'random.arrayElement' },
  reason_code: { label: 'Reason Code', type: 'select', options: [{ id: 'price', label: 'Price' }, { id: 'feature_gap', label: 'Feature Gap' }, { id: 'competitor', label: 'Competitor' }, { id: 'relationship', label: 'Relationship' }], faker: 'random.arrayElement' },

  competitor_name: { label: 'Competitor Name', type: 'text', faker: 'company.name' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  decision_maker_feedback: { label: 'Feedback', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  analysis_date: { label: 'Analysis Date', type: 'date', faker: 'date.recent' },
  analyst_id: { label: 'Analyst ID', type: 'text', faker: 'datatype.uuid' },
  deal_size: { label: 'Deal Size', type: 'number', faker: 'finance.amount' },
  sales_cycle_days: { label: 'Sales Cycle (Days)', type: 'number', faker: 'datatype.number' },
  lessons_learned: { label: 'Lessons Learned', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Win Loss Analysis';
export const collectionName = 'win_loss_analysis';
