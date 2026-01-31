
export const fieldsConfig = {

  billable_id: { label: 'Billable ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  date: { label: 'Date', type: 'date', faker: 'date.recent' },
  hours: { label: 'Hours', type: 'number', faker: 'datatype.float' },

  rate: { label: 'Rate', type: 'number', faker: 'finance.amount' },
  total_amount: { label: 'Total Amount', type: 'number', faker: 'finance.amount' },

  status: { label: 'Status', type: 'select', options: [{ id: 'billed', label: 'Billed' }, { id: 'unbilled', label: 'Unbilled' }, { id: 'approved', label: 'Approved' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  task_id: { label: 'Task ID', type: 'text', faker: 'datatype.uuid' },
  invoice_id: { label: 'Invoice ID', type: 'text', faker: 'datatype.uuid' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  e: 'text', faker: 'finance.currencyCode',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Billable Hours';
export const collectionName = 'billable_hours';
