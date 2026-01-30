
export const fieldsConfig = {
  action_id: { label: 'Action ID', type: 'text', faker: 'datatype.uuid' },
  ncr_id: { label: 'NCR ID', type: 'text', faker: 'datatype.uuid' }, // Non-Conformance Report
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  assigned_to: { label: 'Assigned To', type: 'text', faker: 'name.fullName' },

  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'in_progress', label: 'In Progress' }, { id: 'closed', label: 'Closed' }, { id: 'verified', label: 'Verified' }], faker: 'random.arrayElement' },
  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.recent' },
  verification_date: { label: 'Verification Date', type: 'date', faker: 'date.future' },
  verified_by: { label: 'Verified By', type: 'text', faker: 'name.fullName' },
  effectiveness: { label: 'Effectiveness', type: 'select', options: [{ id: 'effective', label: 'Effective' }, { id: 'ineffective', label: 'Ineffective' }], faker: 'random.arrayElement' }
};

export const entityName = 'Corrective Actions';
export const collectionName = 'corrective_actions';
