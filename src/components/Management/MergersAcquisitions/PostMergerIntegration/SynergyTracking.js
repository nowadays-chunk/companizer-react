
export const fieldsConfig = {

  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  synergy_category: { label: 'Synergy Category', type: 'select', options: [{ id: 'cost_saving', label: 'Cost Saving' }, { id: 'revenue_enhancement', label: 'Revenue Enhancement' }], faker: 'random.arrayElement' },

  projected_value: { label: 'Projected Value', type: 'number', faker: 'finance.amount' },
  realized_value: { label: 'Realized Value', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  measurement_period: { label: 'Measurement Period', type: 'text', faker: 'lorem.word' }, // Q1 2024
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'on_track', label: 'On Track' }, { id: 'at_risk', label: 'At Risk' }, { id: 'behind', label: 'Behind' }], faker: 'random.arrayElement' },
  variance_reason: { label: 'Variance Reason', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Synergy Tracking';
export const collectionName = 'synergy_tracking';