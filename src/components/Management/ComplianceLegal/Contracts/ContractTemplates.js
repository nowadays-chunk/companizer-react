
export const fieldsConfig = {

  template_id: { label: 'Template ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  template_name: { label: 'Template Name', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  category: { label: 'Category', type: 'select', options: [{ id: 'nda', label: 'NDA' }, { id: 'saas', label: 'SaaS' }, { id: 'employment', label: 'Employment' }, { id: 'vendor', label: 'Vendor' }], faker: 'random.arrayElement' },
  file_url: { label: 'File URL', type: 'text', faker: 'internet.url' },
  version: { label: 'Version', type: 'text', faker: 'semver' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contract Templates';
export const collectionName = 'contract_templates';