
export const fieldsConfig = {

  requisition_id: { label: 'Requisition ID', type: 'text', faker: 'datatype.uuid' },
  requester_id: { label: 'Requester ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },

  estimated_cost: { label: 'Estimated Cost', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  required_date: { label: 'Required Date', type: 'date', faker: 'date.future' },
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Purchase Requisitions';
export const collectionName = 'purchase_requisitions';
