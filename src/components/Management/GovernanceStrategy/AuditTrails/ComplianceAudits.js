
export const fieldsConfig = {
  audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  audit_title: { label: 'Audit Title', type: 'text', faker: 'lorem.words' },
  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },

  compliance_framework: { label: 'Compliance Framework', type: 'select', options: [{ id: 'iso27001', label: 'ISO 27001' }, { id: 'gdpr', label: 'GDPR' }, { id: 'sox', label: 'SOX' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  auditor_lead: { label: 'Auditor Lead', type: 'text', faker: 'name.fullName' },
  score: { label: 'Score', type: 'number', faker: 'datatype.number' },
  findings_count: { label: 'Findings Count', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  report_link: { label: 'Report Link', type: 'text', faker: 'internet.url' },
  next_audit_scheduled: { label: 'Next Audit Scheduled', type: 'date', faker: 'date.future' }
};

export const entityName = 'Governance Compliance Audits';
export const collectionName = 'governance_compliance_audits';