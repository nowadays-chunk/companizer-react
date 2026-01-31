
export const fieldsConfig = {

  monitoring_id: { label: 'Monitoring ID', type: 'text', faker: 'datatype.uuid' },
  ip_asset_id: { label: 'IP Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  alert_date: { label: 'Alert Date', type: 'date', faker: 'date.recent' },
  source: { label: 'Source', type: 'text', faker: 'lorem.word' }, // e.g. "Trademark Watch"

  potential_infringement: { label: 'Potential Infringement', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  severity: { label: 'Severity', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  action_taken: { label: 'Action Taken', type: 'select', options: [{ id: 'ignore', label: 'Ignore' }, { id: 'cease_desist', label: 'Cease & Desist' }, { id: 'investigate', label: 'Investigate' }], faker: 'random.arrayElement' },
  analyst: { label: 'Analyst', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'IP Monitoring';
export const collectionName = 'ip_monitoring';
