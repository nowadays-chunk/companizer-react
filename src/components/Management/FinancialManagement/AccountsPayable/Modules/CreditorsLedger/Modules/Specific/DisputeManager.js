
export const fieldsConfig = {
    creditor_name: { label: 'Creditor Name', type: 'text', required: true },
    source_document_number: { label: 'Document Number', type: 'text' },
    original_amount: { label: 'Original Amount', type: 'number' },
    dispute_amount: { label: 'Dispute Amount', type: 'number' },
    dispute_reason_code: { label: 'Reason Code', type: 'select', options: ['pricing', 'quantity', 'quality', 'delivery', 'documentation', 'duplicate', 'unauthorized'] },
    is_disputed: { label: 'Is Disputed', type: 'boolean', defaultValue: true },
    dispute_status: { label: 'Status', type: 'select', options: ['raised', 'under_review', 'resolved', 'escalated'], defaultValue: 'raised' },
    dispute_raised_date: { label: 'Raised Date', type: 'date' },
    dispute_workflow_stage: { label: 'Workflow Stage', type: 'text' }
};

export const collectionName = 'accounts_payable_disputes';
