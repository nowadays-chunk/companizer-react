
export const fieldsConfig = {
  agreement_id: { label: 'Agreement ID', type: 'text', faker: 'datatype.uuid' },
  property_id: { label: 'Property ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  tenant_name: { label: 'Tenant Name', type: 'text', faker: 'company.name' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  monthly_rent: { label: 'Monthly Rent', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  security_deposit: { label: 'Security Deposit', type: 'number', faker: 'finance.amount' },
  payment_due_day: { label: 'Payment Due Day', type: 'number', faker: 'datatype.number' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  renewal_terms: { label: 'Renewal Terms', type: 'text', faker: 'lorem.sentence' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Rental Agreements';
export const collectionName = 'rental_agreements';
