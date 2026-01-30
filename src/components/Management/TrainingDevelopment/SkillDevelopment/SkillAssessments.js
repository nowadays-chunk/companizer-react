
export const fieldsConfig = {
    assessment_id: { label: 'Assessment ID', type: 'text', faker: 'datatype.uuid' },
    employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    skill_name: { label: 'Skill Name', type: 'text', faker: 'hacker.noun' },
    proficiency_level: { label: 'Proficiency Level', type: 'select', options: [{ id: 'novice', label: 'Novice' }, { id: 'intermediate', label: 'Intermediate' }, { id: 'expert', label: 'Expert' }], faker: 'random.arrayElement' },

    assessment_date: { label: 'Assessment Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    assessed_by: { label: 'Assessed By', type: 'text', faker: 'name.fullName' }, // Self, Manager, Peer
    score: { label: 'Score', type: 'number', faker: 'datatype.number' }, // 1-10
    target_level: { label: 'Target Level', type: 'select', options: [{ id: 'novice', label: 'Novice' }, { id: 'intermediate', label: 'Intermediate' }, { id: 'expert', label: 'Expert' }], faker: 'random.arrayElement' },
    gap_analysis: { label: 'Gap Analysis', type: 'text', faker: 'lorem.sentence' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Skill Assessments';
export const collectionName = 'skill_assessments';
