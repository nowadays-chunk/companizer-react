import React from 'react';

const InvestmentMasterData = React.lazy(() => import('./InvestmentMasterData'));
const AcquisitionDisposal = React.lazy(() => import('./AcquisitionDisposal'));
const DividendManagement = React.lazy(() => import('./DividendManagement'));
const OwnershipChanges = React.lazy(() => import('./OwnershipChanges'));
const IntercompanyEquity = React.lazy(() => import('./IntercompanyEquity'));
const ValuationFairValue = React.lazy(() => import('./ValuationFairValue'));
const UnrealizedGainsLosses = React.lazy(() => import('./UnrealizedGainsLosses'));
const EquityMethodAccounting = React.lazy(() => import('./EquityMethodAccounting'));
const ImpairmentTesting = React.lazy(() => import('./ImpairmentTesting'));
const ForeignCurrencyEquity = React.lazy(() => import('./ForeignCurrencyEquity'));
const ConsolidationIntegration = React.lazy(() => import('./ConsolidationIntegration'));
const DisclosuresCompliance = React.lazy(() => import('./DisclosuresCompliance'));
const WorkflowApprovals = React.lazy(() => import('./WorkflowApprovals'));
const PeriodCloseIntegration = React.lazy(() => import('./PeriodCloseIntegration'));
const AuditTrailDocumentation = React.lazy(() => import('./AuditTrailDocumentation'));
const ReportingAnalytics = React.lazy(() => import('./ReportingAnalytics'));
const InvestmentDashboard = React.lazy(() => import('./InvestmentDashboard'));
const TreasuryCashIntegration = React.lazy(() => import('./TreasuryCashIntegration'));

export const modules = [
    {
        id: 'investment-dashboard',
        name: 'Dashboard',
        type: 'General',
        path: '/financial-management/investments/equity-investments/dashboard',
        icon: 'Dashboard',
        description: 'Executive overview of equity portfolio.',
        component: InvestmentDashboard,
        requiresSelection: false
    },
    {
        id: 'master-data',
        name: 'Investment Master Data',
        type: 'General',
        path: '/financial-management/investments/equity-investments/master-data',
        icon: 'Business',
        description: 'Manage investment entities and classification.',
        component: InvestmentMasterData,
        requiresSelection: false
    },
    {
        id: 'acquisition-disposal',
        name: 'Acquisition & Disposal',
        type: 'General',
        path: '/financial-management/investments/equity-investments/transactions',
        icon: 'ReceiptLong',
        description: 'Record purchases, sales, and capital changes.',
        component: AcquisitionDisposal,
        requiresSelection: false
    },
    {
        id: 'dividend-management',
        name: 'Dividend Management',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/dividends',
        icon: 'AttachMoney',
        description: 'Track declared dividends and income recognition.',
        component: DividendManagement,
        requiresSelection: false
    },
    {
        id: 'ownership-changes',
        name: 'Ownership Changes',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/ownership',
        icon: 'Timeline',
        description: 'Handle step acquisitions and control changes.',
        component: OwnershipChanges,
        requiresSelection: false
    },
    {
        id: 'intercompany-equity',
        name: 'Intercompany Equity',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/intercompany',
        icon: 'Lan',
        description: 'Manage group structure and eliminations.',
        component: IntercompanyEquity,
        requiresSelection: false
    },
    {
        id: 'valuation-fair-value',
        name: 'Valuation & Fair Value',
        type: 'General',
        path: '/financial-management/investments/equity-investments/valuation',
        icon: 'TrendingUp',
        description: 'Fair value measurement and Input tracking.',
        component: ValuationFairValue,
        requiresSelection: false
    },
    {
        id: 'unrealized-gains-losses',
        name: 'Unrealized Gains & Losses',
        type: 'General',
        path: '/financial-management/investments/equity-investments/unrealized',
        icon: 'ShowChart',
        description: 'Track valuation movements to P&L or OCI.',
        component: UnrealizedGainsLosses,
        requiresSelection: false
    },
    {
        id: 'equity-method',
        name: 'Equity Method Accounting',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/equity-method',
        icon: 'AccountBalance',
        description: 'Share of profit/loss and OCI for associates.',
        component: EquityMethodAccounting,
        requiresSelection: false
    },
    {
        id: 'impairment-testing',
        name: 'Impairment Testing',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/impairment',
        icon: 'Warning',
        description: 'Recoverable amount testing and impairment booking.',
        component: ImpairmentTesting,
        requiresSelection: false
    },
    {
        id: 'foreign-currency',
        name: 'Foreign Currency Equity',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/fx',
        icon: 'Public',
        description: 'FX translation and exposure management.',
        component: ForeignCurrencyEquity,
        requiresSelection: false
    },
    {
        id: 'consolidation-integration',
        name: 'Consolidation Integration',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/consolidation',
        icon: 'MergeType',
        description: 'Consolidation entries and NCI calculation.',
        component: ConsolidationIntegration,
        requiresSelection: false
    },
    {
        id: 'treasury-integration',
        name: 'Treasury Integration',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/treasury',
        icon: 'AccountBalance',
        description: 'Link investments to bank cash flows.',
        component: TreasuryCashIntegration,
        requiresSelection: false
    },
    {
        id: 'workflow-approvals',
        name: 'Workflow & Approvals',
        type: 'General',
        path: '/financial-management/investments/equity-investments/workflows',
        icon: 'Assignment',
        description: 'Manage approval chains for transactions.',
        component: WorkflowApprovals,
        requiresSelection: false
    },
    {
        id: 'period-close',
        name: 'Period Close',
        type: 'General',
        path: '/financial-management/investments/equity-investments/close',
        icon: 'LockClock',
        description: 'Month-end validation and closing checklist.',
        component: PeriodCloseIntegration,
        requiresSelection: false
    },
    {
        id: 'disclosures-compliance',
        name: 'Disclosures & Compliance',
        type: 'Specific',
        path: '/financial-management/investments/equity-investments/compliance',
        icon: 'Gavel',
        description: 'IFRS/GAAP disclosure generation.',
        component: DisclosuresCompliance,
        requiresSelection: false
    },
    {
        id: 'reporting-analytics',
        name: 'Reporting & Analytics',
        type: 'General',
        path: '/financial-management/investments/equity-investments/reporting',
        icon: 'Assessment',
        description: 'Detailed analysis and custom reports.',
        component: ReportingAnalytics,
        requiresSelection: false
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail',
        type: 'General',
        path: '/financial-management/investments/equity-investments/audit',
        icon: 'HistoryEdu',
        description: 'System logs of all changes.',
        component: AuditTrailDocumentation,
        requiresSelection: false
    }
];
