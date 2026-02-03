import CreditDashboard from './CreditDashboard';
import CreditProfiles from './CreditProfiles';
import RiskEngine from './RiskEngine';
import ExposureManager from './ExposureManager';
import GovernanceConsole from './GovernanceConsole';

export const modules = [
    {
        id: 'credit_dashboard',
        label: 'Credit Dashboard',
        component: CreditDashboard,
        type: 'General',
        icon: 'Dashboard',
        description: 'Real-time credit monitoring, KPI widgets, and alerts.',
        requiresSelection: false,
        name: 'Credit Dashboard',
        path: '/apps/credit-management/dashboard'
    },
    {
        id: 'credit_profiles',
        label: 'Credit Profiles',
        component: CreditProfiles,
        type: 'General',
        icon: 'AccountBox',
        description: 'Manage master data, limits, and corporate hierarchies.',
        requiresSelection: false,
        name: 'Credit Profiles',
        path: '/apps/credit-management/profiles'
    },
    {
        id: 'risk_engine',
        label: 'Risk Engine',
        component: RiskEngine,
        type: 'General',
        icon: 'Gavel', // Using Gavel or similar for rules/judgment
        description: 'Scoring models, automated checks, and simulations.',
        requiresSelection: false,
        name: 'Risk Engine',
        path: '/apps/credit-management/risk-engine'
    },
    {
        id: 'exposure_manager',
        label: 'Exposure Manager',
        component: ExposureManager,
        type: 'General',
        icon: 'TrendingUp',
        description: 'Track exposure breakdown, collateral, and insurance.',
        requiresSelection: false,
        name: 'Exposure Manager',
        path: '/apps/credit-management/exposure'
    },
    {
        id: 'governance_console',
        label: 'Governance Console',
        component: GovernanceConsole,
        type: 'General',
        icon: 'AdminPanelSettings',
        description: 'Approvals, audit trails, and policy configuration.',
        requiresSelection: false,
        name: 'Governance Console',
        path: '/apps/credit-management/governance'
    }
];

export default modules;
