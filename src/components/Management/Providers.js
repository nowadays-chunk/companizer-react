
export const fieldsConfig = {
    provider_id: { label: 'Provider ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    provider_name: { label: 'Provider Name', type: 'text', faker: 'company.name' },
    service_type: { label: 'Service Type', type: 'text', faker: 'lorem.word' }, // Legal, IT, Cleaning

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    contact_name: { label: 'Contact Name', type: 'text', faker: 'name.fullName' },
    email: { label: 'Email', type: 'email', faker: 'internet.email' },
    phone: { label: 'Phone', type: 'tel', faker: 'phone.number' },
    address: { label: 'Address', type: 'text', faker: 'address.streetAddress' },
    rating: { label: 'Rating', type: 'number', faker: 'datatype.float' },
    status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'inactive', label: 'Inactive' }], faker: 'random.arrayElement' },
    contracts_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' }
};

export const entityName = 'Providers';
export const collectionName = 'providers';
