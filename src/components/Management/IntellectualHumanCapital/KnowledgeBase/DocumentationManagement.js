
export const fieldsConfig = {

  doc_id: { label: 'Doc ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  doc_name: { label: 'Document Name', type: 'text', faker: 'system.fileName' },
  version: { label: 'Version', type: 'text', faker: 'system.semver' },

  location: { label: 'Location', type: 'text', faker: 'system.directoryPath' },

  // Mandated
  // Extras
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  last_modified: { label: 'Last Modified', type: 'date', faker: 'date.recent' },
  file_type: { label: 'File Type', type: 'text', faker: 'system.fileExt' },
  size_kb: { label: 'Size (KB)', type: 'number', faker: 'datatype.number' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Documentation Management';
export const collectionName = 'documentation_management';
