
export const fieldsConfig = {
    portal_id: { label: 'Portal ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    portal_name: { label: 'Portal Name', type: 'text', faker: 'lorem.words' },
    url: { label: 'URL', type: 'text', faker: 'internet.url' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
    access_level: { label: 'Access Level', type: 'text', faker: 'random.alphaNumeric' },
    admin_contact: { label: 'Admin Contact', type: 'email', faker: 'internet.email' },
    is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Employee Portals';
export const collectionName = 'employee_portals';
