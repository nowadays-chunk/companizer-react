
export const fieldsConfig = {
    tracking_id: { label: 'Tracking ID', type: 'text', faker: 'datatype.uuid' },
    ticket_id: { label: 'Ticket ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    start_time: { label: 'Start Time', type: 'date', faker: 'date.past' },
    end_time: { label: 'End Time', type: 'date', faker: 'date.recent' },

    duration_minutes: { label: 'Duration (Min)', type: 'number', faker: 'datatype.number' },

    status: { label: 'Status', type: 'select', options: [{ id: 'met', label: 'Met' }, { id: 'breached', label: 'Breached' }], faker: 'random.arrayElement' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    agent_id: { label: 'Agent ID', type: 'text', faker: 'datatype.uuid' },
    sla_target_minutes: { label: 'SLA Target (Min)', type: 'number', faker: 'datatype.number' },
    stage: { label: 'Stage', type: 'select', options: [{ id: 'first_response', label: 'First Response' }, { id: 'resolution', label: 'Resolution' }], faker: 'random.arrayElement' },
    hold_duration_minutes: { label: 'Hold Duration (Min)', type: 'number', faker: 'datatype.number' },
    business_hours_only: { label: 'Business Hours Only', type: 'checkbox', faker: 'datatype.boolean' },
    impact_on_kpi: { label: 'Impact on KPI', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Resolution Time Tracking';
export const collectionName = 'resolution_time_tracking';
