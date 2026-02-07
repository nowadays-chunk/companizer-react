import React from 'react';

const ReconciliationDashboard = React.lazy(() => import('./ReconciliationDashboard'));
const BankReconciliation = React.lazy(() => import('./BankReconciliation'));
const ImportDataFeeds = React.lazy(() => import('./ImportDataFeeds'));
const MatchingRulesEngine = React.lazy(() => import('./MatchingRulesEngine'));
const ReconcilingItems = React.lazy(() => import('./ReconcilingItems'));
const IntercompanyReconciliation = React.lazy(() => import('./IntercompanyReconciliation'));
const BalanceSheetReconciliation = React.lazy(() => import('./BalanceSheetReconciliation'));
const ReconciliationWorkflow = React.lazy(() => import('./ReconciliationWorkflow'));
const ReconciliationReports = React.lazy(() => import('./ReconciliationReports'));
const ReconciliationSettings = React.lazy(() => import('./ReconciliationSettings'));

export const modules = [
    {
        id: 'dashboard',
        name: 'Reconciliation Dashboard',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/dashboard',
        icon: 'Dashboard',
        description: 'Overview of reconciliation status.',
        component: ReconciliationDashboard,
        requiresSelection: false
    },
    {
        id: 'matching',
        name: 'Bank Matching',
        type: 'Specific',
        path: '/apps/bank-accounts/reconciliation/matching',
        icon: 'CompareArrows',
        description: 'Match bank transactions to ledger.',
        component: BankReconciliation,
        requiresSelection: false
    },
    {
        id: 'import',
        name: 'Import Feeds',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/import',
        icon: 'CloudUpload',
        description: 'Import bank statements.',
        component: ImportDataFeeds,
        requiresSelection: false
    },
    {
        id: 'rules',
        name: 'Matching Rules',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/rules',
        icon: 'Rule',
        description: 'Configure auto-matching rules.',
        component: MatchingRulesEngine,
        requiresSelection: false
    },
    {
        id: 'items',
        name: 'Reconciling Items',
        type: 'Specific',
        path: '/apps/bank-accounts/reconciliation/items',
        icon: 'ListAlt',
        description: 'Manage outstanding items.',
        component: ReconcilingItems,
        requiresSelection: false
    },
    {
        id: 'intercompany',
        name: 'Intercompany',
        type: 'Specific',
        path: '/apps/bank-accounts/reconciliation/intercompany',
        icon: 'Business',
        description: 'Reconcile intercompany accounts.',
        component: IntercompanyReconciliation,
        requiresSelection: false
    },
    {
        id: 'balance-sheet',
        name: 'Balance Sheet',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/balance-sheet',
        icon: 'AccountBalance',
        description: 'Reconcile balance sheet accounts.',
        component: BalanceSheetReconciliation,
        requiresSelection: false
    },
    {
        id: 'workflow',
        name: 'Workflow',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/workflow',
        icon: 'LinearScale',
        description: 'Reconciliation approval process.',
        component: ReconciliationWorkflow,
        requiresSelection: false
    },
    {
        id: 'reports',
        name: 'Reports',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/reports',
        icon: 'Assessment',
        description: 'Reconciliation reports.',
        component: ReconciliationReports,
        requiresSelection: false
    },
    {
        id: 'settings',
        name: 'Settings',
        type: 'General',
        path: '/apps/bank-accounts/reconciliation/settings',
        icon: 'Settings',
        description: 'Reconciliation configuration.',
        component: ReconciliationSettings,
        requiresSelection: false
    },
];

export default modules;
