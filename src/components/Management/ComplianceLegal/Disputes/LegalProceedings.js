
export const fieldsConfig = {
  proceeding_id: { label: 'Proceeding ID', type: 'text', faker: 'datatype.uuid' },
  case_id: { label: 'Case ID', type: 'text', faker: 'datatype.uuid' }, // Link to LegalCases
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  proceeding_type: { label: 'Type', type: 'text', faker: 'lorem.word' }, // Hearing, Deposition
  date: { label: 'Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  court: { label: 'Court', type: 'text', faker: 'address.city' },
  judge: { label: 'Judge', type: 'text', faker: 'name.fullName' },
  attendees: { label: 'Attendees', type: 'text', faker: 'name.fullName' }, // Comma separated
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  next_step: { label: 'Next Step', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Legal Proceedings';
export const collectionName = 'legal_proceedings';