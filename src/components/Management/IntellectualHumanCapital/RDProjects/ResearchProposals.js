
export const fieldsConfig = {
  proposal_id: { label: 'Proposal ID', type: 'text', faker: 'datatype.uuid' },
  submitter_id: { label: 'Submitter ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  research_area: { label: 'Research Area', type: 'text', faker: 'commerce.department' },

  submission_date: { label: 'Submission Date', type: 'date', faker: 'date.recent' },
  budget_requested: { label: 'Budget Requested', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  abstract: { label: 'Abstract', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  duration_months: { label: 'Duration (Months)', type: 'number', faker: 'datatype.number' },
  collaborators: { label: 'Collaborators', type: 'text', faker: 'name.fullName' },
  review_feedback: { label: 'Review Feedback', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Research Proposals';
export const collectionName = 'research_proposals';
