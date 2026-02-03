
export const stepsConfig = {
    initialStep: 'draft',
    steps: [
        {
            name: 'draft',
            label: 'Draft',
            actions: ['submit_for_review']
        },
        {
            name: 'in_review',
            label: 'In Review',
            actions: ['approve', 'reject']
        },
        {
            name: 'approved',
            label: 'Approved',
            actions: ['process_payment'] // Example action
        },
        {
            name: 'rejected',
            label: 'Rejected',
            actions: ['reopen']
        }
    ]
};

export const actionsConfig = {
    activate: {
        label: 'Activate',
        type: 'success',
        nextStep: 'active',
        icon: 'PlayArrow',
        authorized_role: 'manager'
    },
    deactivate: {
        label: 'Deactivate',
        type: 'error',
        nextStep: 'inactive',
        icon: 'Stop',
        authorized_role: 'manager'
    }
};

export const modules = [
    {
        name: 'Test Bench',
        type: 'Specific', // Appears on Detail View
        path: '/apps/payment-terms/test-bench/:id',
        icon: 'Science',
        description: 'Simulate invoice dates to verify term logic.'
    },
    {
        name: 'Calculator',
        type: 'General', // Appears on List View
        path: '/apps/payment-terms/calculator',
        icon: 'Calculate',
        description: 'Quick date calculator utility.'
    }
];

export const collectionName = 'paymentterms_config';
export const fieldsConfig = {
    // Standard Config Fields if needed for the "Configure" dialog
    auto_approve_limit: { label: 'Auto Approve Limit', type: 'number' },
    approver_email: { label: 'Approver Email', type: 'text' }
};
