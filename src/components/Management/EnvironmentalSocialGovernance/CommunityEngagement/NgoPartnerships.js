
export const fieldsConfig = {

  partnership_id: { label: 'Partnership ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  ngo_name: { label: 'NGO Name', type: 'text', faker: 'company.name' },
  contact_person: { label: 'Contact Person', type: 'text', faker: 'name.fullName' },

  partnership_type: { label: 'Partnership Type', type: 'select', options: [{ id: 'strategic', label: 'Strategic' }, { id: 'transactional', label: 'Transactional' }, { id: 'philanthropic', label: 'Philanthropic' }], faker: 'random.arrayElement' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },

  // Mandated
  // Contribution amount?

  // Extras
  annual_contribution: { label: 'Annual Contribution', type: 'number', faker: 'finance.amount' },
  objectives: { label: 'Objectives', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  impact_report_received: { label: 'Impact Report Received', type: 'checkbox', faker: 'datatype.boolean' },
  renewal_date: { label: 'Renewal Date', type: 'date', faker: 'date.future' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'paused', label: 'Paused' }, { id: 'ended', label: 'Ended' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'NGO Partnerships';
export const collectionName = 'ngo_partnerships';
