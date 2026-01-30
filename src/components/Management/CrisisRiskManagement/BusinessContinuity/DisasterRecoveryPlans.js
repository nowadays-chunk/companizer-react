
export const fieldsConfig = {
    recovery_id: { label: 'Recovery ID', type: 'text', faker: 'datatype.uuid' },
    plan_id: { label: 'Plan ID', type: 'text', faker: 'datatype.uuid' }, // Parent BCP
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    system_name: { label: 'System Name', type: 'text', faker: 'hacker.noun' },
    recovery_tier: { label: 'Recovery Tier', type: 'select', options: [{ id: 'tier1', label: 'Tier 1 (Immediate)' }, { id: 'tier2', label: 'Tier 2 (24h)' }, { id: 'tier3', label: 'Tier 3 (72h)' }], faker: 'random.arrayElement' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    tags: { label: 'Tags', type: 'select', options: [{ id: 'it', label: 'IT' }, { id: 'facility', label: 'Facility' }], multiple: true, faker: 'random.arrayElement' },

    // Extras
    backup_location: { label: 'Backup Location', type: 'text', faker: 'address.city' },
    failover_procedure: { label: 'Failover Procedure', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
    primary_contact: { label: 'Primary Contact', type: 'text', faker: 'name.fullName' },
    secondary_contact: { label: 'Secondary Contact', type: 'text', faker: 'name.fullName' },
    last_test_date: { label: 'Last Test Date', type: 'date', faker: 'date.past' },
    test_outcome: { label: 'Test Outcome', type: 'text', faker: 'lorem.sentence' },
    hardware_requirements: { label: 'Hardware Requirements', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Disaster Recovery Plans';
export const collectionName = 'disaster_recovery_plans';
