
export const fieldsConfig = {

  license_id: { label: 'License ID', type: 'text', faker: 'datatype.uuid' },
  ip_asset_id: { label: 'IP Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  licensee: { label: 'Licensee', type: 'text', faker: 'company.name' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  royalty_rate: { label: 'Royalty Rate (%)', type: 'number', faker: 'datatype.float' },

  // Mandated
  // Extras
  territory: { label: 'Territory', type: 'text', faker: 'address.country' },
  exclusivity: { label: 'Exclusivity', type: 'checkbox', faker: 'datatype.boolean' },
  payment_terms: { label: 'Payment Terms', type: 'text', faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'expired', label: 'Expired' }, { id: 'terminated', label: 'Terminated' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'IP Licensing';
export const collectionName = 'ip_licensing';
