
export const fieldsConfig = {
  history_id: { label: 'History ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  employer: { label: 'Previous Employer', type: 'text', faker: 'company.name' },
  job_title: { label: 'Job Title', type: 'text', faker: 'name.jobTitle' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  responsibilities: { label: 'Responsibilities', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  reason_for_leaving: { label: 'Reason for Leaving', type: 'text', faker: 'lorem.sentence' },
  reference_name: { label: 'Reference Name', type: 'text', faker: 'name.fullName' },
  reference_contact: { label: 'Reference Contact', type: 'text', faker: 'phone.number' }
};

export const entityName = 'Employment History';
export const collectionName = 'employment_history';
