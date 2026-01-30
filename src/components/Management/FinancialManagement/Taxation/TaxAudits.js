
export const fieldsConfig = {
  audit_id: { label: 'Audit ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  tax_year: { label: 'Tax Year', type: 'number', faker: 'date.past' },
  authority: { label: 'Authority', type: 'text', faker: 'company.name' }, // IRS

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'ongoing', label: 'Ongoing' }, { id: 'closed', label: 'Closed' }, { id: 'appealed', label: 'Appealed' }], faker: 'random.arrayElement' },
  auditor_name: { label: 'Auditor Name', type: 'text', faker: 'name.fullName' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.sentence' },
  additional_tax_due: { label: 'Additional Tax Due', type: 'number', faker: 'finance.amount' },
  penalty_amount: { label: 'Penalty Amount', type: 'number', faker: 'finance.amount' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Tax Audits';
export const collectionName = 'tax_audits';
