import modules from '../Modules/CreditorsLedger';


// ==========================================
// CREDITORS LEDGER WORKFLOW CONFIGURATION
// Full AP Subledger Lifecycle Management
// ==========================================

export const stepsConfig = {
    initialStep: 'draft',
    steps: [
        // --- ENTRY & VERIFICATION ---
        {
            name: 'draft',
            label: 'Draft',
            actions: ['submit_for_verification', 'delete']
        },
        {
            name: 'pending_verification',
            label: 'Pending Verification',
            actions: ['verify', 'reject_to_draft']
        },
        {
            name: 'verified',
            label: 'Verified',
            actions: ['submit_for_approval', 'return_to_draft']
        },

        // --- APPROVAL WORKFLOW ---
        {
            name: 'pending_approval',
            label: 'Pending Approval',
            actions: ['approve', 'reject', 'request_clarification']
        },
        {
            name: 'approved',
            label: 'Approved',
            actions: ['post_to_ledger', 'cancel_approval']
        },
        {
            name: 'rejected',
            label: 'Rejected',
            actions: ['reopen', 'archive']
        },

        // --- POSTING & RECONCILIATION ---
        {
            name: 'posted',
            label: 'Posted to Ledger',
            actions: ['reconcile', 'reverse_posting', 'raise_dispute']
        },
        {
            name: 'reconciled',
            label: 'Reconciled',
            actions: ['ready_for_payment', 'write_off', 'adjust']
        },
        {
            name: 'out_of_balance',
            label: 'Out of Balance',
            actions: ['clear_difference', 'investigate', 'escalate']
        },

        // --- PAYMENT WORKFLOW ---
        {
            name: 'ready_for_payment',
            label: 'Ready for Payment',
            actions: ['propose_payment', 'block_payment', 'hold']
        },
        {
            name: 'payment_proposed',
            label: 'Payment Proposed',
            actions: ['approve_payment', 'reject_payment', 'modify_proposal']
        },
        {
            name: 'payment_approved',
            label: 'Payment Approved',
            actions: ['mark_paid', 'cancel_payment']
        },
        {
            name: 'paid',
            label: 'Paid',
            actions: ['clear_item', 'partial_clear', 'reverse_payment']
        },
        {
            name: 'cleared',
            label: 'Cleared',
            actions: ['close', 'reopen_if_needed']
        },

        // --- DISPUTE HANDLING ---
        {
            name: 'disputed',
            label: 'Disputed',
            actions: ['resolve_dispute', 'escalate_dispute', 'withdraw_dispute']
        },
        {
            name: 'dispute_resolution',
            label: 'Dispute Resolution',
            actions: ['accept_resolution', 'reject_resolution', 'negotiate']
        },
        {
            name: 'dispute_resolved',
            label: 'Dispute Resolved',
            actions: ['return_to_posted', 'write_off', 'adjust']
        },

        // --- PERIOD CLOSE ---
        {
            name: 'period_closing',
            label: 'Period Closing',
            actions: ['complete_close', 'reopen_period']
        },
        {
            name: 'period_closed',
            label: 'Period Closed',
            actions: ['lock_period', 'unlock_for_adjustment']
        },
        {
            name: 'period_locked',
            label: 'Period Locked',
            actions: ['unlock_with_approval']
        },

        // --- FINAL STATES ---
        {
            name: 'closed',
            label: 'Closed',
            actions: ['archive', 'reopen_exceptional']
        },
        {
            name: 'archived',
            label: 'Archived',
            actions: ['restore']
        }
    ]
};

