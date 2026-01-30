
export const fieldsConfig = {
  renewal_id: { label: 'Renewal ID', type: 'text', faker: 'datatype.uuid' },
  agreement_id: { label: 'Agreement ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  renewal_date: { label: 'Renewal Date', type: 'date', faker: 'date.future' },
  new_end_date: { label: 'New End Date', type: 'date', faker: 'date.future' },

  rent_increase_percentage: { label: 'Rent Increase (%)', type: 'number', faker: 'datatype.float' },
  new_monthly_rent: { label: 'New Monthly Rent', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'negotiating', label: 'Negotiating' }, { id: 'signed', label: 'Signed' }, { id: 'declined', label: 'Declined' }], faker: 'random.arrayElement' },
  negotiator: { label: 'Negotiator', type: 'text', faker: 'name.fullName' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Lease Renewals';
export const collectionName = 'lease_renewals';