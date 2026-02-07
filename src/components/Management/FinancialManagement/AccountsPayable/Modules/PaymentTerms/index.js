import React from 'react';

const PaymentTermsUI = React.lazy(() => import('./PaymentTermsUI'));
const TermRuleEditor = React.lazy(() => import('./TermRuleEditor'));
const TermCalculator = React.lazy(() => import('./TermCalculator'));
const DiscountEngine = React.lazy(() => import('./DiscountEngine'));
const InstallmentManager = React.lazy(() => import('./InstallmentManager'));
const TermTestBench = React.lazy(() => import('./TermTestBench'));

export const modules = [
    {
        id: 'payment-terms-ui',
        name: 'Payment Terms',
        description: 'Manage standard payment terms',
        icon: 'EventNote',
        component: PaymentTermsUI,
        group: 'Configuration',
        type: 'General',
        path: '/apps/payment-terms/list',
        label: 'Terms List',
        requiresSelection: false
    },
    {
        id: 'term-rule-editor',
        name: 'Rule Editor',
        description: 'Define complex term logic',
        icon: 'Rule',
        component: TermRuleEditor,
        group: 'Configuration',
        type: 'Specific',
        path: '/apps/payment-terms/rules',
        label: 'Rules',
        requiresSelection: false
    },
    {
        id: 'term-calculator',
        name: 'Due Date Calculator',
        description: 'Test term calculations',
        icon: 'Calculate',
        component: TermCalculator,
        group: 'Utilities',
        type: 'Specific',
        path: '/apps/payment-terms/calculator',
        label: 'Calculator',
        requiresSelection: false
    },
    {
        id: 'discount-engine',
        name: 'Discount Management',
        description: 'Early payment discounts',
        icon: 'LocalOffer',
        component: DiscountEngine,
        group: 'Configuration',
        type: 'Specific',
        path: '/apps/payment-terms/discounts',
        label: 'Discounts',
        requiresSelection: false
    },
    {
        id: 'installment-manager',
        name: 'Installments',
        description: 'Split payments setup',
        icon: 'ViewWeek',
        component: InstallmentManager,
        group: 'Configuration',
        type: 'Specific',
        path: '/apps/payment-terms/installments',
        label: 'Installments',
        requiresSelection: false
    },
    {
        id: 'term-test-bench',
        name: 'Test Bench',
        description: 'Validate term configurations',
        icon: 'Science',
        component: TermTestBench,
        group: 'Utilities',
        type: 'Specific',
        path: '/apps/payment-terms/test-bench',
        label: 'Test Bench',
        requiresSelection: false
    }
];
