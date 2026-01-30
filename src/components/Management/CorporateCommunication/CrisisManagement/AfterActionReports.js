
export const fieldsConfig = {
    report_id: { label: 'Report ID', type: 'text', faker: 'datatype.uuid' },
    incident_id: { label: 'Incident ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    incident_summary: { label: 'Summary', type: 'text', multiline: true, rows: 2, faker: 'lorem.paragraph' },
    report_date: { label: 'Report Date', type: 'date', faker: 'date.recent' },

    evaluation: { label: 'Evaluation', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    prepared_by: { label: 'Prepared By', type: 'text', faker: 'name.fullName' },
    lessons_learned: { label: 'Lessons Learned', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
    effectiveness_rating: { label: 'Effectiveness (1-10)', type: 'number', faker: 'datatype.number' },
    follow_up_actions: { label: 'Follow-up', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'After Action Reports';
export const collectionName = 'after_action_reports';
