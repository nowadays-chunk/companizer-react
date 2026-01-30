
export const fieldsConfig = {
    cost_id: { label: 'Cost ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
    amount: { label: 'Amount', type: 'number', faker: 'finance.amount' },

    date_incurred: { label: 'Date Incurred', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    category: { label: 'Category', type: 'select', options: [{ id: 'operational', label: 'Operational' }, { id: 'capital', label: 'Capital' }, { id: 'personnel', label: 'Personnel' }, { id: 'marketing', label: 'Marketing' }], faker: 'random.arrayElement' },
    department: { label: 'Department', type: 'text', faker: 'commerce.department' },
    vendor: { label: 'Vendor', type: 'text', faker: 'company.name' },
    invoice_number: { label: 'Invoice #', type: 'text', faker: 'finance.account' },
    status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'paid', label: 'Paid' }, { id: 'approved', label: 'Approved' }], faker: 'random.arrayElement' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Costs';
export const collectionName = 'costs';