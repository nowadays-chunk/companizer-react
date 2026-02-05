import React, { lazy } from 'react';

const TransferDashboard = lazy(() => import('./TransferDashboard'));
const TransferEntry = lazy(() => import('./TransferEntry'));
const ApprovalWorkflow = lazy(() => import('./ApprovalWorkflow'));
const ExecutionConnectivity = lazy(() => import('./ExecutionConnectivity'));
const FXManager = lazy(() => import('./FXManager'));
const AccountingIntegration = lazy(() => import('./AccountingIntegration'));
const IntercompanyManager = lazy(() => import('./IntercompanyManager'));
const ReconciliationStatus = lazy(() => import('./ReconciliationStatus'));
const AutomationRules = lazy(() => import('./AutomationRules'));
const TransferHistory = lazy(() => import('./TransferHistory'));

export const modules = [
    {
        id: 'dashboard',
        name: 'Transfer Dashboard',
        type: 'General',
        path: '/apps/bank-accounts/transfers/dashboard',
        icon: 'Dashboard',
        description: 'Overview of transfer status, cash movements, and KPIs.',
        component: TransferDashboard,
        requiresSelection: false
    },
    {
        id: 'entry',
        name: 'Transfer Entry',
        type: 'Specific',
        path: '/apps/bank-accounts/transfers/entry',
        icon: 'Send',
        description: 'Create internal, external, and intercompany transfers.',
        component: TransferEntry,
        requiresSelection: false
    },
    {
        id: 'approval',
        name: 'Approval Workflow',
        type: 'General',
        path: '/apps/bank-accounts/transfers/approvals',
        icon: 'Approval',
        description: 'Manage transfer approvals and emergency overrides.',
        component: ApprovalWorkflow,
        requiresSelection: false
    },
    {
        id: 'execution',
        name: 'Execution & Connectivity',
        type: 'General',
        path: '/apps/bank-accounts/transfers/execution',
        icon: 'AccountBalance',
        description: 'Generate bank files (SEPA/SWIFT) and track status.',
        component: ExecutionConnectivity,
        requiresSelection: false
    },
    {
        id: 'fx',
        name: 'FX Manager',
        type: 'Specific',
        path: '/apps/bank-accounts/transfers/fx',
        icon: 'CurrencyExchange',
        description: 'Manage cross-currency transfers and FX rates.',
        component: FXManager,
        requiresSelection: false
    },
    {
        id: 'accounting',
        name: 'Accounting Integration',
        type: 'General',
        path: '/apps/bank-accounts/transfers/accounting',
        icon: 'Book',
        description: 'Preview and post GL journals for transfers.',
        component: AccountingIntegration,
        requiresSelection: false
    },
    {
        id: 'intercompany',
        name: 'Intercompany Manager',
        type: 'Specific',
        path: '/apps/bank-accounts/transfers/intercompany',
        icon: 'Business',
        description: 'Manage due to/from postings and settlements.',
        component: IntercompanyManager,
        requiresSelection: false
    },
    {
        id: 'reconciliation',
        name: 'Reconciliation Status',
        type: 'General',
        path: '/apps/bank-accounts/transfers/reconciliation',
        icon: 'FactCheck',
        description: 'Track matching status and in-transit transfers.',
        component: ReconciliationStatus,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation Rules',
        type: 'General',
        path: '/apps/bank-accounts/transfers/automation',
        icon: 'Autorenew',
        description: 'Configure recurring transfers and routing rules.',
        component: AutomationRules,
        requiresSelection: false
    },
    {
        id: 'history',
        name: 'Transfer History',
        type: 'General',
        path: '/apps/bank-accounts/transfers/history',
        icon: 'History',
        description: 'Full audit trail and document archive.',
        component: TransferHistory,
        requiresSelection: false
    }
];
