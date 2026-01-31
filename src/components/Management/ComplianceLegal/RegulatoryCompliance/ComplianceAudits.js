
export const fieldsConfig = {

  audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  audit_type: { label: 'Audit Type', type: 'text', faker: 'hacker.noun' }, // e.g. GDPR, ISO
  auditor: { label: 'Auditor', type: 'text', faker: 'company.name' },

  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  score: { label: 'Score', type: 'number', faker: 'datatype.number' },
  findings_count: { label: 'Findings Count', type: 'number', faker: 'datatype.number' },
  report_url: { label: 'Report URL', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Compliance Audits';
export const collectionName = 'compliance_audits';
