import VarianceCalculationEngine from './VarianceCalculationEngine';
import RootCauseAnalysis from './RootCauseAnalysis';
import TrendAnalysis from './TrendAnalysis';
import RevenueVariance from './RevenueVariance';
import CostVariance from './CostVariance';
import ProfitabilityVariance from './ProfitabilityVariance';
import OperationalMetricsVariance from './OperationalMetricsVariance';
import DepartmentalScorecards from './DepartmentalScorecards';
import CorrectiveActionWorkflow from './CorrectiveActionWorkflow';
import VarianceThresholdAlerts from './VarianceThresholdAlerts';
import VarianceReports from './VarianceReports';
import ForecastAdjustmentIntegration from './ForecastAdjustmentIntegration';
import AuditTrailLog from './AuditTrailLog';
import SecurityAccessControls from './SecurityAccessControls';
import ConfigurationSettings from './ConfigurationSettings';

import {
    Calculate,
    Search,
    TrendingUp,
    AttachMoney,
    MoneyOff,
    ShowChart,
    Speed,
    Score,
    AssignmentTurnedIn,
    NotificationsActive,
    BarChart,
    Transform,
    History,
    Security,
    Settings
} from '@mui/icons-material';

export const modules = [
    {
        id: 'variance-calculation',
        name: 'Variance Calculation Engine',
        description: 'Real-time calculation of variances between actuals and budget.',
        icon: Calculate,
        component: VarianceCalculationEngine,
        group: 'Core Analysis',
        type: 'General',
        path: '/apps/variance-analysis/calculation',
        label: 'Calculation Engine',
        requiresSelection: false
    },
    {
        id: 'root-cause-analysis',
        name: 'Root Cause Analysis',
        description: 'Tools for tagging and analyzing reasons for variances.',
        icon: Search,
        component: RootCauseAnalysis,
        group: 'Core Analysis',
        type: 'General',
        path: '/apps/variance-analysis/root-cause',
        label: 'Root Cause',
        requiresSelection: false
    },
    {
        id: 'trend-analysis',
        name: 'Trend Analysis',
        description: 'Historical trend visualization of variances over time.',
        icon: TrendingUp,
        component: TrendAnalysis,
        group: 'Core Analysis',
        type: 'General',
        path: '/apps/variance-analysis/trends',
        label: 'Trends',
        requiresSelection: false
    },
    {
        id: 'revenue-variance',
        name: 'Revenue Variance',
        description: 'Analysis of sales volume vs price variance.',
        icon: AttachMoney,
        component: RevenueVariance,
        group: 'Financial Variance',
        type: 'General',
        path: '/apps/variance-analysis/revenue',
        label: 'Revenue',
        requiresSelection: false
    },
    {
        id: 'cost-variance',
        name: 'Cost Variance',
        description: 'Analysis of fixed vs variable cost variances.',
        icon: MoneyOff,
        component: CostVariance,
        group: 'Financial Variance',
        type: 'General',
        path: '/apps/variance-analysis/cost',
        label: 'Cost',
        requiresSelection: false
    },
    {
        id: 'profitability-variance',
        name: 'Profitability Variance',
        description: 'Margin analysis and profitability impact assessment.',
        icon: ShowChart,
        component: ProfitabilityVariance,
        group: 'Financial Variance',
        type: 'General',
        path: '/apps/variance-analysis/profitability',
        label: 'Profitability',
        requiresSelection: false
    },
    {
        id: 'operational-metrics',
        name: 'Operational Metrics Variance',
        description: 'Analysis of non-financial KPIs (e.g., headcount, hours).',
        icon: Speed,
        component: OperationalMetricsVariance,
        group: 'Operational Variance',
        type: 'General',
        path: '/apps/variance-analysis/operational',
        label: 'Ops Metrics',
        requiresSelection: false
    },
    {
        id: 'departmental-scorecards',
        name: 'Departmental Scorecards',
        description: 'Variance scorecards by department and business unit.',
        icon: Score,
        component: DepartmentalScorecards,
        group: 'Operational Variance',
        type: 'General',
        path: '/apps/variance-analysis/scorecards',
        label: 'Scorecards',
        requiresSelection: false
    },
    {
        id: 'corrective-action',
        name: 'Corrective Action Workflow',
        description: 'Workflow for assigning and tracking remediation actions.',
        icon: AssignmentTurnedIn,
        component: CorrectiveActionWorkflow,
        group: 'Workflow & Control',
        type: 'General',
        path: '/apps/variance-analysis/corrective-action',
        label: 'Actions',
        requiresSelection: false
    },
    {
        id: 'variance-alerts',
        name: 'Variance Threshold Alerts',
        description: 'Configuration for automated alerts on significant variances.',
        icon: NotificationsActive,
        component: VarianceThresholdAlerts,
        group: 'Workflow & Control',
        type: 'General',
        path: '/apps/variance-analysis/alerts',
        label: 'Alerts',
        requiresSelection: false
    },
    {
        id: 'variance-reports',
        name: 'Variance Reports',
        description: 'Comprehensive reporting suite for variance analysis.',
        icon: BarChart,
        component: VarianceReports,
        group: 'Reporting & Integration',
        type: 'General',
        path: '/apps/variance-analysis/reports',
        label: 'Reports',
        requiresSelection: false
    },
    {
        id: 'forecast-adjustment',
        name: 'Forecast Adjustment Integration',
        description: 'Link variance outcomes to re-forecasting processes.',
        icon: Transform,
        component: ForecastAdjustmentIntegration,
        group: 'Reporting & Integration',
        type: 'General',
        path: '/apps/variance-analysis/forecast-integration',
        label: 'Forecast Link',
        requiresSelection: false
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail Log',
        description: 'Track changes, explanations, and approvals.',
        icon: History,
        component: AuditTrailLog,
        group: 'Reporting & Integration',
        type: 'General',
        path: '/apps/variance-analysis/audit',
        label: 'Audit',
        requiresSelection: false
    },
    {
        id: 'security-access',
        name: 'Security Access Controls',
        description: 'Grid-based permission management for variance data.',
        icon: Security,
        component: SecurityAccessControls,
        group: 'Security & Configuration',
        type: 'General',
        path: '/apps/variance-analysis/security',
        label: 'Security',
        requiresSelection: false
    },
    {
        id: 'configuration-settings',
        name: 'Configuration Settings',
        description: 'Global settings for variance logic and thresholds.',
        icon: Settings,
        component: ConfigurationSettings,
        group: 'Security & Configuration',
        type: 'General',
        path: '/apps/variance-analysis/configuration',
        label: 'Configuration',
        requiresSelection: false
    }
];

export default modules;
