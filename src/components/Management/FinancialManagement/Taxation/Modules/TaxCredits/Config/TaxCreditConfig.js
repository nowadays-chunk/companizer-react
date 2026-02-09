
export const fieldsConfig = {
    credit_id: { label: 'Credit ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    credit_type: { label: 'Credit Type', type: 'text', required: true, faker: 'commerce.productName' },
    jurisdiction: { label: 'Jurisdiction', type: 'text', required: true, faker: 'address.country' },
    amount_eligible: { label: 'Eligible Amount', type: 'number', required: true, faker: 'finance.amount' },
    credit_amount: { label: 'Credit Amount', type: 'number', required: true, faker: 'finance.amount' },
    expiration_date: { label: 'Expiration Date', type: 'date', required: true, faker: 'date.future' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'identified', label: 'Identified' },
            { id: 'applied', label: 'Applied' },
            { id: 'approved', label: 'Approved' },
            { id: 'utilized', label: 'Utilized' }
        ],
        defaultValue: 'identified'
    }
};

export const entityName = 'Tax Credit';
export const collectionName = 'tax_credits';
