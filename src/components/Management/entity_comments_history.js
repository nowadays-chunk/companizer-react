
export const collectionName = 'entity_comments_history';

export const fieldsConfig = {
    comment_id: { label: 'Comment ID', type: 'text', faker: 'datatype.uuid' },
    entity_type: { label: 'Entity Type', type: 'text', faker: 'lorem.word' }, // e.g., 'vendor_invoices'
    entity_id: { label: 'Entity ID', type: 'text', faker: 'datatype.uuid' },
    user_id: { label: 'User ID', type: 'text', faker: 'datatype.uuid' },
    author_name: { label: 'Author Name', type: 'text', faker: 'person.fullName' },
    comment_text: { label: 'Comment', type: 'textarea', multiline: true, faker: 'lorem.sentences' },
    processing_step: { label: 'Step', type: 'text', faker: 'lorem.word' }, // Step when comment was made
    unit_price: { label: 'Unit Price', type: 'number', faker: 'commerce.price' }, // Standard field (unused?)
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' } // Standard field
};
