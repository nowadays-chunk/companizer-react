
export const fieldsConfig = {

  resolution_id: { label: 'Resolution ID', type: 'text', faker: 'datatype.uuid' },
  ticket_id: { label: 'Ticket ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  resolution_date: { label: 'Resolution Date', type: 'datetime', faker: 'date.recent' },
  resolved_by: { label: 'Resolved By', type: 'text', faker: 'name.fullName' },

  solution: { label: 'Solution', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  customer_confirmed: { label: 'Customer Confirmed', type: 'checkbox', faker: 'datatype.boolean' },
  time_spent_minutes: { label: 'Time Spent (Min)', type: 'number', faker: 'datatype.number' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Ticket Resolution';
export const collectionName = 'ticket_resolution';
