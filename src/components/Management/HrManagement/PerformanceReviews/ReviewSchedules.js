
export const fieldsConfig = {

  schedule_id: { label: 'Schedule ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  review_type: { label: 'Review Type', type: 'select', options: [{ id: 'annual', label: 'Annual' }, { id: 'probation', label: 'Probation' }, { id: 'quarterly', label: 'Quarterly' }], faker: 'random.arrayElement' },

  scheduled_date: { label: 'Scheduled Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  reviewer: { label: 'Reviewer', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'scheduled', label: 'Scheduled' }, { id: 'completed', label: 'Completed' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Review Schedules';
export const collectionName = 'review_schedules';
