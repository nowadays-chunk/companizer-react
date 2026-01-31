
export const fieldsConfig = {

  structure_id: { label: 'Structure ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  base_salary: { label: 'Base Salary', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  frequency: { label: 'Frequency', type: 'select', options: [{ id: 'monthly', label: 'Monthly' }, { id: 'bi_weekly', label: 'Bi-Weekly' }, { id: 'annual', label: 'Annual' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  grade: { label: 'Grade', type: 'text', faker: 'random.alphaNumeric' },
  housing_allowance: { label: 'Housing Allowance', type: 'number', faker: 'finance.amount' },
  transport_allowance: { label: 'Transport Allowance', type: 'number', faker: 'finance.amount' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Salary Structure';
export const collectionName = 'salary_structure';
