// Tax Filings Module Definitions
import React from 'react';
import { Description, Calculate, Receipt, Public, CloudUpload, Payment, Assessment, Timeline, CheckCircle, History, Security, AutoMode, Dashboard, TrendingUp, CalendarMonth } from '@mui/icons-material';

// Group 1: Core Tax Setup & Calculation
const TaxMasterData = React.lazy(() => import('./TaxMasterData'));
const TaxCalculationEngine = React.lazy(() => import('./TaxCalculationEngine'));
const TransactionIntegration = React.lazy(() => import('./TransactionIntegration'));
const MultiJurisdictionManager = React.lazy(() => import('./MultiJurisdictionManager'));

// Group 2: Filing & Compliance
const FilingPreparation = React.lazy(() => import('./FilingPreparation'));
const PaymentRemittance = React.lazy(() => import('./PaymentRemittance'));
const ComplianceReporting = React.lazy(() => import('./ComplianceReporting'));
const StatusTracking = React.lazy(() => import('./StatusTracking'));

// Group 3: Workflow & Audit
const WorkflowApprovals = React.lazy(() => import('./WorkflowApprovals'));
const AuditTrail = React.lazy(() => import('./AuditTrail'));
const DataIntegrityControls = React.lazy(() => import('./DataIntegrityControls'));

// Group 4: Automation & Analytics
const AutomationRules = React.lazy(() => import('./AutomationRules'));
const TaxDashboard = React.lazy(() => import('./TaxDashboard'));
const TaxAnalytics = React.lazy(() => import('./TaxAnalytics'));
const DeadlineCalendar = React.lazy(() => import('./DeadlineCalendar'));

