
export const fieldsConfig = {

  account_id: { label: 'Account ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  account_code: { label: 'Account Code', type: 'text', faker: 'finance.account' },
  account_name: { label: 'Account Name', type: 'text', faker: 'finance.accountName' },
  type: { label: 'Type', type: 'select', options: [{ id: 'asset', label: 'Asset' }, { id: 'liability', label: 'Liability' }, { id: 'equity', label: 'Equity' }, { id: 'revenue', label: 'Revenue' }, { id: 'expense', label: 'Expense' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  parent_account_id: { label: 'Parent Account ID', type: 'text', faker: 'datatype.uuid' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  tax_code: { label: 'Tax Code', type: 'text', faker: 'random.alphaNumeric' },
  e: 'text', faker: 'finance.currencyCode',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Chart of Accounts';
export const collectionName = 'chart_of_accounts';