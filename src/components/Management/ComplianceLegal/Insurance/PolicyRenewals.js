
export const fieldsConfig = {

  renewal_id: { label: 'Renewal ID', type: 'text', faker: 'datatype.uuid' },
  policy_id: { label: 'Policy ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  renewal_date: { label: 'Renewal Date', type: 'date', faker: 'date.future' },
  new_premium: { label: 'New Premium', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'renewed', label: 'Renewed' }, { id: 'declined', label: 'Declined' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  pe: 'text', faker: 'name.fullName',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Policy Renewals';
export const collectionName = 'policy_renewals';
