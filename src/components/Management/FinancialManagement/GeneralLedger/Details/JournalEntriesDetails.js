
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    journal_id: { label: 'Journal ID', type: 'text', faker: 'datatype.uuid' }, // FK parent
    account_id: { label: 'Account ID', type: 'text', faker: 'datatype.uuid' }, // FK chart of accounts
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    // Values
    debit: { label: 'Debit', type: 'number', faker: 'finance.amount', decimals: 2 },
    credit: { label: 'Credit', type: 'number', faker: 'finance.amount', decimals: 2 },
    description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

    // Dimensions
    cost_center_id: { label: 'Cost Center ID', type: 'text', faker: 'datatype.uuid' },
    project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' }, // Placeholder for line items

    // Extras
    line_number: { label: 'Line Number', type: 'number', faker: 'datatype.number' },
    tax_code: { label: 'Tax Code', type: 'text', faker: 'random.alphaNumeric' },
    exchange_rate: { label: 'Exchange Rate', type: 'number', faker: 'datatype.float' },
    foreign_amount: { label: 'Foreign Amount', type: 'number', faker: 'finance.amount' },
    foreign_currency: { label: 'Foreign Currency', type: 'text', faker: 'finance.currencyCode' },
    reconciliation_ref: { label: 'Reconciliation Ref', type: 'text', faker: 'datatype.string' }
};

export const entityName = 'Journal Entries Details';
export const collectionName = 'journal_entries_details';
