import React from 'react';

const CurrencyConfiguration = React.lazy(() => import('./CurrencyConfiguration'));
const TransactionEntry = React.lazy(() => import('./TransactionEntry'));
const ExchangeRateManager = React.lazy(() => import('./ExchangeRateManager'));
const FXRevaluation = React.lazy(() => import('./FXRevaluation'));
const RealizedGainsLosses = React.lazy(() => import('./RealizedGainsLosses'));
const MultiCurrencyReporting = React.lazy(() => import('./MultiCurrencyReporting'));
const FXReconciliation = React.lazy(() => import('./FXReconciliation'));
const PeriodEndClose = React.lazy(() => import('./PeriodEndClose'));
const IntercompanyFX = React.lazy(() => import('./IntercompanyFX'));
// const ConsolidationTranslation = React.lazy(() => import('./ConsolidationTranslation'));
const FeesAndCharges = React.lazy(() => import('./FeesAndCharges'));
const FXControls = React.lazy(() => import('./FXControls'));
const AuditTrail = React.lazy(() => import('./AuditTrail'));
const CurrencyDashboard = React.lazy(() => import('./CurrencyDashboard'));
const IntegrationSettings = React.lazy(() => import('./IntegrationSettings'));
const SystemSafeguards = React.lazy(() => import('./SystemSafeguards'));

export const modules = [
    {
        id: 'currency-dashboard',
        name: 'Currency Exposure Dashboard',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/dashboard',
        icon: 'Dashboard',
        description: 'Real-time view of currency exposure and FX variances.',
        component: CurrencyDashboard,
        requiresSelection: false
    },
    {
        id: 'currency-configuration',
        name: 'Account Currency Configuration',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/config',
        icon: 'Settings',
        description: 'Configure base/functional currencies and overrides.',
        component: CurrencyConfiguration,
        requiresSelection: false
    },
    {
        id: 'exchange-rate-manager',
        name: 'Exchange Rate Management',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/rates',
        icon: 'TrendingUp',
        description: 'Manage spot, average, and historical exchange rates.',
        component: ExchangeRateManager,
        requiresSelection: false
    },
    {
        id: 'transaction-entry',
        name: 'Transaction Entry (FX)',
        type: 'Specific',
        path: '/apps/bank-accounts/foreign-currency-accounts/entry',
        icon: 'Input',
        description: 'Enter transactions in original currency with auto-calculation.',
        component: TransactionEntry,
        requiresSelection: false
    },
    {
        id: 'fx-revaluation',
        name: 'FX Revaluation',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/revaluation',
        icon: 'Autorenew',
        description: 'Month-end revaluation of open foreign balances.',
        component: FXRevaluation,
        requiresSelection: false
    },
    {
        id: 'realized-fx',
        name: 'Realized Gains/Losses',
        type: 'Specific',
        path: '/apps/bank-accounts/foreign-currency-accounts/realized-fx',
        icon: 'AttachMoney',
        description: 'Track realized FX gains/losses upon settlement.',
        component: RealizedGainsLosses,
        requiresSelection: false
    },
    {
        id: 'fx-reporting',
        name: 'Multi-Currency Reporting',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/reporting',
        icon: 'Assessment',
        description: 'Trial balance and reports in base/dual currencies.',
        component: MultiCurrencyReporting,
        requiresSelection: false
    },
    {
        id: 'fx-reconciliation',
        name: 'FX Reconciliation',
        type: 'Specific',
        path: '/apps/bank-accounts/foreign-currency-accounts/reconciliation',
        icon: 'FactCheck',
        description: 'Reconcile FX differences and bank statements.',
        component: FXReconciliation,
        requiresSelection: true
    },
    {
        id: 'period-end-close',
        name: 'Period-End Close (FX)',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/close',
        icon: 'LockClock',
        description: 'Controls for locking FX rates and period close.',
        component: PeriodEndClose,
        requiresSelection: false
    },
    {
        id: 'intercompany-fx',
        name: 'Intercompany FX',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/intercompany',
        icon: 'Business',
        description: 'Manage cross-currency intercompany transactions.',
        component: IntercompanyFX,
        requiresSelection: false
    },
    // {
    //     id: 'consolidation',
    //     name: 'Consolidation & Translation',
    //     type: 'General',
    //     path: '/apps/bank-accounts/foreign-currency-accounts/consolidation',
    //     icon: 'Language',
    //     description: 'Translate subsidiary balances for group reporting.',
    //     component: ConsolidationTranslation,
    //     requiresSelection: false
    // },
    {
        id: 'fees-charges',
        name: 'Fees & FX Charges',
        type: 'Specific',
        path: '/apps/bank-accounts/foreign-currency-accounts/fees',
        icon: 'Receipt',
        description: 'Handle FX spreads and conversion fees.',
        component: FeesAndCharges,
        requiresSelection: true
    },
    {
        id: 'controls',
        name: 'Controls & Permissions',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/controls',
        icon: 'Security',
        description: 'Manage rate overrides and approval workflows.',
        component: FXControls,
        requiresSelection: false
    },
    {
        id: 'audit-trail',
        name: 'Audit Trail & Compliance',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/audit',
        icon: 'History',
        description: 'Log of rate changes and revaluation activities.',
        component: AuditTrail,
        requiresSelection: false
    },
    {
        id: 'integration',
        name: 'Integration Settings',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/integration',
        icon: 'IntegrationInstructions',
        description: 'Configure FX rate APIs and external feeds.',
        component: IntegrationSettings,
        requiresSelection: false
    },
    {
        id: 'safeguards',
        name: 'Data Integrity & Safeguards',
        type: 'General',
        path: '/apps/bank-accounts/foreign-currency-accounts/safeguards',
        icon: 'Shield',
        description: 'System protection rules and validation.',
        component: SystemSafeguards,
        requiresSelection: false
    }
];

export default modules;
