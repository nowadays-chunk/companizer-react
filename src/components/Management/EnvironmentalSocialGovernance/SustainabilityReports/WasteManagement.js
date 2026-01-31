
export const fieldsConfig = {

  record_id: { label: 'Record ID', type: 'text', faker: 'datatype.uuid' },
  facility_id: { label: 'Facility ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  waste_type: { label: 'Waste Type', type: 'select', options: [{ id: 'recyclable', label: 'Recyclable' }, { id: 'hazardous', label: 'Hazardous' }, { id: 'general', label: 'General' }, { id: 'compost', label: 'Compost' }], faker: 'random.arrayElement' },

  weight_kg: { label: 'Weight (kg)', type: 'number', faker: 'datatype.float' },
  collection_date: { label: 'Collection Date', type: 'date', faker: 'date.recent' },

  disposal_method: { label: 'Disposal Method', type: 'select', options: [{ id: 'landfill', label: 'Landfill' }, { id: 'recycle_center', label: 'Recycle Center' }, { id: 'incineration', label: 'Incineration' }], faker: 'random.arrayElement' },

  // Mandated
  // Cost per kg?

  // Extras
  vendor: { label: 'Vendor', type: 'text', faker: 'company.name' },
  cost: { label: 'Cost', type: 'number', faker: 'finance.amount' },
  manifest_number: { label: 'Manifest Number', type: 'text', faker: 'finance.account' },
  diversion_rate: { label: 'Diversion Rate', type: 'number', faker: 'datatype.float' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Waste Management';
export const collectionName = 'waste_management';
