
export const fieldsConfig = {
  penalty_id: { label: 'Penalty ID', type: 'text', faker: 'datatype.uuid' },
  obligation_id: { label: 'Obligation ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  date_incurred: { label: 'Date Incurred', type: 'date', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  reason: { label: 'Reason', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'paid', label: 'Paid' }, { id: 'appealed', label: 'Appealed' }, { id: 'pending', label: 'Pending' }], faker: 'random.arrayElement' },
  issuing_authority: { label: 'Issuing Authority', type: 'text', faker: 'company.name' },
  remediation_actions: { label: 'Remediation Actions', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  paid_date: { label: 'Paid Date', type: 'date', faker: 'date.recent' }
};

export const entityName = 'Penalties Management';
export const collectionName = 'penalties_management';
