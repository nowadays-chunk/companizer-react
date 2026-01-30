
export const fieldsConfig = {
  analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  region: { label: 'Region', type: 'text', faker: 'address.country' },
  market_segment: { label: 'Market Segment', type: 'text', faker: 'commerce.department' },

  market_size: { label: 'Market Size', type: 'number', faker: 'finance.amount' },
  growth_rate: { label: 'Growth Rate (%)', type: 'number', faker: 'datatype.float' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'emerging', label: 'Emerging' }, { id: 'mature', label: 'Mature' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  competitor_count: { label: 'Competitor Count', type: 'number', faker: 'datatype.number' },
  opportunities: { label: 'Opportunities', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  threats: { label: 'Threats', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  report_date: { label: 'Report Date', type: 'date', faker: 'date.recent' },
  analyst_id: { label: 'Analyst ID', type: 'text', faker: 'datatype.uuid' },
  market_share_potential: { label: 'Market Share Potential (%)', type: 'number', faker: 'datatype.float' }
};

export const entityName = 'Market Analysis';
export const collectionName = 'market_analysis';