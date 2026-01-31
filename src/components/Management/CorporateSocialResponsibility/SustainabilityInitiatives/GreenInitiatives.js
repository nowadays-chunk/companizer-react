
export const fieldsConfig = {

  initiative_id: { label: 'Initiative ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Name', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },

  // Mandated
  // Extras
  goal: { label: 'Goal', type: 'text', faker: 'lorem.sentence' }, // e.g. Reduce carbon by 10%
  progress_percentage: { label: 'Progress (%)', type: 'number', faker: 'datatype.number' },
  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Green Initiatives';
export const collectionName = 'green_initiatives';
