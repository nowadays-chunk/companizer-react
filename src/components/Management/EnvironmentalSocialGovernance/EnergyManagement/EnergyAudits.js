
export const fieldsConfig = {

  audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
  facility_id: { label: 'Facility ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },
  auditor: { label: 'Auditor', type: 'text', faker: 'company.name' },

  efficiency_rating: { label: 'Efficiency Rating', type: 'text', faker: 'random.alphaNumeric' }, // A, B, C...

  // Mandated
  // Audit cost

  // Extras
  findings: { label: 'Findings', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  recommendations: { label: 'Recommendations', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  potential_savings: { label: 'Potential Savings', type: 'number', faker: 'finance.amount' },
  compliance_status: { label: 'Compliance Status', type: 'text', faker: 'lorem.word' },
  report_document: { label: 'Report Document', type: 'text', faker: 'system.fileName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Energy Audits';
export const collectionName = 'energy_audits';
