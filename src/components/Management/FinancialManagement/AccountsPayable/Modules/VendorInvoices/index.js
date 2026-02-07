import React from 'react';

const InvoiceCapture = React.lazy(() => import('./InvoiceCapture'));
const MatchingEngine = React.lazy(() => import('./MatchingEngine'));
const PaymentRunManager = React.lazy(() => import('./PaymentRunManager'));
const VendorPortalHome = React.lazy(() => import('./VendorPortalHome'));

export const modules = [
    {
        id: 'invoice-capture',
        name: 'Invoice Capture',
        description: 'Scan and enter vendor invoices',
        icon: 'Scanner',
        component: InvoiceCapture,
        group: 'Processing',
        type: 'General',
        path: '/financial-management/accounts-payable/vendor-invoices/capture',
        label: 'Capture',
        requiresSelection: false
    },
    {
        id: 'matching-engine',
        name: 'Matching Engine',
        description: 'Match invoices to POs and receipts',
        icon: 'CompareArrows',
        component: MatchingEngine,
        group: 'Processing',
        type: 'General',
        path: '/financial-management/accounts-payable/vendor-invoices/matching',
        label: 'Matching',
        requiresSelection: false
    },
    {
        id: 'payment-run-manager',
        name: 'Payment Runs',
        description: 'Schedule and execute payments',
        icon: 'Payments',
        component: PaymentRunManager,
        group: 'Payments',
        type: 'General',
        path: '/financial-management/accounts-payable/vendor-invoices/payments',
        label: 'Payments',
        requiresSelection: false
    },
    {
        id: 'vendor-portal-home',
        name: 'Vendor Portal',
        description: 'Self-service vendor view',
        icon: 'Store',
        component: VendorPortalHome,
        group: 'Portal',
        type: 'Specific',
        path: '/financial-management/accounts-payable/vendor-invoices/portal',
        label: 'Portal',
        requiresSelection: false
    }
];

export default modules;
