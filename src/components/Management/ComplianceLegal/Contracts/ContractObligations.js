export const fieldsConfig = {

  obligation_id: { label: 'Obligation ID', type: 'text', faker: 'datatype.uuid' },
  contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'fulfilled', label: 'Fulfilled' }, { id: 'breached', label: 'Breached' }], faker: 'random.arrayElement' },
  party_responsible: { label: 'Party Responsible', type: 'text', faker: 'company.name' }, // Us or Them
  penalty_clause: { label: 'Penalty', type: 'text', faker: 'lorem.sentence' },
  completion_evidence: { label: 'Evidence', type: 'text', faker: 'internet.url' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contract Obligations';
export const collectionName = 'contract_obligations';
