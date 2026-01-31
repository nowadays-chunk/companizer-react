
export const fieldsConfig = {

  audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  audit_type: { label: 'Audit Type', type: 'select', options: [{ id: 'penetration_test', label: 'Penetration Test' }, { id: 'vulnerability_scan', label: 'Vulnerability Scan' }], faker: 'random.arrayElement' },
  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },

  auditor: { label: 'Auditor', type: 'text', faker: 'company.name' },

  vulnerabilities_found_count: { label: 'Vulnerabilities', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  critical_issues: { label: 'Critical Issues', type: 'number', faker: 'datatype.number' },
  remediation_plan: { label: 'Remediation Plan', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'remediated', label: 'Remediated' }, { id: 'closed', label: 'Closed' }], faker: 'random.arrayElement' },
  report_url: { label: 'Report URL', type: 'text', faker: 'internet.url' },
  type: 'text', faker: 'name.fullName',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Security Audits';
export const collectionName = 'security_audits';
