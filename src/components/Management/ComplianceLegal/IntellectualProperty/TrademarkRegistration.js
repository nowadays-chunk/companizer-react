
export const fieldsConfig = {
    registration_id: { label: 'Registration ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    trademark_name: { label: 'Trademark Name', type: 'text', faker: 'commerce.productName' },
    registration_number: { label: 'Registration Number', type: 'text', faker: 'random.alphaNumeric' },

    class_codes: { label: 'Class Codes', type: 'text', faker: 'random.alphaNumeric' }, // e.g. 9, 35, 42

    filing_date: { label: 'Filing Date', type: 'date', faker: 'date.past' },
    registration_date: { label: 'Registration Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    owner: { label: 'Owner', type: 'text', faker: 'company.name' },
    jurisdiction: { label: 'Jurisdiction', type: 'text', faker: 'address.country' },
    status: { label: 'Status', type: 'select', options: [{ id: 'registered', label: 'Registered' }, { id: 'pending', label: 'Pending' }, { id: 'expired', label: 'Expired' }], faker: 'random.arrayElement' },
    renewal_due_date: { label: 'Renewal Due Date', type: 'date', faker: 'date.future' },
    image_url: { label: 'Image URL', type: 'text', faker: 'internet.url' },
    attorney_name: { label: 'Attorney Name', type: 'text', faker: 'name.fullName' },
    description: { label: 'Description', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Trademark Registration';
export const collectionName = 'trademark_registration';
