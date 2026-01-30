
export const fieldsConfig = {
    scenario_id: { label: 'Scenario ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    scenario_title: { label: 'Scenario Title', type: 'text', faker: 'lorem.sentence' },
    risk_level: { label: 'Risk Level', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'critical', label: 'Critical' }, { id: 'catastrophic', label: 'Catastrophic' }], faker: 'random.arrayElement' },

    description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    probability: { label: 'Probability', type: 'select', options: [{ id: 'likely', label: 'Likely' }, { id: 'possible', label: 'Possible' }, { id: 'unlikely', label: 'Unlikely' }], faker: 'random.arrayElement' },
    impact_description: { label: 'Impact Description', type: 'text', faker: 'lorem.sentence' },
    mitigation_measures: { label: 'Mitigation Measures', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    trigger_events: { label: 'Trigger Events', type: 'text', faker: 'lorem.sentence' },
    simulation_date: { label: 'Simulation Date', type: 'date', faker: 'date.future' },
    preparedness_score: { label: 'Preparedness Score', type: 'number', faker: 'datatype.number' } // 0-100
};

export const entityName = 'Crisis Scenarios';
export const collectionName = 'crisis_scenarios';
