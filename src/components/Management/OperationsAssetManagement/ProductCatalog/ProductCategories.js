
export const fieldsConfig = {
  category_id: { label: 'Category ID', type: 'text', faker: 'datatype.uuid' },
  parent_category_id: { label: 'Parent Category ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  category_name: { label: 'Category Name', type: 'text', faker: 'commerce.department' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  slug: { label: 'Slug', type: 'text', faker: 'lorem.slug' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  image_url: { label: 'Image URL', type: 'text', faker: 'image.imageUrl' },
  display_order: { label: 'Display Order', type: 'number', faker: 'datatype.number' },
  tax_code: { label: 'Tax Code', type: 'text', faker: 'random.alphaNumeric' }
};

export const entityName = 'Product Categories';
export const collectionName = 'product_categories';
