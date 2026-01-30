
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    vendor_invoices_id: { label: 'Vendor Invoice ID', type: 'text', faker: 'datatype.uuid' }, // FK

    item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },
    sku: { label: 'SKU', type: 'text', faker: 'commerce.isbn' },

    // Quantities & Prices
    quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
    uom: { label: 'UOM', type: 'text', faker: 'random.arrayElement', options: [{ id: 'ea', label: 'Each' }] },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount', decimals: 2 },
    total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },

    // Tax
    tax_rate: { label: 'Tax Rate', type: 'number', faker: 'datatype.float' },
    tax_amount: { label: 'Tax Amount', type: 'number', faker: 'finance.amount' },

    // Accounting
    gl_account_id: { label: 'GL Account ID', type: 'text', faker: 'finance.account' },
    cost_center_id: { label: 'Cost Center ID', type: 'text', faker: 'datatype.uuid' },
    project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },

    // Tracking
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },

    // Misc
    line_number: { label: 'Line Number', type: 'number', faker: 'datatype.number' },
    is_discounted: { label: 'Is Discounted', type: 'checkbox', faker: 'datatype.boolean' },
    discount_amount: { label: 'Discount Amount', type: 'number', faker: 'finance.amount' },
    delivery_date: { label: 'Delivery Date', type: 'date', faker: 'date.future' },

    // Extras
    item_weight: { label: 'Item Weight', type: 'number', faker: 'datatype.float' },
    weight_unit: { label: 'Weight Unit', type: 'select', options: [{ id: 'kg', label: 'Kg' }, { id: 'lb', label: 'Lb' }], faker: 'random.arrayElement' },
    country_of_origin: { label: 'Country of Origin', type: 'text', faker: 'address.country' },
    customs_code: { label: 'Customs Code', type: 'text', faker: 'datatype.string' },
    batch_number: { label: 'Batch Number', type: 'text', faker: 'datatype.uuid' },
    expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
    warehouse_location: { label: 'Warehouse Location', type: 'text', faker: 'random.alphaNumeric' }
};

export const entityName = 'Vendor Invoices Details';
export const collectionName = 'vendor_invoices_details';
