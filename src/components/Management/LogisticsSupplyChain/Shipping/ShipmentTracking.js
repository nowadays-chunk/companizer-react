
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  freight_id: { label: 'Freight ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  timestamp: { label: 'Timestamp', type: 'datetime', faker: 'date.recent' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  status: { label: 'Status', type: 'text', faker: 'lorem.word' }, // "In Transit"

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  coordinates: { label: 'Coordinates', type: 'text', faker: 'address.latitude' }, // lat, long
  updated_by: { label: 'Updated By', type: 'text', faker: 'name.fullName' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Shipment Tracking';
export const collectionName = 'shipment_tracking';
