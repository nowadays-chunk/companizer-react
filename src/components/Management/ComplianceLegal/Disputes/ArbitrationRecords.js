
export const fieldsConfig = {

  arbitration_id: { label: 'Arbitration ID', type: 'text', faker: 'datatype.uuid' },
  dispute_id: { label: 'Dispute ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  arbitrator: { label: 'Arbitrator', type: 'text', faker: 'name.fullName' },
  hearing_date: { label: 'Hearing Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  institution: { label: 'Institution', type: 'text', faker: 'company.name' }, // AAA, ICC
  outcome: { label: 'Outcome', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  status: { label: 'Status', type: 'select', options: [{ id: 'scheduled', label: 'Scheduled' }, { id: 'ongoing', label: 'Ongoing' }, { id: 'concluded', label: 'Concluded' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Arbitration Records';
export const collectionName = 'arbitration_records';
