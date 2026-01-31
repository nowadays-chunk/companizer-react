
export const fieldsConfig = {

  account_id: { label: 'Account ID', type: 'text', faker: 'datatype.uuid' },
  bank_name: { label: 'Bank Name', type: 'text', faker: 'company.name' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  account_number: { label: 'Account Number', type: 'text', faker: 'finance.account' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' }, // USD, EUR

  balance: { label: 'Balance', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  exchange_rate_to_base: { label: 'Exchange Rate', type: 'number', faker: 'datatype.float' },
  base_balance: { label: 'Base Balance', type: 'number', faker: 'finance.amount' },
  swift_code: { label: 'SWIFT Code', type: 'text', faker: 'finance.bic' }, // Use bic as swift code proxy
  iban: { label: 'IBAN', type: 'text', faker: 'finance.iban' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Foreign Currency Accounts';
export const collectionName = 'foreign_currency_accounts';