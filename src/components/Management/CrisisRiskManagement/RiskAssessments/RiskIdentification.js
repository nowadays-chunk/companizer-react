
export const fieldsConfig = {

  risk_id: { label: 'Risk ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' }, // Optional link
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  risk_name: { label: 'Risk Name', type: 'text', faker: 'lorem.words' },
  category: { label: 'Category', type: 'select', options: [{ id: 'financial', label: 'Financial' }, { id: 'strategic', label: 'Strategic' }, { id: 'operational', label: 'Operational' }, { id: 'compliance', label: 'Compliance' }], faker: 'random.arrayElement' },

  risk_owner: { label: 'Risk Owner', type: 'text', faker: 'name.fullName' },
  date_identified: { label: 'Date Identified', type: 'date', faker: 'date.past' },

  // Mandated
  // Extras
  identified_by: { label: 'Identified By', type: 'text', faker: 'name.fullName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  root_cause: { label: 'Root Cause', type: 'text', faker: 'lorem.sentence' },
  potential_impact: { label: 'Potential Impact', type: 'text', faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'mitigated', label: 'Mitigated' }, { id: 'closed', label: 'Closed' }, { id: 'accepted', label: 'Accepted' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Risk Identification';
export const collectionName = 'risk_identification';
