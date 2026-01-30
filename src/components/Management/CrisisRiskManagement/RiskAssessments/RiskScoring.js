
export const fieldsConfig = {
    score_id: { label: 'Score ID', type: 'text', faker: 'datatype.uuid' },
    risk_id: { label: 'Risk ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    likelihood: { label: 'Likelihood', type: 'number', faker: 'datatype.number' }, // 1-5 or 1-10
    impact: { label: 'Impact', type: 'number', faker: 'datatype.number' }, // 1-5 or 1-10

    risk_score: { label: 'Risk Score', type: 'number', faker: 'datatype.number' }, // Calculated
    score_date: { label: 'Score Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    assessed_by: { label: 'Assessed By', type: 'text', faker: 'name.fullName' },
    score_methodology: { label: 'Score Methodology', type: 'text', faker: 'lorem.word' }, // Qualitative/Quantitative
    comments: { label: 'Comments', type: 'text', faker: 'lorem.sentence' },
    trend: { label: 'Trend', type: 'select', options: [{ id: 'increasing', label: 'Increasing' }, { id: 'stable', label: 'Stable' }, { id: 'decreasing', label: 'Decreasing' }], faker: 'random.arrayElement' },
    heat_map_zone: { label: 'Heat Map Zone', type: 'select', options: [{ id: 'red', label: 'Red' }, { id: 'amber', label: 'Amber' }, { id: 'green', label: 'Green' }], faker: 'random.arrayElement' }
};

export const entityName = 'Risk Scoring';
export const collectionName = 'risk_scoring';
