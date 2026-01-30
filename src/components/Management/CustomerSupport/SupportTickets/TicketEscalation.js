
export const fieldsConfig = {
    escalation_id: { label: 'Escalation ID', type: 'text', faker: 'datatype.uuid' },
    ticket_id: { label: 'Ticket ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    escalated_by: { label: 'Escalated By', type: 'text', faker: 'name.fullName' },
    escalated_to: { label: 'Escalated To', type: 'text', faker: 'name.fullName' },

    escalation_date: { label: 'Escalation Date', type: 'datetime', faker: 'date.recent' },
    reason: { label: 'Reason', type: 'text', faker: 'lorem.sentence' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'critical', label: 'Critical' }], faker: 'random.arrayElement' },
    status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'resolved', label: 'Resolved' }], faker: 'random.arrayElement' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Ticket Escalation';
export const collectionName = 'ticket_escalation';
