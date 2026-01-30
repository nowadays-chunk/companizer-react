
export const fieldsConfig = {
  processing_id: { label: 'Processing ID', type: 'text', faker: 'datatype.uuid' },
  order_id: { label: 'Order ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  start_time: { label: 'Start Time', type: 'datetime', faker: 'date.recent' },
  end_time: { label: 'End Time', type: 'datetime', faker: 'date.recent' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  processed_by: { label: 'Processed By', type: 'text', faker: 'name.fullName' },
  verification_status: { label: 'Verification', type: 'select', options: [{ id: 'verified', label: 'Verified' }, { id: 'flagged', label: 'Flagged' }], faker: 'random.arrayElement' },
  issues_found: { label: 'Issues Found', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Order Processing';
export const collectionName = 'order_processing';
