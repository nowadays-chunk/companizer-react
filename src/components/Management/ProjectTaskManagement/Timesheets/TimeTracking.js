
export const fieldsConfig = {
  tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
  task_id: { label: 'Task ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  start_time: { label: 'Start Time', type: 'text', faker: 'date.recent' },
  end_time: { label: 'End Time', type: 'text', faker: 'date.recent' },
  duration_minutes: { label: 'Duration (Min)', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'deep_work', label: 'Deep Work' }, { id: 'meeting', label: 'Meeting' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  date: { label: 'Date', type: 'date', faker: 'date.recent' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  is_billable: { label: 'Is Billable', type: 'checkbox', faker: 'datatype.boolean' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  location: { label: 'Location', type: 'text', faker: 'address.city' }, // Remote/Office
  device: { label: 'Device', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'Time Tracking';
export const collectionName = 'time_tracking';
