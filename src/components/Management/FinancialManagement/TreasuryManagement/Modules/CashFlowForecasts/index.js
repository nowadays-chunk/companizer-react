import React from 'react';

const CashFlowVisualizer = React.lazy(() => import('./CashFlowVisualizer'));
const ForecastDashboard = React.lazy(() => import('./ForecastDashboard'));
const CashFlowSources = React.lazy(() => import('./CashFlowSources'));
const ForecastScenarios = React.lazy(() => import('./ForecastScenarios'));
const AdjustmentsEntry = React.lazy(() => import('./AdjustmentsEntry'));
const VarianceAnalysis = React.lazy(() => import('./VarianceAnalysis'));
const FXExposure = React.lazy(() => import('./FXExposure'));

export const modules = [
    {
        id: 'forecast-dashboard',
        name: 'Forecast Dashboard',
        description: 'Main cash flow dashboard and liquidity summary',
        icon: 'Dashboard',
        component: ForecastDashboard,
        group: 'Treasury',
        type: 'General',
        path: '/financial-management/treasury-management/cash-flow-forecasts/dashboard',
        label: 'Dashboard',
        requiresSelection: false
    },
    {
        id: 'cash-flow-visualizer',
        name: 'Visualizer',
        description: 'Interactive scenario planning',
        icon: 'ShowChart',
        component: CashFlowVisualizer,
        group: 'Treasury',
        type: 'General',
        path: '/financial-management/treasury-management/cash-flow-forecasts/visualizer',
        label: 'Visualizer',
        requiresSelection: false
    },
    {
        id: 'cash-flow-sources',
        name: 'Sources & Integrations',
        description: 'Manage AR, AP, Payroll and Loan integrations',
        icon: 'Input',
        component: CashFlowSources,
        group: 'Treasury',
        type: 'Specific',
        path: '/financial-management/treasury-management/cash-flow-forecasts/sources',
        label: 'Sources',
        requiresSelection: false
    },
    {
        id: 'forecast-scenarios',
        name: 'Scenarios & Drivers',
        description: 'Driver-based modeling and stress testing',
        icon: 'Tune',
        component: ForecastScenarios,
        group: 'Treasury',
        type: 'Specific',
        path: '/financial-management/treasury-management/cash-flow-forecasts/scenarios',
        label: 'Scenarios',
        requiresSelection: false
    },
    {
        id: 'adjustments-entry',
        name: 'Manual Adjustments',
        description: 'Enter and approve manual forecast adjustments',
        icon: 'Edit',
        component: AdjustmentsEntry,
        group: 'Treasury',
        type: 'Specific',
        path: '/financial-management/treasury-management/cash-flow-forecasts/adjustments',
        label: 'Adjustments',
        requiresSelection: false
    },
    {
        id: 'variance-analysis',
        name: 'Variance Analysis',
        description: 'Compare forecast vs actuals with KPIs',
        icon: 'CompareArrows',
        component: VarianceAnalysis,
        group: 'Treasury',
        type: 'Specific',
        path: '/financial-management/treasury-management/cash-flow-forecasts/variance',
        label: 'Variance',
        requiresSelection: false
    },
    {
        id: 'fx-exposure',
        name: 'FX Exposure',
        description: 'Currency risk and sensitivity analysis',
        icon: 'CurrencyExchange',
        component: FXExposure,
        group: 'Treasury',
        type: 'Specific',
        path: '/financial-management/treasury-management/cash-flow-forecasts/fx',
        label: 'FX Risk',
        requiresSelection: false
    }
];
