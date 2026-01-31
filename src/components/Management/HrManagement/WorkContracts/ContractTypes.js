
export const fieldsConfig = {

  type_id: { label: 'Type ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  type_name: { label: 'Type Name', type: 'text', faker: 'lorem.words' }, // e.g. Permanent Full Time
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  duration_months: { label: 'Duration (Months)', type: 'number', faker: 'datatype.number' },
  benefits_included: { label: 'Benefits Included', type: 'text', faker: 'lorem.sentence' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contract Types';
export const collectionName = 'contract_types';
