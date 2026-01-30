
export const fieldsConfig = {
  investment_id: { label: 'Investment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  security_name: { label: 'Security Name', type: 'text', faker: 'lorem.words' },
  face_value: { label: 'Face Value', type: 'number', faker: 'finance.amount' },

  coupon_rate: { label: 'Coupon Rate', type: 'number', faker: 'datatype.float' },
  maturity_date: { label: 'Maturity Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  yield_to_maturity: { label: 'Yield to Maturity', type: 'number', faker: 'datatype.float' },
  credit_rating: { label: 'Credit Rating', type: 'text', faker: 'random.alphaNumeric' }, // AAA
  purchase_date: { label: 'Purchase Date', type: 'date', faker: 'date.past' },
  payment_frequency: { label: 'Payment Frequency', type: 'select', options: [{ id: 'annual', label: 'Annual' }, { id: 'semi_annual', label: 'Semi-Annual' }, { id: 'quarterly', label: 'Quarterly' }], faker: 'random.arrayElement' },
  issuer: { label: 'Issuer', type: 'text', faker: 'company.name' }
};

export const entityName = 'Fixed Income Investments';
export const collectionName = 'fixed_income_investments';
