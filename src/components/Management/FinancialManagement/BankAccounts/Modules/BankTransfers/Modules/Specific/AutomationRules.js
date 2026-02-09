
export const fieldsConfig = {
    rule_name: { label: 'Rule Name', type: 'text', required: true },
    conditions: { label: 'Conditions', type: 'json' },
    action: { label: 'Action', type: 'text' },
    is_active: { label: 'Active', type: 'boolean', defaultValue: true }
};

export const entityName = 'Automation Rules';
export const collectionName = 'transfer_rules';
