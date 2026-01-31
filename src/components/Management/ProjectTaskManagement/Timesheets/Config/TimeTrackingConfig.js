
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
    submit_for_review: {
        label: 'Submit for Review',
        type: 'primary',
        nextStep: 'in_review',
        icon: 'Send'
    },
    approve: {
        label: 'Approve',
        type: 'success',
        nextStep: 'approved',
        icon: 'CheckCircle'
    },
    reject: {
        label: 'Reject',
        type: 'error',
        nextStep: 'rejected',
        icon: 'Cancel'
    },
    reopen: {
        label: 'Reopen',
        type: 'warning',
        nextStep: 'draft',
        icon: 'Restore'
    },
    process_payment: {
        label: 'Process Payment',
        type: 'primary',
        nextStep: 'paid', // Assuming a paid step exists or stays in approved
        icon: 'Paid'
    }
};

export const collectionName = 'timetracking_config';
export const fieldsConfig = {
    // Standard Config Fields if needed for the "Configure" dialog
    auto_approve_limit: { label: 'Auto Approve Limit', type: 'number' },
    approver_email: { label: 'Approver Email', type: 'text' }
};
