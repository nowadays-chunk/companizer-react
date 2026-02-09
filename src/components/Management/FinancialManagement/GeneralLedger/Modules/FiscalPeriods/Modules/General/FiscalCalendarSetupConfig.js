export const fieldsConfig = {
    fiscal_year_id: { label: 'Fiscal Year ID', type: 'text' },
    name: { label: 'Calendar Name', type: 'text' },
    start_date: { label: 'Start Date', type: 'date' },
    end_date: { label: 'End Date', type: 'date' },
    type: {
        label: 'Calendar Type',
        type: 'select',
        options: [
            { id: 'standard', label: 'Standard (Jan-Dec)' },
            { id: '445', label: 'Retail 4-4-5' },
            { id: '454', label: 'Retail 4-5-4' },
            { id: '544', label: 'Retail 5-4-4' },
            { id: 'custom', label: 'Custom' }
        ]
    },
    is_leap_year: { label: 'Leap Year', type: 'checkbox' }
};

export const collectionName = 'fiscal_calendars';
export const entityName = 'Fiscal Calendar';
