export const fieldsConfig = {
    period: { label: 'Period', type: 'text' },
    current_status: { label: 'Current Status', type: 'select', options: [{ id: 'open', label: 'Open' }, { id: 'soft_closed', label: 'Soft Closed' }, { id: 'hard_closed', label: 'Hard Closed' }] },
    locked_by: { label: 'Locked By', type: 'text' },
    action: { label: 'Action', type: 'select', options: [{ id: 'lock', label: 'Lock' }, { id: 'unlock', label: 'Unlock' }, { id: 'soft_close', label: 'Soft Close' }] },
    comments: { label: 'Comments', type: 'textarea' }
};

export const collectionName = 'period_status';
export const entityName = 'Period Status';
