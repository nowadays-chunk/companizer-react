
export const fieldsConfig = {

  assessment_id: { label: 'Assessment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  assessment_name: { label: 'Assessment Name', type: 'text', faker: 'lorem.words' },
  date: { label: 'Date', type: 'date', faker: 'date.recent' },

  assessor: { label: 'Assessor', type: 'text', faker: 'name.fullName' },
  overall_risk_score: { label: 'Overall Risk Score', type: 'number', faker: 'datatype.number' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'annual', label: 'Annual' }, { id: 'ad_hoc', label: 'Ad Hoc' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  scope: { label: 'Scope', type: 'text', faker: 'lorem.sentence' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  total_risks_identified: { label: 'Total Risks Identified', type: 'number', faker: 'datatype.number' },
  key_findings: { label: 'Key Findings', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  report_document: { label: 'Report Document', type: 'text', faker: 'system.fileName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Risk Assessments';
export const collectionName = 'governance_risk_assessments';