
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  initiative_id: { label: 'Initiative ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  month: { label: 'Month', type: 'text', faker: 'date.month' },
  year: { label: 'Year', type: 'number', faker: 'date.past' },

  kwh_saved: { label: 'kWh Saved', type: 'number', faker: 'datatype.number' },
  cost_saved: { label: 'Cost Saved', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  baseline_usage: { label: 'Baseline Usage', type: 'number', faker: 'datatype.number' },
  actual_usage: { label: 'Actual Usage', type: 'number', faker: 'datatype.number' },
  weather_adjustment: { label: 'Weather Adjustment', type: 'number', faker: 'datatype.float' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  verified: { label: 'Verified', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Energy Savings Tracking';
export const collectionName = 'energy_savings_tracking';
