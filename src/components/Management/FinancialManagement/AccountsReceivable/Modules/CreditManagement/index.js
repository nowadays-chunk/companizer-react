import React from 'react';

const CreditDashboard = React.lazy(() => import('./CreditDashboard'));
const CreditProfiles = React.lazy(() => import('./CreditProfiles'));
const RiskEngine = React.lazy(() => import('./RiskEngine'));
const ExposureManager = React.lazy(() => import('./ExposureManager'));
const GovernanceConsole = React.lazy(() => import('./GovernanceConsole'));

export const modules = [
    {
        id: 'dashboard',
        name: 'Credit Dashboard',
        type: 'General',
        path: '/financial-management/accounts-receivable/credit-management/dashboard',
        icon: 'Dashboard',
        description: 'Overview of credit risk.',
        component: CreditDashboard,
        requiresSelection: false
    },
    {
        id: 'profiles',
        name: 'Credit Profiles',
        type: 'General',
        path: '/financial-management/accounts-receivable/credit-management/profiles',
        icon: 'AccountBox',
        description: 'Manage customer credit profiles.',
        component: CreditProfiles,
        requiresSelection: false
    },
    {
        id: 'risk-engine',
        name: 'Risk Engine',
        type: 'General',
        path: '/financial-management/accounts-receivable/credit-management/risk-engine',
        icon: 'Psychology',
        description: 'Automated credit risk assessment.',
        component: RiskEngine,
        requiresSelection: false
    },
    {
        id: 'exposure',
        name: 'Exposure Management',
        type: 'General',
        path: '/financial-management/accounts-receivable/credit-management/exposure',
        icon: 'TrendingDown',
        description: 'Monitor credit exposure limits.',
        component: ExposureManager,
        requiresSelection: false
    },
    {
        id: 'governance',
        name: 'Governance',
        type: 'General',
        path: '/financial-management/accounts-receivable/credit-management/governance',
        icon: 'Gavel',
        description: 'Credit policies and governance.',
        component: GovernanceConsole,
        requiresSelection: false
    },
];

export default modules;
