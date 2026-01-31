
export const fieldsConfig = {

  plan_id: { label: 'Plan ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  campaign_name: { label: 'Campaign Name', type: 'text', faker: 'commerce.productName' },
  objective: { label: 'Objective', type: 'text', faker: 'lorem.sentence' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.future' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },

  status: { label: 'Status', type: 'select', options: [{ id: 'planned', label: 'Planned' }, { id: 'approved', label: 'Approved' }, { id: 'active', label: 'Active' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  channel_strategy: { label: 'Channel Strategy', type: 'text', faker: 'lorem.sentence' },
  target_audience: { label: 'Target Audience', type: 'text', faker: 'lorem.words' },
  key_message: { label: 'Key Message', type: 'text', faker: 'lorem.sentence' },
  creative_assets_url: { label: 'Creative Assets URL', type: 'text', faker: 'internet.url' },
  manager_id: { label: 'Manager ID', type: 'text', faker: 'datatype.uuid' },
  agency_id: { label: 'Agency ID', type: 'text', faker: 'datatype.uuid' }, // Partner agency,
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Campaign Planning';
export const collectionName = 'campaign_planning';