
export const fieldsConfig = {
    policy_id: { label: 'Policy ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    provider: { label: 'Provider', type: 'text', faker: 'company.name' },
    policy_number: { label: 'Policy Number', type: 'text', faker: 'finance.account' },

    type: { label: 'Type', type: 'select', options: [{ id: 'liability', label: 'Liability' }, { id: 'property', label: 'Property' }, { id: 'workers_comp', label: 'Workers Comp' }, { id: 'cyber', label: 'Cyber' }], faker: 'random.arrayElement' },

    start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
    end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Annual Premium', type: 'number', faker: 'finance.amount' },

    // Extras
    coverage_limit: { label: 'Coverage Limit', type: 'number', faker: 'finance.amount' },
    deductible: { label: 'Deductible', type: 'number', faker: 'finance.amount' },
    broker_contact: { label: 'Broker Contact', type: 'text', faker: 'name.fullName' },
    status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'expired', label: 'Expired' }, { id: 'cancelled', label: 'Cancelled' }], faker: 'random.arrayElement' }
};

export const entityName = 'Insurance Policies';
export const collectionName = 'insurance_policies';
