
export const fieldsConfig = {
    report_id: { label: 'Report ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    title: { label: 'Title', type: 'text', faker: 'lorem.words' }, // Annual Sustainability Report
    year: { label: 'Year', type: 'number', faker: 'date.past' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    file_url: { label: 'File URL', type: 'text', faker: 'internet.url' },
    prepared_by: { label: 'Prepared By', type: 'text', faker: 'name.fullName' },
    key_highlights: { label: 'Highlights', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
    published_date: { label: 'Published Date', type: 'date', faker: 'date.recent' },
    framework_followed: { label: 'Framework', type: 'text', faker: 'lorem.word' } // GRI, SASB
};

export const entityName = 'Impact Reports';
export const collectionName = 'impact_reports';
