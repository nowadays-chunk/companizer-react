
export const fieldsConfig = {
  type_id: { label: 'Type ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  type_name: { label: 'Type Name', type: 'text', faker: 'lorem.words' }, // e.g. Permanent Full Time
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  duration_months: { label: 'Duration (Months)', type: 'number', faker: 'datatype.number' },
  benefits_included: { label: 'Benefits Included', type: 'text', faker: 'lorem.sentence' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Contract Types';
export const collectionName = 'contract_types';
