
export const fieldsConfig = {
    training_id: { label: 'Training ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    program_name: { label: 'Program Name', type: 'text', faker: 'lorem.words' },
    institution: { label: 'Institution', type: 'text', faker: 'company.name' },

    start_date: { label: 'Start Date', type: 'date', faker: 'date.recent' },
    end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

    cost: { label: 'Cost', type: 'number', faker: 'finance.amount' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    attendee_id: { label: 'Attendee ID', type: 'text', faker: 'datatype.uuid' }, // Executive
    status: { label: 'Status', type: 'select', options: [{ id: 'enrolled', label: 'Enrolled' }, { id: 'completed', label: 'Completed' }, { id: 'withdrawn', label: 'Withdrawn' }], faker: 'random.arrayElement' },
    certificate_received: { label: 'Certificate Received', type: 'checkbox', faker: 'datatype.boolean' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Executive Training';
export const collectionName = 'executive_training';
