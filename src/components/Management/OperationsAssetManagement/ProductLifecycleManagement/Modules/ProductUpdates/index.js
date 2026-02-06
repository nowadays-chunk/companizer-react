
import UpdateRequest from './UpdateRequest';
import ChangeClassification from './ChangeClassification';
import ImpactAnalysis from './ImpactAnalysis';
import VersionControl from './VersionControl';
import ApprovalWorkflow from './ApprovalWorkflow';
import TechnicalUpdates from './TechnicalUpdates';
import CommercialUpdates from './CommercialUpdates';
import InventoryOperations from './InventoryOperations';
import QualityCompliance from './QualityCompliance';
import Communication from './Communication';
import UpdateAnalytics from './UpdateAnalytics';
import AuditHistory from './AuditHistory';

export const modules = [
    {
        id: 'update-request',
        name: 'Update Request',
        description: 'Initiate change & classify',
        icon: 'EditNote',
        component: UpdateRequest,
        group: 'Intake',
        type: 'General',
        path: '/operations/plm/updates/request',
        label: 'Request',
        requiresSelection: false
    },
    {
        id: 'change-classification',
        name: 'Classification',
        description: 'ECO/ECN & Risk Score',
        icon: 'ReportProblem',
        component: ChangeClassification,
        group: 'Intake',
        type: 'General',
        path: '/operations/plm/updates/classification',
        label: 'Classify',
        requiresSelection: false
    },
    {
        id: 'impact-analysis',
        name: 'Impact Analysis',
        description: 'Inventory, Cost & Customer',
        icon: 'Analytics',
        component: ImpactAnalysis,
        group: 'Analysis',
        type: 'General',
        path: '/operations/plm/updates/impact',
        label: 'Impact',
        requiresSelection: false
    },
    {
        id: 'version-control',
        name: 'Versioning',
        description: 'History & Revisions',
        icon: 'History',
        component: VersionControl,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/plm/updates/versions',
        label: 'Versions',
        requiresSelection: false
    },
    {
        id: 'approval-workflow',
        name: 'Approvals',
        description: 'Routing & Sign-off',
        icon: 'Gavel',
        component: ApprovalWorkflow,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/plm/updates/workflow',
        label: 'Workflow',
        requiresSelection: false
    },
    {
        id: 'technical-updates',
        name: 'Technical',
        description: 'BOM & Specs',
        icon: 'PrecisionManufacturing',
        component: TechnicalUpdates,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/updates/technical',
        label: 'Technical',
        requiresSelection: false
    },
    {
        id: 'commercial-updates',
        name: 'Commercial',
        description: 'Pricing & Attributes',
        icon: 'AttachMoney',
        component: CommercialUpdates,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/updates/commercial',
        label: 'Commercial',
        requiresSelection: false
    },
    {
        id: 'inventory-operations',
        name: 'Inventory Ops',
        description: 'Cutover & Scrap',
        icon: 'Inventory',
        component: InventoryOperations,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/updates/inventory',
        label: 'Inventory',
        requiresSelection: false
    },
    {
        id: 'quality-compliance',
        name: 'Compliance',
        description: 'Re-certification',
        icon: 'VerifiedUser',
        component: QualityCompliance,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/updates/compliance',
        label: 'Compliance',
        requiresSelection: false
    },
    {
        id: 'communication',
        name: 'Communication',
        description: 'Notifications',
        icon: 'Campaign',
        component: Communication,
        group: 'Closure',
        type: 'Specific',
        path: '/operations/plm/updates/communication',
        label: 'Comm',
        requiresSelection: false
    },
    {
        id: 'update-analytics',
        name: 'Analytics',
        description: 'Change Metrics',
        icon: 'Insights',
        component: UpdateAnalytics,
        group: 'Closure',
        type: 'Specific',
        path: '/operations/plm/updates/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'audit-history',
        name: 'Audit Log',
        description: 'Full Trail',
        icon: 'ManageSearch',
        component: AuditHistory,
        group: 'Closure',
        type: 'Specific',
        path: '/operations/plm/updates/audit',
        label: 'Audit',
        requiresSelection: false
    }
];
