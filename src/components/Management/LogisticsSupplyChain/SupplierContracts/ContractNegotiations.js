
export const fieldsConfig = {

  negotiation_id: { label: 'Negotiation ID', type: 'text', faker: 'datatype.uuid' },
  supplier_id: { label: 'Supplier ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  status: { label: 'Status', type: 'select', options: [{ id: 'ongoing', label: 'Ongoing' }, { id: 'agreed', label: 'Agreed' }, { id: 'stalled', label: 'Stalled' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  negotiator: { label: 'Negotiator', type: 'text', faker: 'name.fullName' },
  key_terms_discussed: { label: 'Key Terms', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  target_savings: { label: 'Target Savings', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contract Negotiations';
export const collectionName = 'contract_negotiations';