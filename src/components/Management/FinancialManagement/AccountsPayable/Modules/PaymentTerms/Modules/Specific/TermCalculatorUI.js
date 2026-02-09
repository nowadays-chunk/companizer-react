
export const fieldsConfig = {
    base_date: { label: 'Base Date', type: 'date', required: true },
    due_date_method: { label: 'Method', type: 'select', options: ['fixed_days', 'end_of_month', 'day_of_month'], defaultValue: 'fixed_days' },
    days_due: { label: 'Days / Day Param', type: 'number', defaultValue: 30 }
};

export const entityName = 'Term Calculator';
export const collectionName = 'payment_term_calculator';
