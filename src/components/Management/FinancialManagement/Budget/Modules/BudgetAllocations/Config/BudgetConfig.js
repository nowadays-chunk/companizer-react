
export const fieldsConfig = {
    budget_id: { label: 'Budget ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    name: { label: 'Budget Name', type: 'text', required: true, faker: 'commerce.productName' },
    year: { label: 'Fiscal Year', type: 'number', required: true, faker: 'date.future' },
    total_amount: { label: 'Total Amount', type: 'number', required: true, faker: 'finance.amount' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'draft', label: 'Draft' },
            { id: 'active', label: 'Active' },
            { id: 'closed', label: 'Closed' }
        ],
        defaultValue: 'draft',
        faker: 'random.arrayElement'
    },
    description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.sentence' }
};

export const entityName = 'Budget';
export const collectionName = 'budgets';
