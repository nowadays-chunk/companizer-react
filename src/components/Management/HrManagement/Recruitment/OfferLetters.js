
export const fieldsConfig = {

  offer_id: { label: 'Offer ID', type: 'text', faker: 'datatype.uuid' },
  applicant_id: { label: 'Applicant ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  offer_date: { label: 'Offer Date', type: 'date', faker: 'date.recent' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.future' },

  salary: { label: 'Salary', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  job_title: { label: 'Job Title', type: 'text', faker: 'name.jobTitle' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
  status: { label: 'Status', type: 'select', options: [{ id: 'sent', label: 'Sent' }, { id: 'accepted', label: 'Accepted' }, { id: 'declined', label: 'Declined' }], faker: 'random.arrayElement' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Offer Letters';
export const collectionName = 'offer_letters';
