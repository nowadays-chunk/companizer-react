
export const fieldsConfig = {
    creditor_name: { label: 'Creditor Name', type: 'text', required: true },
    source_document_number: { label: 'Document Number', type: 'text' },
    original_amount: { label: 'Original Amount', type: 'number' },
    dispute_reason: { label: 'Reason', type: 'text' },
    status: { label: 'Status', type: 'select', options: ['Open', 'Resolved', 'Pending'], defaultValue: 'Open' }
};

export const entityName = 'Dispute Manager';
export const collectionName = 'dispute_manager';
