
export const fieldsConfig = {
  phase_id: { label: 'Phase ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  phase_name: { label: 'Phase Name', type: 'text', faker: 'commerce.productName' }, // e.g. "Discovery", "Development"
  start_date: { label: 'Start Date', type: 'date', faker: 'date.future' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'waterfall', label: 'Waterfall' }, { id: 'agile', label: 'Agile' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  budget_allocation: { label: 'Budget Allocation', type: 'number', faker: 'finance.amount' },
  manager_id: { label: 'Phase Manager ID', type: 'text', faker: 'datatype.uuid' },
  objectives: { label: 'Objectives', type: 'text', faker: 'lorem.paragraph' },
  order_sequence: { label: 'Order Sequence', type: 'number', faker: 'datatype.number' },
  is_approved: { label: 'Is Approved', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Project Phases';
export const collectionName = 'project_phases';