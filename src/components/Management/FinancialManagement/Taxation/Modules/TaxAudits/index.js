import React from 'react';

const AuditCaseManagement = React.lazy(() => import('./AuditCaseManagement'));
const AuditDocumentManagement = React.lazy(() => import('./AuditDocumentManagement'));
const AuditRequestsResponses = React.lazy(() => import('./AuditRequestsResponses'));
const AuditFindingsAdjustments = React.lazy(() => import('./AuditFindingsAdjustments'));
const PenaltiesInterestAssessments = React.lazy(() => import('./PenaltiesInterestAssessments'));
const AppealsDisputeManagement = React.lazy(() => import('./AppealsDisputeManagement'));
const AccountingGLIntegration = React.lazy(() => import('./AccountingGLIntegration'));
const AuditTrailHistory = React.lazy(() => import('./AuditTrailHistory'));
const AuditConsolidation = React.lazy(() => import('./AuditConsolidation'));
const AuditReportingAnalytics = React.lazy(() => import('./AuditReportingAnalytics'));
const AuditWorkflowApprovals = React.lazy(() => import('./AuditWorkflowApprovals'));
const TaxEcosystemIntegration = React.lazy(() => import('./TaxEcosystemIntegration'));
const ComplianceDeadlines = React.lazy(() => import('./ComplianceDeadlines'));
const InternalControlsRisk = React.lazy(() => import('./InternalControlsRisk'));
const AuditSecurityAccess = React.lazy(() => import('./AuditSecurityAccess'));
const AuditDashboard = React.lazy(() => import('./AuditDashboard'));
const AuditAutomationIntelligence = React.lazy(() => import('./AuditAutomationIntelligence'));
const DataIntegrityPeriodControls = React.lazy(() => import('./DataIntegrityPeriodControls'));

export const modules = [
    {
        id: 'cases',
        name: 'Case Management',
        type: 'Specific',
        path: '/apps/tax-audits/cases',
        icon: 'FolderShared',
        description: 'Manage active tax audit cases.',
        component: AuditCaseManagement,
        requiresSelection: false
    },
    {
        id: 'documents',
        name: 'Document Management',
        type: 'General',
        path: '/apps/tax-audits/documents',
        icon: 'SnippetFolder',
        description: 'Centralized audit document repository.',
        component: AuditDocumentManagement,
        requiresSelection: false
    },
    {
        id: 'requests',
        name: 'Requests & Responses',
        type: 'Specific',
        path: '/apps/tax-audits/requests',
        icon: 'QuestionAnswer',
        description: 'Track information requests from auditors.',
        component: AuditRequestsResponses,
        requiresSelection: false
    },
    {
        id: 'findings',
        name: 'Findings & Adjustments',
        type: 'Specific',
        path: '/apps/tax-audits/findings',
        icon: 'FindInPage',
        description: 'Log audit findings and proposed adjustments.',
        component: AuditFindingsAdjustments,
        requiresSelection: false
    },
    {
        id: 'penalties',
        name: 'Penalties & Interest',
        type: 'Specific',
        path: '/apps/tax-audits/penalties',
        icon: 'Gavel',
        description: 'Calculate and track penalties and interest.',
        component: PenaltiesInterestAssessments,
        requiresSelection: false
    },
    {
        id: 'appeals',
        name: 'Appeals & Disputes',
        type: 'Specific',
        path: '/apps/tax-audits/appeals',
        icon: 'Balance',
        description: 'Manage appeals and dispute resolution.',
        component: AppealsDisputeManagement,
        requiresSelection: false
    },
    {
        id: 'accounting',
        name: 'GL Integration',
        type: 'General',
        path: '/apps/tax-audits/accounting',
        icon: 'AccountBalance',
        description: 'Post audit adjustments to GL.',
        component: AccountingGLIntegration,
        requiresSelection: false
    },
    {
        id: 'history',
        name: 'Audit Trail',
        type: 'General',
        path: '/apps/tax-audits/history',
        icon: 'History',
        description: 'Change log and history.',
        component: AuditTrailHistory,
        requiresSelection: false
    },
    {
        id: 'consolidation',
        name: 'Consolidation',
        type: 'General',
        path: '/apps/tax-audits/consolidation',
        icon: 'Compress',
        description: 'Group level audit consolidation.',
        component: AuditConsolidation,
        requiresSelection: false
    },
    {
        id: 'analytics',
        name: 'Reporting & Analytics',
        type: 'General',
        path: '/apps/tax-audits/analytics',
        icon: 'Analytics',
        description: 'Audit risk and outcome analysis.',
        component: AuditReportingAnalytics,
        requiresSelection: false
    },
    {
        id: 'workflow',
        name: 'Workflows',
        type: 'General',
        path: '/apps/tax-audits/workflow',
        icon: 'LinearScale',
        description: 'Audit process workflows.',
        component: AuditWorkflowApprovals,
        requiresSelection: false
    },
    {
        id: 'integration',
        name: 'Ecosystem Integration',
        type: 'General',
        path: '/apps/tax-audits/integration',
        icon: 'Hub',
        description: 'Connect with wider tax ecosystem.',
        component: TaxEcosystemIntegration,
        requiresSelection: false
    },
    {
        id: 'deadlines',
        name: 'Compliance Deadlines',
        type: 'General',
        path: '/apps/tax-audits/deadlines',
        icon: 'Event',
        description: 'Track statutory deadlines.',
        component: ComplianceDeadlines,
        requiresSelection: false
    },
    {
        id: 'risk',
        name: 'Risk Control',
        type: 'General',
        path: '/apps/tax-audits/risk',
        icon: 'Shield',
        description: 'Internal controls and risk assessment.',
        component: InternalControlsRisk,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security',
        type: 'General',
        path: '/apps/tax-audits/security',
        icon: 'Security',
        description: 'Sensitive data access control.',
        component: AuditSecurityAccess,
        requiresSelection: false
    },
    {
        id: 'dashboard',
        name: 'Audit Dashboard',
        type: 'General',
        path: '/apps/tax-audits/dashboard',
        icon: 'Dashboard',
        description: 'Overview of all audit activities.',
        component: AuditDashboard,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation',
        type: 'General',
        path: '/apps/tax-audits/automation',
        icon: 'SmartToy',
        description: 'Automated audit response tools.',
        component: AuditAutomationIntelligence,
        requiresSelection: false
    },
    {
        id: 'integrity',
        name: 'Data Integrity',
        type: 'General',
        path: '/apps/tax-audits/integrity',
        icon: 'VerifiedUser',
        description: 'Period controls and data validation.',
        component: DataIntegrityPeriodControls,
        requiresSelection: false
    },
];

export default modules;
