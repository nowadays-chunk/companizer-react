
export const fieldsConfig = {

  utility_id: { label: 'Utility ID', type: 'text', faker: 'datatype.uuid' },
  property_id: { label: 'Property ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  utility_type: { label: 'Type', type: 'select', options: [{ id: 'electricity', label: 'Electricity' }, { id: 'water', label: 'Water' }, { id: 'gas', label: 'Gas' }, { id: 'internet', label: 'Internet' }], faker: 'random.arrayElement' },
  provider: { label: 'Provider', type: 'text', faker: 'company.name' },

  account_number: { label: 'Account Number', type: 'text', faker: 'finance.account' },

  // Mandated
  // Extras
  billing_cycle: { label: 'Billing Cycle', type: 'text', faker: 'lorem.word' }, // Monthly
  usage_metric: { label: 'Usage Metric', type: 'number', faker: 'datatype.number' },
  last_bill_amount: { label: 'Last Bill Amount', type: 'number', faker: 'finance.amount' },
  last_bill_date: { label: 'Last Bill Date', type: 'date', faker: 'date.recent' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Utility Management';
export const collectionName = 'utility_management';