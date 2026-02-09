
export const fieldsConfig = {
    allocation_method: { label: 'Allocation Method', type: 'select', options: ['Top-Down', 'Bottom-Up', 'Driver-Based'], defaultValue: 'Top-Down' },
    overhead_percentage: { label: 'Overhead (%)', type: 'number' },
    driver_factor: { label: 'Driver Factor', type: 'text' },
    weighting: { label: 'Weighting', type: 'number' }
};

export const entityName = 'Allocation Rules';
export const collectionName = 'allocation_rules';
