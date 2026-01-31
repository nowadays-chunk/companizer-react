
export const fieldsConfig = {

  audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.words' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },

  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },
  auditor_name: { label: 'Auditor Name', type: 'text', faker: 'name.fullName' },

  // Mandated
  // Extras
  scope: { label: 'Scope', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  findings: { label: 'Findings', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  risk_rating: { label: 'Risk Rating', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }, { id: 'follow_up', label: 'Follow Up' }], faker: 'random.arrayElement' },
  type: 'text', faker: 'internet.url',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Internal Audits';
export const collectionName = 'internal_audits';