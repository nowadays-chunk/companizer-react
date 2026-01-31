
export const fieldsConfig = {

  dependency_id: { label: 'Dependency ID', type: 'text', faker: 'datatype.uuid' },
  predecessor_id: { label: 'Predecessor Milestone ID', type: 'text', faker: 'datatype.uuid' },
  successor_id: { label: 'Successor Milestone ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  dependency_type: { label: 'Dependency Type', type: 'select', options: [{ id: 'finish_to_start', label: 'Finish to Start' }, { id: 'start_to_start', label: 'Start to Start' }, { id: 'finish_to_finish', label: 'Finish to Finish' }], faker: 'random.arrayElement' },
  lag_days: { label: 'Lag Days', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  is_critical_path: { label: 'Is Critical Path', type: 'checkbox', faker: 'datatype.boolean' },
  lead_days: { label: 'Lead Days', type: 'number', faker: 'datatype.number' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  created_date: { label: 'Created Date', type: 'date', faker: 'date.recent' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Milestone Dependencies';
export const collectionName = 'milestone_dependencies';