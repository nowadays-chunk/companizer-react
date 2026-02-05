import React, { lazy } from 'react';

const LoanMasterData = lazy(() => import('./LoanMasterData'));
const InterestConfiguration = lazy(() => import('./InterestConfiguration'));
const RepaymentSchedule = lazy(() => import('./RepaymentSchedule'));
const DisbursementManagement = lazy(() => import('./DisbursementManagement'));
const RepaymentProcessing = lazy(() => import('./RepaymentProcessing'));
const FeesPenalties = lazy(() => import('./FeesPenalties'));
const AccountingGLIntegration = lazy(() => import('./AccountingGLIntegration'));
const AccrualsPeriodEnd = lazy(() => import('./AccrualsPeriodEnd'));
const LoanModifications = lazy(() => import('./LoanModifications'));
const ForeignCurrencyLoans = lazy(() => import('./ForeignCurrencyLoans'));
const CovenantsCompliance = lazy(() => import('./CovenantsCompliance'));
const ApprovalsWorkflow = lazy(() => import('./ApprovalsWorkflow'));
const StatusLifecycle = lazy(() => import('./StatusLifecycle'));
const ReportingAnalytics = lazy(() => import('./ReportingAnalytics'));
const TreasuryPlanning = lazy(() => import('./TreasuryPlanning'));
const IntercompanyLoans = lazy(() => import('./IntercompanyLoans'));
const AuditTrailDoc = lazy(() => import('./AuditTrailDoc'));
const SecurityPermissions = lazy(() => import('./SecurityPermissions'));
const IntegrationArchitecture = lazy(() => import('./IntegrationArchitecture'));
const DataIntegrityControls = lazy(() => import('./DataIntegrityControls'));

export const modules = [
    {
        id: 'loan-master-data',
        name: 'Loan Master Data',
        type: 'General',
        path: '/apps/loan-agreements/master-data',
        icon: 'Description',
        description: 'Core agreement setup, lender info, and terms.',
        component: LoanMasterData
    },
    {
        id: 'interest-configuration',
        name: 'Interest Configuration',
        type: 'General',
        path: '/apps/loan-agreements/interest-config',
        icon: 'Percent',
        description: 'Fixed/floating rates, margins, and compounding logic.',
        component: InterestConfiguration
    },
    {
        id: 'repayment-schedule',
        name: 'Repayment Schedule',
        type: 'General',
        path: '/apps/loan-agreements/schedule',
        icon: 'CalendarMonth',
        description: 'Amortization schedules and payment calendars.',
        component: RepaymentSchedule
    },
    {
        id: 'disbursement-management',
        name: 'Disbursement Management',
        type: 'Specific',
        path: '/apps/loan-agreements/disbursement',
        icon: 'AccountBalanceWallet',
        description: 'Manage drawdowns and partial disbursements.',
        component: DisbursementManagement
    },
    {
        id: 'repayment-processing',
        name: 'Repayment Processing',
        type: 'Specific',
        path: '/apps/loan-agreements/repayment',
        icon: 'Payment',
        description: 'Record and allocate principal/interest payments.',
        component: RepaymentProcessing
    },
    {
        id: 'fees-penalties',
        name: 'Fees, Penalties & Charges',
        type: 'Specific',
        path: '/apps/loan-agreements/fees',
        icon: 'ReceiptLong',
        description: 'Origination fees, late penalties, and other charges.',
        component: FeesPenalties
    },
    {
        id: 'accounting-gl',
        name: 'Accounting & GL Integration',
        type: 'General',
        path: '/apps/loan-agreements/accounting',
        icon: 'AccountBalance',
        description: 'GL account mapping and automated journaling.',
        component: AccountingGLIntegration
    },
    {
        id: 'accruals-period-end',
        name: 'Accruals & Period-End',
        type: 'General',
        path: '/apps/loan-agreements/accruals',
        icon: 'DateRange',
        description: 'Interest accrual calculation and reconciliations.',
        component: AccrualsPeriodEnd
    },
    {
        id: 'loan-modifications',
        name: 'Modifications & Restructuring',
        type: 'Specific',
        path: '/apps/loan-agreements/modifications',
        icon: 'EditNote',
        description: 'Handle term changes, rescheduling, and restructuring.',
        component: LoanModifications
    },
    {
        id: 'foreign-currency-loans',
        name: 'Foreign Currency Loans',
        type: 'General',
        path: '/apps/loan-agreements/new-fx',
        icon: 'CurrencyExchange', // Changed to avoid conflict with BankAccounts FX icon if needed, but generic is fine
        description: 'FX revaluation and multi-currency loan support.',
        component: ForeignCurrencyLoans
    },
    {
        id: 'covenants-compliance',
        name: 'Covenants & Compliance',
        type: 'General',
        path: '/apps/loan-agreements/covenants',
        icon: 'GppGood',
        description: 'Track financial covenants and detect breaches.',
        component: CovenantsCompliance
    },
    {
        id: 'approvals-workflow',
        name: 'Approvals & Workflow',
        type: 'General',
        path: '/apps/loan-agreements/approvals',
        icon: 'Approval',
        description: 'Internal controls and approval chains.',
        component: ApprovalsWorkflow
    },
    {
        id: 'status-lifecycle',
        name: 'Status Lifecycle',
        type: 'General',
        path: '/apps/loan-agreements/status',
        icon: 'DonutLarge',
        description: 'Track loan state from Draft to Closed.',
        component: StatusLifecycle
    },
    {
        id: 'reporting-analytics',
        name: 'Reporting & Analytics',
        type: 'General',
        path: '/apps/loan-agreements/reporting',
        icon: 'Insights',
        description: 'Loan registers, debt aging, and exposure analysis.',
        component: ReportingAnalytics
    },
    {
        id: 'treasury-planning',
        name: 'Treasury & Cash Planning',
        type: 'General',
        path: '/apps/loan-agreements/planning',
        icon: 'ShowChart',
        description: 'Cash flow forecasting and liquidity impact.',
        component: TreasuryPlanning
    },
    {
        id: 'intercompany-loans',
        name: 'Intercompany Loans',
        type: 'Specific',
        path: '/apps/loan-agreements/intercompany',
        icon: 'CorporateFare',
        description: 'Group accounting and transfer pricing support.',
        component: IntercompanyLoans
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail & Documentation',
        type: 'General',
        path: '/apps/loan-agreements/audit',
        icon: 'FactCheck',
        description: 'Change history and contract attachments.',
        component: AuditTrailDoc
    },
    {
        id: 'security-permissions',
        name: 'Security & Permissions',
        type: 'General',
        path: '/apps/loan-agreements/security',
        icon: 'Lock',
        description: 'View vs Manage permissions and masking.',
        component: SecurityPermissions
    },
    {
        id: 'integration',
        name: 'Integration Architecture',
        type: 'General',
        path: '/apps/loan-agreements/integration',
        icon: 'Hub',
        description: 'System dependencies and integrations.',
        component: IntegrationArchitecture
    },
    {
        id: 'data-integrity',
        name: 'Data Integrity & Controls',
        type: 'General',
        path: '/apps/loan-agreements/integrity',
        icon: 'Shield',
        description: 'Validation rules and history locking.',
        component: DataIntegrityControls
    }
];
