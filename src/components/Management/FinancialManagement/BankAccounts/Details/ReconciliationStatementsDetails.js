
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    reconciliation_statements_id: { label: 'Reconciliation Statement ID', type: 'text', faker: 'datatype.uuid' }, // FK

    transaction_date: { label: 'Transaction Date', type: 'date', faker: 'date.past' },
    description: { label: 'Description', type: 'text', faker: 'finance.transactionDescription' },
    reference_number: { label: 'Reference Number', type: 'text', faker: 'finance.routingNumber' },

    // Amounts
    credit_amount: { label: 'Credit Amount', type: 'number', faker: 'finance.amount', decimals: 2 },
    debit_amount: { label: 'Debit Amount', type: 'number', faker: 'finance.amount', decimals: 2 },
    balance_impact: { label: 'Balance Impact', type: 'number', faker: 'finance.amount', decimals: 2 },

    // Matching
    is_matched: { label: 'Is Matched', type: 'checkbox', faker: 'datatype.boolean' },
    matched_transaction_id: { label: 'Matched Transaction ID', type: 'text', faker: 'datatype.uuid' }, // Link to internal ledger transaction
    match_confidence_score: { label: 'Match Confidence Score', type: 'number', faker: 'datatype.float' },

    // Status
    status: { label: 'Status', type: 'select', options: [{ id: 'cleared', label: 'Cleared' }, { id: 'uncleared', label: 'Uncleared' }, { id: 'disputed', label: 'Disputed' }], faker: 'random.arrayElement' },
    rejection_reason: { label: 'Rejection Reason', type: 'text', faker: 'lorem.sentence' },

    // Tracking
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },

    // Extras
    value_date: { label: 'Value Date', type: 'date', faker: 'date.past' },
    category: { label: 'Category', type: 'text', faker: 'commerce.department' },
    payee_payer_name: { label: 'Payee/Payer Name', type: 'text', faker: 'name.fullName' },
    check_number: { label: 'Check Number', type: 'text', faker: 'finance.account' },
    batch_id: { label: 'Batch ID', type: 'text', faker: 'datatype.uuid' },
    geo_location: { label: 'Geo Location', type: 'text', faker: 'address.city' }
};

export const entityName = 'Reconciliation Statements Details';
export const collectionName = 'reconciliation_statements_details';
