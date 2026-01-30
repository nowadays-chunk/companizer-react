
export const fieldsConfig = {
  innovation_id: { label: 'Innovation ID', type: 'text', faker: 'datatype.uuid' },
  idea_id: { label: 'Idea ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  stage: { label: 'Stage', type: 'select', options: [{ id: 'concept', label: 'Concept' }, { id: 'prototyping', label: 'Prototyping' }, { id: 'development', label: 'Development' }, { id: 'launch', label: 'Launch' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  target_launch_date: { label: 'Target Launch Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  project_lead: { label: 'Project Lead', type: 'text', faker: 'name.fullName' },
  budget_allocated: { label: 'Budget Allocated', type: 'number', faker: 'finance.amount' },
  roi_projection: { label: 'ROI Projection', type: 'number', faker: 'finance.amount' },
  risks: { label: 'Risks', type: 'text', faker: 'lorem.sentence' },
  progress_percent: { label: 'Progress (%)', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'on_track', label: 'On Track' }, { id: 'delayed', label: 'Delayed' }, { id: 'hold', label: 'On Hold' }], faker: 'random.arrayElement' }
};

export const entityName = 'Innovation Pipeline';
export const collectionName = 'innovation_pipeline';
