import React from 'react';

const AssetMasterIntegration = React.lazy(() => import('./AssetMasterIntegration'));
const DepreciationMethods = React.lazy(() => import('./DepreciationMethods'));
const DepreciationSchedule = React.lazy(() => import('./DepreciationSchedule'));
const MultiEntityDepreciation = React.lazy(() => import('./MultiEntityDepreciation'));
const AssetRevaluation = React.lazy(() => import('./AssetRevaluation'));
const AssetDepreciationGLIntegration = React.lazy(() => import('./GLIntegration'));
const AssetLifecycle = React.lazy(() => import('./AssetLifecycle'));
const DepreciationAnalytics = React.lazy(() => import('./DepreciationAnalytics'));
const TaxDepreciation = React.lazy(() => import('./TaxDepreciation'));
const AdjustmentGovernance = React.lazy(() => import('./AdjustmentGovernance'));
const DepreciationAutomation = React.lazy(() => import('./DepreciationAutomation'));
const AssetDepreciationSecurityPermissions = React.lazy(() => import('./SecurityPermissions'));

export const modules = [
    {
        id: 'master',
        name: 'Asset Master',
        type: 'Link',
        path: '/apps/assets/depreciation/master',
        icon: 'Source',
        description: 'Integration with asset master data.',
        component: AssetMasterIntegration,
        requiresSelection: false
    },
    {
        id: 'methods',
        name: 'Methods',
        type: 'General',
        path: '/apps/assets/depreciation/methods',
        icon: 'Functions',
        description: 'Manage depreciation methods.',
        component: DepreciationMethods,
        requiresSelection: false
    },
    {
        id: 'schedule',
        name: 'Schedule',
        type: 'General',
        path: '/apps/assets/depreciation/schedule',
        icon: 'CalendarToday',
        description: 'View depreciation schedules.',
        component: DepreciationSchedule,
        requiresSelection: false
    },
    {
        id: 'multi-entity',
        name: 'Multi-Entity',
        type: 'General',
        path: '/apps/assets/depreciation/multi-entity',
        icon: 'Business',
        description: 'Depreciation across entities.',
        component: MultiEntityDepreciation,
        requiresSelection: false
    },
    {
        id: 'revaluation',
        name: 'Revaluation',
        type: 'Specific',
        path: '/apps/assets/depreciation/revaluation',
        icon: 'TrendingUp',
        description: 'Manage asset revaluations.',
        component: AssetRevaluation,
        requiresSelection: false
    },
    {
        id: 'gl-integration',
        name: 'GL Integration',
        type: 'General',
        path: '/apps/assets/depreciation/gl-integration',
        icon: 'AccountBalance',
        description: 'Post depreciation to GL.',
        component: AssetDepreciationGLIntegration,
        requiresSelection: false
    },
    {
        id: 'lifecycle',
        name: 'Lifecycle',
        type: 'General',
        path: '/apps/assets/depreciation/lifecycle',
        icon: 'Loop',
        description: 'Tracking full asset lifecycle.',
        component: AssetLifecycle,
        requiresSelection: false
    },
    {
        id: 'analytics',
        name: 'Analytics',
        type: 'General',
        path: '/apps/assets/depreciation/analytics',
        icon: 'Analytics',
        description: 'Depreciation analysis.',
        component: DepreciationAnalytics,
        requiresSelection: false
    },
    {
        id: 'tax',
        name: 'Tax Depreciation',
        type: 'General',
        path: '/apps/assets/depreciation/tax',
        icon: 'ReceiptLong',
        description: 'Tax-specific depreciation rules.',
        component: TaxDepreciation,
        requiresSelection: false
    },
    {
        id: 'governance',
        name: 'Governance',
        type: 'General',
        path: '/apps/assets/depreciation/governance',
        icon: 'Gavel',
        description: 'Adjustment approvals and governance.',
        component: AdjustmentGovernance,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation',
        type: 'General',
        path: '/apps/assets/depreciation/automation',
        icon: 'AutoMode',
        description: 'Automated depreciation runs.',
        component: DepreciationAutomation,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security',
        type: 'General',
        path: '/apps/assets/depreciation/security',
        icon: 'Security',
        description: 'User access controls.',
        component: AssetDepreciationSecurityPermissions,
        requiresSelection: false
    },
];

export default modules;
