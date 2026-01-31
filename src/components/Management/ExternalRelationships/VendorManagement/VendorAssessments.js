
export const fieldsConfig = {

  assessment_id: { label: 'Assessment ID', type: 'text', faker: 'datatype.uuid' },
  vendor_id: { label: 'Vendor ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  assessment_date: { label: 'Assessment Date', type: 'date', faker: 'date.recent' },
  assessor: { label: 'Assessor', type: 'text', faker: 'name.fullName' },

  overall_score: { label: 'Overall Score', type: 'number', faker: 'datatype.number' }, // 0-100

  // Mandated
  // Extras
  criteria_quality: { label: 'Quality Score', type: 'number', faker: 'datatype.number' },
  criteria_delivery: { label: 'Delivery Score', type: 'number', faker: 'datatype.number' },
  criteria_cost: { label: 'Cost Score', type: 'number', faker: 'datatype.number' },
  risk_level: { label: 'Risk Level', type: 'text', faker: 'lorem.word' },
  recommendation: { label: 'Recommendation', type: 'select', options: [{ id: 'approve', label: 'Approve' }, { id: 'reject', label: 'Reject' }, { id: 'monitor', label: 'Monitor' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  type: 'text', faker: 'internet.url',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Vendor Assessments';
export const collectionName = 'vendor_assessments';
