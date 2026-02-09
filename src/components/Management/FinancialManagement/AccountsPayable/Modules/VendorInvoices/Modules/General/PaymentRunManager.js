
export const fieldsConfig = {
    run_date: { label: 'Run Date', type: 'date', required: true },
    total_amount: { label: 'Total Amount', type: 'number', required: true },
    number_of_invoices: { label: 'Number of Invoices', type: 'number', required: true },
    status: { label: 'Status', type: 'select', options: ['Scheduled', 'Processing', 'Completed', 'Failed'], defaultValue: 'Scheduled' },
    payment_method: { label: 'Payment Method', type: 'select', options: ['ACH', 'Check', 'Wire', 'Credit Card'], defaultValue: 'ACH' },
    bank_account_id: { label: 'Bank Account ID', type: 'text', required: true }
};

export const collectionName = 'vendor_invoices_payment_runs';
