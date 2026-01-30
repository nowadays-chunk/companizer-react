
export const fieldsConfig = {
  structure_id: { label: 'Structure ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  name: { label: 'Structure Name', type: 'text', faker: 'commerce.productName' },
  type: { label: 'Type', type: 'select', options: [{ id: 'volume', label: 'Volume' }, { id: 'seasonal', label: 'Seasonal' }, { id: 'loyalty', label: 'Loyalty' }], faker: 'random.arrayElement' },

  percentage: { label: 'Percentage', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  min_quantity: { label: 'Min Quantity', type: 'number', faker: 'datatype.number' },
  max_quantity: { label: 'Max Quantity', type: 'number', faker: 'datatype.number' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  customer_segment_id: { label: 'Segment ID', type: 'text', faker: 'datatype.uuid' },
  approval_required: { label: 'Approval Required', type: 'checkbox', faker: 'datatype.boolean' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Discount Structures';
export const collectionName = 'discount_structures';