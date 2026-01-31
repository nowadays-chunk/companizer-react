
export const fieldsConfig = {

  sourcing_id: { label: 'Sourcing ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  material: { label: 'Material', type: 'text', faker: 'commerce.productMaterial' },
  supplier: { label: 'Supplier', type: 'text', faker: 'company.name' },

  percentage_sustainable: { label: 'Sustainable (%)', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  certification_type: { label: 'Certification', type: 'text', faker: 'lorem.word' }, // Fair Trade, FSC
  volume_purchased: { label: 'Volume', type: 'number', faker: 'datatype.float' },
  cost_premium: { label: 'Cost Premium (%)', type: 'number', faker: 'datatype.float' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Sustainable Sourcing';
export const collectionName = 'sustainable_sourcing';
