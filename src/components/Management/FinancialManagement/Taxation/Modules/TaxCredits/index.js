import {
    Description,
    Calculate,
    AssignmentTurnedIn,
    History,
    Public,
    AccountBalance,
    Redeem,
    Assessment,
    Policy,
    Gavel,
    TrackChanges,
    AutoFixHigh,
    Speed,
    Security,
    Link
} from '@mui/icons-material';

import TaxCreditMasterData from './TaxCreditMasterData';
import CreditCalculationEngine from './CreditCalculationEngine';
import CreditApplication from './CreditApplication';
import CarryforwardManagement from './CarryforwardManagement';
import MultiJurisdictionSupport from './MultiJurisdictionSupport';
import AccountingIntegration from './AccountingIntegration';
import CreditRedemption from './CreditRedemption';
import ReportingAnalytics from './ReportingAnalytics';
import ComplianceReporting from './ComplianceReporting';
import WorkflowApprovals from './WorkflowApprovals';
import StatusTracking from './StatusTracking';
import AutomationRules from './AutomationRules';
import UXProductivity from './UXProductivity';
import DataIntegrity from './DataIntegrity';
import ModuleIntegration from './ModuleIntegration';

export const modules = [
    {
        id: 'tax-credit-master-data',
        name: 'Tax Credit Master Data',
        description: 'Manage tax credit types, eligibility rules, and master configurations',
        icon: Description,
        component: TaxCreditMasterData,
        group: 'Setup & Configuration',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/master-data',
        label: 'Tax Credit Master Data',
        requiresSelection: false
    },
    {
        id: 'credit-calculation-engine',
        name: 'Credit Calculation Engine',
        description: 'Automated calculation of eligible tax credits',
        icon: Calculate,
        component: CreditCalculationEngine,
        group: 'Calculation',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/calculation-engine',
        label: 'Credit Calculation Engine',
        requiresSelection: false
    },
    {
        id: 'credit-application',
        name: 'Credit Application',
        description: 'Apply credits against tax liabilities',
        icon: AssignmentTurnedIn,
        component: CreditApplication,
        group: 'Application',
        type: 'Specific',
        path: '/financial-management/taxation/tax-credits/application/:id',
        label: 'Credit Application',
        requiresSelection: true
    },
    {
        id: 'carryforward-management',
        name: 'Carryforward / Carryback',
        description: 'Manage unused credits for future or past periods',
        icon: History,
        component: CarryforwardManagement,
        group: 'Management',
        type: 'Specific',
        path: '/financial-management/taxation/tax-credits/carryforward/:id',
        label: 'Carryforward Management',
        requiresSelection: true
    },
    {
        id: 'multi-jurisdiction-support',
        name: 'Multi-Jurisdiction Support',
        description: 'Manage credits across multiple entities and regions',
        icon: Public,
        component: MultiJurisdictionSupport,
        group: 'Management',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/multi-jurisdiction',
        label: 'Multi-Jurisdiction Support',
        requiresSelection: false
    },
    {
        id: 'accounting-integration',
        name: 'Accounting & GL Integration',
        description: 'Map credits to GL accounts',
        icon: AccountBalance,
        component: AccountingIntegration,
        group: 'Integration',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/accounting',
        label: 'Accounting & GL Integration',
        requiresSelection: false
    },
    {
        id: 'credit-redemption',
        name: 'Credit Redemption',
        description: 'Redeem credits or request refunds',
        icon: Redeem,
        component: CreditRedemption,
        group: 'Application',
        type: 'Specific',
        path: '/financial-management/taxation/tax-credits/redemption/:id',
        label: 'Credit Redemption',
        requiresSelection: true
    },
    {
        id: 'reporting-analytics',
        name: 'Reporting & Analytics',
        description: 'Visual analytics on credit utilization',
        icon: Assessment,
        component: ReportingAnalytics,
        group: 'Reporting',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/reports',
        label: 'Reporting & Analytics',
        requiresSelection: false
    },
    {
        id: 'compliance-reporting',
        name: 'Compliance Reporting',
        description: 'Generate audit-ready reports and documentation',
        icon: Policy,
        component: ComplianceReporting,
        group: 'Compliance',
        type: 'Specific',
        path: '/financial-management/taxation/tax-credits/compliance/:id',
        label: 'Compliance Reporting',
        requiresSelection: true
    },
    {
        id: 'workflow-approvals',
        name: 'Workflow & Approvals',
        description: 'Approval workflows for claims and redemptions',
        icon: Gavel,
        component: WorkflowApprovals,
        group: 'Governance',
        type: 'Specific',
        path: '/financial-management/taxation/tax-credits/workflow/:id',
        label: 'Workflow & Approvals',
        requiresSelection: true
    },
    {
        id: 'status-tracking',
        name: 'Status Tracking',
        description: 'Track credit lifecycle',
        icon: TrackChanges,
        // Fixing icon import below
        component: StatusTracking,
        group: 'Management',
        type: 'Specific',
        path: '/financial-management/taxation/tax-credits/status/:id',
        label: 'Status Tracking',
        requiresSelection: true
    },
    {
        id: 'automation-rules',
        name: 'Automation Rules',
        description: 'Configure automation for calculations',
        icon: AutoFixHigh,
        component: AutomationRules,
        group: 'Automation',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/automation',
        label: 'Automation Rules',
        requiresSelection: false
    },
    {
        id: 'ux-productivity',
        name: 'UX & Productivity',
        description: 'Productivity tools and bulk actions',
        icon: Speed,
        component: UXProductivity,
        group: 'Tools',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/tools',
        label: 'UX & Productivity',
        requiresSelection: false
    },
    {
        id: 'data-integrity',
        name: 'Data Integrity',
        description: 'Validation and audit logs',
        icon: Security,
        component: DataIntegrity,
        group: 'Governance',
        type: 'Specific',
        path: '/financial-management/taxation/tax-credits/audit/:id',
        label: 'Data Integrity',
        requiresSelection: true
    },
    {
        id: 'module-integration',
        name: 'Module Integration',
        description: 'Connections with other modules',
        icon: Link,
        component: ModuleIntegration,
        group: 'Integration',
        type: 'General',
        path: '/financial-management/taxation/tax-credits/integration',
        label: 'Module Integration',
        requiresSelection: false
    }
];

export default modules;
