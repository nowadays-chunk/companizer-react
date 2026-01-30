
export const fieldsConfig = {
  requisition_id: { label: 'Requisition ID', type: 'text', faker: 'datatype.uuid' },
  requester_id: { label: 'Requester ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },

  estimated_cost: { label: 'Estimated Cost', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  required_date: { label: 'Required Date', type: 'date', faker: 'date.future' },
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  justification: { label: 'Justification', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Purchase Requisitions';
export const collectionName = 'purchase_requisitions';
