
export const fieldsConfig = {
    uuid: { label: 'UUID', type: 'text', faker: 'datatype.uuid' },
    first_name: { label: 'First Name', type: 'text', faker: 'person.firstName' },
    last_name: { label: 'Last Name', type: 'text', faker: 'person.lastName' },
    email: { label: 'Email', type: 'text', faker: 'internet.email' },
    password_hash: { label: 'Password Hash', type: 'text', faker: 'datatype.uuid' },
    role: {
        label: 'Role',
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
    organization_id: { label: 'Organization ID', type: 'number', faker: 'datatype.number', min: 1, max: 100 },
    entity_id: { label: 'Entity ID', type: 'number', faker: 'datatype.number', min: 1, max: 1000 },
    is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
};

export const entityName = 'Users';
export const collectionName = 'users';
