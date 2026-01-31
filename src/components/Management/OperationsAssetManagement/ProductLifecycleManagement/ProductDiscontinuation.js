
export const fieldsConfig = {

  discontinuation_id: { label: 'Discontinuation ID', type: 'text', faker: 'datatype.uuid' },
  product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  reason: { label: 'Reason', type: 'select', options: [{ id: 'low_sales', label: 'Low Sales' }, { id: 'obsolete', label: 'Obsolete' }, { id: 'regulatory', label: 'Regulatory' }, { id: 'strategic', label: 'Strategic' }], faker: 'random.arrayElement' },

  decision_date: { label: 'Decision Date', type: 'date', faker: 'date.past' },
  end_of_life_date: { label: 'End of Life Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  phase_out_plan: { label: 'Phase Out Plan', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  replacement_product_id: { label: 'Replacement Product ID', type: 'text', faker: 'datatype.uuid' },
  inventory_action: { label: 'Inventory Action', type: 'select', options: [{ id: 'clearance', label: 'Clearance' }, { id: 'scrap', label: 'Scrap' }, { id: 'return', label: 'Return' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Product Discontinuation';
export const collectionName = 'product_discontinuation';
