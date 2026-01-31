
export const fieldsConfig = {

  feedback_id: { label: 'Feedback ID', type: 'text', faker: 'datatype.uuid' },
  stakeholder_id: { label: 'Stakeholder ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  feedback_type: { label: 'Feedback Type', type: 'select', options: [{ id: 'complaint', label: 'Complaint' }, { id: 'suggestion', label: 'Suggestion' }, { id: 'compliment', label: 'Compliment' }], faker: 'random.arrayElement' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },
  date_received: { label: 'Date Received', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'normal', label: 'Normal' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  status: { label: 'Status', type: 'select', options: [{ id: 'new', label: 'New' }, { id: 'addressed', label: 'Addressed' }, { id: 'ignored', label: 'Ignored' }], faker: 'random.arrayElement' },
  action_taken: { label: 'Action Taken', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  assigned_to: { label: 'Assigned To', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Stakeholder Feedback';
export const collectionName = 'stakeholder_feedback';
