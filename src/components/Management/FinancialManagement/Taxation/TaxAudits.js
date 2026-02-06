import modules from './Modules/TaxAudits';

export const fieldsConfig = {
  audit_id: { label: 'Audit ID', type: 'text', faker: 'string.alphanumeric' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
  tax_year: { label: 'Tax Year', type: 'number', faker: 'date.past' }, // Will need year extraction in renderer
  authority: { label: 'Tax Authority', type: 'text', faker: 'company.name' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  status: {
    label: 'Status',
    type: 'select',
    options: [
      { id: 'Planned', label: 'Planned' },
      { id: 'Active', label: 'Active' },
      { id: 'Closed', label: 'Closed' },
      { id: 'Appealed', label: 'Appealed' }
    ],
    faker: 'helpers.arrayElement'
  },
  auditor_name: { label: 'Auditor Name', type: 'text', faker: 'person.fullName' },
  outcome: { label: 'Outcome', type: 'text', faker: 'lorem.sentence' },
  additional_tax_due: { label: 'Additional Tax Due', type: 'number', faker: 'finance.amount' },
  penalty_amount: { label: 'Penalty Amount', type: 'number', faker: 'finance.amount' },
  processing_step: {
    label: 'Processing Step',
    type: 'select',
    options: [
      { id: 'Notification', label: 'Notification' },
      { id: 'Field Work', label: 'Field Work' },
      { id: 'Review', label: 'Review' },
      { id: 'Appeals', label: 'Appealed' },
      { id: 'Settlement', label: 'Settlement' }
    ],
    faker: 'helpers.arrayElement'
  },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Tax Audits';
export const collectionName = 'tax_audits';

export { modules };
