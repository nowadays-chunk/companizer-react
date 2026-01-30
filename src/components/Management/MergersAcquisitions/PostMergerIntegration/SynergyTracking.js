
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  synergy_category: { label: 'Synergy Category', type: 'select', options: [{ id: 'cost_saving', label: 'Cost Saving' }, { id: 'revenue_enhancement', label: 'Revenue Enhancement' }], faker: 'random.arrayElement' },

  projected_value: { label: 'Projected Value', type: 'number', faker: 'finance.amount' },
  realized_value: { label: 'Realized Value', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  measurement_period: { label: 'Measurement Period', type: 'text', faker: 'lorem.word' }, // Q1 2024
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'on_track', label: 'On Track' }, { id: 'at_risk', label: 'At Risk' }, { id: 'behind', label: 'Behind' }], faker: 'random.arrayElement' },
  variance_reason: { label: 'Variance Reason', type: 'text', faker: 'lorem.sentence' },
  last_updated: { label: 'Last Updated', type: 'date', faker: 'date.recent' }
};

export const entityName = 'Synergy Tracking';
export const collectionName = 'synergy_tracking';