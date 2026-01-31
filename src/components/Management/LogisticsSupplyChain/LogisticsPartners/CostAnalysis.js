
export const fieldsConfig = {

  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  shipment_id: { label: 'Shipment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  route_id: { label: 'Route ID', type: 'text', faker: 'datatype.uuid' },
  estimated_cost: { label: 'Estimated Cost', type: 'number', faker: 'finance.amount' },
  actual_cost: { label: 'Actual Cost', type: 'number', faker: 'finance.amount' },

  variance: { label: 'Variance', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  cost_breakdown: { label: 'Breakdown', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' }, // Fuel, tolls, taxes
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Logistics Cost Analysis';
export const collectionName = 'logistics_cost_analysis';
