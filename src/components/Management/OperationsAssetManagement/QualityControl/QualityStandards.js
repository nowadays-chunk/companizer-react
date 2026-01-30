
export const fieldsConfig = {
  standard_id: { label: 'Standard ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Standard Name', type: 'text', faker: 'lorem.words' }, // e.g. ISO 9001
  version: { label: 'Version', type: 'text', faker: 'system.semver' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  review_date: { label: 'Review Date', type: 'date', faker: 'date.future' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Quality Standards';
export const collectionName = 'quality_standards';
