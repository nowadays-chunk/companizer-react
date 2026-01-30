
export const fieldsConfig = {
  po_id: { label: 'PO ID', type: 'text', faker: 'datatype.uuid' },
  supplier_id: { label: 'Supplier ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  po_number: { label: 'PO Number', type: 'text', faker: 'finance.account' },
  po_date: { label: 'PO Date', type: 'date', faker: 'date.recent' },

  total_amount: { label: 'Total Amount', type: 'number', faker: 'finance.amount' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'issued', label: 'Issued' }, { id: 'accepted', label: 'Accepted' }, { id: 'fulfilled', label: 'Fulfilled' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' },
  delivery_date: { label: 'Delivery Date', type: 'date', faker: 'date.future' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Purchase Orders';
export const collectionName = 'purchase_orders';
