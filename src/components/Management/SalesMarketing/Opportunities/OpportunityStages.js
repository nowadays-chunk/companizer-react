
export const fieldsConfig = {
  stage_id: { label: 'Stage ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  stage_name: { label: 'Stage Name', type: 'text', faker: 'commerce.productAdjective' }, // e.g., "Qualification", "Proposal"
  probability_percentage: { label: 'Probability (%)', type: 'number', faker: 'datatype.number' },

  sort_order: { label: 'Sort Order', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  days_in_stage_avg: { label: 'Avg Days in Stage', type: 'number', faker: 'datatype.number' },
  requirements: { label: 'Requirements', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  color_code: { label: 'Color Code', type: 'text', faker: 'internet.color' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  is_won_stage: { label: 'Is Won Stage', type: 'checkbox', faker: 'datatype.boolean' },
  is_lost_stage: { label: 'Is Lost Stage', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Opportunity Stages';
export const collectionName = 'opportunity_stages';