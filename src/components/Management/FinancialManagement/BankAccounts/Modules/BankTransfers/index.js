import React from 'react';

const TransferDashboard = React.lazy(() => import('./TransferDashboard'));
const TransferEntry = React.lazy(() => import('./TransferEntry'));
const ApprovalWorkflow = React.lazy(() => import('./ApprovalWorkflow'));
const ExecutionConnectivity = React.lazy(() => import('./ExecutionConnectivity'));
const FXManager = React.lazy(() => import('./FXManager'));
const AccountingIntegration = React.lazy(() => import('./AccountingIntegration'));
const IntercompanyManager = React.lazy(() => import('./IntercompanyManager'));
const ReconciliationStatus = React.lazy(() => import('./ReconciliationStatus'));
const AutomationRules = React.lazy(() => import('./AutomationRules'));
const TransferHistory = React.lazy(() => import('./TransferHistory'));

export const modules = [
    {
        id: 'dashboard',
        name: 'Transfer Dashboard',
        type: 'General',
        path: '/apps/bank-accounts/transfers/dashboard',
        icon: 'Dashboard',
        description: 'Overview of bank transfers.',
        component: TransferDashboard,
        requiresSelection: false
    },
    {
        id: 'entry',
        name: 'New Transfer',
        type: 'Link',
        path: '/apps/bank-accounts/transfers/entry',
        icon: 'Send',
        description: 'Initiate a new bank transfer.',
        component: TransferEntry,
        requiresSelection: false
    },
    {
        id: 'approvals',
        name: 'Approvals',
        type: 'General',
        path: '/apps/bank-accounts/transfers/approvals',
        icon: 'ThumbUp',
        description: 'Approve pending transfers.',
        component: ApprovalWorkflow,
        requiresSelection: false
    },
    {
        id: 'execution',
        name: 'Execution',
        type: 'General',
        path: '/apps/bank-accounts/transfers/execution',
        icon: 'PlayCircleFilled',
        description: 'Monitor transfer execution.',
        component: ExecutionConnectivity,
        requiresSelection: false
    },
    {
        id: 'fx',
        name: 'FX Deals',
        type: 'Link',
        path: '/apps/bank-accounts/transfers/fx',
        icon: 'CurrencyExchange',
        description: 'Manage foreign exchange for transfers.',
        component: FXManager,
        requiresSelection: false
    },
    {
        id: 'accounting',
        name: 'Accounting',
        type: 'General',
        path: '/apps/bank-accounts/transfers/accounting',
        icon: 'AccountBalance',
        description: 'GL integration settings.',
        component: AccountingIntegration,
        requiresSelection: false
    },
    {
        id: 'intercompany',
        name: 'Intercompany',
        type: 'Link',
        path: '/apps/bank-accounts/transfers/intercompany',
        icon: 'Business',
        description: 'Internal fund transfers.',
        component: IntercompanyManager,
        requiresSelection: false
    },
    {
        id: 'reconciliation',
        name: 'Reconciliation',
        type: 'General',
        path: '/apps/bank-accounts/transfers/reconciliation',
        icon: 'FactCheck',
        description: 'Transfer reconciliation status.',
        component: ReconciliationStatus,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation',
        type: 'General',
        path: '/apps/bank-accounts/transfers/automation',
        icon: 'AutoMode',
        description: 'Recurring transfer rules.',
        component: AutomationRules,
        requiresSelection: false
    },
    {
        id: 'history',
        name: 'History',
        type: 'General',
        path: '/apps/bank-accounts/transfers/history',
        icon: 'History',
        description: 'Log of past transfers.',
        component: TransferHistory,
        requiresSelection: false
    },
];

export default modules;
