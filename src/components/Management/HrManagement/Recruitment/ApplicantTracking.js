
export const fieldsConfig = {

  applicant_id: { label: 'Applicant ID', type: 'text', faker: 'datatype.uuid' },
  job_id: { label: 'Job ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  first_name: { label: 'First Name', type: 'text', faker: 'name.firstName' },
  last_name: { label: 'Last Name', type: 'text', faker: 'name.lastName' },
  email: { label: 'Email', type: 'email', faker: 'internet.email' },

  stage: { label: 'Stage', type: 'select', options: [{ id: 'applied', label: 'Applied' }, { id: 'screening', label: 'Screening' }, { id: 'interview', label: 'Interview' }, { id: 'offer', label: 'Offer' }, { id: 'hired', label: 'Hired' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  source: { label: 'Source', type: 'text', faker: 'lorem.word' }, // LinkedIn, Referral
  application_date: { label: 'Application Date', type: 'date', faker: 'date.past' },
  resume_url: { label: 'Resume URL', type: 'text', faker: 'internet.url' },
  phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Applicant Tracking';
export const collectionName = 'applicant_tracking';
