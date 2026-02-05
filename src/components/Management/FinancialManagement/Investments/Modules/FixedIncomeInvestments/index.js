import React from 'react';

import FixedIncomeDashboard from './FixedIncomeDashboard';
import FixedIncomeMasterData from './FixedIncomeMasterData';
import PurchaseSaleTransactions from './PurchaseSaleTransactions';
import CouponManagement from './CouponManagement';
import MaturityRedemption from './MaturityRedemption';
import ReinvestmentPortfolio from './ReinvestmentPortfolio';
import IntercompanyFixedIncome from './IntercompanyFixedIncome';
import AmortizationPremiumDiscount from './AmortizationPremiumDiscount';
import FairValueRevaluation from './FairValueRevaluation';
import ForeignCurrencyFixedIncome from './ForeignCurrencyFixedIncome';
import AccountingGLIntegration from './AccountingGLIntegration';
import PeriodCloseControls from './PeriodCloseControls';
import AuditTrailCompliance from './AuditTrailCompliance';
import WorkflowApprovals from './WorkflowApprovals';
import DataIntegrityControls from './DataIntegrityControls';
import FixedIncomeReporting from './FixedIncomeReporting';
import TreasuryCashIntegration from './TreasuryCashIntegration';

export const modules = [
    {
        id: 'fi-dashboard',
        name: 'Dashboard',
        type: 'General',
        path: '/apps/fixed-income/dashboard',
        icon: 'Dashboard',
        description: 'Fixed income portfolio overview.',
        component: FixedIncomeDashboard
    },
    {
        id: 'fi-master-data',
        name: 'Master Data',
        type: 'General',
        path: '/apps/fixed-income/master-data',
        icon: 'Business',
        description: 'Manage bonds and security definitions.',
        component: FixedIncomeMasterData
    },
    {
        id: 'fi-transactions',
        name: 'Purchase & Sale',
        type: 'General',
        path: '/apps/fixed-income/transactions',
        icon: 'ReceiptLong',
        description: 'Record acquisitions and disposals.',
        component: PurchaseSaleTransactions
    },
    {
        id: 'fi-coupons',
        name: 'Coupons & Interest',
        type: 'General',
        path: '/apps/fixed-income/coupons',
        icon: 'EventRepeat',
        description: 'Track interest payments and accruals.',
        component: CouponManagement
    },
    {
        id: 'fi-maturity',
        name: 'Maturity & Redemption',
        type: 'General',
        path: '/apps/fixed-income/maturity',
        icon: 'EventBusy',
        description: 'Maturity calendar and redemption planning.',
        component: MaturityRedemption
    },
    {
        id: 'fi-amortization',
        name: 'Amortization',
        type: 'Specific',
        path: '/apps/fixed-income/amortization',
        icon: 'TrendingDown',
        description: 'Premium/Discount amortization schedules.',
        component: AmortizationPremiumDiscount
    },
    {
        id: 'fi-fair-value',
        name: 'Fair Value',
        type: 'General',
        path: '/apps/fixed-income/fair-value',
        icon: 'TrendingUp',
        description: 'Market valuation and revaluation.',
        component: FairValueRevaluation
    },
    {
        id: 'fi-fx',
        name: 'Foreign Currency',
        type: 'Specific',
        path: '/apps/fixed-income/fx',
        icon: 'Public',
        description: 'FX exposure and translation.',
        component: ForeignCurrencyFixedIncome
    },
    {
        id: 'fi-reinvestment',
        name: 'Reinvestment',
        type: 'Specific',
        path: '/apps/fixed-income/reinvestment',
        icon: 'Autorenew',
        description: 'Portfolio management and reinvestment.',
        component: ReinvestmentPortfolio
    },
    {
        id: 'fi-accounting',
        name: 'Accounting & GL',
        type: 'Specific',
        path: '/apps/fixed-income/accounting',
        icon: 'AccountBalance',
        description: 'GL integration and posting rules.',
        component: AccountingGLIntegration
    },
    {
        id: 'fi-treasury',
        name: 'Treasury Integration',
        type: 'Specific',
        path: '/apps/fixed-income/treasury',
        icon: 'AccountBalanceWallet',
        description: 'Cash flow forecasting and bank links.',
        component: TreasuryCashIntegration
    },
    {
        id: 'fi-intercompany',
        name: 'Intercompany',
        type: 'Specific',
        path: '/apps/fixed-income/intercompany',
        icon: 'Domain',
        description: 'Group holdings and eliminations.',
        component: IntercompanyFixedIncome
    },
    {
        id: 'fi-controls',
        name: 'Close Controls',
        type: 'General',
        path: '/apps/fixed-income/close',
        icon: 'LockClock',
        description: 'Period-end checklist and validation.',
        component: PeriodCloseControls
    },
    {
        id: 'fi-audit',
        name: 'Audit & Compliance',
        type: 'General',
        path: '/apps/fixed-income/audit',
        icon: 'HistoryEdu',
        description: 'Transaction logs and compliance reporting.',
        component: AuditTrailCompliance
    },
    {
        id: 'fi-workflows',
        name: 'Approvals',
        type: 'General',
        path: '/apps/fixed-income/workflows',
        icon: 'Approval',
        description: 'Transaction and valuation approvals.',
        component: WorkflowApprovals
    },
    {
        id: 'fi-integrity',
        name: 'Data Integrity',
        type: 'General',
        path: '/apps/fixed-income/integrity',
        icon: 'Security',
        description: 'System rules and controls.',
        component: DataIntegrityControls
    },
    {
        id: 'fi-reporting',
        name: 'Reporting',
        type: 'General',
        path: '/apps/fixed-income/reporting',
        icon: 'Assessment',
        description: 'Standard reports and analytics.',
        component: FixedIncomeReporting
    }
];
