
export const fieldsConfig = {
  performance_id: { label: 'Performance ID', type: 'text', faker: 'datatype.uuid' },
  campaign_id: { label: 'Campaign ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  impressions: { label: 'Impressions', type: 'number', faker: 'datatype.number' },
  clicks: { label: 'Clicks', type: 'number', faker: 'datatype.number' },
  conversions: { label: 'Conversions', type: 'number', faker: 'datatype.number' },

  ctr: { label: 'CTR (%)', type: 'number', faker: 'datatype.float' }, // Click-through rate
  cpc: { label: 'CPC', type: 'number', faker: 'finance.amount' }, // Cost per click

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'high_performing', label: 'High Performing' }, { id: 'underperforming', label: 'Underperforming' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  date: { label: 'Date', type: 'date', faker: 'date.recent' },
  platform: { label: 'Platform', type: 'select', options: [{ id: 'google', label: 'Google' }, { id: 'facebook', label: 'Facebook' }, { id: 'linkedin', label: 'LinkedIn' }], faker: 'random.arrayElement' },
  spend: { label: 'Spend', type: 'number', faker: 'finance.amount' },
  roas: { label: 'ROAS', type: 'number', faker: 'datatype.float' }, // Return on Ad Spend
  bounce_rate: { label: 'Bounce Rate (%)', type: 'number', faker: 'datatype.float' },
  avg_session_duration: { label: 'Avg Session Duration', type: 'number', faker: 'datatype.float' },
  device_breakdown: { label: 'Device Breakdown', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Campaign Performance';
export const collectionName = 'campaign_performance';