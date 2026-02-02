
export const stepsConfig = {
    initialStep: 'draft',
    steps: [
        {
            name: 'draft',
            label: 'Draft',
            actions: ['submit_for_review', 'save_draft', 'delete'],
        },
        {
            name: 'ocr_processing',
            label: 'Processing',
            actions: ['ocr_complete', 'ocr_failed'],
        },
        {
            name: 'under_review',
            label: 'Manager Review',
            actions: ['approve_manager', 'reject', 'request_changes', 'delegate'],
        },
        {
            name: 'finance_review',
            label: 'Finance Review',
            actions: ['approve_finance', 'reject_finance', 'hold_variance'],
        },
        {
            name: 'approved',
            label: 'Approved',
            actions: ['mark_ready_for_payment', 'dispute'],
        },
        {
            name: 'ready_for_payment',
            label: 'Ready for Pay',
            actions: ['process_payment', 'hold_payment'],
        },
        {
            name: 'paid',
            label: 'Paid',
            actions: ['archive', 'issue_referral'],
        },
        {
            name: 'disputed',
            label: 'Disputed',
            actions: ['resolve_dispute', 'archive'],
        },
        {
            name: 'rejected',
            label: 'Rejected',
            actions: ['revise', 'archive'],
        },
        {
            name: 'archived',
            label: 'Archived',
            actions: ['restore'],
        },
    ],
};

export const actionsConfig = {
    // --- Draft Actions ---
    submit_for_review: {
        label: 'Submit',
        type: 'primary',
        nextStep: 'under_review',
        icon: 'Send',
        authorized_role: 'user',
    },
    save_draft: {
        label: 'Save',
        type: 'secondary',
        nextStep: 'draft',
        icon: 'Save',
        authorized_role: 'user',
    },
    delete: {
        label: 'Delete',
        type: 'error',
        nextStep: 'deleted',
        icon: 'Delete',
        authorized_role: 'user',
    },

    // --- Review Actions ---
    approve_manager: {
        label: 'Approve (Manager)',
        type: 'success',
        nextStep: 'finance_review', // Go to Finance next
        icon: 'CheckCircle',
        authorized_role: 'manager',
    },
    reject: {
        label: 'Reject',
        type: 'error',
        nextStep: 'rejected',
        icon: 'Cancel',
        authorized_role: 'manager',
    },
    request_changes: {
        label: 'Request Info',
        type: 'warning',
        nextStep: 'draft',
        icon: 'Help',
        authorized_role: 'manager',
    },

    // --- Finance Actions ---
    approve_finance: {
        label: 'Approve (Finance)',
        type: 'success',
        nextStep: 'approved',
        icon: 'VerifiedUser',
        authorized_role: 'finance_controller',
    },
    reject_finance: {
        label: 'Reject (Finance)',
        type: 'error',
        nextStep: 'rejected',
        icon: 'Block',
        authorized_role: 'finance_controller',
    },
    hold_variance: {
        label: 'Hold (Variance)',
        type: 'warning',
        nextStep: 'disputed',
        icon: 'Pause',
        authorized_role: 'finance_controller',
    },

    // --- Post-Approval Actions ---
    mark_ready_for_payment: {
        label: 'Release for Pay',
        type: 'primary',
        nextStep: 'ready_for_payment',
        icon: 'Payment',
        authorized_role: 'accountant',
    },
    dispute: {
        label: 'Raise Dispute',
        type: 'error',
        nextStep: 'disputed',
        icon: 'ReportProblem',
        authorized_role: 'user',
    },

    // --- Payment Actions ---
    process_payment: {
        label: 'Mark Paid',
        type: 'success',
        nextStep: 'paid',
        icon: 'AttachMoney',
        authorized_role: 'treasurer',
    },

    // --- Other ---
    revise: {
        label: 'Revise',
        type: 'primary',
        nextStep: 'draft',
        icon: 'Edit',
        authorized_role: 'user',
    },
    restore: {
        label: 'Restore',
        type: 'secondary',
        nextStep: 'draft',
        icon: 'Restore',
        authorized_role: 'admin',
    },
    resolve_dispute: {
        label: 'Resolve',
        type: 'success',
        nextStep: 'under_review', // Re-evaluate
        icon: 'Handshake',
        authorized_role: 'manager',
    },
};
