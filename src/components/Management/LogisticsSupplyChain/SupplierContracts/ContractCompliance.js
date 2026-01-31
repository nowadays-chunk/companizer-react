
export const fieldsConfig = {

  compliance_id: { label: 'Compliance ID', type: 'text', faker: 'datatype.uuid' },
  contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },
  is_compliant: { label: 'Is Compliant', type: 'checkbox', faker: 'datatype.boolean' },

  // Mandated
  // Extras
  violation_details: { label: 'Violation Details', type: 'text', faker: 'lorem.sentence' },
  auditor: { label: 'Auditor', type: 'text', faker: 'name.fullName' },
  penalty_assessed: { label: 'Penalty', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contract Compliance';
export const collectionName = 'contract_compliance';