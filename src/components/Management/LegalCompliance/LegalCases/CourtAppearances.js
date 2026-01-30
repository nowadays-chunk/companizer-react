
export const fieldsConfig = {
  appearance_id: { label: 'Appearance ID', type: 'text', faker: 'datatype.uuid' },
  case_id: { label: 'Case ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  date: { label: 'Appearance Date', type: 'date', faker: 'date.future' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },

  judge: { label: 'Judge', type: 'text', faker: 'name.fullName' },
  purpose: { label: 'Purpose', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  attendee_attorney: { label: 'Attendee Attorney', type: 'text', faker: 'name.fullName' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.sentence' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  next_appearance_date: { label: 'Next Appearance Date', type: 'date', faker: 'date.future' },
  is_virtual: { label: 'Is Virtual', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Court Appearances';
export const collectionName = 'court_appearances';
