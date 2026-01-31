
export const fieldsConfig = {

  due_diligence_id: { label: 'Due Diligence ID', type: 'text', faker: 'datatype.uuid' },
  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  category: { label: 'Category', type: 'select', options: [{ id: 'financial', label: 'Financial' }, { id: 'legal', label: 'Legal' }, { id: 'operational', label: 'Operational' }, { id: 'hr', label: 'HR' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }, { id: 'flagged', label: 'Flagged' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  findings_summary: { label: 'Findings Summary', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  risk_level: { label: 'Risk Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  reviewer: { label: 'Reviewer', type: 'text', faker: 'name.fullName' },
  report_url: { label: 'Report URL', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Due Diligence';
export const collectionName = 'due_diligence';