
export const fieldsConfig = {
  property_id: { label: 'Property ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Name', type: 'text', faker: 'address.streetName' },
  address: { label: 'Address', type: 'text', faker: 'address.streetAddress' },
  city: { label: 'City', type: 'text', faker: 'address.city' },
  country: { label: 'Country', type: 'text', faker: 'address.country' },

  property_type: { label: 'Type', type: 'select', options: [{ id: 'office', label: 'Office' }, { id: 'warehouse', label: 'Warehouse' }, { id: 'retail', label: 'Retail' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  square_footage: { label: 'Square Footage', type: 'number', faker: 'datatype.number' },
  purchase_price: { label: 'Purchase Price', type: 'number', faker: 'finance.amount' },
  purchase_date: { label: 'Purchase Date', type: 'date', faker: 'date.past' },
  current_value: { label: 'Current Value', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'owned', label: 'Owned' }, { id: 'leased', label: 'Leased' }, { id: 'sold', label: 'Sold' }], faker: 'random.arrayElement' },
  manager_contact: { label: 'Manager Contact', type: 'text', faker: 'name.fullName' },
  image_url: { label: 'Image URL', type: 'text', faker: 'image.imageUrl' }
};

export const entityName = 'Property Details';
export const collectionName = 'property_details';
