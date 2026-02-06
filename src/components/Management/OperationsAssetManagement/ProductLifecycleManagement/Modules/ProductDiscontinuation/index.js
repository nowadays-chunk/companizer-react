
import DiscontinuationRequest from './DiscontinuationRequest';
import LifecycleStatus from './LifecycleStatus';
import ImpactAnalysis from './ImpactAnalysis';
import PhaseOutPlan from './PhaseOutPlan';
import ApprovalWorkflow from './ApprovalWorkflow';
import InventoryDisposition from './InventoryDisposition';
import FinancialWriteOffs from './FinancialWriteOffs';
import SupplierClosure from './SupplierClosure';
import SalesCustomer from './SalesCustomer';
import ReplacementMigration from './ReplacementMigration';
import ComplianceRegulatory from './ComplianceRegulatory';
import DiscontinuationAnalytics from './DiscontinuationAnalytics';

export const modules = [
    {
        id: 'discontinuation-request',
        name: 'Discontinuation Request',
        description: 'Initiate phase-out',
        icon: 'ExitToApp',
        component: DiscontinuationRequest,
        group: 'Initiation',
        type: 'General',
        path: '/operations/plm/discontinuation/request',
        label: 'Request',
        requiresSelection: false
    },
    {
        id: 'lifecycle-status',
        name: 'Lifecycle Status',
        description: 'Status & Dates',
        icon: 'Autorenew',
        component: LifecycleStatus,
        group: 'Control',
        type: 'General',
        path: '/operations/plm/discontinuation/status',
        label: 'Status',
        requiresSelection: false
    },
    {
        id: 'impact-analysis',
        name: 'Impact Analysis',
        description: 'Business Impact',
        icon: 'Analytics',
        component: ImpactAnalysis,
        group: 'Control',
        type: 'General',
        path: '/operations/plm/discontinuation/impact',
        label: 'Impact',
        requiresSelection: false
    },
    {
        id: 'phase-out-plan',
        name: 'Phase-Out Plan',
        description: 'Exit Strategy',
        icon: 'CalendarMonth',
        component: PhaseOutPlan,
        group: 'Control',
        type: 'General',
        path: '/operations/plm/discontinuation/plan',
        label: 'Plan',
        requiresSelection: false
    },
    {
        id: 'approval-workflow',
        name: 'Governance',
        description: 'Approvals & Sign-off',
        icon: 'Gavel',
        component: ApprovalWorkflow,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/plm/discontinuation/governance',
        label: 'Gov',
        requiresSelection: false
    },
    {
        id: 'inventory-disposition',
        name: 'Inventory',
        description: 'Scrap & Transfers',
        icon: 'DeleteSweep',
        component: InventoryDisposition,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/discontinuation/inventory',
        label: 'Inv',
        requiresSelection: false
    },
    {
        id: 'financial-writeoffs',
        name: 'Financials',
        description: 'Write-offs',
        icon: 'AccountBalance',
        component: FinancialWriteOffs,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/discontinuation/finance',
        label: 'Finance',
        requiresSelection: false
    },
    {
        id: 'supplier-closure',
        name: 'Supply Chain',
        description: 'PO & Vendor Closure',
        icon: 'Factory',
        component: SupplierClosure,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/discontinuation/supply',
        label: 'Supply',
        requiresSelection: false
    },
    {
        id: 'sales-customer',
        name: 'Commercial',
        description: 'Sales & Comms',
        icon: 'Storefront',
        component: SalesCustomer,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/discontinuation/sales',
        label: 'Sales',
        requiresSelection: false
    },
    {
        id: 'replacement-migration',
        name: 'Migration',
        description: 'Successor Mapping',
        icon: 'SwapHoriz',
        component: ReplacementMigration,
        group: 'Strategy',
        type: 'Specific',
        path: '/operations/plm/discontinuation/migration',
        label: 'Migration',
        requiresSelection: false
    },
    {
        id: 'compliance-regulatory',
        name: 'Compliance',
        description: 'Legal & Records',
        icon: 'Policy',
        component: ComplianceRegulatory,
        group: 'Closure',
        type: 'Specific',
        path: '/operations/plm/discontinuation/compliance',
        label: 'Legal',
        requiresSelection: false
    },
    {
        id: 'discontinuation-analytics',
        name: 'Analytics',
        description: 'Success Metrics',
        icon: 'Insights',
        component: DiscontinuationAnalytics,
        group: 'Closure',
        type: 'Specific',
        path: '/operations/plm/discontinuation/analytics',
        label: 'Analytics',
        requiresSelection: false
    }
];
