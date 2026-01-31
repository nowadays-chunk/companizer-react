
export const fieldsConfig = {

  layout_id: { label: 'Layout ID', type: 'text', faker: 'datatype.uuid' },
  warehouse_id: { label: 'Warehouse ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  layout_name: { label: 'Layout Name', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  blueprint_url: { label: 'Blueprint URL', type: 'text', faker: 'internet.url' },
  zones_count: { label: 'Zones Count', type: 'number', faker: 'datatype.number' },
  total_area_sqm: { label: 'Total Area (sqm)', type: 'number', faker: 'datatype.number' },
  last_updated: { label: 'Last Updated', type: 'date', faker: 'date.recent' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Warehouse Layouts';
export const collectionName = 'warehouse_layouts';
