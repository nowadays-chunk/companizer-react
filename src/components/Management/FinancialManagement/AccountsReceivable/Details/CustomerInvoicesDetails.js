
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    customer_invoices_id: { label: 'Customer Invoice ID', type: 'text', faker: 'datatype.uuid' }, // FK parent

    item_code: { label: 'Item Code', type: 'text', faker: 'commerce.isbn' },
    item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },

    // Metrics
    quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount', decimals: 2 },
    total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },
    discount_percent: { label: 'Discount Percent', type: 'number', faker: 'datatype.float', decimals: 2 },
    discount_amount: { label: 'Discount Amount', type: 'number', faker: 'finance.amount' },

    // Tax
    tax_code: { label: 'Tax Code', type: 'text', faker: 'random.alphaNumeric' },
    tax_rate: { label: 'Tax Rate', type: 'number', faker: 'datatype.float' },
    tax_amount: { label: 'Tax Amount', type: 'number', faker: 'finance.amount' },

    // Costing (internal)
    unit_cost: { label: 'Unit Cost', type: 'number', faker: 'finance.amount' },
    margin: { label: 'Margin', type: 'number', faker: 'finance.amount' },

    // Tracking
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },

    // Structure
    line_number: { label: 'Line Number', type: 'number', faker: 'datatype.number' },
    product_id: { label: 'Product ID', type: 'text', faker: 'datatype.uuid' }, // FK to Products
    service_id: { label: 'Service ID', type: 'text', faker: 'datatype.uuid' }, // FK to Services
    warehouse_id: { label: 'Warehouse ID', type: 'text', faker: 'datatype.uuid' }, // FK

    // Extras
    warranty_period_months: { label: 'Warranty Period (Months)', type: 'number', faker: 'datatype.number' },
    serial_numbers: { label: 'Serial Numbers', type: 'text', faker: 'random.alphaNumeric' },
    notes: { label: 'Notes', type: 'text', faker: 'lorem.sentence' },
    subscription_start_date: { label: 'Subscription Start Date', type: 'date', faker: 'date.recent' },
    subscription_end_date: { label: 'Subscription End Date', type: 'date', faker: 'date.future' },
    is_tax_exempt: { label: 'Is Tax Exempt', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Customer Invoices Details';
export const collectionName = 'customer_invoices_details';
