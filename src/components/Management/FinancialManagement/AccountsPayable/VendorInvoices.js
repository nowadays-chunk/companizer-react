
export const fieldsConfig = {

  invoice_id: { label: 'Invoice ID', type: 'text', faker: 'datatype.uuid' },
  vendor_id: { label: 'Vendor ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  invoice_number: { label: 'Invoice Number', type: 'text', faker: 'finance.account' },
  invoice_date: { label: 'Invoice Date', type: 'date', faker: 'date.past' },
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },

  total_amount: { label: 'Total Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
// Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'received', label: 'Received' }, { id: 'approved', label: 'Approved' }, { id: 'paid', label: 'Paid' }, { id: 'disputed', label: 'Disputed' }], faker: 'random.arrayElement' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' }, // PO Number
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },
  payment_method: { label: 'Payment Method', type: 'select', options: [{ id: 'check', label: 'Check' }, { id: 'wire', label: 'Wire' }, { id: 'ach', label: 'ACH' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Vendor Invoices';
export const collectionName = 'vendor_invoices';
