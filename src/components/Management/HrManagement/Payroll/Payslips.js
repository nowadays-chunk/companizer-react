
export const fieldsConfig = {
  payslip_id: { label: 'Payslip ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period_start: { label: 'Period Start', type: 'date', faker: 'date.past' },
  period_end: { label: 'Period End', type: 'date', faker: 'date.recent' },

  gross_pay: { label: 'Gross Pay', type: 'number', faker: 'finance.amount' },
  net_pay: { label: 'Net Pay', type: 'number', faker: 'finance.amount' },

  deductions: { label: 'Deductions', type: 'number', faker: 'finance.amount' },
  taxes: { label: 'Taxes', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  payment_date: { label: 'Payment Date', type: 'date', faker: 'date.recent' },
  status: { label: 'Status', type: 'select', options: [{ id: 'generated', label: 'Generated' }, { id: 'sent', label: 'Sent' }, { id: 'paid', label: 'Paid' }], faker: 'random.arrayElement' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Payslips';
export const collectionName = 'payslips';
