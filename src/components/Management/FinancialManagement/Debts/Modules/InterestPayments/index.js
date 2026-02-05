import React, { lazy } from 'react';

const InterestSourceTypes = lazy(() => import('./InterestSourceTypes'));
const InterestCalculationEngine = lazy(() => import('./InterestCalculationEngine'));
const AccruedVsPaidHandling = lazy(() => import('./AccruedVsPaidHandling'));
const PaymentScheduling = lazy(() => import('./PaymentScheduling'));
const PaymentProcessing = lazy(() => import('./PaymentProcessing'));
const GLAccountingIntegration = lazy(() => import('./GLAccountingIntegration'));
const ForeignCurrencyInterest = lazy(() => import('./ForeignCurrencyInterest'));
const TaxesWithholding = lazy(() => import('./TaxesWithholding'));
const ApprovalsWorkflow = lazy(() => import('./ApprovalsWorkflow'));
const PeriodCloseIntegration = lazy(() => import('./PeriodCloseIntegration'));
const StatusLifecycle = lazy(() => import('./StatusLifecycle'));
const ReconciliationIntegration = lazy(() => import('./ReconciliationIntegration'));
const ReportingAnalytics = lazy(() => import('./ReportingAnalytics'));
const AuditTrailDocs = lazy(() => import('./AuditTrailDocs'));
const AutomationRules = lazy(() => import('./AutomationRules'));
const UXProductivity = lazy(() => import('./UXProductivity'));
const IntegrationArchitecture = lazy(() => import('./IntegrationArchitecture'));
const DataIntegrityControls = lazy(() => import('./DataIntegrityControls'));

export const modules = [
    {
        id: 'interest-source-types',
        name: 'Interest Source Types',
        type: 'General',
        path: '/apps/interest-payments/source-types',
        icon: 'AccountTree',
        description: 'Manage diverse interest sources (Loans, Intercompany, etc.).',
        component: InterestSourceTypes
    },
    {
        id: 'calculation-engine',
        name: 'Interest Calculation Engine',
        type: 'General',
        path: '/apps/interest-payments/calculator',
        icon: 'Calculate',
        description: 'Core logic for rates, day counts, and compounding.',
        component: InterestCalculationEngine
    },
    {
        id: 'accrued-vs-paid',
        name: 'Accrued vs Paid Handling',
        type: 'General',
        path: '/apps/interest-payments/accruals',
        icon: 'CompareArrows',
        description: 'Track and reconcile accrued vs paid balances.',
        component: AccruedVsPaidHandling
    },
    {
        id: 'payment-scheduling',
        name: 'Payment Scheduling',
        type: 'General',
        path: '/apps/interest-payments/scheduling',
        icon: 'EventNote',
        description: 'Calendars, due dates, and payment planning.',
        component: PaymentScheduling
    },
    {
        id: 'payment-processing',
        name: 'Payment Processing',
        type: 'Specific',
        path: '/apps/interest-payments/processing',
        icon: 'Payments',
        description: 'Execute interest payments and allocations.',
        component: PaymentProcessing
    },
    {
        id: 'gl-integration',
        name: 'GL & Accounting',
        type: 'General',
        path: '/apps/interest-payments/accounting',
        icon: 'AccountBalance',
        description: 'GL mapping for expense, income, and liability.',
        component: GLAccountingIntegration
    },
    {
        id: 'fx-interest',
        name: 'Foreign Currency Interest',
        type: 'Specific',
        path: '/apps/interest-payments/fx',
        icon: 'CurrencyExchange',
        description: 'Manage FX rates and realized/unrealized gains on interest.',
        component: ForeignCurrencyInterest
    },
    {
        id: 'taxes-withholding',
        name: 'Taxes & Withholding',
        type: 'Specific',
        path: '/apps/interest-payments/tax',
        icon: 'Receipt',
        description: 'Withholding tax calculation and certificates.',
        component: TaxesWithholding
    },
    {
        id: 'approvals-workflow',
        name: 'Approval Workflow',
        type: 'General',
        path: '/apps/interest-payments/approvals',
        icon: 'Approval',
        description: 'Authorization chains for payment release.',
        component: ApprovalsWorkflow
    },
    {
        id: 'period-close',
        name: 'Period & Close Integration',
        type: 'General',
        path: '/apps/interest-payments/close',
        icon: 'Rule',
        description: 'Month-end controls and period validation.',
        component: PeriodCloseIntegration
    },
    {
        id: 'status-lifecycle',
        name: 'Status Lifecycle',
        type: 'General',
        path: '/apps/interest-payments/status',
        icon: 'TrackChanges',
        description: 'Track payment status from Draft to Reconciled.',
        component: StatusLifecycle
    },
    {
        id: 'reconciliation',
        name: 'Reconciliation Integration',
        type: 'General',
        path: '/apps/interest-payments/reconciliation',
        icon: 'FactCheck',
        description: 'Bank matching and control account clearing.',
        component: ReconciliationIntegration
    },
    {
        id: 'reporting',
        name: 'Reporting & Analytics',
        type: 'General',
        path: '/apps/interest-payments/reporting',
        icon: 'Insights',
        description: 'Interest registers, forecasts, and expense analysis.',
        component: ReportingAnalytics
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail & Docs',
        type: 'General',
        path: '/apps/interest-payments/audit',
        icon: 'HistoryEdu',
        description: 'Detailed logs of calculations and changes.',
        component: AuditTrailDocs
    },
    {
        id: 'automation',
        name: 'Automation & Rules',
        type: 'General',
        path: '/apps/interest-payments/automation',
        icon: 'AutoMode',
        description: 'Auto-creation and allocation rules.',
        component: AutomationRules
    },
    {
        id: 'ux-productivity',
        name: 'UX & Productivity',
        type: 'General',
        path: '/apps/interest-payments/tools',
        icon: 'Handyman',
        description: 'Wizards, bulk tools, and quick calculators.',
        component: UXProductivity
    },
    {
        id: 'integration',
        name: 'Integration Architecture',
        type: 'General',
        path: '/apps/interest-payments/integration',
        icon: 'Hub',
        description: 'System connectivity status.',
        component: IntegrationArchitecture
    },
    {
        id: 'data-integrity',
        name: 'Data Integrity & Controls',
        type: 'General',
        path: '/apps/interest-payments/integrity',
        icon: 'GppGood',
        description: 'Validation rules and duplicate prevention.',
        component: DataIntegrityControls
    }
];
