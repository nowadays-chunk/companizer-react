
export const fieldsConfig = {

  overtime_id: { label: 'Overtime ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  date: { label: 'Date', type: 'date', faker: 'date.recent' },
  hours: { label: 'Hours', type: 'number', faker: 'datatype.float' },
  rate_multiplier: { label: 'Multiplier', type: 'number', faker: 'datatype.float' }, // 1.5, 2.0

  // Mandated
  // Extras
  total_amount: { label: 'Total Amount', type: 'number', faker: 'finance.amount' },
  reason: { label: 'Reason', type: 'text', faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'requested', label: 'Requested' }, { id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Overtime Management';
export const collectionName = 'overtime_management';
