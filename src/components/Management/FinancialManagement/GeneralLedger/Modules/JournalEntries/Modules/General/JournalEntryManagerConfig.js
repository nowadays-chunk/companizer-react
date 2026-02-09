export const fieldsConfig = {
    journal_number: { label: 'Journal Number', type: 'text' },
    posting_date: { label: 'Posting Date', type: 'date' },
    document_date: { label: 'Document Date', type: 'date' },
    currency_code: { label: 'Currency', type: 'select', options: [{ id: 'USD', label: 'USD' }, { id: 'EUR', label: 'EUR' }, { id: 'GBP', label: 'GBP' }, { id: 'CAD', label: 'CAD' }] },
    exchange_rate: { label: 'Exchange Rate', type: 'number' },
    journal_source: { label: 'Journal Source', type: 'select', options: [{ id: 'manual', label: 'Manual' }, { id: 'accrual', label: 'Accrual' }, { id: 'adjustment', label: 'Adjustment' }, { id: 'system', label: 'System Generated' }] },
    journal_category: { label: 'Category', type: 'select', options: [{ id: 'general', label: 'General' }, { id: 'reclass', label: 'Reclassification' }, { id: 'closing', label: 'Closing' }, { id: 'opening', label: 'Opening' }] },
    legal_entity_id: { label: 'Legal Entity', type: 'text' },
    accounting_period: { label: 'Accounting Period', type: 'text' },
    reference_number: { label: 'Reference / Document #', type: 'text' },
    description: { label: 'Description', type: 'textarea' },
    status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'submitted', label: 'Submitted' }, { id: 'approved', label: 'Approved' }, { id: 'posted', label: 'Posted' }, { id: 'rejected', label: 'Rejected' }] },
    total_debit: { label: 'Total Debit', type: 'number' },
    total_credit: { label: 'Total Credit', type: 'number' }
};

export const collectionName = 'journal_entries';
export const entityName = 'Journal Entry';
