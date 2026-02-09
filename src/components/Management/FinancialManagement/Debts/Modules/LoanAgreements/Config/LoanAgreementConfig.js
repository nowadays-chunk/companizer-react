
export const fieldsConfig = {
    loan_id: { label: 'Loan ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    reference_number: { label: 'Reference Number', type: 'text', required: true, faker: 'finance.account' },
    lender: { label: 'Lender / Counterparty', type: 'text', required: true, faker: 'company.name' },
    loan_type: {
        label: 'Loan Type',
        type: 'select',
        options: [
            { id: 'term', label: 'Term Loan' },
            { id: 'revolver', label: 'Revolving Credit' },
            { id: 'bond', label: 'Bond / Debenture' }
        ],
        required: true,
        faker: 'random.arrayElement'
    },
    original_principal: { label: 'Original Principal Amount', type: 'number', required: true, faker: 'finance.amount' },
    currency: { label: 'Currency', type: 'text', defaultValue: 'USD', faker: 'finance.currencyCode' },
    start_date: { label: 'Start Date', type: 'date', required: true, faker: 'date.past' },
    maturity_date: { label: 'Maturity Date', type: 'date', required: true, faker: 'date.future' },
    interest_rate: { label: 'Interest Rate (%)', type: 'number', faker: 'finance.amount' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'active', label: 'Active' },
            { id: 'closed', label: 'Closed' },
            { id: 'defaulted', label: 'Defaulted' }
        ],
        defaultValue: 'active'
    }
};

export const entityName = 'Loan Agreement';
export const collectionName = 'loan_agreements';
