
export const fieldsConfig = {
  policy_id: { label: 'Policy ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  policy_name: { label: 'Policy Name', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
  review_date: { label: 'Review Date', type: 'date', faker: 'date.future' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'draft', label: 'Draft' }, { id: 'archived', label: 'Archived' }], faker: 'random.arrayElement' },
  compliance_check: { label: 'Compliance Check', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Treasury Policies';
export const collectionName = 'treasury_policies';
