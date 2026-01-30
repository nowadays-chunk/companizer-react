
export const fieldsConfig = {
    warranty_id: { label: 'Warranty ID', type: 'text', faker: 'datatype.uuid' },
    product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' },
    customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    serial_number: { label: 'Serial Number', type: 'text', faker: 'random.alphaNumeric' },
    purchase_date: { label: 'Purchase Date', type: 'date', faker: 'date.past' },
    expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    warranty_type: { label: 'Type', type: 'select', options: [{ id: 'standard', label: 'Standard' }, { id: 'extended', label: 'Extended' }], faker: 'random.arrayElement' },
    status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'expired', label: 'Expired' }, { id: 'voided', label: 'Voided' }], faker: 'random.arrayElement' },
    claims_count: { label: 'Claims Count', type: 'number', faker: 'datatype.number' }
};

export const entityName = 'Warranty Management';
export const collectionName = 'warranty_management';
