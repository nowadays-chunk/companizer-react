import {
    Gavel,
    Folder,
    QuestionAnswer,
    FindInPage,
    MoneyOff,
    AccountBalance,
    History,
    MergeType,
    Assessment,
    ThumbUp,
    Link,
    EventBusy,
    Policy,
    Security,
    Dashboard,
    AutoGraph,
    Lock
} from '@mui/icons-material';

import AuditCaseManagement from './AuditCaseManagement';
import AuditDocumentManagement from './AuditDocumentManagement';
import AuditRequestsResponses from './AuditRequestsResponses';
import AuditFindingsAdjustments from './AuditFindingsAdjustments';
import PenaltiesInterestAssessments from './PenaltiesInterestAssessments';
import AppealsDisputeManagement from './AppealsDisputeManagement';
import AccountingGLIntegration from './AccountingGLIntegration';
import AuditTrailHistory from './AuditTrailHistory';
import AuditConsolidation from './AuditConsolidation';
import AuditReportingAnalytics from './AuditReportingAnalytics';
import AuditWorkflowApprovals from './AuditWorkflowApprovals';
import TaxEcosystemIntegration from './TaxEcosystemIntegration';
import ComplianceDeadlines from './ComplianceDeadlines';
import InternalControlsRisk from './InternalControlsRisk';
import AuditSecurityAccess from './AuditSecurityAccess';
import AuditDashboard from './AuditDashboard';
import AuditAutomationIntelligence from './AuditAutomationIntelligence';
import DataIntegrityPeriodControls from './DataIntegrityPeriodControls';

export const taxAuditModules = [
    {
        id: 'audit-case-management',
        name: 'Audit Case Management',
        description: 'Core audit tracking and workflow',
        icon: Gavel,
        component: AuditCaseManagement,
        group: 'Core',
        type: 'General',
        path: '/apps/tax-audits/cases',
        label: 'Cases',
        requiresSelection: false
    },
    {
        id: 'audit-document-management',
        name: 'Document Management',
        description: 'Evidence and file repository',
        icon: Folder,
        component: AuditDocumentManagement,
        group: 'Core',
        type: 'General',
        path: '/apps/tax-audits/documents',
        label: 'Documents',
        requiresSelection: false
    },
    {
        id: 'audit-requests-responses',
        name: 'Requests & Responses',
        description: 'Track authority requests',
        icon: QuestionAnswer,
        component: AuditRequestsResponses,
        group: 'Execution',
        type: 'General',
        path: '/apps/tax-audits/requests',
        label: 'Requests',
        requiresSelection: false
    },
    {
        id: 'audit-findings',
        name: 'Findings & Adjustments',
        description: 'Record and simulate findings',
        icon: FindInPage,
        component: AuditFindingsAdjustments,
        group: 'Execution',
        type: 'General',
        path: '/apps/tax-audits/findings',
        label: 'Findings',
        requiresSelection: false
    },
    {
        id: 'audit-penalties',
        name: 'Penalties & Interest',
        description: 'Calculate financial exposure',
        icon: MoneyOff,
        component: PenaltiesInterestAssessments,
        group: 'Financial',
        type: 'General',
        path: '/apps/tax-audits/penalties',
        label: 'Penalties',
        requiresSelection: false
    },
    {
        id: 'audit-appeals',
        name: 'Appeals & Disputes',
        description: 'Manage legal challenges',
        icon: Policy,
        component: AppealsDisputeManagement,
        group: 'Legal',
        type: 'General',
        path: '/apps/tax-audits/appeals',
        label: 'Appeals',
        requiresSelection: false
    },
    {
        id: 'audit-accounting',
        name: 'Accounting & GL',
        description: 'Post adjustments to GL',
        icon: AccountBalance,
        component: AccountingGLIntegration,
        group: 'Financial',
        type: 'General',
        path: '/apps/tax-audits/accounting',
        label: 'Accounting',
        requiresSelection: false
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail',
        description: 'Immutable history log',
        icon: History,
        component: AuditTrailHistory,
        group: 'Governance',
        type: 'General',
        path: '/apps/tax-audits/history',
        label: 'Audit Trail',
        requiresSelection: false
    },
    {
        id: 'audit-consolidation',
        name: 'Multi-Entity Support',
        description: 'Group audit management',
        icon: MergeType,
        component: AuditConsolidation,
        group: 'Enterprise',
        type: 'General',
        path: '/apps/tax-audits/consolidation',
        label: 'Consolidation',
        requiresSelection: false
    },
    {
        id: 'audit-analytics',
        name: 'Reporting & Analytics',
        description: 'Insights and heatmaps',
        icon: Assessment,
        component: AuditReportingAnalytics,
        group: 'Management',
        type: 'General',
        path: '/apps/tax-audits/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'audit-workflow',
        name: 'Workflow & Approvals',
        description: 'Approval controls',
        icon: ThumbUp,
        component: AuditWorkflowApprovals,
        group: 'Governance',
        type: 'General',
        path: '/apps/tax-audits/workflow',
        label: 'Workflow',
        requiresSelection: false
    },
    {
        id: 'audit-integration',
        name: 'Tax Ecosystem',
        description: 'Linkages to other modules',
        icon: Link,
        component: TaxEcosystemIntegration,
        group: 'Enterprise',
        type: 'General',
        path: '/apps/tax-audits/integration',
        label: 'Integration',
        requiresSelection: false
    },
    {
        id: 'audit-dates',
        name: 'Compliance Deadlines',
        description: 'Statutory date tracking',
        icon: EventBusy,
        component: ComplianceDeadlines,
        group: 'Compliance',
        type: 'General',
        path: '/apps/tax-audits/deadlines',
        label: 'Deadlines',
        requiresSelection: false
    },
    {
        id: 'audit-controls',
        name: 'Risk Management',
        description: 'Internal controls & risk',
        icon: Security,
        component: InternalControlsRisk,
        group: 'Governance',
        type: 'General',
        path: '/apps/tax-audits/risk',
        label: 'Risk',
        requiresSelection: false
    },
    {
        id: 'audit-security',
        name: 'Security Access',
        description: 'Role-based access control',
        icon: Security,
        component: AuditSecurityAccess,
        group: 'Admin',
        type: 'General',
        path: '/apps/tax-audits/security',
        label: 'Security',
        requiresSelection: false
    },
    {
        id: 'audit-dashboard',
        name: 'Audit Dashboard',
        description: 'Central monitoring hub',
        icon: Dashboard,
        component: AuditDashboard,
        group: 'Management',
        type: 'General',
        path: '/apps/tax-audits/dashboard',
        label: 'Dashboard',
        requiresSelection: false
    },
    {
        id: 'audit-automation',
        name: 'Automation (AI)',
        description: 'Advanced intelligence',
        icon: AutoGraph,
        component: AuditAutomationIntelligence,
        group: 'Advanced',
        type: 'General',
        path: '/apps/tax-audits/automation',
        label: 'Automation',
        requiresSelection: false
    },
    {
        id: 'audit-data-integrity',
        name: 'Period Controls',
        description: 'Data integrity & locking',
        icon: Lock,
        component: DataIntegrityPeriodControls,
        group: 'Governance',
        type: 'General',
        path: '/apps/tax-audits/integrity',
        label: 'Data Integrity',
        requiresSelection: false
    }
];

export default taxAuditModules;
