
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  reporting_period: { label: 'Reporting Period', type: 'text', faker: 'lorem.word' }, // Q1 2024
  scope_1_emissions: { label: 'Scope 1 Emissions', type: 'number', faker: 'datatype.float' }, // Direct
  scope_2_emissions: { label: 'Scope 2 Emissions', type: 'number', faker: 'datatype.float' }, // Indirect energy
  scope_3_emissions: { label: 'Scope 3 Emissions', type: 'number', faker: 'datatype.float' }, // Supply chain

  total_emissions: { label: 'Total Emissions', type: 'number', faker: 'datatype.float' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  unit: { label: 'Unit', type: 'text', defaultValue: 'MT CO2e', faker: 'scientific.unit' },
  calculation_method: { label: 'Calculation Method', type: 'text', faker: 'lorem.word' }, // GHG Protocol
  verified_by: { label: 'Verified By', type: 'text', faker: 'company.name' },
  offset_purchased: { label: 'Offset Purchased', type: 'number', faker: 'datatype.float' },
  net_emissions: { label: 'Net Emissions', type: 'number', faker: 'datatype.float' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Carbon Footprint Tracking';
export const collectionName = 'carbon_footprint_tracking';
