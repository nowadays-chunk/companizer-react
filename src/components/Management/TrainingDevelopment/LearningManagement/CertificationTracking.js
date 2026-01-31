
export const fieldsConfig = {

  certification_id: { label: 'Certification ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  cert_name: { label: 'Certificate Name', type: 'text', faker: 'lorem.words' },
  issuing_org: { label: 'Issuing Org', type: 'text', faker: 'company.name' },

  issue_date: { label: 'Issue Date', type: 'date', faker: 'date.past' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  credential_id: { label: 'Credential ID', type: 'text', faker: 'random.alphaNumeric' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'expired', label: 'Expired' }, { id: 'revoked', label: 'Revoked' }], faker: 'random.arrayElement' },
  verification_url: { label: 'Verification URL', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Certification Tracking';
export const collectionName = 'certification_tracking';
