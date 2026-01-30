
export const fieldsConfig = {
  creditor_id: { label: 'Creditor ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  creditor_name: { label: 'Creditor Name', type: 'text', faker: 'company.name' },
  contact_number: { label: 'Contact Number', type: 'tel', faker: 'phone.number' },

  balance: { label: 'Balance', type: 'number', faker: 'finance.amount' },
  credit_limit: { label: 'Credit Limit', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  last_payment_date: { label: 'Last Payment Date', type: 'date', faker: 'date.past' },
  last_payment_amount: { label: 'Last Payment Amount', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'blocked', label: 'Blocked' }, { id: 'inactive', label: 'Inactive' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  tax_id: { label: 'Tax ID', type: 'text', faker: 'random.alphaNumeric' }
};

export const entityName = 'Creditors Ledger';
export const collectionName = 'creditors_ledger';