
export const fieldsConfig = {

  penalty_id: { label: 'Penalty ID', type: 'text', faker: 'datatype.uuid' },
  obligation_id: { label: 'Obligation ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  date_incurred: { label: 'Date Incurred', type: 'date', faker: 'date.past' },

  // Mandated
  // Extras
  reason: { label: 'Reason', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'paid', label: 'Paid' }, { id: 'appealed', label: 'Appealed' }, { id: 'pending', label: 'Pending' }], faker: 'random.arrayElement' },
  issuing_authority: { label: 'Issuing Authority', type: 'text', faker: 'company.name' },
  remediation_actions: { label: 'Remediation Actions', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  ype: 'date', faker: 'date.recent',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Penalties Management';
export const collectionName = 'penalties_management';
