
export const fieldsConfig = {
  plan_id: { label: 'Plan ID', type: 'text', faker: 'datatype.uuid' },
  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  plan_name: { label: 'Plan Name', type: 'text', faker: 'lorem.words' },
  phase: { label: 'Phase', type: 'select', options: [{ id: 'pre_close', label: 'Pre-Close' }, { id: 'day_one', label: 'Day One' }, { id: '100_days', label: '100 Days' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  objectives: { label: 'Objectives', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  timeline_start: { label: 'Timeline Start', type: 'date', faker: 'date.future' },
  timeline_end: { label: 'Timeline End', type: 'date', faker: 'date.future' },
  budget_allocated: { label: 'Budget Allocated', type: 'number', faker: 'finance.amount' },
  progress: { label: 'Progress (%)', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'active', label: 'Active' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' }
};

export const entityName = 'Integration Plans';
export const collectionName = 'integration_plans';