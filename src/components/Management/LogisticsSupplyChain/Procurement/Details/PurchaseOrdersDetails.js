
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    po_id: { label: 'PO ID', type: 'text', faker: 'datatype.uuid' }, // FK parent

    item_id: { label: 'Item ID', type: 'text', faker: 'datatype.uuid' },
    item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
    quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },
    total_line_amount: { label: 'Total Line Amount', type: 'number', faker: 'finance.amount' },

    // Tracking
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },

    // Extras
    sku: { label: 'SKU', type: 'text', faker: 'random.alphaNumeric' },
    description: { label: 'Description', type: 'text', faker: 'commerce.productDescription' },
    received_quantity: { label: 'Received Quantity', type: 'number', faker: 'datatype.number' },
    is_backordered: { label: 'Is Backordered', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Purchase Order Lines';
export const collectionName = 'purchase_order_lines';
