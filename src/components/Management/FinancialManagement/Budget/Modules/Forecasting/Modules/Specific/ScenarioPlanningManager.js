
export const fieldsConfig = {
    scenario_name: { label: 'Scenario Name', type: 'text', required: true },
    description: { label: 'Description', type: 'text' },
    projected_profit: { label: 'Projected Net Profit', type: 'number' },
    type: { label: 'Type', type: 'select', options: ['Best Case', 'Base Case', 'Worst Case'], defaultValue: 'Base Case' }
};

export const entityName = 'Scenario Planning';
export const collectionName = 'scenario_plans';
