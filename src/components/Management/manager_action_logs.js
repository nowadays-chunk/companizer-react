
export const fieldsConfig = {
    log_id: { label: 'Log ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' }, // The manager performing the action

    action_type: { label: 'Action Type', type: 'text', faker: 'hacker.verb' }, // e.g., Created, Updated, Deleted, Approved
    entity_type: { label: 'Entity Type', type: 'text', faker: 'lorem.word' }, // e.g., Project, Employee
    entity_id: { label: 'Entity ID', type: 'text', faker: 'datatype.uuid' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    details: { label: 'Details', type: 'text', multiline: true, rows: 3, faker: 'lorem.sentence' },
    ip_address: { label: 'IP Address', type: 'text', faker: 'internet.ip' },
    status: { label: 'Status', type: 'select', options: [{ id: 'success', label: 'Success' }, { id: 'failed', label: 'Failed' }], faker: 'random.arrayElement' },
    user_agent: { label: 'User Agent', type: 'text', faker: 'internet.userAgent' }
};

export const entityName = 'Manager Action Logs';
export const collectionName = 'manager_action_logs';
