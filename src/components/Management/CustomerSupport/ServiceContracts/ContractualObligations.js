
export const fieldsConfig = {

  obligation_id: { label: 'Obligation ID', type: 'text', faker: 'datatype.uuid' },
  contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'fulfilled', label: 'Fulfilled' }, { id: 'breached', label: 'Breached' }], faker: 'random.arrayElement' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'standard', label: 'Standard' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  penalty_clause: { label: 'Penalty Clause', type: 'text', faker: 'lorem.sentence' },
  penalty_amount: { label: 'Penalty Amount', type: 'number', faker: 'finance.amount' },
  fulfillment_date: { label: 'Fulfillment Date', type: 'date', faker: 'date.recent' },
  verified_by: { label: 'Verified By', type: 'text', faker: 'name.fullName' },
  priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contractual Obligations';
export const collectionName = 'contractual_obligations';
