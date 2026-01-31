
export const fieldsConfig = {

  category_id: { label: 'Category ID', type: 'text', faker: 'datatype.uuid' },
  parent_category_id: { label: 'Parent Category ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  category_name: { label: 'Category Name', type: 'text', faker: 'commerce.department' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  slug: { label: 'Slug', type: 'text', faker: 'lorem.slug' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  image_url: { label: 'Image URL', type: 'text', faker: 'image.imageUrl' },
  display_order: { label: 'Display Order', type: 'number', faker: 'datatype.number' },
  e: 'text', faker: 'random.alphaNumeric',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Product Categories';
export const collectionName = 'product_categories';
