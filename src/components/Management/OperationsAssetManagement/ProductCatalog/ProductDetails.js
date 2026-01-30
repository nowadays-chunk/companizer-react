
export const fieldsConfig = {
  detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  long_description: { label: 'Long Description', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },
  technical_specs: { label: 'Technical Specs', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  warranty_info: { label: 'Warranty Info', type: 'text', faker: 'lorem.sentence' },
  dimensions: { label: 'Dimensions', type: 'text', faker: 'lorem.word' }, // e.g. 10x20x5 cm
  weight: { label: 'Weight', type: 'text', faker: 'lorem.word' }, // e.g. 1.5 kg
  material: { label: 'Material', type: 'text', faker: 'commerce.productMaterial' },
  country_of_origin: { label: 'Country of Origin', type: 'text', faker: 'address.country' },
  release_date: { label: 'Release Date', type: 'date', faker: 'date.past' }
};

export const entityName = 'Product Details';
export const collectionName = 'product_details';
