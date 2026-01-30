
export const fieldsConfig = {
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  first_name: { label: 'First Name', type: 'text', faker: 'name.firstName' },
  last_name: { label: 'Last Name', type: 'text', faker: 'name.lastName' },
  email: { label: 'Email', type: 'email', faker: 'internet.email' },

  job_title: { label: 'Job Title', type: 'text', faker: 'name.jobTitle' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Hourly Rate', type: 'number', faker: 'finance.amount' },

  // Extras
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  manager: { label: 'Manager', type: 'text', faker: 'name.fullName' },
  phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'terminated', label: 'Terminated' }, { id: 'on_leave', label: 'On Leave' }], faker: 'random.arrayElement' },
  skills: { label: 'Skills', type: 'text', faker: 'lorem.words' }
};

export const entityName = 'Employees';
export const collectionName = 'employees';