import React from 'react';

const DebtSourceIntegration = React.lazy(() => import('./DebtSourceIntegration'));
const MaturityStructureBucketing = React.lazy(() => import('./MaturityStructureBucketing'));
const PrincipalRepaymentSchedule = React.lazy(() => import('./PrincipalRepaymentSchedule'));
const InterestPrincipalSeparation = React.lazy(() => import('./InterestPrincipalSeparation'));
const CurrentNonCurrentClassification = React.lazy(() => import('./CurrentNonCurrentClassification'));
const MultiCurrencyFX = React.lazy(() => import('./MultiCurrencyFX'));
const ForecastingLiquidityPlanning = React.lazy(() => import('./ForecastingLiquidityPlanning'));
const ConsolidatedDebtMaturity = React.lazy(() => import('./ConsolidatedDebtMaturity'));
const CovenantComplianceIntegration = React.lazy(() => import('./CovenantComplianceIntegration'));
const ReportingDisclosure = React.lazy(() => import('./ReportingDisclosure'));
const PeriodCloseIntegration = React.lazy(() => import('./PeriodCloseIntegration'));
const WorkflowApprovals = React.lazy(() => import('./WorkflowApprovals'));
const IntercompanyTreasury = React.lazy(() => import('./IntercompanyTreasury'));
const UXVisualization = React.lazy(() => import('./UXVisualization'));
const APIIntegration = React.lazy(() => import('./APIIntegration'));
const AuditTrailVersioning = React.lazy(() => import('./AuditTrailVersioning'));
const ControlsDataIntegrity = React.lazy(() => import('./ControlsDataIntegrity'));
const PlatformArchitectureAlignment = React.lazy(() => import('./PlatformArchitectureAlignment'));

export const modules = [
    {
        id: 'debt-source',
        name: 'Debt Source Integration',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/source',
        icon: 'Input',
        description: 'Auto-population from Loans, Bonds, and Leases.',
        component: DebtSourceIntegration
    },
    {
        id: 'maturity-structure',
        name: 'Maturity Structure & Bucketing',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/structure',
        icon: 'ViewColumn',
        description: 'Maturity buckets (Current, 1-2 Years, >5 Years).',
        component: MaturityStructureBucketing
    },
    {
        id: 'principal-repayment',
        name: 'Principal Repayment Schedule',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/principal',
        icon: 'Schedule',
        description: 'Granular repayment schedules with balloons/bullets.',
        component: PrincipalRepaymentSchedule
    },
    {
        id: 'interest-principal',
        name: 'Interest vs Principal',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/separation',
        icon: 'CallSplit',
        description: 'Separate reporting for principal and interest.',
        component: InterestPrincipalSeparation
    },
    {
        id: 'current-non-current',
        name: 'Current vs Non-Current',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/classification',
        icon: 'Balance',
        description: 'Balance sheet classification and reclassification journals.',
        component: CurrentNonCurrentClassification
    },
    {
        id: 'multi-currency',
        name: 'Multi-Currency & FX',
        type: 'Specific',
        path: '/financial-management/debts/debt-maturity-schedules/fx',
        icon: 'CurrencyExchange',
        description: 'Forecasting in transaction and base currency.',
        component: MultiCurrencyFX
    },
    {
        id: 'liquidity-planning',
        name: 'Forecasting & Liquidity',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/liquidity',
        icon: 'TrendingUp',
        description: 'Cash outflow forecasts and gap analysis.',
        component: ForecastingLiquidityPlanning
    },
    {
        id: 'consolidated-maturity',
        name: 'Consolidated Debt Maturity',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/consolidation',
        icon: 'Domain',
        description: 'Group-level maturity views and eliminations.',
        component: ConsolidatedDebtMaturity
    },
    {
        id: 'covenant-compliance',
        name: 'Covenant Compliance',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/covenants',
        icon: 'GppGood',
        description: 'Maturity concentration and ratio analysis.',
        component: CovenantComplianceIntegration
    },
    {
        id: 'reporting-disclosure',
        name: 'Reporting & Disclosure',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/reporting',
        icon: 'Assessment',
        description: 'Financial statement notes and auditor schedules.',
        component: ReportingDisclosure
    },
    {
        id: 'period-close',
        name: 'Period & Close',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/close',
        icon: 'Rule',
        description: 'Month-end snapshots and validation.',
        component: PeriodCloseIntegration
    },
    {
        id: 'workflow-approvals',
        name: 'Workflow & Approvals',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/workflow',
        icon: 'Approval',
        description: 'Approval for classification changes.',
        component: WorkflowApprovals
    },
    {
        id: 'intercompany-treasury',
        name: 'Intercompany & Treasury',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/treasury',
        icon: 'AccountBalance',
        description: 'Group treasury planning and settlement.',
        component: IntercompanyTreasury
    },
    {
        id: 'ux-visualization',
        name: 'UX & Visualization',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/visuals',
        icon: 'BarChart',
        description: 'Maturity ladders and heatmaps.',
        component: UXVisualization
    },
    {
        id: 'api-integration',
        name: 'API & Integration',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/api',
        icon: 'Api',
        description: 'System connectivity and API status.',
        component: APIIntegration
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail & Versioning',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/audit',
        icon: 'HistoryEdu',
        description: 'Change logs and version control.',
        component: AuditTrailVersioning
    },
    {
        id: 'controls-integrity',
        name: 'Controls & Data Integrity',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/controls',
        icon: 'Security',
        description: 'Validation rules and missing maturity checks.',
        component: ControlsDataIntegrity
    },
    {
        id: 'platform-alignment',
        name: 'Platform Alignment',
        type: 'General',
        path: '/financial-management/debts/debt-maturity-schedules/platform',
        icon: 'AppSettingsAlt',
        description: 'Integration with system architecture and tasks.',
        component: PlatformArchitectureAlignment
    }
];
