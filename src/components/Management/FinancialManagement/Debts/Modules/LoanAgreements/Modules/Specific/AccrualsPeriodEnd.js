
export const fieldsConfig = {
    period: { label: 'Period', type: 'text', required: true },
    accrued_interest: { label: 'Accrued Interest', type: 'number' },
    process_status: { label: 'Process Status', type: 'select', options: ['Pending', 'Completed'], defaultValue: 'Pending' },
    gl_balance: { label: 'GL Balance', type: 'number' },
    subledger_balance: { label: 'Subledger Balance', type: 'number' }
};

export const entityName = 'Accrual Process';
export const collectionName = 'accrual_processes';
