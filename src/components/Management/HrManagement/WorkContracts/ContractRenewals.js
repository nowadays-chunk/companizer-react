
export const fieldsConfig = {
  renewal_id: { label: 'Renewal ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  old_contract_end: { label: 'Old Contract End', type: 'date', faker: 'date.past' },
  new_contract_start: { label: 'New Contract Start', type: 'date', faker: 'date.future' },
  new_contract_end: { label: 'New Contract End', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  salary_revision: { label: 'Salary Revision', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'signed', label: 'Signed' }, { id: 'negotiating', label: 'Negotiating' }, { id: 'declined', label: 'Declined' }], faker: 'random.arrayElement' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Contract Renewals (HR)';
export const collectionName = 'contract_renewals_hr';