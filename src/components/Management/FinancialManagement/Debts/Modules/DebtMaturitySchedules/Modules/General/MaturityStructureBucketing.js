
export const fieldsConfig = {
    bucket_name: { label: 'Bucket Name', type: 'text', required: true },
    range_min: { label: 'Range Min (Months)', type: 'number', required: true },
    range_max: { label: 'Range Max (Months)', type: 'number' },
    description: { label: 'Description', type: 'text' }
};

export const entityName = 'Maturity Bucket';
export const collectionName = 'maturity_buckets';
