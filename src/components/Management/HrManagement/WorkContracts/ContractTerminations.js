
export const fieldsConfig = {

  termination_id: { label: 'Termination ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  termination_date: { label: 'Termination Date', type: 'date', faker: 'date.recent' },
  reason: { label: 'Reason', type: 'select', options: [{ id: 'resignation', label: 'Resignation' }, { id: 'redundancy', label: 'Redundancy' }, { id: 'dismissal', label: 'Dismissal' }, { id: 'retirement', label: 'Retirement' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  notice_period_served: { label: 'Notice Served', type: 'checkbox', faker: 'datatype.boolean' },
  exit_interview_completed: { label: 'Exit Interview', type: 'checkbox', faker: 'datatype.boolean' },
  final_payout_amount: { label: 'Final Payout', type: 'number', faker: 'finance.amount' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contract Terminations';
export const collectionName = 'contract_terminations';
