
export const fieldsConfig = {
    statement_id: { label: 'Statement ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    topic: { label: 'Topic', type: 'text', faker: 'lorem.words' },
    spokesperson: { label: 'Spokesperson', type: 'text', faker: 'name.fullName' },

    statement_text: { label: 'Statement', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    date_issued: { label: 'Date Issued', type: 'date', faker: 'date.recent' },
    context: { label: 'Context', type: 'text', faker: 'lorem.sentence' },
    url_link: { label: 'Link', type: 'text', faker: 'internet.url' },
    approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Public Statements';
export const collectionName = 'public_statements';
