
export const fieldsConfig = {

  update_id: { label: 'Update ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  source: { label: 'Source', type: 'text', faker: 'company.name' },

  published_date: { label: 'Published Date', type: 'date', faker: 'date.recent' },

  // Mandated
  // Extras
  impact_analysis: { label: 'Impact Analysis', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  action_required: { label: 'Action Required', type: 'checkbox', faker: 'datatype.boolean' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.future' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Regulatory Updates';
export const collectionName = 'regulatory_updates';
