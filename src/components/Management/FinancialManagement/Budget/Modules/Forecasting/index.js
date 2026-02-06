import RollingForecastEngine from './RollingForecastEngine';
import DriverBasedModeling from './DriverBasedModeling';
import ScenarioPlanningManager from './ScenarioPlanningManager';
import RevenueForecastModels from './RevenueForecastModels';
import OpexForecasting from './OpexForecasting';
import CapExForecasting from './CapExForecasting';
import CashFlowForecasting from './CashFlowForecasting';
import PredictiveAnalyticsAI from './PredictiveAnalyticsAI';
import SensitivityAnalysis from './SensitivityAnalysis';
import WhatIfSimulations from './WhatIfSimulations';
import CollaborativeForecasting from './CollaborativeForecasting';
import ForecastApprovalWorkflow from './ForecastApprovalWorkflow';
import ForecastAccuracyTracking from './ForecastAccuracyTracking';
import ExternalDataIntegration from './ExternalDataIntegration';
import ConsolidatedForecastReports from './ConsolidatedForecastReports';
import ForecastVersionControl from './ForecastVersionControl';

import {
    Update,
    Settings,
    CompareArrows,
    MonetizationOn,
    MoneyOff,
    Build,
    AccountBalance,
    Psychology,
    Tune,
    Gamepad,
    GroupWork,
    AssignmentTurnedIn,
    TrackChanges,
    Public,
    Assessment,
    History
} from '@mui/icons-material';

export const modules = [
    {
        id: 'rolling-forecast',
        name: 'Rolling Forecast Engine',
        description: '12/18 month rolling forecast setup and management.',
        icon: Update,
        component: RollingForecastEngine,
        group: 'Core Forecasting Models',
        type: 'General',
        path: '/apps/financial-forecasting/rolling',
        label: 'Rolling Forecast',
        requiresSelection: false
    },
    {
        id: 'driver-modeling',
        name: 'Driver-Based Modeling',
        description: 'Create forecast models based on key business drivers.',
        icon: Settings,
        component: DriverBasedModeling,
        group: 'Core Forecasting Models',
        type: 'General',
        path: '/apps/financial-forecasting/drivers',
        label: 'Driver Models',
        requiresSelection: false
    },
    {
        id: 'scenario-planning',
        name: 'Scenario Planning Manager',
        description: 'Manage best, worst, and base case scenarios.',
        icon: CompareArrows,
        component: ScenarioPlanningManager,
        group: 'Core Forecasting Models',
        type: 'General',
        path: '/apps/financial-forecasting/scenarios',
        label: 'Scenarios',
        requiresSelection: false
    },
    {
        id: 'revenue-forecast',
        name: 'Revenue Forecast Models',
        description: 'Pipeline-weighted and trend-based revenue projection.',
        icon: MonetizationOn,
        component: RevenueForecastModels,
        group: 'Revenue & Expense',
        type: 'General',
        path: '/apps/financial-forecasting/revenue',
        label: 'Revenue',
        requiresSelection: false
    },
    {
        id: 'opex-forecast',
        name: 'OpEx Forecasting',
        description: 'Operational expense projection with inflation adjustments.',
        icon: MoneyOff,
        component: OpexForecasting,
        group: 'Revenue & Expense',
        type: 'General',
        path: '/apps/financial-forecasting/opex',
        label: 'OpEx',
        requiresSelection: false
    },
    {
        id: 'capex-forecast',
        name: 'CapEx Forecasting',
        description: 'Capital expenditure planning and depreciation forecasting.',
        icon: Build,
        component: CapExForecasting,
        group: 'Revenue & Expense',
        type: 'General',
        path: '/apps/financial-forecasting/capex',
        label: 'CapEx',
        requiresSelection: false
    },
    {
        id: 'cash-flow-forecast',
        name: 'Cash Flow Forecasting',
        description: 'Direct and indirect cash flow projections.',
        icon: AccountBalance,
        component: CashFlowForecasting,
        group: 'Revenue & Expense',
        type: 'General',
        path: '/apps/financial-forecasting/cash-flow',
        label: 'Cash Flow',
        requiresSelection: false
    },
    {
        id: 'predictive-analytics',
        name: 'Predictive Analytics AI',
        description: 'AI-driven trends and anomaly detection.',
        icon: Psychology,
        component: PredictiveAnalyticsAI,
        group: 'Advanced Analytics',
        type: 'General',
        path: '/apps/financial-forecasting/predictive',
        label: 'Predictive AI',
        requiresSelection: false
    },
    {
        id: 'sensitivity-analysis',
        name: 'Sensitivity Analysis',
        description: 'Impact analysis of variable changes (e.g., FX rates).',
        icon: Tune,
        component: SensitivityAnalysis,
        group: 'Advanced Analytics',
        type: 'General',
        path: '/apps/financial-forecasting/sensitivity',
        label: 'Sensitivity',
        requiresSelection: false
    },
    {
        id: 'what-if-simulations',
        name: 'What-If Simulations',
        description: 'Interactive simulation playground for strategic decisions.',
        icon: Gamepad,
        component: WhatIfSimulations,
        group: 'Advanced Analytics',
        type: 'General',
        path: '/apps/financial-forecasting/simulations',
        label: 'What-If',
        requiresSelection: false
    },
    {
        id: 'collaborative-forecasting',
        name: 'Collaborative Forecasting',
        description: 'Tools for input contribution from department heads.',
        icon: GroupWork,
        component: CollaborativeForecasting,
        group: 'Workflow & Collaboration',
        type: 'General',
        path: '/apps/financial-forecasting/collaboration',
        label: 'Collaboration',
        requiresSelection: false
    },
    {
        id: 'forecast-approval',
        name: 'Forecast Approval Workflow',
        description: 'Review and approval chain for forecast versions.',
        icon: AssignmentTurnedIn,
        component: ForecastApprovalWorkflow,
        group: 'Workflow & Collaboration',
        type: 'General',
        path: '/apps/financial-forecasting/approval',
        label: 'Approval',
        requiresSelection: false
    },
    {
        id: 'accuracy-tracking',
        name: 'Forecast Accuracy Tracking',
        description: 'Measure forecast vs actual performance over time.',
        icon: TrackChanges,
        component: ForecastAccuracyTracking,
        group: 'Reporting & Integration',
        type: 'General',
        path: '/apps/financial-forecasting/accuracy',
        label: 'Accuracy',
        requiresSelection: false
    },
    {
        id: 'external-data',
        name: 'External Data Integration',
        description: 'Import market data and economic indicators.',
        icon: Public,
        component: ExternalDataIntegration,
        group: 'Reporting & Integration',
        type: 'General',
        path: '/apps/financial-forecasting/external-data',
        label: 'External Data',
        requiresSelection: false
    },
    {
        id: 'consolidated-reports',
        name: 'Consolidated Forecast Reports',
        description: 'Aggregated views for group-level reporting.',
        icon: Assessment,
        component: ConsolidatedForecastReports,
        group: 'Reporting & Integration',
        type: 'General',
        path: '/apps/financial-forecasting/reports',
        label: 'Reports',
        requiresSelection: false
    },
    {
        id: 'version-control',
        name: 'Forecast Version Control',
        description: 'Version history and comparison.',
        icon: History,
        component: ForecastVersionControl,
        group: 'Reporting & Integration',
        type: 'General',
        path: '/apps/financial-forecasting/versions',
        label: 'Versions',
        requiresSelection: false
    }
];

export default modules;
