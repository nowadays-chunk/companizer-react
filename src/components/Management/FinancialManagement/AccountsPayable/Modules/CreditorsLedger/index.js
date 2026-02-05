// Creditors Ledger Modules Configuration
// Links analytical modules to the Creditors Ledger entity

import React, { lazy } from 'react';

const AgingAnalysis = lazy(() => import('./AgingAnalysis'));
const ReconciliationManager = lazy(() => import('./ReconciliationManager'));
const CashForecast = lazy(() => import('./CashForecast'));
const DPOAnalytics = lazy(() => import('./DPOAnalytics'));
const DisputeManager = lazy(() => import('./DisputeManager'));
const VendorStatement = lazy(() => import('./VendorStatement'));

export const modules = [
    {
        id: 'aging_analysis',
        label: 'Aging Analysis',
        component: AgingAnalysis,
        type: 'General', // Available in list view toolbar
        icon: 'BarChart',
        description: 'Analyze payables aging with configurable buckets and multi-dimensional grouping',
        requiresSelection: false,
        name: 'Aging Analysis',
        path: '/apps/creditors-ledger/aging-analysis'
    },
    {
        id: 'reconciliation_manager',
        label: 'Reconciliation Manager',
        component: ReconciliationManager,
        type: 'General',
        icon: 'AccountBalance',
        description: 'Manage subledger-to-GL reconciliation with variance detection and clearing',
        requiresSelection: false,
        name: 'Reconciliation Manager',
        path: '/apps/creditors-ledger/reconciliation'
    },
    {
        id: 'cash_forecast',
        label: 'Cash Forecast',
        component: CashForecast,
        type: 'General',
        icon: 'Timeline',
        description: 'Forecast cash requirements based on due dates and payment terms',
        requiresSelection: false,
        name: 'Cash Forecast',
        path: '/apps/creditors-ledger/cash-forecast'
    },
    {
        id: 'dpo_analytics',
        label: 'DPO Analytics',
        component: DPOAnalytics,
        type: 'General',
        icon: 'TrendingUp',
        description: 'Analyze Days Payable Outstanding with industry benchmarking',
        requiresSelection: false,
        name: 'DPO Analytics',
        path: '/apps/creditors-ledger/dpo-analytics'
    },
    {
        id: 'dispute_manager',
        label: 'Dispute Manager',
        component: DisputeManager,
        type: 'General',
        icon: 'Report',
        description: 'Manage disputes and exceptions with workflow tracking',
        requiresSelection: false,
        name: 'Dispute Manager',
        path: '/apps/creditors-ledger/disputes'
    },
    {
        id: 'vendor_statement',
        label: 'Vendor Statement',
        component: VendorStatement,
        type: 'Specific', // Available in detail view
        icon: 'Description',
        description: 'Generate vendor account statements with open items and payment history',
        requiresSelection: true,
        name: 'Vendor Statement',
        path: '/apps/creditors-ledger/vendor-statement/:id'
    }
];

export default modules;
