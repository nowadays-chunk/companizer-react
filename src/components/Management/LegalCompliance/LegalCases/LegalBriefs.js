
export const fieldsConfig = {
  brief_id: { label: 'Brief ID', type: 'text', faker: 'datatype.uuid' },
  case_id: { label: 'Case ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  submission_date: { label: 'Submission Date', type: 'date', faker: 'date.recent' },

  author: { label: 'Author', type: 'text', faker: 'name.fullName' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' },
  summary: { label: 'Summary', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'filed', label: 'Filed' }, { id: 'accepted', label: 'Accepted' }], faker: 'random.arrayElement' },
  version: { label: 'Version', type: 'text', faker: 'system.semver' },
  filing_deadline: { label: 'Filing Deadline', type: 'date', faker: 'date.future' }
};

export const entityName = 'Legal Briefs';
export const collectionName = 'legal_briefs';
