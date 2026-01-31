
export const fieldsConfig = {

  location_id: { label: 'Location ID', type: 'text', faker: 'datatype.uuid' },
  warehouse_id: { label: 'Warehouse ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  zone: { label: 'Zone', type: 'text', faker: 'random.alpha' },
  aisle: { label: 'Aisle', type: 'number', faker: 'datatype.number' },
  rack: { label: 'Rack', type: 'number', faker: 'datatype.number' },
  shelf: { label: 'Shelf', type: 'number', faker: 'datatype.number' },
  bin: { label: 'Bin', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  capacity_volume: { label: 'Capacity Volume', type: 'number', faker: 'datatype.float' },
  capacity_weight: { label: 'Capacity Weight', type: 'number', faker: 'datatype.float' },
  is_occupied: { label: 'Is Occupied', type: 'checkbox', faker: 'datatype.boolean' },
  is_refrigerated: { label: 'Is Refrigerated', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Inventory Locations';
export const collectionName = 'inventory_locations';
