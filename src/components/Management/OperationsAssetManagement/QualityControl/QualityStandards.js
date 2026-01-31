
export const fieldsConfig = {

  standard_id: { label: 'Standard ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Standard Name', type: 'text', faker: 'lorem.words' }, // e.g. ISO 9001
  version: { label: 'Version', type: 'text', faker: 'system.semver' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  review_date: { label: 'Review Date', type: 'date', faker: 'date.future' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Quality Standards';
export const collectionName = 'quality_standards';
