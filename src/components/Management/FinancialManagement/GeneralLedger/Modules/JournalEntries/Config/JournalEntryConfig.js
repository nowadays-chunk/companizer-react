
export const fieldsConfig = {
    journal_id: { label: 'Journal ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    journal_number: { label: 'Journal Number', type: 'text', required: true, faker: 'finance.account' },
    posting_date: { label: 'Posting Date', type: 'date', required: true, faker: 'date.recent' },
    document_date: { label: 'Document Date', type: 'date', required: true, faker: 'date.recent' },
    currency_code: { label: 'Currency', type: 'text', defaultValue: 'USD', faker: 'finance.currencyCode' },
    exchange_rate: { label: 'Exchange Rate', type: 'number', defaultValue: 1.0 },
    journal_source: {
        label: 'Source',
        type: 'select',
        options: [
            { id: 'manual', label: 'Manual' },
            { id: 'accrual', label: 'Accrual' },
            { id: 'adjustment', label: 'Adjustment' },
            { id: 'system', label: 'System Generated' }
        ],
        defaultValue: 'manual'
    },
    journal_category: {
        label: 'Category',
        type: 'select',
        options: [
            { id: 'general', label: 'General' },
            { id: 'reclass', label: 'Reclassification' },
            { id: 'closing', label: 'Closing' },
            { id: 'opening', label: 'Opening' }
        ],
        defaultValue: 'general'
    },
    reference_number: { label: 'Reference / Document #', type: 'text', faker: 'finance.bitcoinAddress' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    legal_entity_id: { label: 'Legal Entity', type: 'text', faker: 'datatype.uuid' },
    accounting_period: { label: 'Accounting Period', type: 'text', faker: 'date.month' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'draft', label: 'Draft' },
            { id: 'submitted', label: 'Submitted' },
            { id: 'approved', label: 'Approved' },
            { id: 'posted', label: 'Posted' },
            { id: 'rejected', label: 'Rejected' }
        ],
        defaultValue: 'draft'
    }
};

export const entityName = 'Journal Entry';
export const collectionName = 'journal_entries';
