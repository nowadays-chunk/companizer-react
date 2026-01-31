
export const fieldsConfig = {

  cycle_id: { label: 'Cycle ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  phase: { label: 'Phase', type: 'select', options: [{ id: 'requirements', label: 'Requirements' }, { id: 'design', label: 'Design' }, { id: 'coding', label: 'Coding' }, { id: 'testing', label: 'Testing' }, { id: 'deployment', label: 'Deployment' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'active', label: 'Active' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  team: { label: 'Team', type: 'text', faker: 'hacker.noun' },
  deliverables: { label: 'Deliverables', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  risks: { label: 'Risks', type: 'text', faker: 'lorem.sentence' },
  budget_spent: { label: 'Budget Spent', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Software Development Lifecycle';
export const collectionName = 'sdlc_phases';
