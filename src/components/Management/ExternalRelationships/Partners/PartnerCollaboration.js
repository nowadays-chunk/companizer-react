
export const fieldsConfig = {

  collaboration_id: { label: 'Collaboration ID', type: 'text', faker: 'datatype.uuid' },
  partner_id: { label: 'Partner ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  project_name: { label: 'Project Name', type: 'text', faker: 'lorem.words' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.recent' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  scope: { label: 'Scope', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'marketing', label: 'Marketing' }, { id: 'tech', label: 'Tech' }, { id: 'supply_chain', label: 'Supply Chain' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  shared_resources: { label: 'Shared Resources', type: 'text', faker: 'lorem.sentence' },
  goals: { label: 'Goals', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  budget_allocated: { label: 'Budget Allocated', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Partner Collaboration';
export const collectionName = 'partner_collaboration';
