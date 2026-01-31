
export const fieldsConfig = {
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
  // Standard Detail Fields
  detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
  parent_id: { label: 'Parent ID', type: 'text', faker: 'datatype.uuid' }, // Foreign key to parent entity

  item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },

  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' }
};

export const entityName = 'Property Details';
export const collectionName = 'property_details';
