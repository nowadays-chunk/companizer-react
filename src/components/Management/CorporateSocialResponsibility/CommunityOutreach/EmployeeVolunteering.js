
export const fieldsConfig = {

  event_id: { label: 'Event ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  event_name: { label: 'Event Name', type: 'text', faker: 'lorem.words' },
  date: { label: 'Date', type: 'date', faker: 'date.future' },

  volunteers_count: { label: 'Volunteers', type: 'number', faker: 'datatype.number' },
  hours_contributed: { label: 'Hours', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  organization: { label: 'Organization', type: 'text', faker: 'company.name' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Employee Volunteering';
export const collectionName = 'employee_volunteering';
