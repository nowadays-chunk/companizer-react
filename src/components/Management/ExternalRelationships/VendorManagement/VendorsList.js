
export const fieldsConfig = {
    vendor_id: { label: 'Vendor ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    vendor_name: { label: 'Vendor Name', type: 'text', faker: 'company.name' },
    category: { label: 'Category', type: 'select', options: [{ id: 'hardware', label: 'Hardware' }, { id: 'software', label: 'Software' }, { id: 'services', label: 'Services' }, { id: 'logistics', label: 'Logistics' }], faker: 'random.arrayElement' },

    contact_email: { label: 'Contact Email', type: 'email', faker: 'internet.email' },
    contact_phone: { label: 'Contact Phone', type: 'tel', faker: 'phone.number' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    address: { label: 'Address', type: 'text', faker: 'address.streetAddress' },
    city: { label: 'City', type: 'text', faker: 'address.city' },
    country: { label: 'Country', type: 'text', faker: 'address.country' },
    tax_id: { label: 'Tax ID', type: 'text', faker: 'finance.routingNumber' },
    payment_terms: { label: 'Payment Terms', type: 'text', faker: 'lorem.words' }, // Net 30
    rating: { label: 'Rating', type: 'number', faker: 'datatype.float' },
    preferred_vendor: { label: 'Preferred Vendor', type: 'checkbox', faker: 'datatype.boolean' },
    website: { label: 'Website', type: 'text', faker: 'internet.url' },
    is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Vendors List';
export const collectionName = 'vendors_list';
