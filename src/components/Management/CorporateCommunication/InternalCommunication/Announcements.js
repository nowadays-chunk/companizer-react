
export const fieldsConfig = {
    announcement_id: { label: 'Announcement ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
    message: { label: 'Message', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

    priority: { label: 'Priority', type: 'select', options: [{ id: 'normal', label: 'Normal' }, { id: 'high', label: 'High' }, { id: 'urgent', label: 'Urgent' }], faker: 'random.arrayElement' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    date_posted: { label: 'Date Posted', type: 'date', faker: 'date.recent' },
    target_audience: { label: 'Target Audience', type: 'text', faker: 'lorem.words' }, // All, HR, Sales
    posted_by: { label: 'Posted By', type: 'text', faker: 'name.fullName' },
    read_confirmation_required: { label: 'Read Confirm', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Internal Announcements';
export const collectionName = 'internal_announcements';
