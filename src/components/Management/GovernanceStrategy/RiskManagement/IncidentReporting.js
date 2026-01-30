
export const fieldsConfig = {
  incident_id: { label: 'Incident ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  severity: { label: 'Severity', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },

  incident_date: { label: 'Incident Date', type: 'date', faker: 'date.recent' },
  reported_by: { label: 'Reported By', type: 'text', faker: 'name.fullName' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'investigating', label: 'Investigating' }, { id: 'resolved', label: 'Resolved' }, { id: 'closed', label: 'Closed' }], faker: 'random.arrayElement' },
  resolution_summary: { label: 'Resolution Summary', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  root_cause_analysis: { label: 'Root Cause Analysis', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  time_to_resolve_hours: { label: 'Time To Resolve (Hours)', type: 'number', faker: 'datatype.float' }
};

export const entityName = 'Incident Reporting';
export const collectionName = 'incident_reporting';