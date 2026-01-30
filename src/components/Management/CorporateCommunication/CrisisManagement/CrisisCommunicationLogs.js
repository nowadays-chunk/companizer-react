
export const fieldsConfig = {
    log_id: { label: 'Log ID', type: 'text', faker: 'datatype.uuid' },
    incident_id: { label: 'Incident ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    timestamp: { label: 'Timestamp', type: 'datetime', faker: 'date.recent' },
    message_content: { label: 'Message', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

    channel: { label: 'Channel', type: 'select', options: [{ id: 'email', label: 'Email' }, { id: 'press_release', label: 'Press Release' }, { id: 'social_media', label: 'Social Media' }, { id: 'internal', label: 'Internal' }], faker: 'random.arrayElement' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    sender: { label: 'Sender', type: 'text', faker: 'name.fullName' },
    recipient_group: { label: 'Recipient Group', type: 'text', faker: 'lorem.word' }, // e.g. Employees, Public
    status: { label: 'Status', type: 'select', options: [{ id: 'sent', label: 'Sent' }, { id: 'draft', label: 'Draft' }, { id: 'approved', label: 'Approved' }], faker: 'random.arrayElement' },
    sentiment_analysis: { label: 'Sentiment', type: 'text', faker: 'lorem.word' }
};

export const entityName = 'Crisis Communication Logs';
export const collectionName = 'crisis_communication_logs';
