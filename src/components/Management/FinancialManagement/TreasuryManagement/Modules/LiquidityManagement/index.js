import React from 'react';

const LiquidityDashboard = React.lazy(() => import('./LiquidityDashboard'));
const CashPositioning = React.lazy(() => import('./CashPositioning'));
const FundingGapAnalysis = React.lazy(() => import('./FundingGapAnalysis'));
const CashPooling = React.lazy(() => import('./CashPooling'));
const LiquidityStressTest = React.lazy(() => import('./LiquidityStressTest'));
const SurplusManagement = React.lazy(() => import('./SurplusManagement'));
const BankRiskSummary = React.lazy(() => import('./BankRiskSummary'));

export const modules = [
    {
        id: 'liquidity-dashboard',
        name: 'Liquidity Dashboard',
        description: 'Executive view of liquidity ratios and KPIs',
        icon: 'Speed',
        component: LiquidityDashboard,
        group: 'Liquidity',
        type: 'General',
        path: '/financial-management/treasury-management/liquidity-management/dashboard',
        label: 'Dashboard',
        requiresSelection: false
    },
    {
        id: 'cash-positioning',
        name: 'Cash Positioning',
        description: 'Real-time bank balances and aggregation',
        icon: 'AccountBalance',
        component: CashPositioning,
        group: 'Operations',
        type: 'General',
        path: '/financial-management/treasury-management/liquidity-management/cash-positioning',
        label: 'Cash Positions',
        requiresSelection: false
    },
    {
        id: 'funding-gap',
        name: 'Funding Analysis',
        description: 'Credit lines and funding gap analysis',
        icon: 'CreditCard',
        component: FundingGapAnalysis,
        group: 'Funding',
        type: 'Specific',
        path: '/financial-management/treasury-management/liquidity-management/funding-gap',
        label: 'Funding',
        requiresSelection: false
    },
    {
        id: 'cash-pooling',
        name: 'Cash Pooling',
        description: 'ZBA and intercompany pooling structures',
        icon: 'AccountTree',
        component: CashPooling,
        group: 'Operations',
        type: 'Specific',
        path: '/financial-management/treasury-management/liquidity-management/cash-pooling',
        label: 'Pooling',
        requiresSelection: false
    },
    {
        id: 'liquidity-stress',
        name: 'Stress Testing',
        description: 'Survival horizon and stress scenarios',
        icon: 'Warning',
        component: LiquidityStressTest,
        group: 'Risk',
        type: 'Specific',
        path: '/financial-management/treasury-management/liquidity-management/stress-test',
        label: 'Stress Test',
        requiresSelection: false
    },
    {
        id: 'surplus-management',
        name: 'Investments',
        description: 'Surplus cash allocation and deposits',
        icon: 'TrendingUp',
        component: SurplusManagement,
        group: 'Liquidity',
        type: 'Specific',
        path: '/financial-management/treasury-management/liquidity-management/investments',
        label: 'Investments',
        requiresSelection: false
    },
    {
        id: 'bank-risk',
        name: 'Bank Risk',
        description: 'Counterparty and concentration risk',
        icon: 'Security',
        component: BankRiskSummary,
        group: 'Risk',
        type: 'Specific',
        path: '/financial-management/treasury-management/liquidity-management/bank-risk',
        label: 'Bank Risk',
        requiresSelection: false
    }
];
