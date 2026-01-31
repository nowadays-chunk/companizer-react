
export const fieldsConfig = {

  segment_id: { label: 'Segment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  segment_name: { label: 'Segment Name', type: 'text', faker: 'commerce.department' }, // e.g., "High Value", "Churn Risk"
  criteria: { label: 'Criteria', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  customer_count: { label: 'Customer Count', type: 'number', faker: 'datatype.number' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'b2b', label: 'B2B' }, { id: 'b2c', label: 'B2C' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  last_updated: { label: 'Last Updated', type: 'date', faker: 'date.recent' },
  average_ltv: { label: 'Average LTV', type: 'number', faker: 'finance.amount' },
  marketing_strategy: { label: 'Marketing Strategy', type: 'text', faker: 'lorem.sentence' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  is_dynamic: { label: 'Is Dynamic', type: 'checkbox', faker: 'datatype.boolean' },
  region_filter: { label: 'Region Filter', type: 'text', faker: 'address.country' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Customer Segmentation';
export const collectionName = 'customer_segmentation';
