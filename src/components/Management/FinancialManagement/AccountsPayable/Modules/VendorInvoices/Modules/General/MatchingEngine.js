
export const fieldsConfig = {
    invoice_id: { label: 'Invoice ID', type: 'text', required: true },
    purchase_order_id: { label: 'Purchase Order ID', type: 'text', required: true },
    variance_amount: { label: 'Variance Amount', type: 'number', defaultValue: 0 },
    match_status: { label: 'Match Status', type: 'select', options: ['Matched', 'Variance Detected', 'Pending'], defaultValue: 'Pending' },
    approved_by: { label: 'Approved By', type: 'text' },
    approval_date: { label: 'Approval Date', type: 'date' }
};

export const collectionName = 'vendor_invoices_matching_engine';
