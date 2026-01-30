
export const fieldsConfig = {
  doc_id: { label: 'Doc ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  doc_name: { label: 'Document Name', type: 'text', faker: 'system.fileName' },
  version: { label: 'Version', type: 'text', faker: 'system.semver' },

  location: { label: 'Location', type: 'text', faker: 'system.directoryPath' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  last_modified: { label: 'Last Modified', type: 'date', faker: 'date.recent' },
  file_type: { label: 'File Type', type: 'text', faker: 'system.fileExt' },
  size_kb: { label: 'Size (KB)', type: 'number', faker: 'datatype.number' },
  access_level: { label: 'Access Level', type: 'select', options: [{ id: 'public', label: 'Public' }, { id: 'internal', label: 'Internal' }, { id: 'confidential', label: 'Confidential' }], faker: 'random.arrayElement' }
};

export const entityName = 'Documentation Management';
export const collectionName = 'documentation_management';