export const actionsConfig = {
    // --- ENTRY & VERIFICATION ACTIONS ---
    submit_for_verification: {
        label: 'Submit for Verification',
        type: 'primary',
        nextStep: 'pending_verification',
        icon: 'Send',
        requiresComment: false
    },
    verify: {
        label: 'Verify',
        type: 'success',
        nextStep: 'verified',
        icon: 'CheckCircle',
        requiresComment: false
    },
    reject_to_draft: {
        label: 'Reject to Draft',
        type: 'error',
        nextStep: 'draft',
        icon: 'Cancel',
        requiresComment: true
    },

    // --- APPROVAL ACTIONS ---
    submit_for_approval: {
        label: 'Submit for Approval',
        type: 'primary',
        nextStep: 'pending_approval',
        icon: 'Send',
        requiresComment: false
    },
    approve: {
        label: 'Approve',
        type: 'success',
        nextStep: 'approved',
        icon: 'CheckCircle',
        requiresComment: false
    },
    reject: {
        label: 'Reject',
        type: 'error',
        nextStep: 'rejected',
        icon: 'Cancel',
        requiresComment: true
    },
    request_clarification: {
        label: 'Request Clarification',
        type: 'warning',
        nextStep: 'draft',
        icon: 'Help',
        requiresComment: true
    },
    cancel_approval: {
        label: 'Cancel Approval',
        type: 'warning',
        nextStep: 'verified',
        icon: 'Undo',
        requiresComment: true
    },

    // --- POSTING ACTIONS ---
    post_to_ledger: {
        label: 'Post to Ledger',
        type: 'primary',
        nextStep: 'posted',
        icon: 'PostAdd',
        requiresComment: false
    },
    reverse_posting: {
        label: 'Reverse Posting',
        type: 'error',
        nextStep: 'approved',
        icon: 'Undo',
        requiresComment: true
    },

    // --- RECONCILIATION ACTIONS ---
    reconcile: {
        label: 'Reconcile',
        type: 'success',
        nextStep: 'reconciled',
        icon: 'AccountBalance',
        requiresComment: false
    },
    clear_difference: {
        label: 'Clear Difference',
        type: 'primary',
        nextStep: 'reconciled',
        icon: 'Done',
        requiresComment: true
    },
    write_off: {
        label: 'Write Off',
        type: 'error',
        nextStep: 'closed',
        icon: 'MoneyOff',
        requiresComment: true
    },
    adjust: {
        label: 'Adjust',
        type: 'warning',
        nextStep: 'posted',
        icon: 'Edit',
        requiresComment: true
    },

    // --- PAYMENT ACTIONS ---
    ready_for_payment: {
        label: 'Ready for Payment',
        type: 'success',
        nextStep: 'ready_for_payment',
        icon: 'Payment',
        requiresComment: false
    },
    propose_payment: {
        label: 'Propose Payment',
        type: 'primary',
        nextStep: 'payment_proposed',
        icon: 'RequestQuote',
        requiresComment: false
    },
    approve_payment: {
        label: 'Approve Payment',
        type: 'success',
        nextStep: 'payment_approved',
        icon: 'CheckCircle',
        requiresComment: false
    },
    reject_payment: {
        label: 'Reject Payment',
        type: 'error',
        nextStep: 'ready_for_payment',
        icon: 'Cancel',
        requiresComment: true
    },
    mark_paid: {
        label: 'Mark as Paid',
        type: 'success',
        nextStep: 'paid',
        icon: 'Paid',
        requiresComment: false
    },
    clear_item: {
        label: 'Clear Item',
        type: 'success',
        nextStep: 'cleared',
        icon: 'DoneAll',
        requiresComment: false
    },
    partial_clear: {
        label: 'Partial Clear',
        type: 'warning',
        nextStep: 'paid',
        icon: 'PartialPayment',
        requiresComment: true
    },
    reverse_payment: {
        label: 'Reverse Payment',
        type: 'error',
        nextStep: 'ready_for_payment',
        icon: 'Undo',
        requiresComment: true
    },
    block_payment: {
        label: 'Block Payment',
        type: 'error',
        nextStep: 'posted',
        icon: 'Block',
        requiresComment: true
    },

    // --- DISPUTE ACTIONS ---
    raise_dispute: {
        label: 'Raise Dispute',
        type: 'warning',
        nextStep: 'disputed',
        icon: 'Report',
        requiresComment: true
    },
    resolve_dispute: {
        label: 'Resolve Dispute',
        type: 'success',
        nextStep: 'dispute_resolved',
        icon: 'CheckCircle',
        requiresComment: true
    },
    escalate_dispute: {
        label: 'Escalate Dispute',
        type: 'error',
        nextStep: 'dispute_resolution',
        icon: 'TrendingUp',
        requiresComment: true
    },
    withdraw_dispute: {
        label: 'Withdraw Dispute',
        type: 'primary',
        nextStep: 'posted',
        icon: 'Undo',
        requiresComment: true
    },

    // --- PERIOD CLOSE ACTIONS ---
    complete_close: {
        label: 'Complete Period Close',
        type: 'success',
        nextStep: 'period_closed',
        icon: 'Lock',
        requiresComment: false
    },
    lock_period: {
        label: 'Lock Period',
        type: 'error',
        nextStep: 'period_locked',
        icon: 'LockClock',
        requiresComment: false
    },
    unlock_for_adjustment: {
        label: 'Unlock for Adjustment',
        type: 'warning',
        nextStep: 'period_closing',
        icon: 'LockOpen',
        requiresComment: true
    },
    unlock_with_approval: {
        label: 'Unlock (Requires Approval)',
        type: 'error',
        nextStep: 'period_closed',
        icon: 'LockOpen',
        requiresComment: true
    },

    // --- GENERAL ACTIONS ---
    reopen: {
        label: 'Reopen',
        type: 'warning',
        nextStep: 'draft',
        icon: 'Restore',
        requiresComment: true
    },
    close: {
        label: 'Close',
        type: 'success',
        nextStep: 'closed',
        icon: 'Close',
        requiresComment: false
    },
    archive: {
        label: 'Archive',
        type: 'default',
        nextStep: 'archived',
        icon: 'Archive',
        requiresComment: false
    },
    restore: {
        label: 'Restore',
        type: 'primary',
        nextStep: 'closed',
        icon: 'Unarchive',
        requiresComment: true
    },
    delete: {
        label: 'Delete',
        type: 'error',
        nextStep: null,
        icon: 'Delete',
        requiresComment: true,
        confirmationRequired: true
    }
};

export const collectionName = 'creditorsledger_config';

