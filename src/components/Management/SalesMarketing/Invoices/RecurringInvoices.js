
export const fieldsConfig = {

  recurring_id: { label: 'Recurring ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  frequency: { label: 'Frequency', type: 'select', options: [{ id: 'monthly', label: 'Monthly' }, { id: 'quarterly', label: 'Quarterly' }, { id: 'annually', label: 'Annually' }], faker: 'random.arrayElement' },
  next_invoice_date: { label: 'Next Invoice Date', type: 'date', faker: 'date.future' },

  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'paused', label: 'Paused' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },
  last_generated_date: { label: 'Last Generated Date', type: 'date', faker: 'date.recent' },
  template_id: { label: 'Template ID', type: 'text', faker: 'datatype.uuid' },
  auto_send: { label: 'Auto Send', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Recurring Invoices';
export const collectionName = 'recurring_invoices';