
export const fieldsConfig = {

  balance_id: { label: 'Balance ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  leave_type: { label: 'Leave Type', type: 'select', options: [{ id: 'annual', label: 'Annual' }, { id: 'sick', label: 'Sick' }, { id: 'unpaid', label: 'Unpaid' }, { id: 'maternity', label: 'Maternity' }], faker: 'random.arrayElement' },

  year: { label: 'Year', type: 'number', faker: 'date.past' },

  total_days: { label: 'Total Days', type: 'number', faker: 'datatype.number' },
  used_days: { label: 'Used Days', type: 'number', faker: 'datatype.number' },
  remaining_days: { label: 'Remaining Days', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Maybe cash out value?

  // Extras
  carry_over_days: { label: 'Carry Over Days', type: 'number', faker: 'datatype.number' },
  last_updated: { label: 'Last Updated', type: 'date', faker: 'date.recent' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Leave Balances';
export const collectionName = 'leave_balances';
