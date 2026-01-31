
export const fieldsConfig = {

  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  freight_id: { label: 'Freight ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  timestamp: { label: 'Timestamp', type: 'datetime', faker: 'date.recent' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  status: { label: 'Status', type: 'text', faker: 'lorem.word' }, // "In Transit"

  // Mandated
  // Extras
  coordinates: { label: 'Coordinates', type: 'text', faker: 'address.latitude' }, // lat, long
  updated_by: { label: 'Updated By', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Shipment Tracking';
export const collectionName = 'shipment_tracking';
