
export const fieldsConfig = {
  bonus_id: { label: 'Bonus ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  bonus_type: { label: 'Type', type: 'select', options: [{ id: 'performance', label: 'Performance' }, { id: 'signing', label: 'Signing' }, { id: 'retention', label: 'Retention' }, { id: 'holiday', label: 'Holiday' }], faker: 'random.arrayElement' },
  amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },

  date_awarded: { label: 'Date Awarded', type: 'date', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  reason: { label: 'Reason', type: 'text', faker: 'lorem.sentence' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'paid', label: 'Paid' }], faker: 'random.arrayElement' },
  payout_date: { label: 'Payout Date', type: 'date', faker: 'date.future' }
};

export const entityName = 'Bonuses & Incentives';
export const collectionName = 'bonuses_incentives';
