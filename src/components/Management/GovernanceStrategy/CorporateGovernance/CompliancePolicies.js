
export const fieldsConfig = {
  policy_id: { label: 'Policy ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  policy_name: { label: 'Policy Name', type: 'text', faker: 'lorem.words' },
  category: { label: 'Category', type: 'select', options: [{ id: 'hr', label: 'HR' }, { id: 'it', label: 'IT' }, { id: 'legal', label: 'Legal' }, { id: 'finance', label: 'Finance' }], faker: 'random.arrayElement' },

  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  tags: { label: 'Tags', type: 'select', options: [{ id: 'mandatory', label: 'Mandatory' }, { id: 'advisory', label: 'Advisory' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  version: { label: 'Version', type: 'text', faker: 'system.semver' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  review_date: { label: 'Review Date', type: 'date', faker: 'date.future' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  document_url: { label: 'Document URL', type: 'text', faker: 'internet.url' },
  acknowledgement_required: { label: 'Acknowledgement Required', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Compliance Policies';
export const collectionName = 'compliance_policies';