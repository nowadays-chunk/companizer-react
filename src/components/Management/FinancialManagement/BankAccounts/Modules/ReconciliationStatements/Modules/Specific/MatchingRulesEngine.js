
export const fieldsConfig = {
    match_exact_amount: { label: 'Match Exact Amount', type: 'boolean', defaultValue: true },
    match_date_tolerance: { label: 'Match Date Tolerance', type: 'number', defaultValue: 3 },
    match_reference: { label: 'Match Reference', type: 'boolean', defaultValue: true },
    fuzzy_description: { label: 'Fuzzy Description Matching', type: 'boolean', defaultValue: false }
};

export const entityName = 'Matching Rules Engine';
export const collectionName = 'matching_rules';
