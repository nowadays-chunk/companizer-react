import React, { lazy } from 'react';

const ReconciliationDashboard = lazy(() => import('./ReconciliationDashboard'));
const BankReconciliation = lazy(() => import('./BankReconciliation'));
const ImportDataFeeds = lazy(() => import('./ImportDataFeeds'));
const MatchingRulesEngine = lazy(() => import('./MatchingRulesEngine'));
const ReconcilingItems = lazy(() => import('./ReconcilingItems'));
const IntercompanyReconciliation = lazy(() => import('./IntercompanyReconciliation'));
const BalanceSheetReconciliation = lazy(() => import('./BalanceSheetReconciliation'));
const ReconciliationWorkflow = lazy(() => import('./ReconciliationWorkflow'));
const ReconciliationReports = lazy(() => import('./ReconciliationReports'));
const ReconciliationSettings = lazy(() => import('./ReconciliationSettings'));

export const modules = [
    {
        id: 'dashboard',
        name: 'Reconciliation Dashboard',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/dashboard',
        icon: 'Dashboard',
        description: 'Overview of reconciliation status, KPIs, and urgent tasks.',
        component: ReconciliationDashboard,
        requiresSelection: false
    },
    {
        id: 'bank-reconciliation',
        name: 'Bank & Cash Reconciliation',
        type: 'Specific',
        path: '/apps/bank-accounts/reconciliation/matching',
        icon: 'AccountBalance',
        description: 'Match bank statements with GL transactions side-by-side.',
        component: BankReconciliation,
        requiresSelection: true
    },
    {
        id: 'import-data',
        name: 'Import & Data Feeds',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/import',
        icon: 'CloudUpload',
        description: 'Import bank statements or manage API feeds.',
        component: ImportDataFeeds,
        requiresSelection: false
    },
    {
        id: 'matching-rules',
        name: 'Matching Rules Engine',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/rules',
        icon: 'Rule',
        description: 'Configure auto-match rules, tolerances, and ML settings.',
        component: MatchingRulesEngine,
        requiresSelection: false
    },
    {
        id: 'reconciling-items',
        name: 'Reconciling Items',
        type: 'Specific',
        path: '/apps/bank-accounts/reconciliation/items',
        icon: 'ListAlt',
        description: 'Manage outstanding items, adjustments, and exceptions.',
        component: ReconcilingItems,
        requiresSelection: true
    },
    {
        id: 'intercompany',
        name: 'Intercompany Reconciliation',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/intercompany',
        icon: 'Business',
        description: 'Reconcile transactions between entity branches and subsidiaries.',
        component: IntercompanyReconciliation,
        requiresSelection: false
    },
    {
        id: 'balance-sheet',
        name: 'Balance Sheet Reconciliation',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/balance-sheet',
        icon: 'AccountBalanceWallet',
        description: 'Reconcile suspense, control, tax, and clearing accounts.',
        component: BalanceSheetReconciliation,
        requiresSelection: false
    },
    {
        id: 'workflow',
        name: 'Workflow & Approvals',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/workflow',
        icon: 'Approval',
        description: 'Manage approvals and period close dependencies.',
        component: ReconciliationWorkflow,
        requiresSelection: false
    },
    {
        id: 'reports',
        name: 'Reconciliation Reports',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/reports',
        icon: 'Assessment',
        description: 'Generate audit-ready reconciliation statements and reports.',
        component: ReconciliationReports,
        requiresSelection: false
    },
    {
        id: 'settings',
        name: 'Settings & Security',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/settings',
        icon: 'Settings',
        description: 'Configure permissions, FX rules, and system controls.',
        component: ReconciliationSettings,
        requiresSelection: false
    }
];
