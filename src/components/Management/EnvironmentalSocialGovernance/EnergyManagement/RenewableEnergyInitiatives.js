
export const fieldsConfig = {
  initiative_id: { label: 'Initiative ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Name', type: 'text', faker: 'lorem.words' },
  type: { label: 'Type', type: 'select', options: [{ id: 'solar', label: 'Solar' }, { id: 'wind', label: 'Wind' }, { id: 'geothermal', label: 'Geothermal' }], faker: 'random.arrayElement' },

  capacity_kw: { label: 'Capacity (kW)', type: 'number', faker: 'datatype.number' },
  installation_date: { label: 'Installation Date', type: 'date', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  installer: { label: 'Installer', type: 'text', faker: 'company.name' },
  investment_cost: { label: 'Investment Cost', type: 'number', faker: 'finance.amount' },
  annual_output_kwh: { label: 'Annual Output (kWh)', type: 'number', faker: 'datatype.number' },
  maintenance_schedule: { label: 'Maintenance Schedule', type: 'text', faker: 'lorem.word' },
  status: { label: 'Status', type: 'select', options: [{ id: 'planning', label: 'Planning' }, { id: 'operational', label: 'Operational' }, { id: 'decommissioned', label: 'Decommissioned' }], faker: 'random.arrayElement' }
};

export const entityName = 'Renewable Energy Initiatives';
export const collectionName = 'renewable_energy_initiatives';
