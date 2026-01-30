
export const fieldsConfig = {
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  product_name: { label: 'Product Name', type: 'text', faker: 'commerce.productName' },
  category: { label: 'Category', type: 'text', faker: 'commerce.department' },

  price: { label: 'Price', type: 'number', faker: 'commerce.price' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' }, // Duplicate of price, but required

  // Extras
  sku: { label: 'SKU', type: 'text', faker: 'random.alphaNumeric' },
  description: { label: 'Description', type: 'text', faker: 'commerce.productDescription' },
  stock_quantity: { label: 'Stock', type: 'number', faker: 'datatype.number' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'discontinued', label: 'Discontinued' }, { id: 'out_of_stock', label: 'Out of Stock' }], faker: 'random.arrayElement' },
  launch_date: { label: 'Launch Date', type: 'date', faker: 'date.past' },
  manufacturer: { label: 'Manufacturer', type: 'text', faker: 'company.name' },
  image_url: { label: 'Image URL', type: 'text', faker: 'internet.url' }
};

export const entityName = 'Products';
export const collectionName = 'products';