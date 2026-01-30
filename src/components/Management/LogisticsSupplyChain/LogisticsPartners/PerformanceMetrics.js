
export const fieldsConfig = {
  metric_id: { label: 'Metric ID', type: 'text', faker: 'datatype.uuid' },
  partner_id: { label: 'Partner ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  delivery_timeliness: { label: 'On-Time Delivery (%)', type: 'number', faker: 'datatype.float' },
  damage_rate: { label: 'Damage Rate (%)', type: 'number', faker: 'datatype.float' },

  cost_efficiency: { label: 'Cost Efficiency', type: 'number', faker: 'datatype.float' }, // Index score

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  period: { label: 'Period', type: 'text', faker: 'lorem.word' }, // Q1
  rating: { label: 'Overall Rating', type: 'number', faker: 'datatype.float' }, // 1-5
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Logistics Performance Metrics';
export const collectionName = 'logistics_performance_metrics';
