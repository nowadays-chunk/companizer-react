
export const fieldsConfig = {
  case_id: { label: 'Case ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  case_name: { label: 'Case Name', type: 'text', faker: 'lorem.sentence' },
  case_type: { label: 'Case Type', type: 'select', options: [{ id: 'civil', label: 'Civil' }, { id: 'criminal', label: 'Criminal' }, { id: 'administrative', label: 'Administrative' }], faker: 'random.arrayElement' },

  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }, { id: 'suspended', label: 'Suspended' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  lead_attorney: { label: 'Lead Attorney', type: 'text', faker: 'name.fullName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  open_date: { label: 'Open Date', type: 'date', faker: 'date.past' },
  close_date: { label: 'Close Date', type: 'date', faker: 'date.future' },
  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
  outcome_summary: { label: 'Outcome Summary', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Legal Case Management';
export const collectionName = 'legal_case_management';
