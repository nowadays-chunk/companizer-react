
export const fieldsConfig = {
  milestone_id: { label: 'Milestone ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Name', type: 'text', faker: 'lorem.words' },
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },

  completion_percentage: { label: 'Completion (%)', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'achieved', label: 'Achieved' }, { id: 'missed', label: 'Missed' }], faker: 'random.arrayElement' },
  deliverables: { label: 'Deliverables', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  approval_date: { label: 'Approval Date', type: 'date', faker: 'date.recent' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Project Milestones';
export const collectionName = 'project_milestones_ihc';
