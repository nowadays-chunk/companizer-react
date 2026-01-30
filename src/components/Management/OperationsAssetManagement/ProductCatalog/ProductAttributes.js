
export const fieldsConfig = {
  attribute_id: { label: 'Attribute ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Name', type: 'text', faker: 'commerce.productMaterial' },
  value: { label: 'Value', type: 'text', faker: 'commerce.color' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  unit: { label: 'Unit', type: 'text', faker: 'scientific.unit' }, // e.g. kg, cm
  is_filterable: { label: 'Is Filterable', type: 'checkbox', faker: 'datatype.boolean' },
  is_variant: { label: 'Is Variant', type: 'checkbox', faker: 'datatype.boolean' },
  display_order: { label: 'Display Order', type: 'number', faker: 'datatype.number' }
};

export const entityName = 'Product Attributes';
export const collectionName = 'product_attributes';
