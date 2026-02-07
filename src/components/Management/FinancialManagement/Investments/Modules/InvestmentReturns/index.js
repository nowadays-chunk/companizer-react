import React from 'react';

const ReturnCalculationEngine = React.lazy(() => import('./ReturnCalculationEngine'));
const IncomeTrackingManager = React.lazy(() => import('./IncomeTrackingManager'));
const ValuationImpact = React.lazy(() => import('./ValuationImpact'));
const FXReturnImpact = React.lazy(() => import('./FXReturnImpact'));
const PortfolioAggregation = React.lazy(() => import('./PortfolioAggregation'));
const PerformanceMetrics = React.lazy(() => import('./PerformanceMetrics'));
const ReturnAnalyticsDashboard = React.lazy(() => import('./ReturnAnalyticsDashboard'));
const PeriodCloseReturns = React.lazy(() => import('./PeriodCloseReturns'));
const ReturnApprovals = React.lazy(() => import('./ReturnApprovals'));
const AuditIntegrityRules = React.lazy(() => import('./AuditIntegrityRules'));

export const modules = [
    {
        id: 'ret-engine',
        name: 'Calculation Engine',
        type: 'General',
        path: '/apps/returns/engine',
        icon: 'Calculate',
        description: 'Run TWR/IRR calculations.',
        component: ReturnCalculationEngine,
        requiresSelection: false
    },
    {
        id: 'ret-income',
        name: 'Income Tracking',
        type: 'General',
        path: '/apps/returns/income',
        icon: 'Paid',
        description: 'Dividends, interest & accruals.',
        component: IncomeTrackingManager,
        requiresSelection: false
    },
    {
        id: 'ret-valuation',
        name: 'Valuation Impact',
        type: 'General',
        path: '/apps/returns/valuation',
        icon: 'TrendingUp',
        description: 'Fair value P&L vs OCI.',
        component: ValuationImpact,
        requiresSelection: false
    },
    {
        id: 'ret-fx',
        name: 'FX & Currency',
        type: 'General',
        path: '/apps/returns/fx',
        icon: 'Public',
        description: 'Currency gain/loss visualization.',
        component: FXReturnImpact,
        requiresSelection: false
    },
    {
        id: 'ret-dashboard',
        name: 'Returns Analytics',
        type: 'General',
        path: '/apps/returns/dashboard',
        icon: 'Dashboard',
        description: 'Performance dashboard & trends.',
        component: ReturnAnalyticsDashboard,
        requiresSelection: false
    },
    {
        id: 'ret-aggregation',
        name: 'Portfolio View',
        type: 'General',
        path: '/apps/returns/portfolio',
        icon: 'PieChart',
        description: 'Asset class & entity drilldown.',
        component: PortfolioAggregation,
        requiresSelection: false
    },
    {
        id: 'ret-metrics',
        name: 'KPIs & Ratios',
        type: 'General',
        path: '/apps/returns/metrics',
        icon: 'ShowChart',
        description: 'Sharpe, Alpha, Beta analysis.',
        component: PerformanceMetrics,
        requiresSelection: false
    },
    {
        id: 'ret-close',
        name: 'Period Close',
        type: 'General',
        path: '/apps/returns/close',
        icon: 'LockClock',
        description: 'Month-end locking & validation.',
        component: PeriodCloseReturns,
        requiresSelection: false
    },
    {
        id: 'ret-approvals',
        name: 'Approvals & Audit',
        type: 'General',
        path: '/apps/returns/approvals',
        icon: 'Gavel',
        description: 'Workflow for adjustments.',
        component: ReturnApprovals,
        requiresSelection: false
    },
    {
        id: 'ret-integrity',
        name: 'Controls & Rules',
        type: 'General',
        path: '/apps/returns/rules',
        icon: 'Security',
        description: 'System integrity rules.',
        component: AuditIntegrityRules,
        requiresSelection: false
    }
];
