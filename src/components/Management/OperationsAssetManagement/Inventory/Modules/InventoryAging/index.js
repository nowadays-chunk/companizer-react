import React from 'react';

const AgingCalculation = React.lazy(() => import('./AgingCalculation'));
const StockSegmentation = React.lazy(() => import('./StockSegmentation'));
const ValuationIntegration = React.lazy(() => import('./ValuationIntegration'));
const AgingAlerts = React.lazy(() => import('./AgingAlerts'));
const InventoryAgingDashboard = React.lazy(() => import('./InventoryAgingDashboard'));
const ProcurementIntegration = React.lazy(() => import('./ProcurementIntegration'));
const LifecycleManagement = React.lazy(() => import('./LifecycleManagement'));
const MultiEntityAging = React.lazy(() => import('./MultiEntityAging'));
const AgingAutomation = React.lazy(() => import('./AgingAutomation'));
const InventoryAgingSecurityPermissions = React.lazy(() => import('./SecurityPermissions'));

export const modules = [
    {
        id: 'dashboard',
        name: 'Aging Dashboard',
        type: 'General',
        path: '/apps/inventory/aging/dashboard',
        icon: 'Dashboard',
        description: 'Overview of inventory aging.',
        component: InventoryAgingDashboard,
        requiresSelection: false
    },
    {
        id: 'calculation',
        name: 'Calculation',
        type: 'General',
        path: '/apps/inventory/aging/calculation',
        icon: 'Calculate',
        description: 'Aging calculation rules.',
        component: AgingCalculation,
        requiresSelection: false
    },
    {
        id: 'segmentation',
        name: 'Segmentation',
        type: 'General',
        path: '/apps/inventory/aging/segmentation',
        icon: 'Category',
        description: 'Stock segmentation analysis.',
        component: StockSegmentation,
        requiresSelection: false
    },
    {
        id: 'valuation',
        name: 'Valuation',
        type: 'General',
        path: '/apps/inventory/aging/valuation',
        icon: 'AttachMoney',
        description: 'Valuation impact of aging.',
        component: ValuationIntegration,
        requiresSelection: false
    },
    {
        id: 'alerts',
        name: 'Alerts',
        type: 'General',
        path: '/apps/inventory/aging/alerts',
        icon: 'Notifications',
        description: 'Aging stock alerts.',
        component: AgingAlerts,
        requiresSelection: false
    },
    {
        id: 'procurement',
        name: 'Procurement',
        type: 'General',
        path: '/apps/inventory/aging/procurement',
        icon: 'ShoppingCart',
        description: 'Procurement planning based on aging.',
        component: ProcurementIntegration,
        requiresSelection: false
    },
    {
        id: 'lifecycle',
        name: 'Lifecycle',
        type: 'General',
        path: '/apps/inventory/aging/lifecycle',
        icon: 'Loop',
        description: 'Product lifecycle tracking.',
        component: LifecycleManagement,
        requiresSelection: false
    },
    {
        id: 'multi-entity',
        name: 'Multi-Entity',
        type: 'General',
        path: '/apps/inventory/aging/multi-entity',
        icon: 'Business',
        description: 'Aging across entities.',
        component: MultiEntityAging,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation',
        type: 'General',
        path: '/apps/inventory/aging/automation',
        icon: 'AutoMode',
        description: 'Automated aging actions.',
        component: AgingAutomation,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security',
        type: 'General',
        path: '/apps/inventory/aging/security',
        icon: 'Security',
        description: 'Access control for aging modules.',
        component: InventoryAgingSecurityPermissions,
        requiresSelection: false
    },
];

export default modules;
