
export const fieldsConfig = {
  consumption_id: { label: 'Consumption ID', type: 'text', faker: 'datatype.uuid' },
  facility_id: { label: 'Facility ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  meter_reading: { label: 'Meter Reading', type: 'number', faker: 'datatype.number' },
  reading_date: { label: 'Reading Date', type: 'date', faker: 'date.recent' },

  utility_provider: { label: 'Utility Provider', type: 'text', faker: 'company.name' },
  energy_type: { label: 'Energy Type', type: 'select', options: [{ id: 'electricity', label: 'Electricity' }, { id: 'gas', label: 'Gas' }, { id: 'water', label: 'Water' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  usage_amount: { label: 'Usage Amount', type: 'number', faker: 'datatype.float' },
  unit: { label: 'Unit', type: 'text', faker: 'scientific.unit' },
  cost: { label: 'Cost', type: 'number', faker: 'finance.amount' },
  peak_demand: { label: 'Peak Demand', type: 'number', faker: 'datatype.float' },
  is_estimated: { label: 'Is Estimated', type: 'checkbox', faker: 'datatype.boolean' },
  invoice_ref: { label: 'Invoice Ref', type: 'text', faker: 'finance.account' }
};

export const entityName = 'Energy Consumption';
export const collectionName = 'energy_consumption';
