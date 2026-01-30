
export const fieldsConfig = {
  risk_id: { label: 'Risk ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Risk Title', type: 'text', faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  type: { label: 'Type', type: 'select', options: [{ id: 'financial', label: 'Financial' }, { id: 'operational', label: 'Operational' }, { id: 'strategic', label: 'Strategic' }, { id: 'compliance', label: 'Compliance' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  probability: { label: 'Probability', type: 'select', options: [{ id: 'low', label: 'Low' }, { id: 'medium', label: 'Medium' }, { id: 'high', label: 'High' }], faker: 'random.arrayElement' },
  impact: { label: 'Impact', type: 'select', options: [{ id: 'low', label: 'Low' }, { id: 'medium', label: 'Medium' }, { id: 'high', label: 'High' }, { id: 'catastrophic', label: 'Catastrophic' }], faker: 'random.arrayElement' },
  mitigation_strategy: { label: 'Mitigation', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'identified', label: 'Identified' }, { id: 'mitigated', label: 'Mitigated' }, { id: 'occurred', label: 'Occurred' }, { id: 'closed', label: 'Closed' }], faker: 'random.arrayElement' },
  date_identified: { label: 'Date Identified', type: 'date', faker: 'date.recent' }
};

export const entityName = 'Risks';
export const collectionName = 'risks';