import React from 'react';

const AgingDashboard = React.lazy(() => import('./AgingDashboard'));
const AgingAnalysis = React.lazy(() => import('./AgingAnalysis'));
const RiskAndCollections = React.lazy(() => import('./RiskAndCollections'));
const CashForecast = React.lazy(() => import('./CashForecast'));
const AgingConfiguration = React.lazy(() => import('./AgingConfiguration'));

export const modules = [
    {
        id: 'dashboard',
        name: 'Collections Dashboard',
        type: 'General',
        path: '/apps/accounts-receivable/debtor-aging/dashboard',
        icon: 'Dashboard',
        description: 'Overview of collections and aging.',
        component: AgingDashboard,
        requiresSelection: false
    },
    {
        id: 'analysis',
        name: 'Aging Analysis',
        type: 'General',
        path: '/apps/accounts-receivable/debtor-aging/analysis',
        icon: 'Analytics',
        description: 'Deep dive into aging buckets.',
        component: AgingAnalysis,
        requiresSelection: false
    },
    {
        id: 'risk',
        name: 'Risk & Collections',
        type: 'General',
        path: '/apps/accounts-receivable/debtor-aging/risk',
        icon: 'WarningAmber',
        description: 'Manage collection risks.',
        component: RiskAndCollections,
        requiresSelection: false
    },
    {
        id: 'forecast',
        name: 'Cash Forecast',
        type: 'General',
        path: '/apps/accounts-receivable/debtor-aging/forecast',
        icon: 'ShowChart',
        description: 'Forecast receipts from debtors.',
        component: CashForecast,
        requiresSelection: false
    },
    {
        id: 'configuration',
        name: 'Configuration',
        type: 'General',
        path: '/apps/accounts-receivable/debtor-aging/configuration',
        icon: 'Settings',
        description: 'Aging bucket settings.',
        component: AgingConfiguration,
        requiresSelection: false
    },
];

export default modules;
