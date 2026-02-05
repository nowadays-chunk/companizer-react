import React from 'react';

import InvestmentMasterData from './InvestmentMasterData';
import AcquisitionDisposal from './AcquisitionDisposal';
import DividendManagement from './DividendManagement';
import OwnershipChanges from './OwnershipChanges';
import IntercompanyEquity from './IntercompanyEquity';
import ValuationFairValue from './ValuationFairValue';
import UnrealizedGainsLosses from './UnrealizedGainsLosses';
import EquityMethodAccounting from './EquityMethodAccounting';
import ImpairmentTesting from './ImpairmentTesting';
import ForeignCurrencyEquity from './ForeignCurrencyEquity';
import ConsolidationIntegration from './ConsolidationIntegration';
import DisclosuresCompliance from './DisclosuresCompliance';
import WorkflowApprovals from './WorkflowApprovals';
import PeriodCloseIntegration from './PeriodCloseIntegration';
import AuditTrailDocumentation from './AuditTrailDocumentation';
import ReportingAnalytics from './ReportingAnalytics';
import InvestmentDashboard from './InvestmentDashboard';
import TreasuryCashIntegration from './TreasuryCashIntegration';

export const modules = [
    {
        id: 'investment-dashboard',
        name: 'Dashboard',
        type: 'General',
        path: '/apps/equity-investments/dashboard',
        icon: 'Dashboard',
        description: 'Executive overview of equity portfolio.',
        component: InvestmentDashboard
    },
    {
        id: 'master-data',
        name: 'Investment Master Data',
        type: 'General',
        path: '/apps/equity-investments/master-data',
        icon: 'Business',
        description: 'Manage investment entities and classification.',
        component: InvestmentMasterData
    },
    {
        id: 'acquisition-disposal',
        name: 'Acquisition & Disposal',
        type: 'General',
        path: '/apps/equity-investments/transactions',
        icon: 'ReceiptLong',
        description: 'Record purchases, sales, and capital changes.',
        component: AcquisitionDisposal
    },
    {
        id: 'dividend-management',
        name: 'Dividend Management',
        type: 'Specific',
        path: '/apps/equity-investments/dividends',
        icon: 'AttachMoney',
        description: 'Track declared dividends and income recognition.',
        component: DividendManagement
    },
    {
        id: 'ownership-changes',
        name: 'Ownership Changes',
        type: 'Specific',
        path: '/apps/equity-investments/ownership',
        icon: 'Timeline',
        description: 'Handle step acquisitions and control changes.',
        component: OwnershipChanges
    },
    {
        id: 'intercompany-equity',
        name: 'Intercompany Equity',
        type: 'Specific',
        path: '/apps/equity-investments/intercompany',
        icon: 'Lan',
        description: 'Manage group structure and eliminations.',
        component: IntercompanyEquity
    },
    {
        id: 'valuation-fair-value',
        name: 'Valuation & Fair Value',
        type: 'General',
        path: '/apps/equity-investments/valuation',
        icon: 'TrendingUp',
        description: 'Fair value measurement and Input tracking.',
        component: ValuationFairValue
    },
    {
        id: 'unrealized-gains-losses',
        name: 'Unrealized Gains & Losses',
        type: 'General',
        path: '/apps/equity-investments/unrealized',
        icon: 'ShowChart',
        description: 'Track valuation movements to P&L or OCI.',
        component: UnrealizedGainsLosses
    },
    {
        id: 'equity-method',
        name: 'Equity Method Accounting',
        type: 'Specific',
        path: '/apps/equity-investments/equity-method',
        icon: 'AccountBalance',
        description: 'Share of profit/loss and OCI for associates.',
        component: EquityMethodAccounting
    },
    {
        id: 'impairment-testing',
        name: 'Impairment Testing',
        type: 'Specific',
        path: '/apps/equity-investments/impairment',
        icon: 'Warning',
        description: 'Recoverable amount testing and impairment booking.',
        component: ImpairmentTesting
    },
    {
        id: 'foreign-currency',
        name: 'Foreign Currency Equity',
        type: 'Specific',
        path: '/apps/equity-investments/fx',
        icon: 'Public',
        description: 'FX translation and exposure management.',
        component: ForeignCurrencyEquity
    },
    {
        id: 'consolidation-integration',
        name: 'Consolidation Integration',
        type: 'Specific',
        path: '/apps/equity-investments/consolidation',
        icon: 'MergeType',
        description: 'Consolidation entries and NCI calculation.',
        component: ConsolidationIntegration
    },
    {
        id: 'treasury-integration',
        name: 'Treasury Integration',
        type: 'Specific',
        path: '/apps/equity-investments/treasury',
        icon: 'AccountBalance',
        description: 'Link investments to bank cash flows.',
        component: TreasuryCashIntegration
    },
    {
        id: 'workflow-approvals',
        name: 'Workflow & Approvals',
        type: 'General',
        path: '/apps/equity-investments/workflows',
        icon: 'Assignment',
        description: 'Manage approval chains for transactions.',
        component: WorkflowApprovals
    },
    {
        id: 'period-close',
        name: 'Period Close',
        type: 'General',
        path: '/apps/equity-investments/close',
        icon: 'LockClock',
        description: 'Month-end validation and closing checklist.',
        component: PeriodCloseIntegration
    },
    {
        id: 'disclosures-compliance',
        name: 'Disclosures & Compliance',
        type: 'Specific',
        path: '/apps/equity-investments/compliance',
        icon: 'Gavel',
        description: 'IFRS/GAAP disclosure generation.',
        component: DisclosuresCompliance
    },
    {
        id: 'reporting-analytics',
        name: 'Reporting & Analytics',
        type: 'General',
        path: '/apps/equity-investments/reporting',
        icon: 'Assessment',
        description: 'Detailed analysis and custom reports.',
        component: ReportingAnalytics
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail',
        type: 'General',
        path: '/apps/equity-investments/audit',
        icon: 'HistoryEdu',
        description: 'System logs of all changes.',
        component: AuditTrailDocumentation
    }
];
