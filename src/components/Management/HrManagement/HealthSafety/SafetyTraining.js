
export const fieldsConfig = {

  training_id: { label: 'Training ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  training_name: { label: 'Training Name', type: 'text', faker: 'lorem.words' }, // e.g. Fire Safety
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  frequency: { label: 'Frequency', type: 'text', faker: 'lorem.word' }, // Annual

  // Mandated
  // Extras
  instructor: { label: 'Instructor', type: 'text', faker: 'name.fullName' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  duration_hours: { label: 'Duration (Hours)', type: 'number', faker: 'datatype.float' },
  is_mandatory: { label: 'Is Mandatory', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Safety Training';
export const collectionName = 'safety_training_hr';
