
export const fieldsConfig = {

  policy_id: { label: 'Policy ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  provider: { label: 'Provider', type: 'text', faker: 'company.name' },
  policy_number: { label: 'Policy Number', type: 'text', faker: 'finance.account' },

  type: { label: 'Type', type: 'select', options: [{ id: 'liability', label: 'Liability' }, { id: 'property', label: 'Property' }, { id: 'workers_comp', label: 'Workers Comp' }, { id: 'cyber', label: 'Cyber' }], faker: 'random.arrayElement' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  coverage_limit: { label: 'Coverage Limit', type: 'number', faker: 'finance.amount' },
  deductible: { label: 'Deductible', type: 'number', faker: 'finance.amount' },
  broker_contact: { label: 'Broker Contact', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Insurance Policies';
export const collectionName = 'insurance_policies';
