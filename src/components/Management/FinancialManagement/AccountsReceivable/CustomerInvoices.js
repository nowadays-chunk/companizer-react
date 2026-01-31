
export const fieldsConfig = {

  invoice_id: { label: 'Invoice ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  invoice_number: { label: 'Invoice Number', type: 'text', faker: 'finance.account' },
  invoice_date: { label: 'Invoice Date', type: 'date', faker: 'date.recent' },
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },

  total_amount: { label: 'Total Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'sent', label: 'Sent' }, { id: 'paid', label: 'Paid' }, { id: 'overdue', label: 'Overdue' }, { id: 'partial', label: 'Partial' }], faker: 'random.arrayElement' },
  balance_due: { label: 'Balance Due', type: 'number', faker: 'finance.amount' },
  sales_order_id: { label: 'Sales Order ID', type: 'text', faker: 'datatype.uuid' },
  billing_address: { label: 'Billing Address', type: 'text', faker: 'address.streetAddress' },
  e: 'text', faker: 'finance.currencyCode',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Customer Invoices';
export const collectionName = 'customer_invoices';
