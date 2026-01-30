
export const fieldsConfig = {
  account_id: { label: 'Account ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  account_code: { label: 'Account Code', type: 'text', faker: 'finance.account' },
  account_name: { label: 'Account Name', type: 'text', faker: 'finance.accountName' },
  type: { label: 'Type', type: 'select', options: [{ id: 'asset', label: 'Asset' }, { id: 'liability', label: 'Liability' }, { id: 'equity', label: 'Equity' }, { id: 'revenue', label: 'Revenue' }, { id: 'expense', label: 'Expense' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  parent_account_id: { label: 'Parent Account ID', type: 'text', faker: 'datatype.uuid' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  tax_code: { label: 'Tax Code', type: 'text', faker: 'random.alphaNumeric' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' }
};

export const entityName = 'Chart of Accounts';
export const collectionName = 'chart_of_accounts';