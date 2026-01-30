
export const fieldsConfig = {
  booking_id: { label: 'Booking ID', type: 'text', faker: 'datatype.uuid' },
  facility_id: { label: 'Facility ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  booked_by: { label: 'Booked By', type: 'text', faker: 'name.fullName' },
  start_time: { label: 'Start Time', type: 'datetime', faker: 'date.recent' },
  end_time: { label: 'End Time', type: 'datetime', faker: 'date.future' },

  purpose: { label: 'Purpose', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  attendee_count: { label: 'Attendee Count', type: 'number', faker: 'datatype.number' },
  resources_required: { label: 'Resources Required', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  status: { label: 'Status', type: 'select', options: [{ id: 'confirmed', label: 'Confirmed' }, { id: 'cancelled', label: 'Cancelled' }, { id: 'pending', label: 'Pending' }], faker: 'random.arrayElement' },
  setup_instructions: { label: 'Setup Instructions', type: 'text', faker: 'lorem.sentence' },
  cost_code: { label: 'Cost Code', type: 'text', faker: 'finance.account' }
};

export const entityName = 'Facility Booking';
export const collectionName = 'facility_booking';
