
export const fieldsConfig = {

  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  first_name: { label: 'First Name', type: 'text', faker: 'name.firstName' },
  last_name: { label: 'Last Name', type: 'text', faker: 'name.lastName' },

  email: { label: 'Email', type: 'email', faker: 'internet.email' },
  job_title: { label: 'Job Title', type: 'text', faker: 'name.jobTitle' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },

  // Mandated
  // Extras
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  manager_id: { label: 'Manager ID', type: 'text', faker: 'datatype.uuid' },
  employment_type: { label: 'Employment Type', type: 'select', options: [{ id: 'full_time', label: 'Full Time' }, { id: 'part_time', label: 'Part Time' }, { id: 'contract', label: 'Contract' }], faker: 'random.arrayElement' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'terminated', label: 'Terminated' }, { id: 'leave', label: 'On Leave' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Detailed Employee Records';
export const collectionName = 'detailed_employee_records';
