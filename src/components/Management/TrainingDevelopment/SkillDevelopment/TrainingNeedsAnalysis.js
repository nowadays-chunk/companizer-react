
export const fieldsConfig = {
    analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
    department_id: { label: 'Department ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    identified_need: { label: 'Identified Need', type: 'text', faker: 'lorem.sentence' },
    priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    recommended_training: { label: 'Recommended Training', type: 'text', faker: 'lorem.sentence' },
    target_audience_count: { label: 'Audience Count', type: 'number', faker: 'datatype.number' },
    estimated_budget: { label: 'Estimated Budget', type: 'number', faker: 'finance.amount' },
    request_date: { label: 'Request Date', type: 'date', faker: 'date.recent' },
    status: { label: 'Status', type: 'select', options: [{ id: 'new', label: 'New' }, { id: 'approved', label: 'Approved' }, { id: 'deferred', label: 'Deferred' }], faker: 'random.arrayElement' },
    business_justification: { label: 'Business Justification', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' }
};

export const entityName = 'Training Needs Analysis';
export const collectionName = 'training_needs_analysis';
