
export const fieldsConfig = {
    renewal_id: { label: 'Renewal ID', type: 'text', faker: 'datatype.uuid' },
    policy_id: { label: 'Policy ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    renewal_date: { label: 'Renewal Date', type: 'date', faker: 'date.future' },
    new_premium: { label: 'New Premium', type: 'number', faker: 'finance.amount' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'renewed', label: 'Renewed' }, { id: 'declined', label: 'Declined' }], faker: 'random.arrayElement' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
    agent_name: { label: 'Agent', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Policy Renewals';
export const collectionName = 'policy_renewals';
