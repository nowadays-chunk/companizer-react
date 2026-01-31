
export const fieldsConfig = {

  tax_id: { label: 'Tax ID', type: 'text', faker: 'datatype.uuid' },
  property_id: { label: 'Property ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  year: { label: 'Year', type: 'number', faker: 'date.past' },
  amount_due: { label: 'Amount Due', type: 'number', faker: 'finance.amount' },
  amount_paid: { label: 'Amount Paid', type: 'number', faker: 'finance.amount' },

  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  paid_date: { label: 'Paid Date', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  authority: { label: 'Tax Authority', type: 'text', faker: 'company.name' },
  status: { label: 'Status', type: 'select', options: [{ id: 'paid', label: 'Paid' }, { id: 'unpaid', label: 'Unpaid' }, { id: 'overdue', label: 'Overdue' }], faker: 'random.arrayElement' },
  receipt_url: { label: 'Receipt URL', type: 'text', faker: 'internet.url' },
  assessed_value: { label: 'Assessed Value', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Property Taxes';
export const collectionName = 'property_taxes';
