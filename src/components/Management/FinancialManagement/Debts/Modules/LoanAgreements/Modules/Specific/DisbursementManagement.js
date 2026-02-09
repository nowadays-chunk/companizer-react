
export const fieldsConfig = {
    reference_id: { label: 'Reference ID', type: 'text', required: true },
    value_date: { label: 'Value Date', type: 'date', required: true },
    amount: { label: 'Amount', type: 'number', required: true },
    destination_account: { label: 'Destination Bank Account', type: 'select', options: ['Operating Account (USD)', 'Investment Account'], defaultValue: 'Operating Account (USD)' },
    status: { label: 'Status', type: 'select', options: ['Pending', 'Posted'], defaultValue: 'Pending' }
};

export const entityName = 'Disbursement';
export const collectionName = 'disbursements';
