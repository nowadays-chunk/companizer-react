
export const fieldsConfig = {
    project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    project_name: { label: 'Project Name', type: 'text', faker: 'lorem.words' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

    start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
    end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    status: { label: 'Status', type: 'select', options: [{ id: 'planning', label: 'Planning' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }, { id: 'on_hold', label: 'On Hold' }], faker: 'random.arrayElement' },
    priority: { label: 'Priority', type: 'select', options: [{ id: 'low', label: 'Low' }, { id: 'medium', label: 'Medium' }, { id: 'high', label: 'High' }], faker: 'random.arrayElement' },
    budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
    client_id: { label: 'Client ID', type: 'text', faker: 'datatype.uuid' },
    manager_id: { label: 'Manager ID', type: 'text', faker: 'datatype.uuid' },
    progress: { label: 'Progress (%)', type: 'number', faker: 'datatype.number' }
};

export const entityName = 'Projects';
export const collectionName = 'projects';
