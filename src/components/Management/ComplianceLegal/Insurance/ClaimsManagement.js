
export const fieldsConfig = {
  claim_id: { label: 'Claim ID', type: 'text', faker: 'datatype.uuid' },
  policy_id: { label: 'Policy ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  incident_date: { label: 'Incident Date', type: 'date', faker: 'date.past' },
  claim_amount: { label: 'Claim Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  status: { label: 'Status', type: 'select', options: [{ id: 'filed', label: 'Filed' }, { id: 'under_review', label: 'Under Review' }, { id: 'approved', label: 'Approved' }, { id: 'denied', label: 'Denied' }], faker: 'random.arrayElement' },
  approved_amount: { label: 'Approved Amount', type: 'number', faker: 'finance.amount' },
  adjuster_name: { label: 'Adjuster Name', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Insurance Claims';
export const collectionName = 'insurance_claims';
