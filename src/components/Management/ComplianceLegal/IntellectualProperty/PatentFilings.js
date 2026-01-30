
export const fieldsConfig = {
    filing_id: { label: 'Filing ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    patent_title: { label: 'Patent Title', type: 'text', faker: 'commerce.productName' },
    application_number: { label: 'Application Number', type: 'text', faker: 'random.alphaNumeric' },
    filing_date: { label: 'Filing Date', type: 'date', faker: 'date.past' },

    status: { label: 'Status', type: 'select', options: [{ id: 'filed', label: 'Filed' }, { id: 'pending', label: 'Pending' }, { id: 'granted', label: 'Granted' }, { id: 'abandoned', label: 'Abandoned' }], faker: 'random.arrayElement' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    inventors: { label: 'Inventors', type: 'text', faker: 'name.fullName' }, // Comma separated
    jurisdiction: { label: 'Jurisdiction', type: 'text', faker: 'address.country' },
    attorney_ref: { label: 'Attorney Ref', type: 'text', faker: 'random.alphaNumeric' },
    patent_number: { label: 'Patent Number', type: 'text', faker: 'random.alphaNumeric' }, // If granted
    grant_date: { label: 'Grant Date', type: 'date', faker: 'date.future' },
    expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
    cost_to_date: { label: 'Cost To Date', type: 'number', faker: 'finance.amount' },
    abstract: { label: 'Abstract', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Patent Filings';
export const collectionName = 'patent_filings';