export const fieldsConfig = {
    // ==========================================
    // CONFIGURATION FIELDS
    // ==========================================

    // --- Approval Configuration ---
    auto_approve_limit: {
        label: 'Auto Approve Limit',
        type: 'number',
        help: 'Amounts below this will be auto-approved'
    },
    approver_email: {
        label: 'Approver Email',
        type: 'text',
        help: 'Default approver for this entity'
    },
    approval_threshold_tier1: { label: 'Approval Threshold Tier 1', type: 'number' },
    approval_threshold_tier2: { label: 'Approval Threshold Tier 2', type: 'number' },
    approval_threshold_tier3: { label: 'Approval Threshold Tier 3', type: 'number' },

    // --- Tolerance Configuration ---
    reconciliation_tolerance_amount: {
        label: 'Reconciliation Tolerance (Amount)',
        type: 'number',
        help: 'Absolute tolerance for reconciliation differences'
    },
    reconciliation_tolerance_percent: {
        label: 'Reconciliation Tolerance (%)',
        type: 'number',
        help: 'Percentage tolerance for reconciliation differences'
    },
    payment_tolerance_amount: { label: 'Payment Tolerance (Amount)', type: 'number' },
    payment_tolerance_percent: { label: 'Payment Tolerance (%)', type: 'number' },

    // --- Aging Configuration ---
    aging_bucket_1_days: { label: 'Aging Bucket 1 (Days)', type: 'number', defaultValue: 30 },
    aging_bucket_2_days: { label: 'Aging Bucket 2 (Days)', type: 'number', defaultValue: 60 },
    aging_bucket_3_days: { label: 'Aging Bucket 3 (Days)', type: 'number', defaultValue: 90 },
    high_risk_overdue_days: { label: 'High Risk Overdue (Days)', type: 'number', defaultValue: 90 },

    // --- FX Configuration ---
    fx_rate_source: {
        label: 'FX Rate Source',
        type: 'select',
        options: [
            { id: 'manual', label: 'Manual Entry' },
            { id: 'ecb', label: 'European Central Bank' },
            { id: 'fed', label: 'Federal Reserve' },
            { id: 'custom_api', label: 'Custom API' }
        ]
    },
    fx_revaluation_frequency: {
        label: 'FX Revaluation Frequency',
        type: 'select',
        options: [
            { id: 'daily', label: 'Daily' },
            { id: 'weekly', label: 'Weekly' },
            { id: 'monthly', label: 'Monthly' },
            { id: 'quarterly', label: 'Quarterly' }
        ]
    },

    // --- GL Account Mapping ---
    default_gl_control_account: { label: 'Default GL Control Account', type: 'text' },
    fx_gain_account: { label: 'FX Gain Account', type: 'text' },
    fx_loss_account: { label: 'FX Loss Account', type: 'text' },
    write_off_account: { label: 'Write-off Account', type: 'text' },
    suspense_account: { label: 'Suspense Account', type: 'text' },

    // --- Period Configuration ---
    fiscal_year_start_month: {
        label: 'Fiscal Year Start Month',
        type: 'number',
        help: '1-12, where 1 = January'
    },
    period_close_day: {
        label: 'Period Close Day',
        type: 'number',
        help: 'Day of month when period closes'
    },
    auto_lock_closed_periods: {
        label: 'Auto-Lock Closed Periods',
        type: 'checkbox',
        defaultValue: true
    },

    // --- Payment Configuration ---
    default_payment_terms_days: { label: 'Default Payment Terms (Days)', type: 'number', defaultValue: 30 },
    early_payment_discount_percent: { label: 'Early Payment Discount (%)', type: 'number' },
    early_payment_discount_days: { label: 'Early Payment Discount Days', type: 'number' },

    // --- Notification Configuration ---
    notify_on_approval_required: { label: 'Notify on Approval Required', type: 'checkbox', defaultValue: true },
    notify_on_reconciliation_variance: { label: 'Notify on Reconciliation Variance', type: 'checkbox', defaultValue: true },
    notify_on_dispute_raised: { label: 'Notify on Dispute Raised', type: 'checkbox', defaultValue: true },
    notify_on_payment_failure: { label: 'Notify on Payment Failure', type: 'checkbox', defaultValue: true },

    // --- Compliance Configuration ---
    sox_controls_enabled: { label: 'SOX Controls Enabled', type: 'checkbox', defaultValue: false },
    require_dual_approval: { label: 'Require Dual Approval', type: 'checkbox', defaultValue: false },
    audit_trail_retention_days: { label: 'Audit Trail Retention (Days)', type: 'number', defaultValue: 2555 }, // 7 years

    // --- Advanced Features ---
    enable_netting: { label: 'Enable Netting', type: 'checkbox', defaultValue: false },
    enable_intercompany_matching: { label: 'Enable Intercompany Matching', type: 'checkbox', defaultValue: false },
    enable_ai_anomaly_detection: { label: 'Enable AI Anomaly Detection', type: 'checkbox', defaultValue: false },
    enable_continuous_accounting: { label: 'Enable Continuous Accounting', type: 'checkbox', defaultValue: false }
};


// ==========================================
// MODULE EXPORTS
// ==========================================

export { modules };
