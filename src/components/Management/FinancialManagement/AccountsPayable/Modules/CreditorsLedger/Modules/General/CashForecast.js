
export const fieldsConfig = {
    due_date: { label: 'Due Date', type: 'date', required: true },
    cash_requirement_date: { label: 'Cash Requirement Date', type: 'date' },
    original_amount: { label: 'Original Amount', type: 'number', required: true },
    residual_amount: { label: 'Residual Amount', type: 'number' },
    transaction_currency: { label: 'Currency', type: 'text', defaultValue: 'USD' },
    open_item_status: { label: 'Status', type: 'select', options: ['open', 'cleared', 'partial'], defaultValue: 'open' },
    is_blocked_for_payment: { label: 'Blocked for Payment', type: 'boolean', defaultValue: false }
};

export const collectionName = 'accounts_payable_cash_forecast';
