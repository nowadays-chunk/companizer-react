
export const fieldsConfig = {
  template_id: { label: 'Template ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  template_name: { label: 'Template Name', type: 'text', faker: 'commerce.productName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'standard', label: 'Standard' }, { id: 'custom', label: 'Custom' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  html_content: { label: 'HTML Content', type: 'text', multiline: true, rows: 5, faker: 'lorem.paragraphs' },
  is_default: { label: 'Is Default', type: 'checkbox', faker: 'datatype.boolean' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  last_modified_date: { label: 'Last Modified Date', type: 'date', faker: 'date.recent' },
  logo_url: { label: 'Logo URL', type: 'text', faker: 'internet.url' },
  footer_text: { label: 'Footer Text', type: 'text', faker: 'lorem.sentence' },
  language: { label: 'Language', type: 'select', options: [{ id: 'en', label: 'English' }, { id: 'fr', label: 'French' }, { id: 'es', label: 'Spanish' }], faker: 'random.arrayElement' },
  paper_size: { label: 'Paper Size', type: 'select', options: [{ id: 'a4', label: 'A4' }, { id: 'letter', label: 'Letter' }], faker: 'random.arrayElement' }
};

export const entityName = 'Invoice Templates';
export const collectionName = 'invoice_templates';