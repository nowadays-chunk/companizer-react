
export const fieldsConfig = {
  cert_id: { label: 'Cert ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  cert_name: { label: 'Certificate', type: 'text', faker: 'lorem.words' },
  issuing_body: { label: 'Issuing Body', type: 'text', faker: 'company.name' },

  issue_date: { label: 'Issue Date', type: 'date', faker: 'date.past' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  credential_number: { label: 'Credential Number', type: 'text', faker: 'random.alphaNumeric' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'expired', label: 'Expired' }], faker: 'random.arrayElement' },
  verification_url: { label: 'Verification URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'HR Certifications';
export const collectionName = 'hr_certifications';
