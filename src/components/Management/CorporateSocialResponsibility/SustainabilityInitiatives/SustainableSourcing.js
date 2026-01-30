
export const fieldsConfig = {
    sourcing_id: { label: 'Sourcing ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    material: { label: 'Material', type: 'text', faker: 'commerce.productMaterial' },
    supplier: { label: 'Supplier', type: 'text', faker: 'company.name' },

    percentage_sustainable: { label: 'Sustainable (%)', type: 'number', faker: 'datatype.number' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    certification_type: { label: 'Certification', type: 'text', faker: 'lorem.word' }, // Fair Trade, FSC
    volume_purchased: { label: 'Volume', type: 'number', faker: 'datatype.float' },
    cost_premium: { label: 'Cost Premium (%)', type: 'number', faker: 'datatype.float' },
    audit_status: { label: 'Audit Status', type: 'select', options: [{ id: 'passed', label: 'Passed' }, { id: 'pending', label: 'Pending' }, { id: 'failed', label: 'Failed' }], faker: 'random.arrayElement' }
};

export const entityName = 'Sustainable Sourcing';
export const collectionName = 'sustainable_sourcing';
