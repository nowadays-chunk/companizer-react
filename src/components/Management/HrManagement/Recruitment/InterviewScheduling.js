
export const fieldsConfig = {
  interview_id: { label: 'Interview ID', type: 'text', faker: 'datatype.uuid' },
  applicant_id: { label: 'Applicant ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  interview_type: { label: 'Type', type: 'select', options: [{ id: 'phone', label: 'Phone' }, { id: 'video', label: 'Video' }, { id: 'onsite', label: 'On-site' }], faker: 'random.arrayElement' },
  scheduled_date: { label: 'Scheduled Date', type: 'datetime', faker: 'date.future' },

  interviewers: { label: 'Interviewers', type: 'text', faker: 'name.fullName' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  location: { label: 'Location', type: 'text', faker: 'address.city' }, // or meeting link
  duration_minutes: { label: 'Duration (Min)', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'scheduled', label: 'Scheduled' }, { id: 'completed', label: 'Completed' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' },
  feedback_link: { label: 'Feedback Link', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Interview Scheduling';
export const collectionName = 'interview_scheduling';
