
export const fieldsConfig = {
    creditor_name: { label: 'Creditor Name', type: 'text', required: true },
    original_amount: { label: 'Original Amount', type: 'number', required: true },
    balance: { label: 'Balance', type: 'number', required: true },
    days_overdue: { label: 'Days Overdue', type: 'number', defaultValue: 0 }
};

export const collectionName = 'accounts_payable_dpo_analytics';
