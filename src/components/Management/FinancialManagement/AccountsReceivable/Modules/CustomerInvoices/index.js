import React from 'react';

const InvoiceGenerator = React.lazy(() => import('./InvoiceGenerator'));
const ARAging = React.lazy(() => import('./ARAging'));
const RevenueAnalytics = React.lazy(() => import('./RevenueAnalytics'));
const DunningManager = React.lazy(() => import('./DunningManager'));
const DisputeManager = React.lazy(() => import('./DisputeManager'));

export const modules = [
    {
        id: 'generate',
        name: 'Generate Invoices',
        type: 'Specific',
        path: '/apps/customer-invoices/generate',
        icon: 'Receipt',
        description: 'Create and send customer invoices.',
        component: InvoiceGenerator,
        requiresSelection: false
    },
    {
        id: 'aging',
        name: 'AR Aging',
        type: 'General',
        path: '/apps/customer-invoices/aging',
        icon: 'Schedule',
        description: 'View aging of customer receivables.',
        component: ARAging,
        requiresSelection: false
    },
    {
        id: 'revenue',
        name: 'Revenue Analytics',
        type: 'General',
        path: '/apps/customer-invoices/revenue',
        icon: 'Analytics',
        description: 'Analyze revenue streams.',
        component: RevenueAnalytics,
        requiresSelection: false
    },
    {
        id: 'dunning',
        name: 'Dunning Management',
        type: 'General',
        path: '/apps/customer-invoices/dunning',
        icon: 'Warning',
        description: 'Manage overdue payment reminders.',
        component: DunningManager,
        requiresSelection: false
    },
    {
        id: 'disputes',
        name: 'Dispute Management',
        type: 'Specific',
        path: '/apps/customer-invoices/disputes',
        icon: 'ReportProblem',
        description: 'Handle customer invoice disputes.',
        component: DisputeManager,
        requiresSelection: false
    },
];

export default modules;
