
export const fieldsConfig = {
  rate_id: { label: 'Rate ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period: { label: 'Period', type: 'text', faker: 'date.month' },
  source: { label: 'Source', type: 'text', faker: 'internet.domainWord' }, // e.g. Organic, Paid

  total_leads: { label: 'Total Leads', type: 'number', faker: 'datatype.number' },
  converted_leads: { label: 'Converted Leads', type: 'number', faker: 'datatype.number' },
  conversion_rate_percentage: { label: 'Conversion Rate (%)', type: 'number', faker: 'datatype.float' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'improving', label: 'Improving' }, { id: 'declining', label: 'Declining' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  campaign_id: { label: 'Campaign ID', type: 'text', faker: 'datatype.uuid' },
  avg_time_to_convert_days: { label: 'Avg Time to Convert (Days)', type: 'number', faker: 'datatype.float' },
  cost_per_acquisition: { label: 'CPA', type: 'number', faker: 'finance.amount' },
  industry_segment: { label: 'Industry Segment', type: 'text', faker: 'commerce.department' },
  region: { label: 'Region', type: 'text', faker: 'address.country' },
  analyst_comments: { label: 'Analyst Comments', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Lead Conversion Rates';
export const collectionName = 'lead_conversion_rates';