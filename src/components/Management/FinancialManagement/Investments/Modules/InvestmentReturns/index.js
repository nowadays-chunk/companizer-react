import React from 'react';

import ReturnCalculationEngine from './ReturnCalculationEngine';
import IncomeTrackingManager from './IncomeTrackingManager';
import ValuationImpact from './ValuationImpact';
import FXReturnImpact from './FXReturnImpact';
import PortfolioAggregation from './PortfolioAggregation';
import PerformanceMetrics from './PerformanceMetrics';
import ReturnAnalyticsDashboard from './ReturnAnalyticsDashboard';
import PeriodCloseReturns from './PeriodCloseReturns';
import ReturnApprovals from './ReturnApprovals';
import AuditIntegrityRules from './AuditIntegrityRules';

export const modules = [
    {
        id: 'ret-engine',
        name: 'Calculation Engine',
        type: 'General',
        path: '/apps/returns/engine',
        icon: 'Calculate',
        description: 'Run TWR/IRR calculations.',
        component: ReturnCalculationEngine
    },
    {
        id: 'ret-income',
        name: 'Income Tracking',
        type: 'General',
        path: '/apps/returns/income',
        icon: 'Paid',
        description: 'Dividends, interest & accruals.',
        component: IncomeTrackingManager
    },
    {
        id: 'ret-valuation',
        name: 'Valuation Impact',
        type: 'General',
        path: '/apps/returns/valuation',
        icon: 'TrendingUp',
        description: 'Fair value P&L vs OCI.',
        component: ValuationImpact
    },
    {
        id: 'ret-fx',
        name: 'FX & Currency',
        type: 'General',
        path: '/apps/returns/fx',
        icon: 'Public',
        description: 'Currency gain/loss visualization.',
        component: FXReturnImpact
    },
    {
        id: 'ret-dashboard',
        name: 'Returns Analytics',
        type: 'General',
        path: '/apps/returns/dashboard',
        icon: 'Dashboard',
        description: 'Performance dashboard & trends.',
        component: ReturnAnalyticsDashboard
    },
    {
        id: 'ret-aggregation',
        name: 'Portfolio View',
        type: 'General',
        path: '/apps/returns/portfolio',
        icon: 'PieChart',
        description: 'Asset class & entity drilldown.',
        component: PortfolioAggregation
    },
    {
        id: 'ret-metrics',
        name: 'KPIs & Ratios',
        type: 'General',
        path: '/apps/returns/metrics',
        icon: 'ShowChart',
        description: 'Sharpe, Alpha, Beta analysis.',
        component: PerformanceMetrics
    },
    {
        id: 'ret-close',
        name: 'Period Close',
        type: 'General',
        path: '/apps/returns/close',
        icon: 'LockClock',
        description: 'Month-end locking & validation.',
        component: PeriodCloseReturns
    },
    {
        id: 'ret-approvals',
        name: 'Approvals & Audit',
        type: 'General',
        path: '/apps/returns/approvals',
        icon: 'Gavel',
        description: 'Workflow for adjustments.',
        component: ReturnApprovals
    },
    {
        id: 'ret-integrity',
        name: 'Controls & Rules',
        type: 'General',
        path: '/apps/returns/rules',
        icon: 'Security',
        description: 'System integrity rules.',
        component: AuditIntegrityRules
    }
];
