
export const fieldsConfig = {
    accountable_id: { label: 'Granted By (User ID)', type: 'number', faker: 'datatype.number', min: 1, max: 1000 },
    authorized_user_id: { label: 'Authorized User ID', type: 'number', faker: 'datatype.number', min: 1, max: 1000 },
    authorized_role: {
        label: 'Authorized Role',
        type: 'select',
        options: [
            { id: 'super_admin', label: 'Super Admin' },
            { id: 'admin', label: 'Admin' },
            { id: 'manager', label: 'Manager' },
            { id: 'accountant', label: 'Accountant' },
            { id: 'hr_manager', label: 'HR Manager' },
            { id: 'sales_manager', label: 'Sales Manager' },
            { id: 'auditor', label: 'Auditor' },
            { id: 'user', label: 'User' },
            { id: 'viewer', label: 'Viewer' }
        ],
        faker: 'random.arrayElement'
    },
    authorized_entity: { label: 'Authorized Entity', type: 'text', faker: 'lorem.word' },
    authorized_page: { label: 'Authorized Page', type: 'text', faker: 'lorem.word' },
    authorized_actions: { label: 'Authorized Actions (JSON)', type: 'text', faker: 'lorem.word' },
    entity_type: { label: 'Entity Type', type: 'text', faker: 'lorem.word' },
    entity_row_id: { label: 'Entity Row ID', type: 'number', faker: 'datatype.number', min: 1, max: 10000 },
    entity_rows_stack_id: { label: 'Entity Rows Stack ID', type: 'number', faker: 'datatype.number', min: 1, max: 1000 },
    entity_row_processing_step: { label: 'Processing Step Restriction', type: 'text', faker: 'lorem.word' },
    authorization_start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
    authorization_end_date: { label: 'End Date', type: 'date', faker: 'date.future' },
    authorization_end_operation: { label: 'End Operation', type: 'text', faker: 'lorem.word' },
    is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence', multiline: true, rows: 3 },
};

export const entityName = 'Authorizations';
export const collectionName = 'authorizations';
