
export const fieldsConfig = {

  hardware_id: { label: 'Hardware ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  device_name: { label: 'Device Name', type: 'text', faker: 'hacker.noun' },
  serial_number: { label: 'Serial Number', type: 'text', faker: 'finance.account' },

  type: { label: 'Type', type: 'select', options: [{ id: 'laptop', label: 'Laptop' }, { id: 'server', label: 'Server' }, { id: 'mobile', label: 'Mobile' }], faker: 'random.arrayElement' },

  purchase_date: { label: 'Purchase Date', type: 'date', faker: 'date.past' },
  warranty_expiry: { label: 'Warranty Expiry', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  manufacturer: { label: 'Manufacturer', type: 'text', faker: 'company.name' },
  model: { label: 'Model', type: 'text', faker: 'lorem.word' },
  assigned_user_id: { label: 'Assigned User ID', type: 'text', faker: 'datatype.uuid' },
  status: { label: 'Status', type: 'select', options: [{ id: 'in_use', label: 'In Use' }, { id: 'stock', label: 'In Stock' }, { id: 'repair', label: 'In Repair' }], faker: 'random.arrayElement' },
  specifications: { label: 'Specifications', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  ype: 'text', faker: 'random.alphaNumeric',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Hardware Inventory';
export const collectionName = 'hardware_inventory';
