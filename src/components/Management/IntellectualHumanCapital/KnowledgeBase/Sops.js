
export const fieldsConfig = {

  sop_id: { label: 'SOP ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },

  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  review_date: { label: 'Review Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'deprecated', label: 'Deprecated' }, { id: 'draft', label: 'Draft' }], faker: 'random.arrayElement' },
  author: { label: 'Author', type: 'text', faker: 'name.fullName' },
  approver: { label: 'Approver', type: 'text', faker: 'name.fullName' },
  procedure_steps: { label: 'Procedure Steps', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'SOPs';
export const collectionName = 'standard_operating_procedures';
