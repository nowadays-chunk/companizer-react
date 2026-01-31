
export const fieldsConfig = {

  entitlement_id: { label: 'Entitlement ID', type: 'text', faker: 'datatype.uuid' },
  contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  entitlement_name: { label: 'Entitlement Name', type: 'text', faker: 'commerce.productName' },
  total_units: { label: 'Total Units', type: 'number', faker: 'datatype.number' },
  remaining_units: { label: 'Remaining Units', type: 'number', faker: 'datatype.number' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  // Mandated
  tags: { label: 'Tags', type: 'select', options: [{ id: 'support_hours', label: 'Support Hours' }, { id: 'incidents', label: 'Incidents' }], multiple: true, faker: 'random.arrayElement' },

  // Extras
  service_level: { label: 'Service Level', type: 'select', options: [{ id: 'gold', label: 'Gold' }, { id: 'silver', label: 'Silver' }, { id: 'bronze', label: 'Bronze' }], faker: 'random.arrayElement' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
  overage_policy: { label: 'Overage Policy', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Support Entitlements';
export const collectionName = 'support_entitlements';
