
export const fieldsConfig = {
    analysis_id: { label: 'Analysis ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    process_name: { label: 'Process Name', type: 'text', faker: 'commerce.department' },
    impact_category: { label: 'Impact Category', type: 'select', options: [{ id: 'financial', label: 'Financial' }, { id: 'operational', label: 'Operational' }, { id: 'reputational', label: 'Reputational' }], faker: 'random.arrayElement' },

    financial_impact_daily: { label: 'Financial Impact (Daily)', type: 'number', faker: 'finance.amount' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    max_tolerable_downtime: { label: 'Max Tolerable Downtime', type: 'text', faker: 'lorem.words' },
    recovery_priorities: { label: 'Recovery Priorities', type: 'select', options: [{ id: 'critical', label: 'Critical' }, { id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
    dependencies: { label: 'Dependencies', type: 'text', faker: 'lorem.sentence' },
    analyst_name: { label: 'Analyst Name', type: 'text', faker: 'name.fullName' },
    analysis_date: { label: 'Analysis Date', type: 'date', faker: 'date.recent' },
    mitigation_strategies: { label: 'Mitigation Strategies', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' }
};

export const entityName = 'Business Impact Analysis';
export const collectionName = 'business_impact_analysis';
