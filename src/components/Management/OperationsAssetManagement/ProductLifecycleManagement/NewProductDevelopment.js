
export const fieldsConfig = {
  npd_id: { label: 'NPD ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  concept_name: { label: 'Concept Name', type: 'text', faker: 'commerce.productName' },
  phase: { label: 'Phase', type: 'select', options: [{ id: 'ideation', label: 'Ideation' }, { id: 'feasibility', label: 'Feasibility' }, { id: 'development', label: 'Development' }, { id: 'testing', label: 'Testing' }, { id: 'launch', label: 'Launch' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  target_launch_date: { label: 'Target Launch Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
  lead_manager: { label: 'Lead Manager', type: 'text', faker: 'name.fullName' },
  market_potential: { label: 'Market Potential', type: 'text', faker: 'lorem.sentence' },
  risks: { label: 'Risks', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'on_track', label: 'On Track' }, { id: 'delayed', label: 'Delayed' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' }
};

export const entityName = 'New Product Development';
export const collectionName = 'new_product_development';
