
export const fieldsConfig = {
  output_id: { label: 'Output ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  output_type: { label: 'Output Type', type: 'select', options: [{ id: 'paper', label: 'Paper' }, { id: 'prototype', label: 'Prototype' }, { id: 'dataset', label: 'Dataset' }, { id: 'patent_application', label: 'Patent Application' }], faker: 'random.arrayElement' },

  date_produced: { label: 'Date Produced', type: 'date', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  author_lead: { label: 'Lead Author', type: 'text', faker: 'name.fullName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  file_url: { label: 'File URL', type: 'text', faker: 'internet.url' },
  confidentiality: { label: 'Confidentiality', type: 'select', options: [{ id: 'public', label: 'Public' }, { id: 'internal', label: 'Internal' }, { id: 'secret', label: 'Secret' }], faker: 'random.arrayElement' },
  impact_score: { label: 'Impact Score', type: 'number', faker: 'datatype.number' }
};

export const entityName = 'Research Outputs';
export const collectionName = 'research_outputs';
