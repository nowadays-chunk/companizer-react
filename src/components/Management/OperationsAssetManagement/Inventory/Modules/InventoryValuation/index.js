import ValuationMethods from './ValuationMethods';
import ValuationProcessing from './ValuationProcessing';
import TransactionValuation from './TransactionValuation';
import MultiEntityValuation from './MultiEntityValuation';
import ProductCosting from './ProductCosting';
import BatchSerialValuation from './BatchSerialValuation';
import CostAdjustments from './CostAdjustments';
import GLIntegration from './GLIntegration';
import ValuationAging from './ValuationAging';
import CurrencyValuation from './CurrencyValuation';
import ValuationAnalytics from './ValuationAnalytics';
import ValuationApprovals from './ValuationApprovals';
import ValuationSimulation from './ValuationSimulation';
import ValuationAutomation from './ValuationAutomation';
import SecurityPermissions from './SecurityPermissions';

export const modules = [
    {
        name: 'Valuation Methods',
        type: 'General',
        path: '/apps/inventory/valuation/methods',
        icon: 'Settings',
        description: 'FIFO, LIFO, Weighted Avg, Standard Cost',
        component: ValuationMethods
    },
    {
        name: 'Processing Control',
        type: 'General',
        path: '/apps/inventory/valuation/processing',
        icon: 'Update',
        description: 'Real-time vs Periodic Valuation Control',
        component: ValuationProcessing
    },
    {
        name: 'Transaction Valuation',
        type: 'General',
        path: '/apps/inventory/valuation/transactions',
        icon: 'Receipt',
        description: 'Valuation of Goods Receipts, Issues, Transfers',
        component: TransactionValuation
    },
    {
        name: 'Multi-Entity Valuation',
        type: 'General',
        path: '/apps/inventory/valuation/multi-entity',
        icon: 'Business',
        description: 'Warehouse & Entity Specific Valuation',
        component: MultiEntityValuation
    },
    {
        name: 'Product Costing',
        type: 'General',
        path: '/apps/inventory/valuation/costing',
        icon: 'Category',
        description: 'Granular SKU/Category Level Costing',
        component: ProductCosting
    },
    {
        name: 'Batch/Serial Valuation',
        type: 'General',
        path: '/apps/inventory/valuation/traceability',
        icon: 'QrCode',
        description: 'Valuation by Batch, Lot, or Serial Number',
        component: BatchSerialValuation
    },
    {
        name: 'Cost Adjustments',
        type: 'General',
        path: '/apps/inventory/valuation/adjustments',
        icon: 'Edit',
        description: 'Landed Costs, Overhead Allocation',
        component: CostAdjustments
    },
    {
        name: 'GL Integration',
        type: 'General',
        path: '/apps/inventory/valuation/gl-integration',
        icon: 'AccountBalance',
        description: 'Automated COGS & Asset Account Posting',
        component: GLIntegration
    },
    {
        name: 'Inventory Aging',
        type: 'General',
        path: '/apps/inventory/valuation/aging',
        icon: 'AccessTime',
        description: 'Aging Analysis & Obsolescence Provisions',
        component: ValuationAging
    },
    {
        name: 'Multi-Currency',
        type: 'General',
        path: '/apps/inventory/valuation/currency',
        icon: 'ShowChart',
        description: 'Base Currency Conversion & Reporting',
        component: CurrencyValuation
    },
    {
        name: 'Valuation Analytics',
        type: 'General',
        path: '/apps/inventory/valuation/analytics',
        icon: 'Assessment',
        description: 'Trends, Reports, and Valuation Insights',
        component: ValuationAnalytics
    },
    {
        name: 'Approvals & Governance',
        type: 'General',
        path: '/apps/inventory/valuation/approvals',
        icon: 'VerifiedUser',
        description: 'Workflows for Valuation Changes',
        component: ValuationApprovals
    },
    {
        name: 'Scenario Simulation',
        type: 'General',
        path: '/apps/inventory/valuation/simulation',
        icon: 'Science',
        description: 'What-if Scenarios & Forecasting',
        component: ValuationSimulation
    },
    {
        name: 'Automation',
        type: 'General',
        path: '/apps/inventory/valuation/automation',
        icon: 'AutoFixHigh',
        description: 'Automated Adjustments & Landed Costs',
        component: ValuationAutomation
    },
    {
        name: 'Security',
        type: 'General',
        path: '/apps/inventory/valuation/security',
        icon: 'Security',
        description: 'Role-based Access & Controls',
        component: SecurityPermissions
    }
];

export default modules;
