
export const collectionName = 'vendor_invoices_config';

export const fieldsConfig = {
    default_currency: { label: 'Default Currency', type: 'select', options: [{ id: 'USD', label: 'USD' }, { id: 'EUR', label: 'EUR' }, { id: 'GBP', label: 'GBP' }], faker: 'finance.currencyCode' },
    auto_validate_threshold: { label: 'Auto-Validate Below ($)', type: 'number', faker: 'finance.amount' },
    require_po_match: { label: 'Require PO Match', type: 'checkbox', faker: 'datatype.boolean' },
    notification_email: { label: 'Notification Email', type: 'text', faker: 'internet.email' }
};

export const stepsConfig = {
    initialStep: 'draft',
    steps: [
        {
            name: 'draft',
            label: 'Draft',
            actions: ['validate', 'delete_invoice']
        },
        {
            name: 'validated',
            label: 'Validated',
            actions: ['approve_payment', 'reject', 'generate_pdf', 'send_email']
        },
        {
            name: 'approved',
            label: 'Approved',
            actions: ['mark_paid', 'generate_pdf']
        },
        {
            name: 'paid',
            label: 'Paid',
            actions: ['view_history', 'archive']
        },
        {
            name: 'rejected',
            label: 'Rejected',
            actions: ['reopen', 'view_history']
        }
    ]
};

export const actionsConfig = {
    validate: { label: 'Validate Invoice', type: 'primary', icon: 'CheckCircle', nextStep: 'validated' },
    approve_payment: { label: 'Approve Payment', type: 'primary', icon: 'ThumbUp', nextStep: 'approved' },
    reject: { label: 'Reject', type: 'error', icon: 'Cancel', nextStep: 'rejected' },
    mark_paid: { label: 'Mark as Paid', type: 'success', icon: 'Paid', nextStep: 'paid' },
    reopen: { label: 'Reopen', type: 'warning', icon: 'Restore', nextStep: 'draft' },
    generate_pdf: { label: 'Generate PDF', type: 'secondary', icon: 'PictureAsPdf', actionType: 'file_generation' },
    send_email: { label: 'Send Email', type: 'secondary', icon: 'Email', actionType: 'communication' },
    delete_invoice: { label: 'Delete', type: 'error', icon: 'Delete', actionType: 'delete' },
    view_history: { label: 'View History', type: 'info', icon: 'History', actionType: 'view_log' },
    archive: { label: 'Archive', type: 'default', icon: 'Archive', actionType: 'archive' }
};
