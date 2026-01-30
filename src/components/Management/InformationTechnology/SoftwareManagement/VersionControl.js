
export const fieldsConfig = {
  version_id: { label: 'Version ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  version_number: { label: 'Version Number', type: 'text', faker: 'system.semver' },
  release_date: { label: 'Release Date', type: 'date', faker: 'date.recent' },

  release_notes: { label: 'Release Notes', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  branch_name: { label: 'Branch Name', type: 'text', faker: 'hacker.noun' }, // git branch
  commit_hash: { label: 'Commit Hash', type: 'text', faker: 'git.commitSha' },
  author: { label: 'Author', type: 'text', faker: 'name.fullName' },
  is_stable: { label: 'Is Stable', type: 'checkbox', faker: 'datatype.boolean' },
  download_url: { label: 'Download URL', type: 'text', faker: 'internet.url' },
  environment: { label: 'Environment', type: 'select', options: [{ id: 'prod', label: 'Production' }, { id: 'staging', label: 'Staging' }], faker: 'random.arrayElement' }
};

export const entityName = 'Version Control';
export const collectionName = 'version_control';
