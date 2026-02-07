import React from 'react';

const WithholdingTaxMasterData = React.lazy(() => import('./WithholdingTaxMasterData'));
const CounterpartyTaxProfiles = React.lazy(() => import('./CounterpartyTaxProfiles'));
const WithholdingCalculationEngine = React.lazy(() => import('./WithholdingCalculationEngine'));
const InvoicePaymentIntegration = React.lazy(() => import('./InvoicePaymentIntegration'));
const AccountingGLPosting = React.lazy(() => import('./AccountingGLPosting'));
const CertificatesReporting = React.lazy(() => import('./CertificatesReporting'));
const TaxAuthorityReporting = React.lazy(() => import('./TaxAuthorityReporting'));
const RemittancePayment = React.lazy(() => import('./RemittancePayment'));
const ReconciliationControl = React.lazy(() => import('./ReconciliationControl'));
const AdjustmentsRefunds = React.lazy(() => import('./AdjustmentsRefunds'));
const WorkflowApprovals = React.lazy(() => import('./WorkflowApprovals'));
const StatusTracking = React.lazy(() => import('./StatusTracking'));
const MultiJurisdictionTreaty = React.lazy(() => import('./MultiJurisdictionTreaty'));
const ReportingAnalytics = React.lazy(() => import('./ReportingAnalytics'));
const RulesEngine = React.lazy(() => import('./RulesEngine'));
const SecurityPermissions = React.lazy(() => import('./SecurityPermissions'));
const SystemIntegration = React.lazy(() => import('./SystemIntegration'));

export const modules = [
    {
        id: 'master-data',
        name: 'WHT Master Data',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/master-data',
        icon: 'Storage',
        description: 'Manage tax codes, rates, and thresholds.',
        component: WithholdingTaxMasterData,
        requiresSelection: false
    },
    {
        id: 'counterparty',
        name: 'Counterparty Profiles',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/counterparty',
        icon: 'AssignmentInd',
        description: 'Manage vendor tax profiles and exemptions.',
        component: CounterpartyTaxProfiles,
        requiresSelection: false
    },
    {
        id: 'calculation',
        name: 'Calculation Engine',
        type: 'Specific',
        path: '/apps/taxation/withholding-taxes/calculation',
        icon: 'Calculate',
        description: 'Test and verify tax code calculations.',
        component: WithholdingCalculationEngine,
        requiresSelection: false
    },
    {
        id: 'integration',
        name: 'Invoice Integration',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/integration',
        icon: 'IntegrationInstructions',
        description: 'Link WHT to AP invoices and payments.',
        component: InvoicePaymentIntegration,
        requiresSelection: false
    },
    {
        id: 'accounting',
        name: 'Accounting & GL',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/accounting',
        icon: 'AccountBalance',
        description: 'Configure WHT accounting entries.',
        component: AccountingGLPosting,
        requiresSelection: false
    },
    {
        id: 'certificates',
        name: 'Tax Certificates',
        type: 'Specific',
        path: '/apps/taxation/withholding-taxes/certificates',
        icon: 'CardMembership',
        description: 'Issue and manage withholding tax certificates.',
        component: CertificatesReporting,
        requiresSelection: true
    },
    {
        id: 'filing',
        name: 'Tax Filing',
        type: 'Specific',
        path: '/apps/taxation/withholding-taxes/filing',
        icon: 'Description',
        description: 'Prepare and submit tax returns.',
        component: TaxAuthorityReporting,
        requiresSelection: false
    },
    {
        id: 'remittance',
        name: 'Remittance & Payment',
        type: 'Specific',
        path: '/apps/taxation/withholding-taxes/remittance',
        icon: 'Payment',
        description: 'Manage tax payments to authorities.',
        component: RemittancePayment,
        requiresSelection: false
    },
    {
        id: 'reconciliation',
        name: 'Reconciliation',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/reconciliation',
        icon: 'FactCheck',
        description: 'Reconcile ledger to tax returns.',
        component: ReconciliationControl,
        requiresSelection: false
    },
    {
        id: 'adjustments',
        name: 'Adjustments & Refunds',
        type: 'Specific',
        path: '/apps/taxation/withholding-taxes/adjustments',
        icon: 'Edit',
        description: 'Process corrections and refund claims.',
        component: AdjustmentsRefunds,
        requiresSelection: false
    },
    {
        id: 'workflow',
        name: 'Workflow Approvals',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/workflow/:id',
        icon: 'ThumbUp',
        description: 'Approval workflows for tax processes.',
        component: WorkflowApprovals,
        requiresSelection: false
    },
    {
        id: 'status',
        name: 'Status Tracking',
        type: 'Specific',
        path: '/apps/taxation/withholding-taxes/status/:id',
        icon: 'TrackChanges',
        description: 'Track status of returns and payments.',
        component: StatusTracking,
        requiresSelection: false
    },
    {
        id: 'treaty',
        name: 'Treaty Management',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/treaty',
        icon: 'Public',
        description: 'Manage double taxation treaties.',
        component: MultiJurisdictionTreaty,
        requiresSelection: false
    },
    {
        id: 'analytics',
        name: 'Analytics & Reporting',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/analytics',
        icon: 'Analytics',
        description: 'WHT analytical dashboards.',
        component: ReportingAnalytics,
        requiresSelection: false
    },
    {
        id: 'rules',
        name: 'Rules Engine',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/rules',
        icon: 'Rule',
        description: 'Configure dynamic tax rules.',
        component: RulesEngine,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/security',
        icon: 'Security',
        description: 'Access control and permissions.',
        component: SecurityPermissions,
        requiresSelection: false
    },
    {
        id: 'system-integration',
        name: 'System Integration',
        type: 'General',
        path: '/apps/taxation/withholding-taxes/system-integration',
        icon: 'SettingsInputComponent',
        description: 'API and external system configs.',
        component: SystemIntegration,
        requiresSelection: false
    },
];

export default modules;
