
export const fieldsConfig = {
    vendor_id: { label: 'Vendor ID', type: 'text', required: true },
    portal_access_code: { label: 'Access Code', type: 'text', required: true },
    last_login: { label: 'Last Login', type: 'datetime' },
    permissions: { label: 'Permissions', type: 'json' },
    status: { label: 'Status', type: 'select', options: ['Active', 'Suspended', 'Inactive'], defaultValue: 'Active' }
};

export const collectionName = 'vendor_invoices_vendor_portal';
