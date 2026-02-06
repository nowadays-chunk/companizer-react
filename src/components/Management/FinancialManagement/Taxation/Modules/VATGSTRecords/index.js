import {
    Receipt,
    Rule,
    TrendingUp,
    TrendingDown,
    Event,
    Description,
    Edit,
    SwapHoriz,
    Public,
    AccountBalance,
    FactCheck,
    Assessment,
    Gavel,
    ThumbUp,
    AutoFixHigh,
    TrackChanges,
    Link,
    Lock
} from '@mui/icons-material';

import VATGSTRegister from './VATGSTRegister';
import VATClassificationRules from './VATClassificationRules';
import InputVATRecovery from './InputVATRecovery';
import OutputVATLiability from './OutputVATLiability';
import VATPeriodClosing from './VATPeriodClosing';
import VATReturnPreparation from './VATReturnPreparation';
import VATAdjustments from './VATAdjustments';
import ReverseChargeVAT from './ReverseChargeVAT';
import MultiJurisdictionVAT from './MultiJurisdictionVAT';
import VATGLIntegration from './VATGLIntegration';
import VATReconciliation from './VATReconciliation';
import VATReporting from './VATReporting';
import VATAuditSupport from './VATAuditSupport';
import VATWorkflow from './VATWorkflow';
import VATAutomation from './VATAutomation';
import VATStatusMonitor from './VATStatusMonitor';
import VATEcosystemIntegration from './VATEcosystemIntegration';
import VATDataIntegrity from './VATDataIntegrity';

export const modules = [
    {
        id: 'vat-register',
        name: 'Transaction Register',
        description: 'Comprehensive Sales & Purchase VAT logs',
        icon: Receipt,
        component: VATGSTRegister,
        group: 'Core',
        type: 'General',
        path: '/apps/vat-gst/register',
        label: 'Register',
        requiresSelection: false
    },
    {
        id: 'vat-rules',
        name: 'Classification & Rules',
        description: 'Tax determination logic',
        icon: Rule,
        component: VATClassificationRules,
        group: 'Core',
        type: 'General',
        path: '/apps/vat-gst/rules',
        label: 'Rules',
        requiresSelection: false
    },
    {
        id: 'input-vat',
        name: 'Input VAT Recovery',
        description: 'Recoverable vs Non-Recoverable',
        icon: TrendingDown,
        component: InputVATRecovery,
        group: 'Core',
        type: 'General',
        path: '/apps/vat-gst/input',
        label: 'Input VAT',
        requiresSelection: false
    },
    {
        id: 'output-vat',
        name: 'Output VAT Liability',
        description: 'Sales tax obligations',
        icon: TrendingUp,
        component: OutputVATLiability,
        group: 'Core',
        type: 'General',
        path: '/apps/vat-gst/output',
        label: 'Output VAT',
        requiresSelection: false
    },
    {
        id: 'vat-closing',
        name: 'Period Closing',
        description: 'Aggregation & locking',
        icon: Event,
        component: VATPeriodClosing,
        group: 'Process',
        type: 'General',
        path: '/apps/vat-gst/closing',
        label: 'Closing',
        requiresSelection: false
    },
    {
        id: 'vat-return',
        name: 'Return Preparation',
        description: 'Filing integration',
        icon: Description,
        component: VATReturnPreparation,
        group: 'Process',
        type: 'General',
        path: '/apps/vat-gst/return',
        label: 'Return',
        requiresSelection: false
    },
    {
        id: 'vat-adjustments',
        name: 'Adjustments',
        description: 'Manual corrections & audit trail',
        icon: Edit,
        component: VATAdjustments,
        group: 'Process',
        type: 'General',
        path: '/apps/vat-gst/adjustments',
        label: 'Adjustments',
        requiresSelection: false
    },
    {
        id: 'reverse-charge',
        name: 'Reverse Charge',
        description: 'Self-assessment mechanisms',
        icon: SwapHoriz,
        component: ReverseChargeVAT,
        group: 'Advanced',
        type: 'General',
        path: '/apps/vat-gst/reverse-charge',
        label: 'Rev. Charge',
        requiresSelection: false
    },
    {
        id: 'multi-jurisdiction',
        name: 'Multi-Jurisdiction',
        description: 'International VAT management',
        icon: Public,
        component: MultiJurisdictionVAT,
        group: 'Advanced',
        type: 'General',
        path: '/apps/vat-gst/international',
        label: 'International',
        requiresSelection: false
    },
    {
        id: 'vat-gl',
        name: 'GL Integration',
        description: 'Accounting mapping',
        icon: AccountBalance,
        component: VATGLIntegration,
        group: 'Accounting',
        type: 'General',
        path: '/apps/vat-gst/gl',
        label: 'GL',
        requiresSelection: false
    },
    {
        id: 'vat-reconciliation',
        name: 'Reconciliation',
        description: 'Control & validation',
        icon: FactCheck,
        component: VATReconciliation,
        group: 'Accounting',
        type: 'General',
        path: '/apps/vat-gst/reconciliation',
        label: 'Reconcile',
        requiresSelection: false
    },
    {
        id: 'vat-reporting',
        name: 'Reporting & Analytics',
        description: 'Operational insights',
        icon: Assessment,
        component: VATReporting,
        group: 'Reporting',
        type: 'General',
        path: '/apps/vat-gst/reporting',
        label: 'Reporting',
        requiresSelection: false
    },
    {
        id: 'vat-audit',
        name: 'Audit Support',
        description: 'Compliance & evidence',
        icon: Gavel,
        component: VATAuditSupport,
        group: 'Compliance',
        type: 'General',
        path: '/apps/vat-gst/audit',
        label: 'Audit',
        requiresSelection: false
    },
    {
        id: 'vat-workflow',
        name: 'Workflow & Approvals',
        description: 'Governance & sign-offs',
        icon: ThumbUp,
        component: VATWorkflow,
        group: 'Governance',
        type: 'General',
        path: '/apps/vat-gst/workflow',
        label: 'Workflow',
        requiresSelection: false
    },
    {
        id: 'vat-automation',
        name: 'Automation Rules',
        description: 'Auto-assignment engine',
        icon: AutoFixHigh,
        component: VATAutomation,
        group: 'Advanced',
        type: 'General',
        path: '/apps/vat-gst/automation',
        label: 'Automation',
        requiresSelection: false
    },
    {
        id: 'vat-status',
        name: 'Lifecycle Status',
        description: 'Tracking record states',
        icon: TrackChanges,
        component: VATStatusMonitor,
        group: 'Governance',
        type: 'General',
        path: '/apps/vat-gst/status',
        label: 'Status',
        requiresSelection: false
    },
    {
        id: 'vat-ecosystem',
        name: 'Integration',
        description: 'Cross-module links',
        icon: Link,
        component: VATEcosystemIntegration,
        group: 'Enterprise',
        type: 'General',
        path: '/apps/vat-gst/integration',
        label: 'Integration',
        requiresSelection: false
    },
    {
        id: 'vat-integrity',
        name: 'Data Integrity',
        description: 'Controls & safeguards',
        icon: Lock,
        component: VATDataIntegrity,
        group: 'Governance',
        type: 'General',
        path: '/apps/vat-gst/integrity',
        label: 'Integrity',
        requiresSelection: false
    }
];

export const entityName = 'VAT Records';
export const collectionName = 'vat_records';

export default modules;
