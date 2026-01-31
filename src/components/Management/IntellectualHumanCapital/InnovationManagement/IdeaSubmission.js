
export const fieldsConfig = {

  idea_id: { label: 'Idea ID', type: 'text', faker: 'datatype.uuid' },
  submitter_id: { label: 'Submitter ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  submission_date: { label: 'Submission Date', type: 'date', faker: 'date.recent' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'product', label: 'Product' }, { id: 'process', label: 'Process' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  potential_impact: { label: 'Potential Impact', type: 'text', faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'new', label: 'New' }, { id: 'under_review', label: 'Under Review' }, { id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  votes: { label: 'Votes', type: 'number', faker: 'datatype.number' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Idea Submission';
export const collectionName = 'idea_submission';
