import React from 'react';

const VarianceCalculationEngine = React.lazy(() => import('./VarianceCalculationEngine'));
const RootCauseAnalysis = React.lazy(() => import('./RootCauseAnalysis'));
const TrendAnalysis = React.lazy(() => import('./TrendAnalysis'));
const RevenueVariance = React.lazy(() => import('./RevenueVariance'));
const CostVariance = React.lazy(() => import('./CostVariance'));
const ProfitabilityVariance = React.lazy(() => import('./ProfitabilityVariance'));
const OperationalMetricsVariance = React.lazy(() => import('./OperationalMetricsVariance'));
const DepartmentalScorecards = React.lazy(() => import('./DepartmentalScorecards'));
const CorrectiveActionWorkflow = React.lazy(() => import('./CorrectiveActionWorkflow'));
const VarianceThresholdAlerts = React.lazy(() => import('./VarianceThresholdAlerts'));
const VarianceReports = React.lazy(() => import('./VarianceReports'));
const ForecastAdjustmentIntegration = React.lazy(() => import('./ForecastAdjustmentIntegration'));
const AuditTrailLog = React.lazy(() => import('./AuditTrailLog'));
const SecurityAccessControls = React.lazy(() => import('./SecurityAccessControls'));
const ConfigurationSettings = React.lazy(() => import('./ConfigurationSettings'));

export const modules = [
    {
        id: 'calculation',
        name: 'Calculation Engine',
        type: 'General',
        path: '/apps/budget/variance-analysis/calculation',
        icon: 'Calculate',
        description: 'Engine for computing budget variances.',
        component: VarianceCalculationEngine,
        requiresSelection: false
    },
    {
        id: 'root-cause',
        name: 'Root Cause Analysis',
        type: 'Specific',
        path: '/apps/budget/variance-analysis/root-cause',
        icon: 'FindInPage',
        description: 'Identify reasons for variance.',
        component: RootCauseAnalysis,
        requiresSelection: false
    },
    {
        id: 'trends',
        name: 'Trend Analysis',
        type: 'General',
        path: '/apps/budget/variance-analysis/trends',
        icon: 'TrendingUp',
        description: 'Analyze variance trends over time.',
        component: TrendAnalysis,
        requiresSelection: false
    },
    {
        id: 'revenue',
        name: 'Revenue Variance',
        type: 'Specific',
        path: '/apps/budget/variance-analysis/revenue',
        icon: 'AttachMoney',
        description: 'Analyze revenue deviations.',
        component: RevenueVariance,
        requiresSelection: false
    },
    {
        id: 'cost',
        name: 'Cost Variance',
        type: 'Specific',
        path: '/apps/budget/variance-analysis/cost',
        icon: 'MoneyOff',
        description: 'Analyze cost deviations.',
        component: CostVariance,
        requiresSelection: false
    },
    {
        id: 'profitability',
        name: 'Profitability',
        type: 'General',
        path: '/apps/budget/variance-analysis/profitability',
        icon: 'QueryStats',
        description: 'Profit margin impact analysis.',
        component: ProfitabilityVariance,
        requiresSelection: false
    },
    {
        id: 'operational',
        name: 'Operational Metrics',
        type: 'Specific',
        path: '/apps/budget/variance-analysis/operational',
        icon: 'Speed',
        description: 'Variance in operational KPIs.',
        component: OperationalMetricsVariance,
        requiresSelection: false
    },
    {
        id: 'scorecards',
        name: 'Scorecards',
        type: 'General',
        path: '/apps/budget/variance-analysis/scorecards',
        icon: 'Score',
        description: 'Departmental performance scorecards.',
        component: DepartmentalScorecards,
        requiresSelection: false
    },
    {
        id: 'corrective-action',
        name: 'Corrective Action',
        type: 'General',
        path: '/apps/budget/variance-analysis/corrective-action',
        icon: 'Build',
        description: 'Workflows to address variances.',
        component: CorrectiveActionWorkflow,
        requiresSelection: false
    },
    {
        id: 'alerts',
        name: 'Threshold Alerts',
        type: 'General',
        path: '/apps/budget/variance-analysis/alerts',
        icon: 'NotificationsActive',
        description: 'Notifications for significant variances.',
        component: VarianceThresholdAlerts,
        requiresSelection: false
    },
    {
        id: 'reports',
        name: 'Variance Reports',
        type: 'General',
        path: '/apps/budget/variance-analysis/reports',
        icon: 'Assessment',
        description: 'Detailed variance reporting.',
        component: VarianceReports,
        requiresSelection: false
    },
    {
        id: 'forecast-integration',
        name: 'Forecast Integration',
        type: 'General',
        path: '/apps/budget/variance-analysis/forecast-integration',
        icon: 'CompareArrows',
        description: 'Adjust forecasts based on variance.',
        component: ForecastAdjustmentIntegration,
        requiresSelection: false
    },
    {
        id: 'audit',
        name: 'Audit Trail',
        type: 'General',
        path: '/apps/budget/variance-analysis/audit',
        icon: 'History',
        description: 'Log of analysis activities.',
        component: AuditTrailLog,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security',
        type: 'General',
        path: '/apps/budget/variance-analysis/security',
        icon: 'Security',
        description: 'Access controls.',
        component: SecurityAccessControls,
        requiresSelection: false
    },
    {
        id: 'configuration',
        name: 'Configuration',
        type: 'General',
        path: '/apps/budget/variance-analysis/configuration',
        icon: 'Settings',
        description: 'System settings.',
        component: ConfigurationSettings,
        requiresSelection: false
    },
];

export default modules;
