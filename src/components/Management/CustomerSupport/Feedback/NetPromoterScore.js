
export const fieldsConfig = {
    nps_id: { label: 'NPS ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    score_value: { label: 'Score Value', type: 'number', faker: 'datatype.number' }, // -100 to 100 or raw 0-10
    nps_category: { label: 'NPS Category', type: 'select', options: [{ id: 'promoter', label: 'Promoter' }, { id: 'passive', label: 'Passive' }, { id: 'detractor', label: 'Detractor' }], faker: 'random.arrayElement' },

    survey_date: { label: 'Survey Date', type: 'date', faker: 'date.recent' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    customer_segment: { label: 'Customer Segment', type: 'text', faker: 'commerce.department' },
    campaign_id: { label: 'Campaign ID', type: 'text', faker: 'datatype.uuid' },
    comment: { label: 'Comment', type: 'text', faker: 'lorem.sentence' },
    response_time_sec: { label: 'Response Time (sec)', type: 'number', faker: 'datatype.number' },
    device_type: { label: 'Device Type', type: 'text', faker: 'lorem.word' }, // Mobile/Desktop
    customer_tenure_months: { label: 'Customer Tenure (Months)', type: 'number', faker: 'datatype.number' }
};

export const entityName = 'Net Promoter Score';
export const collectionName = 'net_promoter_score';