export const modules = [
    // Group 1: Core Tax Setup & Calculation
    {
        id: 'tax-master-data',
        name: 'Tax Master Data',
        description: 'Manage tax types, jurisdictions, rates, and exemptions',
        icon: Description,
        component: TaxMasterData,
        group: 'Core Tax Setup & Calculation',
        type: 'General',
        path: '/apps/tax-filings/tax-master-data',
        label: 'Tax Master Data',
        requiresSelection: false,
        order: 1
    },
    {
        id: 'tax-calculation-engine',
        name: 'Tax Calculation Engine',
        description: 'Calculate taxes for all transactions',
        icon: Calculate,
        component: TaxCalculationEngine,
        group: 'Core Tax Setup & Calculation',
        type: 'General',
        path: '/apps/tax-filings/tax-calculation-engine',
        label: 'Tax Calculation Engine',
        requiresSelection: false,
        order: 2
    },
    {
        id: 'transaction-integration',
        name: 'Transaction Integration',
        description: 'Integrate with AP/AR invoices and transactions',
        icon: Receipt,
        component: TransactionIntegration,
        group: 'Core Tax Setup & Calculation',
        type: 'General',
        path: '/apps/tax-filings/transaction-integration',
        label: 'Transaction Integration',
        requiresSelection: false,
        order: 3
    },
    {
        id: 'multi-jurisdiction-manager',
        name: 'Multi-Jurisdiction Manager',
        description: 'Manage multiple jurisdictions and entities',
        icon: Public,
        component: MultiJurisdictionManager,
        group: 'Core Tax Setup & Calculation',
        type: 'General',
        path: '/apps/tax-filings/multi-jurisdiction-manager',
        label: 'Multi-Jurisdiction Manager',
        requiresSelection: false,
        order: 4
    },

    // Group 2: Filing & Compliance
    {
        id: 'filing-preparation',
        name: 'Filing Preparation',
        description: 'Prepare and generate tax returns',
        icon: CloudUpload,
        component: FilingPreparation,
        group: 'Filing & Compliance',
        type: 'Specific',
        path: '/apps/tax-filings/filing-preparation',
        label: 'Filing Preparation',
        requiresSelection: false,
        order: 5
    },
    {
        id: 'payment-remittance',
        name: 'Payment & Remittance',
        description: 'Track tax payments and remittances',
        icon: Payment,
        component: PaymentRemittance,
        group: 'Filing & Compliance',
        type: 'Specific',
        path: '/apps/tax-filings/payment-remittance',
        label: 'Payment & Remittance',
        requiresSelection: false,
        order: 6
    },
    {
        id: 'compliance-reporting',
        name: 'Compliance Reporting',
        description: 'Generate compliance and regulatory reports',
        icon: Assessment,
        component: ComplianceReporting,
        group: 'Filing & Compliance',
        type: 'Specific',
        path: '/apps/tax-filings/compliance-reporting',
        label: 'Compliance Reporting',
        requiresSelection: false,
        order: 7
    },
    {
        id: 'status-tracking',
        name: 'Status Tracking',
        description: 'Track filing status and lifecycle',
        icon: Timeline,
        component: StatusTracking,
        group: 'Filing & Compliance',
        type: 'Specific',
        path: '/apps/tax-filings/status-tracking',
        label: 'Status Tracking',
        requiresSelection: false,
        order: 8
    },

    // Group 3: Workflow & Audit
    {
        id: 'workflow-approvals',
        name: 'Workflow & Approvals',
        description: 'Manage approval workflows for filings',
        icon: CheckCircle,
        component: WorkflowApprovals,
        group: 'Workflow & Audit',
        type: 'Specific',
        path: '/apps/tax-filings/workflow-approvals',
        label: 'Workflow & Approvals',
        requiresSelection: false,
        order: 9
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail',
        description: 'Track all tax-related changes and documents',
        icon: History,
        component: AuditTrail,
        group: 'Workflow & Audit',
        type: 'Specific',
        path: '/apps/tax-filings/audit-trail',
        label: 'Audit Trail',
        requiresSelection: false,
        order: 10
    },
    {
        id: 'data-integrity-controls',
        name: 'Data Integrity Controls',
        description: 'Enforce data integrity and validation rules',
        icon: Security,
        component: DataIntegrityControls,
        group: 'Workflow & Audit',
        type: 'Specific',
        path: '/apps/tax-filings/data-integrity-controls',
        label: 'Data Integrity Controls',
        requiresSelection: false,
        order: 11
    },

    // Group 4: Automation & Analytics
    {
        id: 'automation-rules',
        name: 'Automation Rules',
        description: 'Configure automation and business rules',
        icon: AutoMode,
        component: AutomationRules,
        group: 'Automation & Analytics',
        type: 'General',
        path: '/apps/tax-filings/automation-rules',
        label: 'Automation Rules',
        requiresSelection: false,
        order: 12
    },
    {
        id: 'tax-dashboard',
        name: 'Tax Dashboard',
        description: 'Overview of tax liabilities and filings',
        icon: Dashboard,
        component: TaxDashboard,
        group: 'Automation & Analytics',
        type: 'General',
        path: '/apps/tax-filings/tax-dashboard',
        label: 'Tax Dashboard',
        requiresSelection: false,
        order: 13
    },
    {
        id: 'tax-analytics',
        name: 'Tax Analytics',
        description: 'Analyze tax trends and patterns',
        icon: TrendingUp,
        component: TaxAnalytics,
        group: 'Automation & Analytics',
        type: 'General',
        path: '/apps/tax-filings/tax-analytics',
        label: 'Tax Analytics',
        requiresSelection: false,
        order: 14
    },
    {
        id: 'deadline-calendar',
        name: 'Deadline Calendar',
        description: 'Track filing deadlines and reminders',
        icon: CalendarMonth,
        component: DeadlineCalendar,
        group: 'Automation & Analytics',
        type: 'General',
        path: '/apps/tax-filings/deadline-calendar',
        label: 'Deadline Calendar',
        requiresSelection: false,
        order: 15
    }
];

export default modules;
