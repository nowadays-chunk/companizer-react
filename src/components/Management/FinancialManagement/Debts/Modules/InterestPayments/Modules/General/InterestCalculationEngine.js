
export const fieldsConfig = {
    principal_amount: { label: 'Principal Amount', type: 'number', required: true },
    interest_rate: { label: 'Annual Interest Rate (%)', type: 'number', required: true },
    rate_type: { label: 'Rate Type', type: 'select', options: ['Fixed', 'Floating'], defaultValue: 'Fixed' },
    day_count_convention: { label: 'Day Count Convention', type: 'select', options: ['30/360', 'ACT/360', 'ACT/365'], defaultValue: 'ACT/360' },
    period_start: { label: 'Period Start', type: 'date', required: true },
    period_end: { label: 'Period End', type: 'date', required: true }
};

export const entityName = 'Interest Calculation';
export const collectionName = 'interest_calculations';
