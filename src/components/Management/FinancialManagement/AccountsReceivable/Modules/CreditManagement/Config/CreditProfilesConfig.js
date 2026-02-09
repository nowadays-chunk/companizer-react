
export const fieldsConfig = {
    profile_id: { label: 'Profile ID', type: 'text', faker: 'datatype.uuid', hidden: true },
    customer_id: { label: 'Customer', type: 'related', collection: 'customers', displayField: 'name', required: true, faker: 'datatype.uuid' },
    credit_segment: {
        label: 'Credit Segment',
        type: 'select',
        options: [
            { id: 'Enterprise', label: 'Enterprise' },
            { id: 'Wholesale', label: 'Wholesale' },
            { id: 'Retail', label: 'Retail' }
        ],
        defaultValue: 'Enterprise',
        faker: 'random.arrayElement'
    },
    scoring_category: {
        label: 'Scoring Category',
        type: 'select',
        options: [
            { id: 'Strategic', label: 'Strategic' },
            { id: 'Standard', label: 'Standard' },
            { id: 'HighRisk', label: 'High Risk' }
        ],
        defaultValue: 'Standard',
        faker: 'random.arrayElement'
    },
    credit_currency: { label: 'Credit Currency', type: 'text', defaultValue: 'USD', disabled: true },
    effective_date: { label: 'Effective Date', type: 'date', faker: 'date.past' },
    global_limit: { label: 'Global Limit', type: 'number', faker: 'finance.amount' },
    insured_limit: { label: 'Insured Limit', type: 'number', faker: 'finance.amount' },
    seasonal_limit: { label: 'Seasonal Limit', type: 'number', faker: 'finance.amount' },
    expiry_date: { label: 'Limit Expiry', type: 'date', faker: 'date.future' },
    status: {
        label: 'Status',
        type: 'select',
        options: [
            { id: 'active', label: 'Active' },
            { id: 'under_review', label: 'Under Review' },
            { id: 'blocked', label: 'Blocked' }
        ],
        defaultValue: 'active'
    }
};

export const entityName = 'Credit Profile';
export const collectionName = 'credit_profiles';
