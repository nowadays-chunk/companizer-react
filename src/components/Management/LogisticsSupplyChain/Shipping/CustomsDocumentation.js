
export const fieldsConfig = {

  doc_id: { label: 'Doc ID', type: 'text', faker: 'datatype.uuid' },
  shipment_id: { label: 'Shipment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  doc_type: { label: 'Doc Type', type: 'select', options: [{ id: 'commercial_invoice', label: 'Commercial Invoice' }, { id: 'packing_list', label: 'Packing List' }, { id: 'bill_of_lading', label: 'Bill of Lading' }], faker: 'random.arrayElement' },

  declaration_date: { label: 'Declaration Date', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  customs_value: { label: 'Customs Value', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'submitted', label: 'Submitted' }, { id: 'cleared', label: 'Cleared' }, { id: 'held', label: 'Held' }], faker: 'random.arrayElement' },
  reference_number: { label: 'Reference #', type: 'text', faker: 'random.alphaNumeric' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Customs Documentation';
export const collectionName = 'customs_documentation';