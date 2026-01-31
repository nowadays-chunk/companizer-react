
export const fieldsConfig = {

  bug_id: { label: 'Bug ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  severity: { label: 'Severity', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'major', label: 'Major' }, { id: 'minor', label: 'Minor' }], faker: 'random.arrayElement' },

  status: { label: 'Status', type: 'select', options: [{ id: 'new', label: 'New' }, { id: 'triaged', label: 'Triaged' }, { id: 'fixed', label: 'Fixed' }, { id: 'closed', label: 'Closed' }], faker: 'random.arrayElement' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'ui', label: 'UI' }, { id: 'backend', label: 'Backend' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  reported_by: { label: 'Reported By', type: 'text', faker: 'name.fullName' },
  assigned_to: { label: 'Assigned To', type: 'text', faker: 'name.fullName' },
  created_date: { label: 'Created Date', type: 'date', faker: 'date.past' },
  reproduction_steps: { label: 'Reproduction Steps', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  environment: { label: 'Environment', type: 'text', faker: 'lorem.word' }, // Prod/Dev
  version_found: { label: 'Version Found', type: 'text', faker: 'system.semver' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Bug Tracking';
export const collectionName = 'bug_tracking';
