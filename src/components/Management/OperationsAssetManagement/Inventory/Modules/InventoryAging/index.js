import AgingCalculation from './AgingCalculation';
import StockSegmentation from './StockSegmentation';
import ValuationIntegration from './ValuationIntegration';
import AgingAlerts from './AgingAlerts';
import AgingDashboard from './InventoryAgingDashboard';
import ProcurementIntegration from './ProcurementIntegration';
import LifecycleManagement from './LifecycleManagement';
import MultiEntityAging from './MultiEntityAging';
import AgingAutomation from './AgingAutomation';
import SecurityPermissions from './SecurityPermissions';

export const modules = [
    {
        name: 'Aging Calculation',
        type: 'General',
        path: '/apps/inventory/aging/calculation',
        icon: 'AccessTime',
        description: 'Compute stock age by SKU/Batch',
        component: AgingCalculation
    },
    {
        name: 'Stock Segmentation',
        type: 'General',
        path: '/apps/inventory/aging/segmentation',
        icon: 'Category',
        description: 'Fast/Slow Moving & Obsolete items',
        component: StockSegmentation
    },
    {
        name: 'Valuation & Finance',
        type: 'General',
        path: '/apps/inventory/aging/valuation',
        icon: 'AttachMoney',
        description: 'Financial impact of aged stock',
        component: ValuationIntegration
    },
    {
        name: 'Alerts & Notifications',
        type: 'General',
        path: '/apps/inventory/aging/alerts',
        icon: 'NotificationsActive',
        description: 'Obsolescence warnings & alerts',
        component: AgingAlerts
    },
    {
        name: 'Aging Dashboard',
        type: 'General',
        path: '/apps/inventory/aging/dashboard',
        icon: 'Assessment',
        description: 'KPIs and Aging Visualizations',
        component: AgingDashboard
    },
    {
        name: 'Procurement Link',
        type: 'General',
        path: '/apps/inventory/aging/procurement',
        icon: 'ShoppingCart',
        description: 'Optimized Reorder Points',
        component: ProcurementIntegration
    },
    {
        name: 'Lifecycle Management',
        type: 'General',
        path: '/apps/inventory/aging/lifecycle',
        icon: 'Timeline',
        description: 'Product phase-out planning',
        component: LifecycleManagement
    },
    {
        name: 'Multi-Entity Aging',
        type: 'General',
        path: '/apps/inventory/aging/multi-entity',
        icon: 'Business',
        description: 'Consolidated aging reports',
        component: MultiEntityAging
    },
    {
        name: 'Automation',
        type: 'General',
        path: '/apps/inventory/aging/automation',
        icon: 'AutoAwesome',
        description: 'Auto-flagging & Writing off',
        component: AgingAutomation
    },
    {
        name: 'Security & Access',
        type: 'General',
        path: '/apps/inventory/aging/security',
        icon: 'Security',
        description: 'Role-based access control',
        component: SecurityPermissions
    }
];

export default modules;
