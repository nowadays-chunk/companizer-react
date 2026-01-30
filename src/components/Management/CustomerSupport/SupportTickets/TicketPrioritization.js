
export const fieldsConfig = {
    rule_id: { label: 'Rule ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    rule_name: { label: 'Rule Name', type: 'text', faker: 'commerce.productAdjective' },
    criteria_field: { label: 'Criteria Field', type: 'text', faker: 'database.column' },
    criteria_value: { label: 'Criteria Value', type: 'text', faker: 'lorem.word' },

    resulting_priority: { label: 'Resulting Priority', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },

    weight: { label: 'Weight', type: 'number', faker: 'datatype.number' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
    description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
    last_updated_by: { label: 'Last Updated By', type: 'text', faker: 'name.fullName' },
    last_updated_date: { label: 'Last Updated Date', type: 'date', faker: 'date.recent' },
    auto_assign_agent_id: { label: 'Auto Assign Agent ID', type: 'text', faker: 'datatype.uuid' }
};

export const entityName = 'Ticket Prioritization';
export const collectionName = 'ticket_prioritization';