import React from 'react';

const FixedIncomeDashboard = React.lazy(() => import('./FixedIncomeDashboard'));
const FixedIncomeMasterData = React.lazy(() => import('./FixedIncomeMasterData'));
const PurchaseSaleTransactions = React.lazy(() => import('./PurchaseSaleTransactions'));
const CouponManagement = React.lazy(() => import('./CouponManagement'));
const MaturityRedemption = React.lazy(() => import('./MaturityRedemption'));
const ReinvestmentPortfolio = React.lazy(() => import('./ReinvestmentPortfolio'));
const IntercompanyFixedIncome = React.lazy(() => import('./IntercompanyFixedIncome'));
const AmortizationPremiumDiscount = React.lazy(() => import('./AmortizationPremiumDiscount'));
const FairValueRevaluation = React.lazy(() => import('./FairValueRevaluation'));
const ForeignCurrencyFixedIncome = React.lazy(() => import('./ForeignCurrencyFixedIncome'));
const AccountingGLIntegration = React.lazy(() => import('./AccountingGLIntegration'));
const PeriodCloseControls = React.lazy(() => import('./PeriodCloseControls'));
const AuditTrailCompliance = React.lazy(() => import('./AuditTrailCompliance'));
const WorkflowApprovals = React.lazy(() => import('./WorkflowApprovals'));
const DataIntegrityControls = React.lazy(() => import('./DataIntegrityControls'));
const FixedIncomeReporting = React.lazy(() => import('./FixedIncomeReporting'));
const TreasuryCashIntegration = React.lazy(() => import('./TreasuryCashIntegration'));

export const modules = [
    {
        id: 'fi-dashboard',
        name: 'Dashboard',
        type: 'General',
        path: '/apps/fixed-income/dashboard',
        icon: 'Dashboard',
        description: 'Fixed income portfolio overview.',
        component: FixedIncomeDashboard,
        requiresSelection: false
    },
    {
        id: 'fi-master-data',
        name: 'Master Data',
        type: 'General',
        path: '/apps/fixed-income/master-data',
        icon: 'Business',
        description: 'Manage bonds and security definitions.',
        component: FixedIncomeMasterData,
        requiresSelection: false
    },
    {
        id: 'fi-transactions',
        name: 'Purchase & Sale',
        type: 'General',
        path: '/apps/fixed-income/transactions',
        icon: 'ReceiptLong',
        description: 'Record acquisitions and disposals.',
        component: PurchaseSaleTransactions,
        requiresSelection: false
    },
    {
        id: 'fi-coupons',
        name: 'Coupons & Interest',
        type: 'General',
        path: '/apps/fixed-income/coupons',
        icon: 'EventRepeat',
        description: 'Track interest payments and accruals.',
        component: CouponManagement,
        requiresSelection: false
    },
    {
        id: 'fi-maturity',
        name: 'Maturity & Redemption',
        type: 'General',
        path: '/apps/fixed-income/maturity',
        icon: 'EventBusy',
        description: 'Maturity calendar and redemption planning.',
        component: MaturityRedemption,
        requiresSelection: false
    },
    {
        id: 'fi-amortization',
        name: 'Amortization',
        type: 'Specific',
        path: '/apps/fixed-income/amortization',
        icon: 'TrendingDown',
        description: 'Premium/Discount amortization schedules.',
        component: AmortizationPremiumDiscount,
        requiresSelection: false
    },
    {
        id: 'fi-fair-value',
        name: 'Fair Value',
        type: 'General',
        path: '/apps/fixed-income/fair-value',
        icon: 'TrendingUp',
        description: 'Market valuation and revaluation.',
        component: FairValueRevaluation,
        requiresSelection: false
    },
    {
        id: 'fi-fx',
        name: 'Foreign Currency',
        type: 'Specific',
        path: '/apps/fixed-income/fx',
        icon: 'Public',
        description: 'FX exposure and translation.',
        component: ForeignCurrencyFixedIncome,
        requiresSelection: false
    },
    {
        id: 'fi-reinvestment',
        name: 'Reinvestment',
        type: 'Specific',
        path: '/apps/fixed-income/reinvestment',
        icon: 'Autorenew',
        description: 'Portfolio management and reinvestment.',
        component: ReinvestmentPortfolio,
        requiresSelection: false
    },
    {
        id: 'fi-accounting',
        name: 'Accounting & GL',
        type: 'Specific',
        path: '/apps/fixed-income/accounting',
        icon: 'AccountBalance',
        description: 'GL integration and posting rules.',
        component: AccountingGLIntegration,
        requiresSelection: false
    },
    {
        id: 'fi-treasury',
        name: 'Treasury Integration',
        type: 'Specific',
        path: '/apps/fixed-income/treasury',
        icon: 'AccountBalanceWallet',
        description: 'Cash flow forecasting and bank links.',
        component: TreasuryCashIntegration,
        requiresSelection: false
    },
    {
        id: 'fi-intercompany',
        name: 'Intercompany',
        type: 'Specific',
        path: '/apps/fixed-income/intercompany',
        icon: 'Domain',
        description: 'Group holdings and eliminations.',
        component: IntercompanyFixedIncome,
        requiresSelection: false
    },
    {
        id: 'fi-controls',
        name: 'Close Controls',
        type: 'General',
        path: '/apps/fixed-income/close',
        icon: 'LockClock',
        description: 'Period-end checklist and validation.',
        component: PeriodCloseControls,
        requiresSelection: false
    },
    {
        id: 'fi-audit',
        name: 'Audit & Compliance',
        type: 'General',
        path: '/apps/fixed-income/audit',
        icon: 'HistoryEdu',
        description: 'Transaction logs and compliance reporting.',
        component: AuditTrailCompliance,
        requiresSelection: false
    },
    {
        id: 'fi-workflows',
        name: 'Approvals',
        type: 'General',
        path: '/apps/fixed-income/workflows',
        icon: 'Approval',
        description: 'Transaction and valuation approvals.',
        component: WorkflowApprovals,
        requiresSelection: false
    },
    {
        id: 'fi-integrity',
        name: 'Data Integrity',
        type: 'General',
        path: '/apps/fixed-income/integrity',
        icon: 'Security',
        description: 'System rules and controls.',
        component: DataIntegrityControls,
        requiresSelection: false
    },
    {
        id: 'fi-reporting',
        name: 'Reporting',
        type: 'General',
        path: '/apps/fixed-income/reporting',
        icon: 'Assessment',
        description: 'Standard reports and analytics.',
        component: FixedIncomeReporting,
        requiresSelection: false
    }
];
