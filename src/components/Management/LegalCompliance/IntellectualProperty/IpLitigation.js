
export const fieldsConfig = {

  litigation_id: { label: 'Litigation ID', type: 'text', faker: 'datatype.uuid' },
  ip_asset_id: { label: 'IP Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  case_number: { label: 'Case Number', type: 'text', faker: 'finance.account' },
  opposing_party: { label: 'Opposing Party', type: 'text', faker: 'company.name' },

  court: { label: 'Court', type: 'text', faker: 'address.city' },
  filing_date: { label: 'Filing Date', type: 'date', faker: 'date.past' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'discovery', label: 'Discovery' }, { id: 'trial', label: 'Trial' }, { id: 'settled', label: 'Settled' }, { id: 'judgment', label: 'Judgment' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  legal_counsel: { label: 'Legal Counsel', type: 'text', faker: 'name.fullName' },
  budget_spent: { label: 'Budget Spent', type: 'number', faker: 'finance.amount' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'IP Litigation';
export const collectionName = 'ip_litigation';
