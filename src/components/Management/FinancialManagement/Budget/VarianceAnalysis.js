
export const fieldsConfig = {
  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  budget_id: { label: 'Budget ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period: { label: 'Period', type: 'text', faker: 'lorem.word' },
  actual_amount: { label: 'Actual Amount', type: 'number', faker: 'finance.amount' },
  budgeted_amount: { label: 'Budgeted Amount', type: 'number', faker: 'finance.amount' },

  variance_amount: { label: 'Variance Amount', type: 'number', faker: 'finance.amount' },
  variance_percentage: { label: 'Variance (%)', type: 'number', faker: 'datatype.float' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  is_favorable: { label: 'Is Favorable', type: 'checkbox', faker: 'datatype.boolean' },
  explanation: { label: 'Explanation', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  corrective_action: { label: 'Corrective Action', type: 'text', faker: 'lorem.sentence' },
  analyzed_by: { label: 'Analyzed By', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Variance Analysis';
export const collectionName = 'variance_analysis';
