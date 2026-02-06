import ReorderPointMaster from './ReorderPointMaster';
import AutoReplenishment from './AutoReplenishment';
import DemandAnalysis from './DemandAnalysis';
import LeadTimeManagement from './LeadTimeManagement';
import ReplenishmentTriggers from './ReplenishmentTriggers';
import ApprovalWorkflow from './ApprovalWorkflow';
import PurchaseIntegration from './PurchaseIntegration';
import MultiWarehousePlanning from './MultiWarehousePlanning';
import FinancialImpact from './FinancialImpact';
import ExceptionAlerts from './ExceptionAlerts';
import ScenarioSimulation from './ScenarioSimulation';
import IntegrationStatus from './IntegrationStatus';
import ReorderAnalytics from './ReorderAnalytics';

export const modules = [
    {
        name: 'Master Data',
        type: 'General',
        path: '/apps/inventory/reorder-points/master',
        icon: 'Inventory',
        description: 'Manage reorder points and item configurations.',
        component: ReorderPointMaster
    },
    {
        name: 'Auto Replenishment',
        type: 'General',
        path: '/apps/inventory/reorder-points/auto-replenishment',
        icon: 'Autorenew',
        description: 'Configure automated replenishment rules.',
        component: AutoReplenishment
    },
    {
        name: 'Demand Analysis',
        type: 'General',
        path: '/apps/inventory/reorder-points/demand-analysis',
        icon: 'Analytics',
        description: 'Analyze demand patterns and trends.',
        component: DemandAnalysis
    },
    {
        name: 'Lead Time',
        type: 'General',
        path: '/apps/inventory/reorder-points/lead-time',
        icon: 'Timer',
        description: 'Manage vendor lead times and variability.',
        component: LeadTimeManagement
    },
    {
        name: 'Replenishment Triggers',
        type: 'General',
        path: '/apps/inventory/reorder-points/triggers',
        icon: 'AdsClick',
        description: 'Monitor and manage replenishment triggers.',
        component: ReplenishmentTriggers
    },
    {
        name: 'Approvals',
        type: 'General',
        path: '/apps/inventory/reorder-points/approvals',
        icon: 'FactCheck',
        description: 'Review and approve reorder requests.',
        component: ApprovalWorkflow
    },
    {
        name: 'Purchase Integration',
        type: 'General',
        path: '/apps/inventory/reorder-points/purchase-integration',
        icon: 'ShoppingCart',
        description: 'Integration with purchase orders and suppliers.',
        component: PurchaseIntegration
    },
    {
        name: 'Multi-Warehouse',
        type: 'General',
        path: '/apps/inventory/reorder-points/multi-warehouse',
        icon: 'Store',
        description: 'Plan reorder points across multiple warehouses.',
        component: MultiWarehousePlanning
    },
    {
        name: 'Financial Impact',
        type: 'General',
        path: '/apps/inventory/reorder-points/financial-impact',
        icon: 'AttachMoney',
        description: 'Analyze financial impact of reorder strategies.',
        component: FinancialImpact
    },
    {
        name: 'Exception Alerts',
        type: 'General',
        path: '/apps/inventory/reorder-points/exception-alerts',
        icon: 'Warning',
        description: 'Manage exceptions and stock alerts.',
        component: ExceptionAlerts
    },
    {
        name: 'Scenario Simulation',
        type: 'General',
        path: '/apps/inventory/reorder-points/scenarios',
        icon: 'Science',
        description: 'Simulate different reorder strategies.',
        component: ScenarioSimulation
    },
    {
        name: 'Integration Status',
        type: 'General',
        path: '/apps/inventory/reorder-points/integration-status',
        icon: 'Hub',
        description: 'Monitor system integrations and health.',
        component: IntegrationStatus
    },
    {
        name: 'Analytics',
        type: 'General',
        path: '/apps/inventory/reorder-points/analytics',
        icon: 'Insights',
        description: 'Comprehensive reorder analytics and reporting.',
        component: ReorderAnalytics
    }
];

export default modules;
