
export const fieldsConfig = {
    filing_id: { label: 'Filing ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    filing_type: {
        label: 'Filing Type',
        type: 'select',
        options: [
            { id: 'VAT', label: 'VAT Return' },
            { id: 'CIT', label: 'Corporate Income Tax' },
            { id: 'WHT', label: 'Withholding Tax' }
        ],
        required: true,
        faker: 'random.arrayElement'
    },
    jurisdiction: { label: 'Jurisdiction', type: 'text', required: true, faker: 'address.country' },
    tax_period: { label: 'Tax Period', type: 'text', required: true, faker: 'date.month' },
    due_date: { label: 'Due Date', type: 'date', required: true, faker: 'date.future' },
    filed_date: { label: 'Filed Date', type: 'date', faker: 'date.recent' },
    total_tax_liability: { label: 'Total Tax Liability', type: 'number', faker: 'finance.amount' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'draft', label: 'Draft' },
            { id: 'ready_to_file', label: 'Ready to File' },
            { id: 'filed', label: 'Filed' },
            { id: 'accepted', label: 'Accepted' },
            { id: 'rejected', label: 'Rejected' }
        ],
        defaultValue: 'draft'
    }
};

export const entityName = 'Tax Filing';
export const collectionName = 'tax_filings';
