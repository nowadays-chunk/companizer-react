
import DunningManager from './DunningManager';
import DisputeManager from './DisputeManager';
import ARAging from './ARAging';
import RevenueAnalytics from './RevenueAnalytics';
import InvoiceGenerator from './InvoiceGenerator';

export const modules = [
    {
        id: 'invoice_generator',
        label: 'Invoice Generator',
        component: InvoiceGenerator,
        type: 'General',
        icon: 'PlaylistAdd', // Suggesting an icon
        description: 'Bulk and recurring invoice generation tools',
        requiresSelection: false,
        name: 'Invoice Generator',
        path: '/apps/customer-invoices/generator'
    },
    {
        id: 'ar_aging',
        label: 'Aging Analysis',
        component: ARAging,
        type: 'General',
        icon: 'BarChart',
        description: 'Accounts Receivable aging and DSO analysis',
        requiresSelection: false,
        name: 'Aging Analysis',
        path: '/apps/customer-invoices/aging'
    },
    {
        id: 'revenue_analytics',
        label: 'Revenue Analytics',
        component: RevenueAnalytics,
        type: 'General',
        icon: 'Insights',
        description: 'Revenue insights, cash forecasting, and discount analysis',
        requiresSelection: false,
        name: 'Revenue Analytics',
        path: '/apps/customer-invoices/revenue'
    },
    {
        id: 'dunning_manager',
        label: 'Collections & Dunning',
        component: DunningManager,
        type: 'General',
        icon: 'NotificationsActive',
        description: 'Manage collections, reminders, and dunning workflows',
        requiresSelection: false,
        name: 'Dunning Manager',
        path: '/apps/customer-invoices/dunning'
    },
    {
        id: 'dispute_manager',
        label: 'Dispute Manager',
        component: DisputeManager,
        type: 'General',
        icon: 'Gavel',
        description: 'Handle customer disputes and invoice exceptions',
        requiresSelection: false,
        name: 'Dispute Manager',
        path: '/apps/customer-invoices/disputes'
    }
];

export default modules;
