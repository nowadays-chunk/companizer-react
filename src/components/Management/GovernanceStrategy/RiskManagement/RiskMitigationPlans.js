
export const fieldsConfig = {

  plan_id: { label: 'Plan ID', type: 'text', faker: 'datatype.uuid' },
  risk_id: { label: 'Risk ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  action_plan: { label: 'Action Plan', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },

  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  status: { label: 'Status', type: 'select', options: [{ id: 'not_started', label: 'Not Started' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  resources_needed: { label: 'Resources Needed', type: 'text', faker: 'lorem.sentence' },
  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
  progress: { label: 'Progress (%)', type: 'number', faker: 'datatype.number' },
  review_date: { label: 'Review Date', type: 'date', faker: 'date.recent' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Risk Mitigation Plans';
export const collectionName = 'risk_mitigation_plans';