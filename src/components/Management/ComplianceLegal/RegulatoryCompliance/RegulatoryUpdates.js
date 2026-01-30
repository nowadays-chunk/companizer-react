
export const fieldsConfig = {
    update_id: { label: 'Update ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
    source: { label: 'Source', type: 'text', faker: 'company.name' },

    published_date: { label: 'Published Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    impact_analysis: { label: 'Impact Analysis', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
    action_required: { label: 'Action Required', type: 'checkbox', faker: 'datatype.boolean' },
    effective_date: { label: 'Effective Date', type: 'date', faker: 'date.future' },
    region: { label: 'Region', type: 'text', faker: 'address.country' }
};

export const entityName = 'Regulatory Updates';
export const collectionName = 'regulatory_updates';
