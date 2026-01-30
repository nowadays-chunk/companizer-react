
export const fieldsConfig = {
    release_id: { label: 'Release ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    headline: { label: 'Headline', type: 'text', faker: 'lorem.sentence' },
    pub_date: { label: 'Publish Date', type: 'date', faker: 'date.future' },

    content: { label: 'Content', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'published', label: 'Published' }, { id: 'scheduled', label: 'Scheduled' }], faker: 'random.arrayElement' },
    author: { label: 'Author', type: 'text', faker: 'name.fullName' },
    media_kit_url: { label: 'Media Kit', type: 'text', faker: 'internet.url' },
    distribution_channels: { label: 'Channels', type: 'text', faker: 'lorem.words' }
};

export const entityName = 'Press Releases';
export const collectionName = 'press_releases';
