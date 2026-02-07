import React from 'react';

const CategoryMasterData = React.lazy(() => import('./CategoryMasterData'));
const CategoryHierarchy = React.lazy(() => import('./CategoryHierarchy'));
const CategoryProducts = React.lazy(() => import('./CategoryProducts'));
const CategoryPricing = React.lazy(() => import('./CategoryPricing'));
const CategoryTax = React.lazy(() => import('./CategoryTax'));
const CategoryInventory = React.lazy(() => import('./CategoryInventory'));
const CategoryAnalytics = React.lazy(() => import('./CategoryAnalytics'));
const CategoryWorkflow = React.lazy(() => import('./CategoryWorkflow'));
const CategoryChannels = React.lazy(() => import('./CategoryChannels'));

export const modules = [
    {
        id: 'category-master-data',
        name: 'Master Data',
        description: 'Core category identity and definition',
        icon: 'Category',
        component: CategoryMasterData,
        group: 'Definition',
        type: 'General',
        path: '/operations/product-catalog/categories/master-data',
        label: 'Master Data',
        requiresSelection: false
    },
    {
        id: 'category-hierarchy',
        name: 'Hierarchy',
        description: 'Parent-child tree and relationships',
        icon: 'AccountTree',
        component: CategoryHierarchy,
        group: 'Definition',
        type: 'General',
        path: '/operations/product-catalog/categories/hierarchy',
        label: 'Hierarchy',
        requiresSelection: false
    },
    {
        id: 'category-products',
        name: 'Products',
        description: 'Assigned products and rules',
        icon: 'Inventory2',
        component: CategoryProducts,
        group: 'Merchandising',
        type: 'Specific',
        path: '/operations/product-catalog/categories/products',
        label: 'Products',
        requiresSelection: false
    },
    {
        id: 'category-pricing',
        name: 'Pricing Rules',
        description: 'Discount rules and margins',
        icon: 'PriceChange',
        component: CategoryPricing,
        group: 'Financials',
        type: 'Specific',
        path: '/operations/product-catalog/categories/pricing',
        label: 'Pricing',
        requiresSelection: false
    },
    {
        id: 'category-tax',
        name: 'Tax & Compliance',
        description: 'Default tax codes and regulations',
        icon: 'Gavel',
        component: CategoryTax,
        group: 'Financials',
        type: 'Specific',
        path: '/operations/product-catalog/categories/tax',
        label: 'Tax',
        requiresSelection: false
    },
    {
        id: 'category-inventory',
        name: 'Planning',
        description: 'Replenishment and forecasting defaults',
        icon: 'Inventory',
        component: CategoryInventory,
        group: 'Logistics',
        type: 'Specific',
        path: '/operations/product-catalog/categories/planning',
        label: 'Planning',
        requiresSelection: false
    },
    {
        id: 'category-channels',
        name: 'Channels',
        description: 'Sales channel visibility',
        icon: 'Storefront',
        component: CategoryChannels,
        group: 'Sales',
        type: 'Specific',
        path: '/operations/product-catalog/categories/channels',
        label: 'Channels',
        requiresSelection: false
    },
    {
        id: 'category-analytics',
        name: 'Analytics',
        description: 'Category performance stats',
        icon: 'Insights',
        component: CategoryAnalytics,
        group: 'Analytics',
        type: 'Specific',
        path: '/operations/product-catalog/categories/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'category-workflow',
        name: 'Workflow',
        description: 'Approvals and audit history',
        icon: 'Rule',
        component: CategoryWorkflow,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/product-catalog/categories/workflow',
        label: 'Workflow',
        requiresSelection: false
    }
];
