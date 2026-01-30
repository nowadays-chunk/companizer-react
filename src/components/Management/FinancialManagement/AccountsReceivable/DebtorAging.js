
export const fieldsConfig = {
  aging_id: { label: 'Aging ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  current_amount: { label: 'Current Amount', type: 'number', faker: 'finance.amount' },
  days_30_amount: { label: '30 Days', type: 'number', faker: 'finance.amount' },
  days_60_amount: { label: '60 Days', type: 'number', faker: 'finance.amount' },
  days_90_amount: { label: '90 Days', type: 'number', faker: 'finance.amount' },
  days_over_90: { label: 'Over 90 Days', type: 'number', faker: 'finance.amount' },

  total_due: { label: 'Total Due', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  report_date: { label: 'Report Date', type: 'date', faker: 'date.recent' },
  customer_name: { label: 'Customer Name', type: 'text', faker: 'company.name' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' }
};

export const entityName = 'Debtor Aging';
export const collectionName = 'debtor_aging';
