
export const fieldsConfig = {

  license_id: { label: 'License ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  software_name: { label: 'Software Name', type: 'text', faker: 'lorem.words' },
  license_key: { label: 'License Key', type: 'text', faker: 'datatype.uuid' },

  seats_total: { label: 'Total Seats', type: 'number', faker: 'datatype.number' },
  seats_used: { label: 'Seats Used', type: 'number', faker: 'datatype.number' },

  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  vendor: { label: 'Vendor', type: 'text', faker: 'company.name' },
  purchase_date: { label: 'Purchase Date', type: 'date', faker: 'date.past' },
  cost_per_seat: { label: 'Cost Per Seat', type: 'number', faker: 'finance.amount' },
  is_subscription: { label: 'Is Subscription', type: 'checkbox', faker: 'datatype.boolean' },
  auto_renew: { label: 'Auto Renew', type: 'checkbox', faker: 'datatype.boolean' },
  admin_email: { label: 'Admin Email', type: 'email', faker: 'internet.email' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Software Licenses';
export const collectionName = 'software_licenses';
