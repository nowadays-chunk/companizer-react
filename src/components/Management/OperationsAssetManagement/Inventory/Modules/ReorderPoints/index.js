import React from 'react';

const ReorderPointMaster = React.lazy(() => import('./ReorderPointMaster'));
const AutoReplenishment = React.lazy(() => import('./AutoReplenishment'));
const DemandAnalysis = React.lazy(() => import('./DemandAnalysis'));
const LeadTimeManagement = React.lazy(() => import('./LeadTimeManagement'));
const ReplenishmentTriggers = React.lazy(() => import('./ReplenishmentTriggers'));
const ReorderApprovalWorkflow = React.lazy(() => import('./ApprovalWorkflow'));
const PurchaseIntegration = React.lazy(() => import('./PurchaseIntegration'));
const MultiWarehousePlanning = React.lazy(() => import('./MultiWarehousePlanning'));
const FinancialImpact = React.lazy(() => import('./FinancialImpact'));
const ExceptionAlerts = React.lazy(() => import('./ExceptionAlerts'));
const ScenarioSimulation = React.lazy(() => import('./ScenarioSimulation'));
const IntegrationStatus = React.lazy(() => import('./IntegrationStatus'));
const ReorderAnalytics = React.lazy(() => import('./ReorderAnalytics'));

export const modules = [
    {
        id: 'master',
        name: 'Reorder Point Master',
        type: 'General',
        path: '/apps/inventory/reorder-points/master',
        icon: 'Tune',
        description: 'Manage reorder point settings.',
        component: ReorderPointMaster,
        requiresSelection: false
    },
    {
        id: 'auto-replenishment',
        name: 'Auto Replenishment',
        type: 'General',
        path: '/apps/inventory/reorder-points/auto-replenishment',
        icon: 'Autorenew',
        description: 'Automated stock replenishment.',
        component: AutoReplenishment,
        requiresSelection: false
    },
    {
        id: 'demand-analysis',
        name: 'Demand Analysis',
        type: 'General',
        path: '/apps/inventory/reorder-points/demand-analysis',
        icon: 'Timeline',
        description: 'Analyze demand patterns.',
        component: DemandAnalysis,
        requiresSelection: false
    },
    {
        id: 'lead-time',
        name: 'Lead Time',
        type: 'General',
        path: '/apps/inventory/reorder-points/lead-time',
        icon: 'Timer',
        description: 'Manage supplier lead times.',
        component: LeadTimeManagement,
        requiresSelection: false
    },
    {
        id: 'triggers',
        name: 'Triggers',
        type: 'General',
        path: '/apps/inventory/reorder-points/triggers',
        icon: 'NotificationsActive',
        description: 'Replenishment triggers configuration.',
        component: ReplenishmentTriggers,
        requiresSelection: false
    },
    {
        id: 'approvals',
        name: 'Approvals',
        type: 'General',
        path: '/apps/inventory/reorder-points/approvals',
        icon: 'ThumbUp',
        description: 'Reorder approval workflow.',
        component: ReorderApprovalWorkflow,
        requiresSelection: false
    },
    {
        id: 'purchase-integration',
        name: 'Purchase Integration',
        type: 'General',
        path: '/apps/inventory/reorder-points/purchase-integration',
        icon: 'ShoppingCart',
        description: 'Integration with purchasing.',
        component: PurchaseIntegration,
        requiresSelection: false
    },
    {
        id: 'multi-warehouse',
        name: 'Multi-Warehouse',
        type: 'General',
        path: '/apps/inventory/reorder-points/multi-warehouse',
        icon: 'Store',
        description: 'Planning across warehouses.',
        component: MultiWarehousePlanning,
        requiresSelection: false
    },
    {
        id: 'financial-impact',
        name: 'Financial Impact',
        type: 'General',
        path: '/apps/inventory/reorder-points/financial-impact',
        icon: 'AttachMoney',
        description: 'Cost analysis of reorders.',
        component: FinancialImpact,
        requiresSelection: false
    },
    {
        id: 'exception-alerts',
        name: 'Alerts',
        type: 'General',
        path: '/apps/inventory/reorder-points/exception-alerts',
        icon: 'Warning',
        description: 'Exception management.',
        component: ExceptionAlerts,
        requiresSelection: false
    },
    {
        id: 'scenarios',
        name: 'Scenarios',
        type: 'General',
        path: '/apps/inventory/reorder-points/scenarios',
        icon: 'Science',
        description: 'Replenishment scenario simulation.',
        component: ScenarioSimulation,
        requiresSelection: false
    },
    {
        id: 'integration-status',
        name: 'Integration Status',
        type: 'General',
        path: '/apps/inventory/reorder-points/integration-status',
        icon: 'Sync',
        description: 'System integration monitoring.',
        component: IntegrationStatus,
        requiresSelection: false
    },
    {
        id: 'analytics',
        name: 'Analytics',
        type: 'General',
        path: '/apps/inventory/reorder-points/analytics',
        icon: 'Analytics',
        description: 'Reorder point analytics.',
        component: ReorderAnalytics,
        requiresSelection: false
    },
];

export default modules;
