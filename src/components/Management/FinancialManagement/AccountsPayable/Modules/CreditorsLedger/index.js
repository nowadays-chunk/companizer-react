import React from 'react';

const ReconciliationManager = React.lazy(() => import('./ReconciliationManager'));
const CashForecast = React.lazy(() => import('./CashForecast'));
const DPOAnalytics = React.lazy(() => import('./DPOAnalytics'));
const DisputeManager = React.lazy(() => import('./DisputeManager'));
const AgingAnalysis = React.lazy(() => import('./AgingAnalysis'));

export const modules = [
    {
        id: 'reconciliation',
        name: 'Reconciliation',
        type: 'General',
        path: '/apps/accounts-payable/creditors-ledger/reconciliation',
        icon: 'FactCheck',
        description: 'Reconcile supplier statements.',
        component: ReconciliationManager,
        requiresSelection: false
    },
    {
        id: 'cash-forecast',
        name: 'Cash Forecast',
        type: 'General',
        path: '/apps/accounts-payable/creditors-ledger/cash-forecast',
        icon: 'RequestQuote',
        description: 'Forecast outgoing payments.',
        component: CashForecast,
        requiresSelection: false
    },
    {
        id: 'dpo-analytics',
        name: 'DPO Analytics',
        type: 'General',
        path: '/apps/accounts-payable/creditors-ledger/dpo-analytics',
        icon: 'InsertChart',
        description: 'Analyze Days Payable Outstanding.',
        component: DPOAnalytics,
        requiresSelection: false
    },
    {
        id: 'disputes',
        name: 'Disputes',
        type: 'Specific',
        path: '/apps/accounts-payable/creditors-ledger/disputes',
        icon: 'ReportProblem',
        description: 'Manage supplier disputes.',
        component: DisputeManager,
        requiresSelection: false
    },
    {
        id: 'aging-analysis',
        name: 'Aging Analysis',
        type: 'General',
        path: '/apps/accounts-payable/creditors-ledger/aging-analysis',
        icon: 'History',
        description: 'Creditor aging reports.',
        component: AgingAnalysis,
        requiresSelection: false
    },
];

export default modules;
