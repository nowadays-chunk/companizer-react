
export const fieldsConfig = {

  metric_id: { label: 'Metric ID', type: 'text', faker: 'datatype.uuid' },
  partner_id: { label: 'Partner ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  delivery_timeliness: { label: 'On-Time Delivery (%)', type: 'number', faker: 'datatype.float' },
  damage_rate: { label: 'Damage Rate (%)', type: 'number', faker: 'datatype.float' },

  cost_efficiency: { label: 'Cost Efficiency', type: 'number', faker: 'datatype.float' }, // Index score

  // Mandated
  // Extras
  period: { label: 'Period', type: 'text', faker: 'lorem.word' }, // Q1
  rating: { label: 'Overall Rating', type: 'number', faker: 'datatype.float' }, // 1-5,
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Logistics Performance Metrics';
export const collectionName = 'logistics_performance_metrics';
