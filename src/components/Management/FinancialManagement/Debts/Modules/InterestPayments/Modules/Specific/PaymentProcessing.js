
export const fieldsConfig = {
    payment_reference: { label: 'Payment Reference', type: 'text', required: true },
    value_date: { label: 'Value Date', type: 'date', required: true },
    gross_interest: { label: 'Gross Interest', type: 'number', required: true },
    withholding_tax: { label: 'Withholding Tax', type: 'number' },
    net_payment: { label: 'Net Payment Amount', type: 'number', required: true },
    source_account: { label: 'Source Bank Account', type: 'select', options: ['Operating Account (USD)', 'Operating Account (EUR)'], defaultValue: 'Operating Account (USD)' },
    beneficiary_details: { label: 'Beneficiary Details', type: 'text', multiline: true }
};

export const entityName = 'Payment Process';
export const collectionName = 'payment_processes';
