
export const fieldsConfig = {
    report_id: { label: 'Report ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    report_name: { label: 'Report Name', type: 'text', faker: 'lorem.words' },
    regulatory_body: { label: 'Regulatory Body', type: 'text', faker: 'company.name' },

    submission_date: { label: 'Submission Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    period: { label: 'Period', type: 'text', faker: 'lorem.word' },
    is_submitted: { label: 'Is Submitted', type: 'checkbox', faker: 'datatype.boolean' },
    confirmation_receipt: { label: 'Receipt', type: 'text', faker: 'random.alphaNumeric' },
    prepared_by: { label: 'Prepared By', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Compliance Reporting';
export const collectionName = 'compliance_reporting';
