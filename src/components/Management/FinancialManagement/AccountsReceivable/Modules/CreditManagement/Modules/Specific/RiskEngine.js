
export const fieldsConfig = {
    customer_id: { label: 'Customer ID', type: 'text', required: true },
    risk_score: { label: 'Risk Score', type: 'number' },
    risk_category: { label: 'Risk Category', type: 'text' },
    recommended_limit: { label: 'Recommended Limit', type: 'number' }
};

export const entityName = 'Risk Engine';
export const collectionName = 'risk_assessments';
