import React from 'react';

const AccountHierarchy = React.lazy(() => import('./AccountHierarchy'));
const SegmentConfiguration = React.lazy(() => import('./SegmentConfiguration'));
const AccountTemplates = React.lazy(() => import('./AccountTemplates'));
const PostingControls = React.lazy(() => import('./PostingControls'));
const StatementMapping = React.lazy(() => import('./StatementMapping'));
const SubledgerIntegration = React.lazy(() => import('./SubledgerIntegration'));
const CoAAdmin = React.lazy(() => import('./CoAAdmin'));
const AccountDetails = React.lazy(() => import('./AccountDetails'));
const AccountAudit = React.lazy(() => import('./AccountAudit'));
const IntercompanySettings = React.lazy(() => import('./IntercompanySettings'));
const CoAReports = React.lazy(() => import('./CoAReports'));

export const modules = [
    {
        id: 'hierarchy',
        name: 'Account Hierarchy',
        type: 'General',
        path: '/financial-management/general-ledger/chart-of-accounts/hierarchy',
        icon: 'AccountTree',
        description: 'View and manage account structure.',
        component: AccountHierarchy,
        requiresSelection: false
    },
    {
        id: 'segments',
        name: 'Segments',
        type: 'General',
        path: '/financial-management/general-ledger/chart-of-accounts/segments',
        icon: 'ViewColumn',
        description: 'Configure account segments.',
        component: SegmentConfiguration,
        requiresSelection: false
    },
    {
        id: 'templates',
        name: 'Templates',
        type: 'General',
        path: '/financial-management/general-ledger/chart-of-accounts/templates',
        icon: 'CopyAll',
        description: 'Manage account templates.',
        component: AccountTemplates,
        requiresSelection: false
    },
    {
        id: 'posting-controls',
        name: 'Posting Controls',
        type: 'Specific',
        path: '/financial-management/general-ledger/chart-of-accounts/posting-controls',
        icon: 'LockOpen',
        description: 'Manage posting permissions.',
        component: PostingControls,
        requiresSelection: false
    },
    {
        id: 'statements',
        name: 'Financial Statements',
        type: 'General',
        path: '/financial-management/general-ledger/chart-of-accounts/statements',
        icon: 'Description',
        description: 'Map accounts to financial statements.',
        component: StatementMapping,
        requiresSelection: false
    },
    {
        id: 'subledgers',
        name: 'Subledgers',
        type: 'General',
        path: '/financial-management/general-ledger/chart-of-accounts/subledgers',
        icon: 'Book',
        description: 'Integrate with subledgers.',
        component: SubledgerIntegration,
        requiresSelection: false
    },
    {
        id: 'admin',
        name: 'Administration',
        type: 'General',
        path: '/financial-management/general-ledger/chart-of-accounts/admin',
        icon: 'AdminPanelSettings',
        description: 'CoA settings and maintenance.',
        component: CoAAdmin,
        requiresSelection: false
    },
    {
        id: 'details',
        name: 'Account Details',
        type: 'Detail',
        path: '/financial-management/general-ledger/chart-of-accounts/:id/details',
        icon: 'Info',
        description: 'Detailed view of an account.',
        component: AccountDetails,
        requiresSelection: true
    },
    {
        id: 'audit',
        name: 'Audit History',
        type: 'Detail',
        path: '/financial-management/general-ledger/chart-of-accounts/:id/audit',
        icon: 'History',
        description: 'Audit log for an account.',
        component: AccountAudit,
        requiresSelection: true
    },
    {
        id: 'intercompany',
        name: 'Intercompany Settings',
        type: 'Detail',
        path: '/financial-management/general-ledger/chart-of-accounts/:id/intercompany',
        icon: 'Business',
        description: 'Intercompany configs for an account.',
        component: IntercompanySettings,
        requiresSelection: true
    },
    {
        id: 'reports',
        name: 'Reports',
        type: 'General',
        path: '/financial-management/general-ledger/chart-of-accounts/reports',
        icon: 'Assessment',
        description: 'Chart of Accounts reports.',
        component: CoAReports,
        requiresSelection: false
    },
];

export default modules;
