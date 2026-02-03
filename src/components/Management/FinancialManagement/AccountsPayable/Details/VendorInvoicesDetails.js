
export const fieldsConfig = {
  gl_account: { label: 'GL Account', type: 'text', required: true, faker: 'finance.account' },
  cost_center: { label: 'Cost Center', type: 'text', faker: 'finance.accountName' },
  amount: { label: 'Amount', type: 'number', required: true, faker: 'finance.amount' },
  percentage: { label: 'Percentage (%)', type: 'number', faker: 'datatype.number' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  project_code: { label: 'Project', type: 'text', faker: 'datatype.string' }
};

export const entityName = 'GL Distributions';
export const collectionName = 'invoice_gl_distributions';
