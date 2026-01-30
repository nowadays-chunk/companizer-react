
export const fieldsConfig = {
  shift_id: { label: 'Shift ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  start_time: { label: 'Start Time', type: 'datetime', faker: 'date.future' },
  end_time: { label: 'End Time', type: 'datetime', faker: 'date.future' },

  shift_type: { label: 'Shift Type', type: 'select', options: [{ id: 'morning', label: 'Morning' }, { id: 'afternoon', label: 'Afternoon' }, { id: 'night', label: 'Night' }], faker: 'random.arrayElement' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' }, // Cost of shift?

  // Extras
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  status: { label: 'Status', type: 'select', options: [{ id: 'scheduled', label: 'Scheduled' }, { id: 'completed', label: 'Completed' }, { id: 'absent', label: 'Absent' }], faker: 'random.arrayElement' },
  notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
  supervisor_id: { label: 'Supervisor ID', type: 'text', faker: 'datatype.uuid' }
};

export const entityName = 'Shift Schedules';
export const collectionName = 'shift_schedules';
