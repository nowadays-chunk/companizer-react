
export const fieldsConfig = {
    bucket_1_days: { label: 'Bucket 1 (Days)', type: 'text', defaultValue: '0-15' },
    bucket_2_days: { label: 'Bucket 2 (Days)', type: 'text', defaultValue: '16-30' },
    include_unapplied_cash: { label: 'Include Unapplied Cash', type: 'boolean', defaultValue: true },
    aging_method: { label: 'Aging Method', type: 'select', options: ['Invoice Date', 'Due Date'] }
};

export const entityName = 'Aging Configuration';
export const collectionName = 'aging_configurations';
