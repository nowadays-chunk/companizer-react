
export const fieldsConfig = {
  compliance_id: { label: 'Compliance ID', type: 'text', faker: 'datatype.uuid' },
  contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },
  is_compliant: { label: 'Is Compliant', type: 'checkbox', faker: 'datatype.boolean' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  violation_details: { label: 'Violation Details', type: 'text', faker: 'lorem.sentence' },
  auditor: { label: 'Auditor', type: 'text', faker: 'name.fullName' },
  penalty_assessed: { label: 'Penalty', type: 'number', faker: 'finance.amount' },
  remediation_plan: { label: 'Remediation', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Contract Compliance';
export const collectionName = 'contract_compliance';