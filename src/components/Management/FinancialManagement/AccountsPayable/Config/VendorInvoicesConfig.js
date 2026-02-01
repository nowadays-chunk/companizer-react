
export const stepsConfig = {
    initialStep: 'draft',
    steps: [
        {
            name: 'draft',
            label: 'Draft',
            actions: ['submit_for_review', 'save_draft', 'generate_pdf'],
        },
        {
            name: 'under_review',
            label: 'Under Review',
            actions: ['approve', 'reject', 'request_changes', 'generate_pdf'],
        },
        {
            name: 'approved',
            label: 'Approved',
            actions: ['finalize', 'archive', 'generate_pdf'],
        },
        {
            name: 'rejected',
            label: 'Rejected',
            actions: ['revise', 'archive', 'generate_pdf'],
        },
        {
            name: 'archived',
            label: 'Archived',
            actions: ['restore', 'generate_pdf'],
        },
    ],
};

export const actionsConfig = {
    submit_for_review: {
        label: 'Submit for Review',
        type: 'primary',
        nextStep: 'under_review',
        icon: 'ThumbUp',
        authorized_role: 'user', // Minimum role required
    },
    save_draft: {
        label: 'Save Draft',
        type: 'secondary',
        nextStep: 'draft',
        icon: 'Edit',
        authorized_role: 'user',
    },
    approve: {
        label: 'Approve',
        type: 'success',
        nextStep: 'approved',
        icon: 'CheckCircle',
        authorized_role: 'manager', // Only managers and above
    },
    reject: {
        label: 'Reject',
        type: 'error',
        nextStep: 'rejected',
        icon: 'Cancel',
        authorized_role: 'manager',
    },
    request_changes: {
        label: 'Request Changes',
        type: 'secondary',
        nextStep: 'draft',
        icon: 'Email',
        authorized_role: 'manager',
    },
    finalize: {
        label: 'Finalize',
        type: 'success',
        nextStep: 'finalized',
        icon: 'Paid',
        authorized_role: 'accountant', // Accountant-specific action
    },
    archive: {
        label: 'Archive',
        type: 'secondary',
        nextStep: 'archived',
        icon: 'Archive',
        authorized_role: 'manager',
    },
    restore: {
        label: 'Restore',
        type: 'secondary',
        nextStep: 'draft',
        icon: 'Restore',
        authorized_role: 'admin', // Only admins can restore
    },
    revise: {
        label: 'Revise',
        type: 'primary',
        nextStep: 'draft',
        icon: 'Edit',
        authorized_role: 'user',
    },
    generate_pdf: {
        label: 'Generate PDF',
        type: 'secondary',
        icon: 'PictureAsPdf',
        actionType: 'pdf',
        authorized_role: 'viewer', // Anyone can generate PDF
    },
};
