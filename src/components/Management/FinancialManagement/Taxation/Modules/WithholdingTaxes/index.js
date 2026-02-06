import {
    Description,
    People,
    Calculate,
    Receipt,
    AccountBalance,
    Assignment,
    Assessment,
    Payment,
    CompareArrows,
    Rule,
    Gavel,
    History,
    Public,
    PieChart,
    AutoFixHigh,
    Security,
    Hub
} from '@mui/icons-material';

import WithholdingTaxMasterData from './WithholdingTaxMasterData';
import CounterpartyTaxProfiles from './CounterpartyTaxProfiles';
import WithholdingCalculationEngine from './WithholdingCalculationEngine';
import InvoicePaymentIntegration from './InvoicePaymentIntegration';
import AccountingGLPosting from './AccountingGLPosting';
import CertificatesReporting from './CertificatesReporting';
import TaxAuthorityReporting from './TaxAuthorityReporting';
import RemittancePayment from './RemittancePayment';
import ReconciliationControl from './ReconciliationControl';
import AdjustmentsRefunds from './AdjustmentsRefunds';
import WorkflowApprovals from './WorkflowApprovals';
import StatusTracking from './StatusTracking';
import MultiJurisdictionTreaty from './MultiJurisdictionTreaty';
import ReportingAnalytics from './ReportingAnalytics';
import RulesEngine from './RulesEngine';
import SecurityPermissions from './SecurityPermissions';
import SystemIntegration from './SystemIntegration';

export const withholdingTaxModules = [
    {
        id: 'wht-master-data',
        name: 'Withholding Master Data',
        description: 'Configure tax types, rates, and jurisdictions',
        icon: Description,
        component: WithholdingTaxMasterData,
        group: 'Setup',
        type: 'General',
        path: '/apps/withholding-taxes/master-data',
        label: 'Master Data',
        requiresSelection: false
    },
    {
        id: 'wht-counterparty-profiles',
        name: 'Counterparty Tax Profiles',
        description: 'Manage vendor and customer tax details',
        icon: People,
        component: CounterpartyTaxProfiles,
        group: 'Setup',
        type: 'General',
        path: '/apps/withholding-taxes/counterparty',
        label: 'Counterparty Profiles',
        requiresSelection: false
    },
    {
        id: 'wht-calculation-engine',
        name: 'Calculation Engine',
        description: 'Withholding tax calculation logic',
        icon: Calculate,
        component: WithholdingCalculationEngine,
        group: 'Core',
        type: 'General',
        path: '/apps/withholding-taxes/calculation',
        label: 'Calculation Engine',
        requiresSelection: false
    },
    {
        id: 'wht-invoice-integration',
        name: 'Invoice & Payment Integration',
        description: 'AP/AR integration points',
        icon: Receipt,
        component: InvoicePaymentIntegration,
        group: 'Core',
        type: 'General',
        path: '/apps/withholding-taxes/integration',
        label: 'Invoice Integration',
        requiresSelection: false
    },
    {
        id: 'wht-accounting-gl',
        name: 'Accounting & GL',
        description: 'GL accounts and posting logs',
        icon: AccountBalance,
        component: AccountingGLPosting,
        group: 'Finance',
        type: 'General',
        path: '/apps/withholding-taxes/accounting',
        label: 'Accounting & GL',
        requiresSelection: false
    },
    {
        id: 'wht-certificates',
        name: 'Certificates & Reporting',
        description: 'Issue tax certificates to counterparties',
        icon: Assignment,
        component: CertificatesReporting,
        group: 'Compliance',
        type: 'General',
        path: '/apps/withholding-taxes/certificates',
        label: 'Certificates',
        requiresSelection: false
    },
    {
        id: 'wht-authority-reporting',
        name: 'Tax Authority Filing',
        description: 'File returns with tax authorities',
        icon: Assessment,
        component: TaxAuthorityReporting,
        group: 'Compliance',
        type: 'General',
        path: '/apps/withholding-taxes/filing',
        label: 'Authority Filing',
        requiresSelection: false
    },
    {
        id: 'wht-remittance',
        name: 'Remittance & Payment',
        description: 'Pay withheld tax to authorities',
        icon: Payment,
        component: RemittancePayment,
        group: 'Compliance',
        type: 'General',
        path: '/apps/withholding-taxes/remittance',
        label: 'Remittance',
        requiresSelection: false
    },
    {
        id: 'wht-reconciliation',
        name: 'Reconciliation & Control',
        description: 'Reconcile GL vs Subledger',
        icon: CompareArrows,
        component: ReconciliationControl,
        group: 'Finance',
        type: 'General',
        path: '/apps/withholding-taxes/reconciliation',
        label: 'Reconciliation',
        requiresSelection: false
    },
    {
        id: 'wht-adjustments',
        name: 'Adjustments & Refunds',
        description: 'Manual corrections and refunds',
        icon: Rule,
        component: AdjustmentsRefunds,
        group: 'Finance',
        type: 'General',
        path: '/apps/withholding-taxes/adjustments',
        label: 'Adjustments & Refunds',
        requiresSelection: false
    },
    {
        id: 'wht-workflow',
        name: 'Workflow & Approvals',
        description: 'Approval processes for tax items',
        icon: Gavel,
        component: WorkflowApprovals,
        group: 'Governance',
        type: 'Specific',
        path: '/apps/withholding-taxes/workflow/:id',
        label: 'Workflow',
        requiresSelection: true
    },
    {
        id: 'wht-status',
        name: 'Status Tracking',
        description: 'Lifecycle tracking of tax items',
        icon: History,
        component: StatusTracking,
        group: 'Governance',
        type: 'Specific',
        path: '/apps/withholding-taxes/status/:id',
        label: 'Status Tracking',
        requiresSelection: true
    },
    {
        id: 'wht-treaty',
        name: 'Multi-Jurisdiction Treaty',
        description: 'Treaty rates and DTAA database',
        icon: Public,
        component: MultiJurisdictionTreaty,
        group: 'Global',
        type: 'General',
        path: '/apps/withholding-taxes/treaty',
        label: 'Treaty Management',
        requiresSelection: false
    },
    {
        id: 'wht-analytics',
        name: 'Reporting & Analytics',
        description: 'Dashboards and insights',
        icon: PieChart,
        component: ReportingAnalytics,
        group: 'Management',
        type: 'General',
        path: '/apps/withholding-taxes/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'wht-rules',
        name: 'Rules Engine',
        description: 'Automation rules for withholding',
        icon: AutoFixHigh,
        component: RulesEngine,
        group: 'Automation',
        type: 'General',
        path: '/apps/withholding-taxes/rules',
        label: 'Rules Engine',
        requiresSelection: false
    },
    {
        id: 'wht-security',
        name: 'Security & Permissions',
        description: 'Role-based access control',
        icon: Security,
        component: SecurityPermissions,
        group: 'Admin',
        type: 'General',
        path: '/apps/withholding-taxes/security',
        label: 'Security',
        requiresSelection: false
    },
    {
        id: 'wht-integration',
        name: 'System Integration',
        description: 'External system connections',
        icon: Hub,
        component: SystemIntegration,
        group: 'Admin',
        type: 'General',
        path: '/apps/withholding-taxes/system-integration',
        label: 'System Integration',
        requiresSelection: false
    }
];

export default withholdingTaxModules;
