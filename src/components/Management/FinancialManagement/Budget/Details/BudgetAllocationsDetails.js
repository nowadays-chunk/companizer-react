
export const fieldsConfig = {
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    budget_allocations_id: { label: 'Budget Allocation ID', type: 'text', faker: 'datatype.uuid' }, // FK

    line_item_name: { label: 'Line Item Name', type: 'text', faker: 'commerce.productName' },
    description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },
    expense_category: { label: 'Expense Category', type: 'text', faker: 'commerce.department' },

    // Values
    planned_amount: { label: 'Planned Amount', type: 'number', faker: 'finance.amount', decimals: 2 },
    actual_amount: { label: 'Actual Amount', type: 'number', faker: 'finance.amount', decimals: 2 },
    difference: { label: 'Difference', type: 'number', faker: 'finance.amount', decimals: 2 },

    // Timing
    recurrence: { label: 'Recurrence', type: 'select', options: [{ id: 'monthly', label: 'Monthly' }, { id: 'one_off', label: 'One-off' }], faker: 'random.arrayElement' },
    due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
    payment_date: { label: 'Payment Date', type: 'date', faker: 'date.past' },

    // Tracking
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },

    // Extras
    vendor_id: { label: 'Vendor ID', type: 'text', faker: 'datatype.uuid' },
    priority: { label: 'Priority', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
    is_approved: { label: 'Is Approved', type: 'checkbox', faker: 'datatype.boolean' },
    justification: { label: 'Justification', type: 'text', faker: 'lorem.sentence' },
    gl_code: { label: 'GL Code', type: 'text', faker: 'finance.account' }
};

export const entityName = 'Budget Allocations Details';
export const collectionName = 'budget_allocations_details';
