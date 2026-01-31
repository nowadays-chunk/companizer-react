
export const fieldsConfig = {

  plan_id: { label: 'Plan ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  year: { label: 'Year', type: 'number', faker: 'date.past' },
  career_goal: { label: 'Career Goal', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  manager: { label: 'Manager', type: 'text', faker: 'name.fullName' },
  strengths: { label: 'Strengths', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  areas_for_improvement: { label: 'Areas for Improvement', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'agreed', label: 'Agreed' }, { id: 'reviewed', label: 'Reviewed' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Development Plans';
export const collectionName = 'development_plans';
