
export const fieldsConfig = {
    transfer_id: { label: 'Transfer ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    source_account_id: { label: 'Source Account', type: 'related', collection: 'bank_accounts', displayField: 'account_name', required: true, faker: 'datatype.uuid' },
    destination_account_id: { label: 'Destination Account', type: 'related', collection: 'bank_accounts', displayField: 'account_name', required: true, faker: 'datatype.uuid' },
    amount: { label: 'Amount', type: 'number', required: true, faker: 'finance.amount' },
    currency: { label: 'Currency', type: 'text', defaultValue: 'USD', faker: 'finance.currencyCode' },
    transfer_date: { label: 'Transfer Date', type: 'date', required: true, faker: 'date.recent' },
    reference: { label: 'Reference', type: 'text', faker: 'finance.iban' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'pending', label: 'Pending' },
            { id: 'completed', label: 'Completed' },
            { id: 'failed', label: 'Failed' }
        ],
        defaultValue: 'pending'
    }
};

export const entityName = 'Bank Transfer';
export const collectionName = 'bank_transfers';
