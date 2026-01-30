
export const fieldsConfig = {
  campaign_id: { label: 'Campaign ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  campaign_name: { label: 'Campaign Name', type: 'text', faker: 'lorem.words' },
  type: { label: 'Type', type: 'select', options: [{ id: 'email', label: 'Email' }, { id: 'social', label: 'Social' }, { id: 'ads', label: 'Ads' }, { id: 'event', label: 'Event' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'planning', label: 'Planning' }, { id: 'active', label: 'Active' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
  target_audience: { label: 'Audience', type: 'text', faker: 'lorem.words' },
  channels: { label: 'Channels', type: 'text', faker: 'lorem.words' },
  leads_generated: { label: 'Leads Generated', type: 'number', faker: 'datatype.number' },
  conversions: { label: 'Conversions', type: 'number', faker: 'datatype.number' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Campaigns';
export const collectionName = 'campaigns';
