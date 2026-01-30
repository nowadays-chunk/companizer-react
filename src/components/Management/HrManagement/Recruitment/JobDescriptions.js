
export const fieldsConfig = {
  job_id: { label: 'Job ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Job Title', type: 'text', faker: 'name.jobTitle' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  requirements: { label: 'Requirements', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  salary_range: { label: 'Salary Range', type: 'text', faker: 'lorem.word' }, // e.g. 50k-70k
  employment_type: { label: 'Type', type: 'select', options: [{ id: 'full_time', label: 'Full Time' }, { id: 'contract', label: 'Contract' }], faker: 'random.arrayElement' },
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }, { id: 'draft', label: 'Draft' }], faker: 'random.arrayElement' },
  location: { label: 'Location', type: 'text', faker: 'address.city' }
};

export const entityName = 'Job Descriptions';
export const collectionName = 'job_descriptions';
