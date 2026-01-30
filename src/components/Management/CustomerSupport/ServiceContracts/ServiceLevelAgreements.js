
export const fieldsConfig = {
    sla_id: { label: 'SLA ID', type: 'text', faker: 'datatype.uuid' },
    client_id: { label: 'Client ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    agreement_name: { label: 'Agreement Name', type: 'text', faker: 'lorem.words' },
    response_time_hours: { label: 'Response Time (Hrs)', type: 'number', faker: 'datatype.number' },
    resolution_time_hours: { label: 'Resolution Time (Hrs)', type: 'number', faker: 'datatype.number' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    priority_level: { label: 'Priority', type: 'select', options: [{ id: 'gold', label: 'Gold' }, { id: 'silver', label: 'Silver' }, { id: 'bronze', label: 'Bronze' }], faker: 'random.arrayElement' },
    start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
    end_date: { label: 'End Date', type: 'date', faker: 'date.future' },
    penalty_clause: { label: 'Penalty Clause', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Service Level Agreements';
export const collectionName = 'service_level_agreements';
