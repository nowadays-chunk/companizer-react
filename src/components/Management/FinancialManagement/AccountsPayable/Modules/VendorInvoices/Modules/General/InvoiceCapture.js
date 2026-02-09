
export const fieldsConfig = {
    invoice_number: { label: 'Invoice Number', type: 'text', required: true },
    vendor_name: { label: 'Vendor Name', type: 'text', required: true },
    invoice_date: { label: 'Invoice Date', type: 'date', required: true },
    due_date: { label: 'Due Date', type: 'date', required: true },
    total_amount: { label: 'Total Amount', type: 'number', required: true },
    tax_amount: { label: 'Tax Amount', type: 'number' },
    currency: { label: 'Currency', type: 'text', defaultValue: 'USD' },
    file_url: { label: 'File URL', type: 'text' },
    status: { label: 'Status', type: 'select', options: ['Draft', 'Processing', 'Approved', 'Rejected'], defaultValue: 'Draft' }
};

export const collectionName = 'vendor_invoices_invoice_capture';
