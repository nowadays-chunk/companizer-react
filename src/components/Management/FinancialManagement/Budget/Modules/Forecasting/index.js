import React from 'react';

const RollingForecastEngine = React.lazy(() => import('./RollingForecastEngine'));
const DriverBasedModeling = React.lazy(() => import('./DriverBasedModeling'));
const ScenarioPlanningManager = React.lazy(() => import('./ScenarioPlanningManager'));
const RevenueForecastModels = React.lazy(() => import('./RevenueForecastModels'));
const OpexForecasting = React.lazy(() => import('./OpexForecasting'));
const CapExForecasting = React.lazy(() => import('./CapExForecasting'));
const CashFlowForecasting = React.lazy(() => import('./CashFlowForecasting'));
const PredictiveAnalyticsAI = React.lazy(() => import('./PredictiveAnalyticsAI'));
const SensitivityAnalysis = React.lazy(() => import('./SensitivityAnalysis'));
const WhatIfSimulations = React.lazy(() => import('./WhatIfSimulations'));
const CollaborativeForecasting = React.lazy(() => import('./CollaborativeForecasting'));
const ForecastApprovalWorkflow = React.lazy(() => import('./ForecastApprovalWorkflow'));
const ForecastAccuracyTracking = React.lazy(() => import('./ForecastAccuracyTracking'));
const ExternalDataIntegration = React.lazy(() => import('./ExternalDataIntegration'));
const ConsolidatedForecastReports = React.lazy(() => import('./ConsolidatedForecastReports'));
const ForecastVersionControl = React.lazy(() => import('./ForecastVersionControl'));

export const modules = [
    {
        id: 'rolling',
        name: 'Rolling Forecast',
        type: 'General',
        path: '/apps/financial-forecasting/rolling',
        icon: 'Update',
        description: 'Manage continuous rolling forecasts.',
        component: RollingForecastEngine,
        requiresSelection: false
    },
    {
        id: 'drivers',
        name: 'Driver-Based Modeling',
        type: 'Specific',
        path: '/apps/financial-forecasting/drivers',
        icon: 'Tune',
        description: 'Forecast based on key business drivers.',
        component: DriverBasedModeling,
        requiresSelection: false
    },
    {
        id: 'scenarios',
        name: 'Scenario Planning',
        type: 'General',
        path: '/apps/financial-forecasting/scenarios',
        icon: 'MovieFilter',
        description: 'Create and compare forecast scenarios.',
        component: ScenarioPlanningManager,
        requiresSelection: false
    },
    {
        id: 'revenue',
        name: 'Revenue Forecast',
        type: 'Specific',
        path: '/apps/financial-forecasting/revenue',
        icon: 'AttachMoney',
        description: 'Project future revenue streams.',
        component: RevenueForecastModels,
        requiresSelection: false
    },
    {
        id: 'opex',
        name: 'OpEx Forecast',
        type: 'Specific',
        path: '/apps/financial-forecasting/opex',
        icon: 'MoneyOff',
        description: 'Forecast operational expenses.',
        component: OpexForecasting,
        requiresSelection: false
    },
    {
        id: 'capex',
        name: 'CapEx Forecast',
        type: 'Specific',
        path: '/apps/financial-forecasting/capex',
        icon: 'Construction',
        description: 'Plan capital expenditures.',
        component: CapExForecasting,
        requiresSelection: false
    },
    {
        id: 'cash-flow',
        name: 'Cash Flow Forecast',
        type: 'General',
        path: '/apps/financial-forecasting/cash-flow',
        icon: 'ShowChart',
        description: 'Project liquidity and cash position.',
        component: CashFlowForecasting,
        requiresSelection: false
    },
    {
        id: 'predictive',
        name: 'Predictive Analytics',
        type: 'General',
        path: '/apps/financial-forecasting/predictive',
        icon: 'Psychology',
        description: 'AI-driven forecast suggestions.',
        component: PredictiveAnalyticsAI,
        requiresSelection: false
    },
    {
        id: 'sensitivity',
        name: 'Sensitivity Analysis',
        type: 'General',
        path: '/apps/financial-forecasting/sensitivity',
        icon: 'WifiTethering',
        description: 'Analyze impact of variable changes.',
        component: SensitivityAnalysis,
        requiresSelection: false
    },
    {
        id: 'simulations',
        name: 'Simulations',
        type: 'General',
        path: '/apps/financial-forecasting/simulations',
        icon: 'Science',
        description: 'What-if analysis and simulations.',
        component: WhatIfSimulations,
        requiresSelection: false
    },
    {
        id: 'collaboration',
        name: 'Collaboration',
        type: 'General',
        path: '/apps/financial-forecasting/collaboration',
        icon: 'Groups',
        description: 'Team forecasting tools.',
        component: CollaborativeForecasting,
        requiresSelection: false
    },
    {
        id: 'approval',
        name: 'Approvals',
        type: 'General',
        path: '/apps/financial-forecasting/approval',
        icon: 'ThumbUp',
        description: 'Forecast sign-off workflows.',
        component: ForecastApprovalWorkflow,
        requiresSelection: false
    },
    {
        id: 'accuracy',
        name: 'Forecast Accuracy',
        type: 'General',
        path: '/apps/financial-forecasting/accuracy',
        icon: 'CenterFocusStrong',
        description: 'Track forecast vs actuals over time.',
        component: ForecastAccuracyTracking,
        requiresSelection: false
    },
    {
        id: 'external-data',
        name: 'External Data',
        type: 'General',
        path: '/apps/financial-forecasting/external-data',
        icon: 'CloudDownload',
        description: 'Integrate market data feeds.',
        component: ExternalDataIntegration,
        requiresSelection: false
    },
    {
        id: 'reports',
        name: 'Reports',
        type: 'General',
        path: '/apps/financial-forecasting/reports',
        icon: 'Description',
        description: 'Forecast summaries and presentations.',
        component: ConsolidatedForecastReports,
        requiresSelection: false
    },
    {
        id: 'versions',
        name: 'Version Control',
        type: 'General',
        path: '/apps/financial-forecasting/versions',
        icon: 'history',
        description: 'Manage forecast iterations.',
        component: ForecastVersionControl,
        requiresSelection: false
    },
];

export default modules;
