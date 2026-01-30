
export const fieldsConfig = {
    newsletter_id: { label: 'Newsletter ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    subject: { label: 'Subject', type: 'text', faker: 'lorem.sentence' },
    send_date: { label: 'Send Date', type: 'date', faker: 'date.future' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    content_summary: { label: 'Content Summary', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    distribution_list: { label: 'List', type: 'text', faker: 'lorem.word' },
    open_rate: { label: 'Open Rate (%)', type: 'number', faker: 'datatype.float' },
    click_rate: { label: 'Click Rate (%)', type: 'number', faker: 'datatype.float' },
    status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'sent', label: 'Sent' }, { id: 'scheduled', label: 'Scheduled' }], faker: 'random.arrayElement' }
};

export const entityName = 'Internal Newsletters';
export const collectionName = 'internal_newsletters';
