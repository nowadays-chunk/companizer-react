import React from 'react';

const ProductMasterData = React.lazy(() => import('./ProductMasterData'));
const ProductVariants = React.lazy(() => import('./ProductVariants'));
const PricingCosting = React.lazy(() => import('./PricingCosting'));
const TaxCompliance = React.lazy(() => import('./TaxCompliance'));
const InventoryAttributes = React.lazy(() => import('./InventoryAttributes'));
const AccountingMapping = React.lazy(() => import('./AccountingMapping'));
const ProcurementDetails = React.lazy(() => import('./ProcurementDetails'));
const SalesChannels = React.lazy(() => import('./SalesChannels'));
const ProductAnalytics = React.lazy(() => import('./ProductAnalytics'));
const ProductWorkflow = React.lazy(() => import('./ProductWorkflow'));

export const modules = [
    {
        id: 'product-master-data',
        name: 'Master Data',
        description: 'Core product identity and lifecycle',
        icon: 'Label',
        component: ProductMasterData,
        group: 'Product',
        type: 'General',
        path: '/operations/product-catalog/details/master-data',
        label: 'Master Data',
        requiresSelection: false
    },
    {
        id: 'product-variants',
        name: 'Variants & BOM',
        description: 'Manage sizes, colors, and bill of materials',
        icon: 'Layers',
        component: ProductVariants,
        group: 'Product',
        type: 'General',
        path: '/operations/product-catalog/details/variants',
        label: 'Variants',
        requiresSelection: false
    },
    {
        id: 'pricing-costing',
        name: 'Pricing & Costing',
        description: 'Multi-currency pricing and standard costs',
        icon: 'AttachMoney',
        component: PricingCosting,
        group: 'Financials',
        type: 'Specific',
        path: '/operations/product-catalog/details/pricing',
        label: 'Pricing',
        requiresSelection: false
    },
    {
        id: 'tax-compliance',
        name: 'Tax & Compliance',
        description: 'HS codes, VAT settings, and regulations',
        icon: 'Gavel',
        component: TaxCompliance,
        group: 'Financials',
        type: 'Specific',
        path: '/operations/product-catalog/details/tax',
        label: 'Tax',
        requiresSelection: false
    },
    {
        id: 'inventory-attributes',
        name: 'Logistics',
        description: 'Dimensions, weight, and warehouse handling',
        icon: 'Inventory',
        component: InventoryAttributes,
        group: 'Logistics',
        type: 'Specific',
        path: '/operations/product-catalog/details/logistics',
        label: 'Logistics',
        requiresSelection: false
    },
    {
        id: 'accounting-mapping',
        name: 'Accounting',
        description: 'GL account mapping for revenue and COGS',
        icon: 'AccountBalance',
        component: AccountingMapping,
        group: 'Financials',
        type: 'Specific',
        path: '/operations/product-catalog/details/accounting',
        label: 'Accounting',
        requiresSelection: false
    },
    {
        id: 'procurement-details',
        name: 'Procurement',
        description: 'Supplier information and sourcing rules',
        icon: 'Factory',
        component: ProcurementDetails,
        group: 'Supply Chain',
        type: 'Specific',
        path: '/operations/product-catalog/details/procurement',
        label: 'Procurement',
        requiresSelection: false
    },
    {
        id: 'sales-channels',
        name: 'Channels',
        description: 'Sales channel availability and media',
        icon: 'Storefront',
        component: SalesChannels,
        group: 'Sales',
        type: 'Specific',
        path: '/operations/product-catalog/details/channels',
        label: 'Channels',
        requiresSelection: false
    },
    {
        id: 'product-analytics',
        name: 'Analytics',
        description: 'Performance KPIs and sales trends',
        icon: 'Insights',
        component: ProductAnalytics,
        group: 'Analytics',
        type: 'Specific',
        path: '/operations/product-catalog/details/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'product-workflow',
        name: 'Workflow',
        description: 'Approval history and status changes',
        icon: 'Rule',
        component: ProductWorkflow,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/product-catalog/details/workflow',
        label: 'Workflow',
        requiresSelection: false
    }
];
