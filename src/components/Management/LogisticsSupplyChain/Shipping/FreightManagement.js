
export const fieldsConfig = {
  freight_id: { label: 'Freight ID', type: 'text', faker: 'datatype.uuid' },
  carrier_id: { label: 'Carrier ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  mode: { label: 'Mode', type: 'select', options: [{ id: 'air', label: 'Air' }, { id: 'sea', label: 'Sea' }, { id: 'road', label: 'Road' }, { id: 'rail', label: 'Rail' }], faker: 'random.arrayElement' },

  weight_kg: { label: 'Weight (kg)', type: 'number', faker: 'datatype.float' },
  volume_cbm: { label: 'Volume (cbm)', type: 'number', faker: 'datatype.float' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  origin: { label: 'Origin', type: 'text', faker: 'address.city' },
  destination: { label: 'Destination', type: 'text', faker: 'address.city' },
  estimated_cost: { label: 'Estimated Cost', type: 'number', faker: 'finance.amount' },
  booking_ref: { label: 'Booking Ref', type: 'text', faker: 'random.alphaNumeric' }
};

export const entityName = 'Freight Management';
export const collectionName = 'freight_management';
