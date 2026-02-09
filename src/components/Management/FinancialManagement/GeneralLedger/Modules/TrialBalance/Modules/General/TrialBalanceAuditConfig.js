export const fieldsConfig = {
    snapshot_id: { label: 'Snapshot ID', type: 'text' },
    timestamp: { label: 'Timestamp', type: 'datetime' },
    type: { label: 'Type', type: 'select', options: [{ id: 'system', label: 'System Snapshot' }, { id: 'manual', label: 'Manual Save' }, { id: 'year_end', label: 'Year End Close' }] },
    user: { label: 'User', type: 'text' },
    status: { label: 'Status', type: 'select', options: [{ id: 'locked', label: 'Locked' }, { id: 'draft', label: 'Draft' }, { id: 'final', label: 'Final' }] }
};

export const collectionName = 'trial_balance_snapshots';
export const entityName = 'Trial Balance Snapshot';
