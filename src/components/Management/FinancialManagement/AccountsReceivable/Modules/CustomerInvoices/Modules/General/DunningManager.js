
export const fieldsConfig = {
    run_date: { label: 'Run Date', type: 'date', required: true },
    level: { label: 'Dunning Level', type: 'text' },
    invoices_processed: { label: 'Invoices Processed', type: 'number' },
    notices_sent: { label: 'Notices Sent', type: 'number' },
    status: { label: 'Status', type: 'text' }
};

export const collectionName = 'ar_dunning_runs';
