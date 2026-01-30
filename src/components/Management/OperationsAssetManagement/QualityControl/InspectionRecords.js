
export const fieldsConfig = {
  inspection_id: { label: 'Inspection ID', type: 'text', faker: 'datatype.uuid' },
  item_id: { label: 'Item ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  inspection_date: { label: 'Inspection Date', type: 'date', faker: 'date.recent' },
  inspector: { label: 'Inspector', type: 'text', faker: 'name.fullName' },

  result: { label: 'Result', type: 'select', options: [{ id: 'pass', label: 'Pass' }, { id: 'fail', label: 'Fail' }, { id: 'conditional_pass', label: 'Conditional Pass' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  sample_size: { label: 'Sample Size', type: 'number', faker: 'datatype.number' },
  defects_found: { label: 'Defects Found', type: 'number', faker: 'datatype.number' },
  severity: { label: 'Severity', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'major', label: 'Major' }, { id: 'minor', label: 'Minor' }, { id: 'none', label: 'None' }], faker: 'random.arrayElement' },
  comments: { label: 'Comments', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  batch_number: { label: 'Batch Number', type: 'text', faker: 'random.alphaNumeric' }
};

export const entityName = 'Inspection Records';
export const collectionName = 'inspection_records';
