
export const fieldsConfig = {
    response_id: { label: 'Response ID', type: 'text', faker: 'datatype.uuid' },
    risk_id: { label: 'Risk ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    strategy_type: { label: 'Strategy Type', type: 'select', options: [{ id: 'avoid', label: 'Avoid' }, { id: 'mitigate', label: 'Mitigate' }, { id: 'transfer', label: 'Transfer' }, { id: 'accept', label: 'Accept' }], faker: 'random.arrayElement' },

    planned_action: { label: 'Planned Action', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
    responsible_person: { label: 'Responsible Person', type: 'text', faker: 'name.fullName' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    resources_required: { label: 'Resources Required', type: 'text', faker: 'lorem.sentence' },
    deadline: { label: 'Deadline', type: 'date', faker: 'date.future' },
    status: { label: 'Status', type: 'select', options: [{ id: 'not_started', label: 'Not Started' }, { id: 'in_progress', label: 'In Progress' }, { id: 'completed', label: 'Completed' }], faker: 'random.arrayElement' },
    cost_estimate: { label: 'Cost Estimate', type: 'number', faker: 'finance.amount' },
    approval_date: { label: 'Approval Date', type: 'date', faker: 'date.recent' },
    effectiveness_review: { label: 'Effectiveness Review', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Risk Response Planning';
export const collectionName = 'risk_response_planning';
