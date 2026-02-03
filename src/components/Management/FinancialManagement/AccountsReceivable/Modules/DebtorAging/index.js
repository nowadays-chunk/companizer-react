
import AgingConfiguration from './AgingConfiguration';
import AgingDashboard from './AgingDashboard';
import RiskAndCollections from './RiskAndCollections';
import AgingAnalysis from './AgingAnalysis';
import CashForecast from './CashForecast';

export const modules = [
    {
        id: 'aging_dashboard',
        label: 'Dashboard & KPIs',
        component: AgingDashboard,
        type: 'General',
        icon: 'Dashboard',
        description: 'Debtor aging dashboard and key performance indicators.',
        requiresSelection: false,
        name: 'Aging Dashboard',
        path: '/apps/debtor-aging/dashboard'
    },
    {
        id: 'aging_analysis',
        label: 'Analysis & Segments',
        component: AgingAnalysis,
        type: 'General',
        icon: 'Analytics',
        description: 'Detailed analysis and segmentation of debtor aging.',
        requiresSelection: false,
        name: 'Aging Analysis',
        path: '/apps/debtor-aging/analysis'
    },
    {
        id: 'risk_and_collections',
        label: 'Risk & Collections',
        component: RiskAndCollections,
        type: 'General',
        icon: 'Warning',
        description: 'Risk assessment and collections management.',
        requiresSelection: false,
        name: 'Risk & Collections',
        path: '/apps/debtor-aging/risk'
    },
    {
        id: 'cash_forecast',
        label: 'Forecasting',
        component: CashForecast,
        type: 'General',
        icon: 'Timeline',
        description: 'Cash flow forecasting and liquidity planning.',
        requiresSelection: false,
        name: 'Cash Forecast',
        path: '/apps/debtor-aging/forecast'
    },
    {
        id: 'aging_configuration',
        label: 'Configuration',
        component: AgingConfiguration,
        type: 'General',
        icon: 'Settings',
        description: 'Configuration settings for debtor aging.',
        requiresSelection: false,
        name: 'Aging Configuration',
        path: '/apps/debtor-aging/configuration'
    }
];

export default modules;
