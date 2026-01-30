
export const fieldsConfig = {
  scope_id: { label: 'Scope ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraphs' },
  in_scope: { label: 'In Scope', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  out_of_scope: { label: 'Out Of Scope', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },

  approved_date: { label: 'Approved Date', type: 'date', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  version_number: { label: 'Version Number', type: 'text', faker: 'system.semver' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  change_log: { label: 'Change Log', type: 'text', faker: 'lorem.sentence' },
  assumptions: { label: 'Assumptions', type: 'text', faker: 'lorem.sentence' },
  constraints: { label: 'Constraints', type: 'text', faker: 'lorem.sentence' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' },
  last_review_date: { label: 'Last Review Date', type: 'date', faker: 'date.recent' }
};

export const entityName = 'Project Scope';
export const collectionName = 'project_scope';