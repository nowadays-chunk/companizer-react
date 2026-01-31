
export const fieldsConfig = {

  template_id: { label: 'Template ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  template_name: { label: 'Template Name', type: 'text', faker: 'commerce.productName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'standard', label: 'Standard' }, { id: 'custom', label: 'Custom' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  html_content: { label: 'HTML Content', type: 'text', multiline: true, rows: 5, faker: 'lorem.paragraphs' },
  is_default: { label: 'Is Default', type: 'checkbox', faker: 'datatype.boolean' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  last_modified_date: { label: 'Last Modified Date', type: 'date', faker: 'date.recent' },
  logo_url: { label: 'Logo URL', type: 'text', faker: 'internet.url' },
  footer_text: { label: 'Footer Text', type: 'text', faker: 'lorem.sentence' },
  language: { label: 'Language', type: 'select', options: [{ id: 'en', label: 'English' }, { id: 'fr', label: 'French' }, { id: 'es', label: 'Spanish' }], faker: 'random.arrayElement' },
  type: 'select', options: [{ id: 'a4', label: 'A4' }, { id: 'letter', label: 'Letter' }], faker: 'random.arrayElement',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Invoice Templates';
export const collectionName = 'invoice_templates';