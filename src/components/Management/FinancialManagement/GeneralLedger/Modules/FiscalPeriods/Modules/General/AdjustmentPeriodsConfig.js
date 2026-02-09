export const fieldsConfig = {
    adjustment_code: { label: 'Adjustment Code', type: 'text' },
    fiscal_year: { label: 'Fiscal Year', type: 'text' },
    type: { label: 'Type', type: 'select', options: [{ id: 'audit', label: 'Audit' }, { id: 'tax', label: 'Tax' }, { id: 'management', label: 'Management' }] },
    status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'closed', label: 'Closed' }] },
    posted_entries: { label: 'Posted Entries', type: 'number' }
};

export const collectionName = 'adjustment_periods';
export const entityName = 'Adjustment Period';
