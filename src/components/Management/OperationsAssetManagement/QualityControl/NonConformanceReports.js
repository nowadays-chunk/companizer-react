
export const fieldsConfig = {

  ncr_id: { label: 'NCR ID', type: 'text', faker: 'datatype.uuid' },
  item_id: { label: 'Item ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  detected_by: { label: 'Detected By', type: 'text', faker: 'name.fullName' },
  date_detected: { label: 'Date Detected', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  severity: { label: 'Severity', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'major', label: 'Major' }, { id: 'minor', label: 'Minor' }], faker: 'random.arrayElement' },
  disposition: { label: 'Disposition', type: 'select', options: [{ id: 'scrap', label: 'Scrap' }, { id: 'rework', label: 'Rework' }, { id: 'use_as_is', label: 'Use As Is' }, { id: 'return_to_vendor', label: 'Return to Vendor' }], faker: 'random.arrayElement' },
  root_cause: { label: 'Root Cause', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Non-Conformance Reports';
export const collectionName = 'non_conformance_reports';
