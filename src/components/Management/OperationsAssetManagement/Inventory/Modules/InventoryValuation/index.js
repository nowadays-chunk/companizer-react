import React from 'react';

const ValuationMethods = React.lazy(() => import('./ValuationMethods'));
const ValuationProcessing = React.lazy(() => import('./ValuationProcessing'));
const TransactionValuation = React.lazy(() => import('./TransactionValuation'));
const MultiEntityValuation = React.lazy(() => import('./MultiEntityValuation'));
const ProductCosting = React.lazy(() => import('./ProductCosting'));
const BatchSerialValuation = React.lazy(() => import('./BatchSerialValuation'));
const CostAdjustments = React.lazy(() => import('./CostAdjustments'));
const GLIntegration = React.lazy(() => import('./GLIntegration'));
const ValuationAging = React.lazy(() => import('./ValuationAging'));
const CurrencyValuation = React.lazy(() => import('./CurrencyValuation'));
const ValuationAnalytics = React.lazy(() => import('./ValuationAnalytics'));
const ValuationApprovals = React.lazy(() => import('./ValuationApprovals'));
const ValuationSimulation = React.lazy(() => import('./ValuationSimulation'));
const ValuationAutomation = React.lazy(() => import('./ValuationAutomation'));
const SecurityPermissions = React.lazy(() => import('./SecurityPermissions'));

export const modules = [
    {
        id: 'methods',
        name: 'Valuation Methods',
        type: 'General',
        path: '/apps/inventory/valuation/methods',
        icon: 'Functions',
        description: 'Configure valuation methods (FIFO, LIFO, Weighted Average).',
        component: ValuationMethods,
        requiresSelection: false
    },
    {
        id: 'processing',
        name: 'Valuation Processing',
        type: 'General',
        path: '/apps/inventory/valuation/processing',
        icon: 'Autorenew',
        description: 'Process inventory valuation updates.',
        component: ValuationProcessing,
        requiresSelection: false
    },
    {
        id: 'transactions',
        name: 'Transaction Valuation',
        type: 'Specific',
        path: '/apps/inventory/valuation/transactions',
        icon: 'ReceiptLong',
        description: 'View valuation impact of specific transactions.',
        component: TransactionValuation,
        requiresSelection: false
    },
    {
        id: 'multi-entity',
        name: 'Multi-Entity Valuation',
        type: 'General',
        path: '/apps/inventory/valuation/multi-entity',
        icon: 'Business',
        description: 'Manage valuation across multiple entities.',
        component: MultiEntityValuation,
        requiresSelection: false
    },
    {
        id: 'costing',
        name: 'Product Costing',
        type: 'General',
        path: '/apps/inventory/valuation/costing',
        icon: 'AttachMoney',
        description: 'Manage product standard costs and variations.',
        component: ProductCosting,
        requiresSelection: false
    },
    {
        id: 'traceability',
        name: 'Batch/Serial Valuation',
        type: 'Specific',
        path: '/apps/inventory/valuation/traceability',
        icon: 'QrCode',
        description: 'Track costs at batch or serial number level.',
        component: BatchSerialValuation,
        requiresSelection: true
    },
    {
        id: 'adjustments',
        name: 'Cost Adjustments',
        type: 'Specific',
        path: '/apps/inventory/valuation/adjustments',
        icon: 'Edit',
        description: 'Post manual cost adjustments.',
        component: CostAdjustments,
        requiresSelection: false
    },
    {
        id: 'gl-integration',
        name: 'GL Integration',
        type: 'General',
        path: '/apps/inventory/valuation/gl-integration',
        icon: 'AccountBalance',
        description: 'Configure GL mapping for inventory value.',
        component: GLIntegration,
        requiresSelection: false
    },
    {
        id: 'aging',
        name: 'Inventory Aging',
        type: 'General',
        path: '/apps/inventory/valuation/aging',
        icon: 'Schedule',
        description: 'Analyze inventory age and obsolescence.',
        component: ValuationAging,
        requiresSelection: false
    },
    {
        id: 'currency',
        name: 'Currency Valuation',
        type: 'General',
        path: '/apps/inventory/valuation/currency',
        icon: 'CurrencyExchange',
        description: 'Manage inventory value in foreign currencies.',
        component: CurrencyValuation,
        requiresSelection: false
    },
    {
        id: 'analytics',
        name: 'Valuation Analytics',
        type: 'General',
        path: '/apps/inventory/valuation/analytics',
        icon: 'Analytics',
        description: 'Dashboards and reports for inventory value.',
        component: ValuationAnalytics,
        requiresSelection: false
    },
    {
        id: 'approvals',
        name: 'Valuation Approvals',
        type: 'General',
        path: '/apps/inventory/valuation/approvals',
        icon: 'ThumbUp',
        description: 'Workflow for cost changes and adjustments.',
        component: ValuationApprovals,
        requiresSelection: false
    },
    {
        id: 'simulation',
        name: 'Valuation Simulation',
        type: 'General',
        path: '/apps/inventory/valuation/simulation',
        icon: 'Science',
        description: 'Simulate cost changes and their impact.',
        component: ValuationSimulation,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Valuation Automation',
        type: 'General',
        path: '/apps/inventory/valuation/automation',
        icon: 'SmartToy',
        description: 'Automate periodic valuation tasks.',
        component: ValuationAutomation,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security & Permissions',
        type: 'General',
        path: '/apps/inventory/valuation/security',
        icon: 'Security',
        description: 'Manage access to valuation data.',
        component: SecurityPermissions,
        requiresSelection: false
    },
];

export default modules;
