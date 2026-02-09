export const fieldsConfig = {
    hierarchy_name: { label: 'Hierarchy Name', type: 'text' },
    description: { label: 'Description', type: 'textarea' },
    effective_date: { label: 'Effective Date', type: 'date' },
    status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'draft', label: 'Draft' }, { id: 'archived', label: 'Archived' }] },
    allow_manual_entry: { label: 'Allow Manual Entry', type: 'checkbox' }
};

export const collectionName = 'coa_global_settings';
export const entityName = 'Chart of Accounts Global Settings';
