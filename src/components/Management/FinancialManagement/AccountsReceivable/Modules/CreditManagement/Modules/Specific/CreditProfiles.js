
export const fieldsConfig = {
    customer_id: { label: 'Customer ID', type: 'text', required: true },
    credit_segment: { label: 'Credit Segment', type: 'select', options: ['Enterprise', 'Wholesale'], defaultValue: 'Enterprise' },
    scoring_category: { label: 'Scoring Category', type: 'select', options: ['Strategic', 'Standard'], defaultValue: 'Strategic' },
    credit_limit: { label: 'Credit Limit', type: 'number' }
};

export const entityName = 'Credit Profile';
export const collectionName = 'credit_profiles';
