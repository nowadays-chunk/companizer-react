
export const fieldsConfig = {
    review_id: { label: 'Review ID', type: 'text', faker: 'datatype.uuid' },
    product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
    customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    rating: { label: 'Rating', type: 'number', faker: 'datatype.float' }, // 1-5
    review_date: { label: 'Review Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    review_title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
    content: { label: 'Content', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
    is_verified_purchase: { label: 'Verified Purchase', type: 'checkbox', faker: 'datatype.boolean' },
    status: { label: 'Status', type: 'select', options: [{ id: 'published', label: 'Published' }, { id: 'pending', label: 'Pending' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' }
};

export const entityName = 'Product Reviews';
export const collectionName = 'product_reviews';
