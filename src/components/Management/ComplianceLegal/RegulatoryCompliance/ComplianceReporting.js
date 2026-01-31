
export const fieldsConfig = {

  report_id: { label: 'Report ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  report_name: { label: 'Report Name', type: 'text', faker: 'lorem.words' },
  regulatory_body: { label: 'Regulatory Body', type: 'text', faker: 'company.name' },

  submission_date: { label: 'Submission Date', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  period: { label: 'Period', type: 'text', faker: 'lorem.word' },
  is_submitted: { label: 'Is Submitted', type: 'checkbox', faker: 'datatype.boolean' },
  confirmation_receipt: { label: 'Receipt', type: 'text', faker: 'random.alphaNumeric' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Compliance Reporting';
export const collectionName = 'compliance_reporting';
