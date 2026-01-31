
export const fieldsConfig = {

  scoring_id: { label: 'Scoring ID', type: 'text', faker: 'datatype.uuid' },
  lead_id: { label: 'Lead ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  total_score: { label: 'Total Score', type: 'number', faker: 'datatype.number' },
  score_category: { label: 'Score Category', type: 'select', options: [{ id: 'hot', label: 'Hot' }, { id: 'warm', label: 'Warm' }, { id: 'cold', label: 'Cold' }], faker: 'random.arrayElement' },

  last_updated: { label: 'Last Updated', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  demographic_score: { label: 'Demographic Score', type: 'number', faker: 'datatype.number' },
  behavioral_score: { label: 'Behavioral Score', type: 'number', faker: 'datatype.number' },
  firmographic_score: { label: 'Firmographic Score', type: 'number', faker: 'datatype.number' },
  budget_score: { label: 'Budget Score', type: 'number', faker: 'datatype.number' },
  authority_score: { label: 'Authority Score', type: 'number', faker: 'datatype.number' },
  need_score: { label: 'Need Score', type: 'number', faker: 'datatype.number' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Lead Scoring';
export const collectionName = 'lead_scoring';