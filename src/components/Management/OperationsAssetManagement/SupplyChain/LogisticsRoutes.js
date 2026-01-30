
export const fieldsConfig = {
  route_id: { label: 'Route ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  route_name: { label: 'Route Name', type: 'text', faker: 'address.city' }, // e.g. "NY to Boston"
  start_point: { label: 'Start Point', type: 'text', faker: 'address.city' },
  end_point: { label: 'End Point', type: 'text', faker: 'address.city' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  estimated_distance_km: { label: 'Distance (km)', type: 'number', faker: 'datatype.number' },
  estimated_time_hours: { label: 'Time (hours)', type: 'number', faker: 'datatype.float' },
  carrier: { label: 'Carrier', type: 'text', faker: 'company.name' },
  vehicle_type: { label: 'Vehicle Type', type: 'select', options: [{ id: 'truck', label: 'Truck' }, { id: 'van', label: 'Van' }, { id: 'sea', label: 'Sea' }, { id: 'air', label: 'Air' }], faker: 'random.arrayElement' },
  cost_per_trip: { label: 'Cost Per Trip', type: 'number', faker: 'finance.amount' },
  frequency: { label: 'Frequency', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'Logistics Routes';
export const collectionName = 'logistics_routes';
