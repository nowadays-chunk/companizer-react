
export const fieldsConfig = {
    plan_id: { label: 'Plan ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    plan_name: { label: 'Plan Name', type: 'text', faker: 'lorem.words' },
    scenario: { label: 'Scenario', type: 'text', faker: 'lorem.sentence' }, // e.g. Data Breach, Fire

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    activation_criteria: { label: 'Activation Criteria', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    key_contacts: { label: 'Key Contacts', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    last_updated: { label: 'Last Updated', type: 'date', faker: 'date.recent' },
    version: { label: 'Version', type: 'text', faker: 'semver' },
    status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'archived', label: 'Archived' }, { id: 'draft', label: 'Draft' }], faker: 'random.arrayElement' }
};

export const entityName = 'Crisis Response Plans';
export const collectionName = 'crisis_response_plans';
