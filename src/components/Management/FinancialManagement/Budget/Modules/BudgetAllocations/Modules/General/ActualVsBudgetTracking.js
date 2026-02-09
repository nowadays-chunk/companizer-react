
export const fieldsConfig = {
    department: { label: 'Department', type: 'select', options: ['All', 'Sales', 'Engineering', 'Marketing', 'HR'], defaultValue: 'All' },
    total_budget: { label: 'Total Budget', type: 'number' },
    total_spent: { label: 'Total Spent', type: 'number' },
    utilization: { label: 'Utilization (%)', type: 'number' }
};

export const entityName = 'Actual vs Budget Tracking';
export const collectionName = 'budget_tracking';
