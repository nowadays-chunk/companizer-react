
export const fieldsConfig = {
    transfer_type: { label: 'Transfer Type', type: 'select', options: ['Internal', 'Intercompany', 'External', 'FX'], defaultValue: 'Internal' },
    from_account_id: { label: 'Source Account', type: 'text', required: true },
    to_account_id: { label: 'Destination Account', type: 'text', required: true },
    amount: { label: 'Amount', type: 'number', required: true },
    currency: { label: 'Currency', type: 'text', defaultValue: 'USD' },
    transfer_date: { label: 'Transfer Date', type: 'date' },
    reference_number: { label: 'Reference Number', type: 'text' },
    description: { label: 'Description', type: 'text', multiline: true }
};

export const entityName = 'Transfer Entry';
export const collectionName = 'bank_transfers';
