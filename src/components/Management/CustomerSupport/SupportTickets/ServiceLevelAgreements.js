
export const fieldsConfig = {
    sla_id: { label: 'SLA ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    sla_name: { label: 'SLA Name', type: 'text', faker: 'commerce.productName' },
    priority_level: { label: 'Priority Level', type: 'select', options: [{ id: 'p1', label: 'P1' }, { id: 'p2', label: 'P2' }, { id: 'p3', label: 'P3' }], faker: 'random.arrayElement' },

    response_time_target_min: { label: 'Response Target (Min)', type: 'number', faker: 'datatype.number' },
    resolution_time_target_hour: { label: 'Resolution Target (Hour)', type: 'number', faker: 'datatype.number' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    tags: { label: 'Tags', type: 'select', options: [{ id: 'standard', label: 'Standard' }, { id: 'premium', label: 'Premium' }], multiple: true, faker: 'random.arrayElement' },

    // Extras
    business_hours_start: { label: 'Business Hours Start', type: 'text', faker: 'address.timeZone' },
    business_hours_end: { label: 'Business Hours End', type: 'text', faker: 'address.timeZone' },
    support_timezone: { label: 'Support Timezone', type: 'text', faker: 'address.timeZone' },
    penalty_per_breach: { label: 'Penalty Per Breach', type: 'number', faker: 'finance.amount' },
    escalation_policy: { label: 'Escalation Policy', type: 'text', faker: 'lorem.sentence' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Service Level Agreements';
export const collectionName = 'service_level_agreements';
