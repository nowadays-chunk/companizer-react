
export const fieldsConfig = {
  agreement_id: { label: 'Agreement ID', type: 'text', faker: 'datatype.uuid' },
  partner_id: { label: 'Partner ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  share_percentage: { label: 'Share Percentage', type: 'number', faker: 'datatype.float' },
  basis_of_calculation: { label: 'Basis of Calculation', type: 'select', options: [{ id: 'gross_revenue', label: 'Gross Revenue' }, { id: 'net_profit', label: 'Net Profit' }], faker: 'random.arrayElement' },

  payment_frequency: { label: 'Payment Frequency', type: 'select', options: [{ id: 'monthly', label: 'Monthly' }, { id: 'quarterly', label: 'Quarterly' }, { id: 'annually', label: 'Annually' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
  min_guarantee: { label: 'Min Guarantee', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },
  product_scope: { label: 'Product Scope', type: 'text', faker: 'lorem.words' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' },
  last_payment_date: { label: 'Last Payment Date', type: 'date', faker: 'date.recent' }
};

export const entityName = 'Revenue Sharing Agreements';
export const collectionName = 'revenue_sharing_agreements';
