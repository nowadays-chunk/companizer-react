
export const fieldsConfig = {

  audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  audit_title: { label: 'Audit Title', type: 'text', faker: 'lorem.words' },
  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },

  compliance_framework: { label: 'Compliance Framework', type: 'select', options: [{ id: 'iso27001', label: 'ISO 27001' }, { id: 'gdpr', label: 'GDPR' }, { id: 'sox', label: 'SOX' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  auditor_lead: { label: 'Auditor Lead', type: 'text', faker: 'name.fullName' },
  score: { label: 'Score', type: 'number', faker: 'datatype.number' },
  findings_count: { label: 'Findings Count', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  report_link: { label: 'Report Link', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Governance Compliance Audits';
export const collectionName = 'governance_compliance_audits';