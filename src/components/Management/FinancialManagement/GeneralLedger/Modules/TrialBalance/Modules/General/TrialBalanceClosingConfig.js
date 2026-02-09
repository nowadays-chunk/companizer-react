export const fieldsConfig = {
    period: { label: 'Period', type: 'text' },
    status: { label: 'Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'soft_closed', label: 'Soft Closed' }, { id: 'hard_closed', label: 'Hard Closed' }] },
    close_date: { label: 'Close Date', type: 'date' },
    closed_by: { label: 'Closed By', type: 'text' }
};

export const collectionName = 'period_closing';
export const entityName = 'Period Closing';
