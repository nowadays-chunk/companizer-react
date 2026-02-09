export const fieldsConfig = {
    period_code: { label: 'Period Code', type: 'text' },
    period_name: { label: 'Period Name', type: 'text' },
    start_date: { label: 'Start Date', type: 'date' },
    end_date: { label: 'End Date', type: 'date' },
    is_adjustment: { label: 'Adjustment Period', type: 'checkbox' },
    status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }, { id: 'future', label: 'Future' }] }
};

export const collectionName = 'fiscal_periods';
export const entityName = 'Fiscal Period';
