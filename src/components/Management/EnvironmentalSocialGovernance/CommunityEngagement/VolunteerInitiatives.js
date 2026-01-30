
export const fieldsConfig = {
  initiative_id: { label: 'Initiative ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.words' },
  date_range: { label: 'Date Range', type: 'text', faker: 'date.recent' },

  total_hours_contributed: { label: 'Total Hours', type: 'number', faker: 'datatype.number' },
  employee_participation_count: { label: 'Employee Count', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tag: { label: 'Tag', type: 'select', options: [{ id: 'local', label: 'Local' }, { id: 'international', label: 'International' }], faker: 'random.arrayElement' },

  // Extras
  cause: { label: 'Cause', type: 'text', faker: 'lorem.word' }, // Housing, Hunger, etc.
  organizer_id: { label: 'Organizer ID', type: 'text', faker: 'datatype.uuid' },
  feedback_summary: { label: 'Feedback Summary', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  photos_link: { label: 'Photos Link', type: 'text', faker: 'internet.url' },
  cost_to_company: { label: 'Cost to Company', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Volunteer Initiatives';
export const collectionName = 'volunteer_initiatives_esg';
