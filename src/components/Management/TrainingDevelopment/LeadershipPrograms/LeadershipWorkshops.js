
export const fieldsConfig = {
    workshop_id: { label: 'Workshop ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    topic: { label: 'Topic', type: 'text', faker: 'lorem.words' },
    facilitator: { label: 'Facilitator', type: 'text', faker: 'name.fullName' },

    date: { label: 'Date', type: 'date', faker: 'date.future' },
    duration_hours: { label: 'Duration (Hours)', type: 'number', faker: 'datatype.number' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    location: { label: 'Location', type: 'text', faker: 'address.city' },
    max_attendees: { label: 'Max Attendees', type: 'number', faker: 'datatype.number' },
    registered_count: { label: 'Registered', type: 'number', faker: 'datatype.number' },
    materials_link: { label: 'Materials Link', type: 'text', faker: 'internet.url' },
    feedback_score: { label: 'Feedback Score', type: 'number', faker: 'datatype.float' }
};

export const entityName = 'Leadership Workshops';
export const collectionName = 'leadership_workshops';
