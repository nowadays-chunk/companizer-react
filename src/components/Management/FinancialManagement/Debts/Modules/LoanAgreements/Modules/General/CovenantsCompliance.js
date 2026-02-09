
export const fieldsConfig = {
    covenant_name: { label: 'Covenant Name', type: 'text', required: true },
    threshold: { label: 'Threshold', type: 'text', required: true },
    current_value: { label: 'Current Reporting', type: 'text', required: true },
    status: { label: 'Status', type: 'select', options: ['Pass', 'Warning', 'Fail'], defaultValue: 'Pass' },
    next_test_date: { label: 'Next Test Date', type: 'date' }
};

export const entityName = 'Covenant Status';
export const collectionName = 'covenant_statuses';
