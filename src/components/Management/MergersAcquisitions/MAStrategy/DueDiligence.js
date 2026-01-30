
export const fieldsConfig = {
  due_diligence_id: { label: 'Due Diligence ID', type: 'text', faker: 'datatype.uuid' },
  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  category: { label: 'Category', type: 'select', options: [{ id: 'financial', label: 'Financial' }, { id: 'legal', label: 'Legal' }, { id: 'operational', label: 'Operational' }, { id: 'hr', label: 'HR' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }, { id: 'flagged', label: 'Flagged' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  findings_summary: { label: 'Findings Summary', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  risk_level: { label: 'Risk Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  reviewer: { label: 'Reviewer', type: 'text', faker: 'name.fullName' },
  report_url: { label: 'Report URL', type: 'text', faker: 'internet.url' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Due Diligence';
export const collectionName = 'due_diligence';