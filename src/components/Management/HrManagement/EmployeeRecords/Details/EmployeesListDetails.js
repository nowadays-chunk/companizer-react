
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' }, // FK parent

    attribute_name: { label: 'Attribute Name', type: 'text', faker: 'lorem.word' }, // e.g. "Skill", "Equipment"
    attribute_value: { label: 'Attribute Value', type: 'text', faker: 'lorem.words' },
    category: { label: 'Category', type: 'select', options: [{ id: 'skill', label: 'Skill' }, { id: 'equipment', label: 'Equipment' }, { id: 'document', label: 'Document' }], faker: 'random.arrayElement' },

    effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
    expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },

    // Tracking
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },

    // Extras
    issued_by: { label: 'Issued By', type: 'text', faker: 'name.fullName' },
    verification_status: { label: 'Verification Status', type: 'text', faker: 'random.word' },
    attachment_url: { label: 'Attachment URL', type: 'text', faker: 'internet.url' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Employee Details';
export const collectionName = 'employee_details';
