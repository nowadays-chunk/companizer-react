
export const fieldsConfig = {

  program_id: { label: 'Program ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  program_name: { label: 'Program Name', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.future' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  trainer: { label: 'Trainer', type: 'text', faker: 'name.fullName' },
  capacity: { label: 'Capacity', type: 'number', faker: 'datatype.number' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'HR Training Programs';
export const collectionName = 'hr_training_programs';
