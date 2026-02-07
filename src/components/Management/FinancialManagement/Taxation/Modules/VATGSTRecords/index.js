import React from 'react';

const VATGSTRegister = React.lazy(() => import('./VATGSTRegister'));
const VATClassificationRules = React.lazy(() => import('./VATClassificationRules'));
const InputVATRecovery = React.lazy(() => import('./InputVATRecovery'));
const OutputVATLiability = React.lazy(() => import('./OutputVATLiability'));
const VATPeriodClosing = React.lazy(() => import('./VATPeriodClosing'));
const VATReturnPreparation = React.lazy(() => import('./VATReturnPreparation'));
const VATAdjustments = React.lazy(() => import('./VATAdjustments'));
const ReverseChargeVAT = React.lazy(() => import('./ReverseChargeVAT'));
const MultiJurisdictionVAT = React.lazy(() => import('./MultiJurisdictionVAT'));
const VATGLIntegration = React.lazy(() => import('./VATGLIntegration'));
const VATReconciliation = React.lazy(() => import('./VATReconciliation'));
const VATReporting = React.lazy(() => import('./VATReporting'));
const VATAuditSupport = React.lazy(() => import('./VATAuditSupport'));
const VATWorkflow = React.lazy(() => import('./VATWorkflow'));
const VATAutomation = React.lazy(() => import('./VATAutomation'));
const VATStatusMonitor = React.lazy(() => import('./VATStatusMonitor'));
const VATEcosystemIntegration = React.lazy(() => import('./VATEcosystemIntegration'));
const VATDataIntegrity = React.lazy(() => import('./VATDataIntegrity'));

export const modules = [
    {
        id: 'register',
        name: 'VAT/GST Register',
        type: 'General',
        path: '/apps/vat-gst/register',
        icon: 'Book',
        description: 'Central register of VAT/GST transactions.',
        component: VATGSTRegister,
        requiresSelection: false
    },
    {
        id: 'rules',
        name: 'Classification Rules',
        type: 'General',
        path: '/apps/vat-gst/rules',
        icon: 'RuleFolder',
        description: 'Define VAT/GST tax codes and rules.',
        component: VATClassificationRules,
        requiresSelection: false
    },
    {
        id: 'input',
        name: 'Input VAT Recovery',
        type: 'Specific',
        path: '/apps/vat-gst/input',
        icon: 'Input',
        description: 'Manage recoverable input tax.',
        component: InputVATRecovery,
        requiresSelection: false
    },
    {
        id: 'output',
        name: 'Output VAT Liability',
        type: 'Specific',
        path: '/apps/vat-gst/output',
        icon: 'Output',
        description: 'Track output tax liabilities.',
        component: OutputVATLiability,
        requiresSelection: false
    },
    {
        id: 'closing',
        name: 'Period Closing',
        type: 'General',
        path: '/apps/vat-gst/closing',
        icon: 'LockClock',
        description: 'Close VAT periods and lock data.',
        component: VATPeriodClosing,
        requiresSelection: false
    },
    {
        id: 'return',
        name: 'Return Preparation',
        type: 'Specific',
        path: '/apps/vat-gst/return',
        icon: 'AssignmentReturn',
        description: 'Prepare VAT/GST returns.',
        component: VATReturnPreparation,
        requiresSelection: false
    },
    {
        id: 'adjustments',
        name: 'VAT Adjustments',
        type: 'Specific',
        path: '/apps/vat-gst/adjustments',
        icon: 'Tune',
        description: 'Make manual tax adjustments.',
        component: VATAdjustments,
        requiresSelection: false
    },
    {
        id: 'reverse-charge',
        name: 'Reverse Charge',
        type: 'Specific',
        path: '/apps/vat-gst/reverse-charge',
        icon: 'SwapHoriz',
        description: 'Manage reverse charge mechanisms.',
        component: ReverseChargeVAT,
        requiresSelection: false
    },
    {
        id: 'international',
        name: 'Multi-Jurisdiction',
        type: 'General',
        path: '/apps/vat-gst/international',
        icon: 'Public',
        description: 'Manage VAT across borders.',
        component: MultiJurisdictionVAT,
        requiresSelection: false
    },
    {
        id: 'gl',
        name: 'GL Integration',
        type: 'General',
        path: '/apps/vat-gst/gl',
        icon: 'AccountBalance',
        description: 'Map tax codes to GL accounts.',
        component: VATGLIntegration,
        requiresSelection: false
    },
    {
        id: 'reconciliation',
        name: 'Reconciliation',
        type: 'General',
        path: '/apps/vat-gst/reconciliation',
        icon: 'FactCheck',
        description: 'Reconcile tax reports with GL.',
        component: VATReconciliation,
        requiresSelection: false
    },
    {
        id: 'reporting',
        name: 'Reporting',
        type: 'General',
        path: '/apps/vat-gst/reporting',
        icon: 'Assessment',
        description: 'Detailed tax reports.',
        component: VATReporting,
        requiresSelection: false
    },
    {
        id: 'audit',
        name: 'Audit Support',
        type: 'General',
        path: '/apps/vat-gst/audit',
        icon: 'SupportAgent',
        description: 'Tools for tax audits.',
        component: VATAuditSupport,
        requiresSelection: false
    },
    {
        id: 'workflow',
        name: 'Workflow',
        type: 'General',
        path: '/apps/vat-gst/workflow',
        icon: 'LinearScale',
        description: 'Approval workflows.',
        component: VATWorkflow,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation',
        type: 'General',
        path: '/apps/vat-gst/automation',
        icon: 'AutoFixHigh',
        description: 'Automate repetitive tax tasks.',
        component: VATAutomation,
        requiresSelection: false
    },
    {
        id: 'status',
        name: 'Status Monitor',
        type: 'General',
        path: '/apps/vat-gst/status',
        icon: 'MonitorHeart',
        description: 'Monitor tax compliance status.',
        component: VATStatusMonitor,
        requiresSelection: false
    },
    {
        id: 'integration',
        name: 'Ecosystem Integration',
        type: 'General',
        path: '/apps/vat-gst/integration',
        icon: 'Hub',
        description: 'External tax system connections.',
        component: VATEcosystemIntegration,
        requiresSelection: false
    },
    {
        id: 'integrity',
        name: 'Data Integrity',
        type: 'General',
        path: '/apps/vat-gst/integrity',
        icon: 'HealthAndSafety',
        description: 'Ensure data accuracy.',
        component: VATDataIntegrity,
        requiresSelection: false
    },
];

export default modules;
