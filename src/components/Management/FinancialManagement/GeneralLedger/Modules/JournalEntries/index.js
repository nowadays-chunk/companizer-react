import React from 'react';

const JournalEntryManager = React.lazy(() => import('./JournalEntryManager'));
const RecurringJournals = React.lazy(() => import('./RecurringJournals'));
const JournalApprovals = React.lazy(() => import('./JournalApprovals'));
const JournalPosting = React.lazy(() => import('./JournalPosting'));
const JournalReversals = React.lazy(() => import('./JournalReversals'));
const JournalAllocations = React.lazy(() => import('./JournalAllocations'));
const IntercompanyJournals = React.lazy(() => import('./IntercompanyJournals'));
const JournalCompliance = React.lazy(() => import('./JournalCompliance'));
const JournalReports = React.lazy(() => import('./JournalReports'));
const JournalAdmin = React.lazy(() => import('./JournalAdmin'));

export const modules = [
    {
        id: 'management',
        name: 'Journal Management',
        type: 'General',
        path: '/financial-management/general-ledger/journals',
        icon: 'MenuBook',
        description: 'Create and manage journal entries.',
        component: JournalEntryManager,
        requiresSelection: false
    },
    {
        id: 'recurring',
        name: 'Recurring Journals',
        type: 'Specific',
        path: '/financial-management/general-ledger/journals/recurring',
        icon: 'Autorenew',
        description: 'Manage recurring journal templates.',
        component: RecurringJournals,
        requiresSelection: false
    },
    {
        id: 'approvals',
        name: 'Approvals',
        type: 'General',
        path: '/financial-management/general-ledger/journals/approvals',
        icon: 'ThumbUp',
        description: 'Approve pending journal entries.',
        component: JournalApprovals,
        requiresSelection: false
    },
    {
        id: 'posting',
        name: 'Posting',
        type: 'Specific',
        path: '/financial-management/general-ledger/journals/posting',
        icon: 'PostAdd',
        description: 'Post approved journals to GL.',
        component: JournalPosting,
        requiresSelection: false
    },
    {
        id: 'reversals',
        name: 'Reversals',
        type: 'Specific',
        path: '/financial-management/general-ledger/journals/:id/reversals',
        icon: 'Undo',
        description: 'Reverse posted journal entries.',
        component: JournalReversals,
        requiresSelection: true
    },
    {
        id: 'allocations',
        name: 'Allocations',
        type: 'Specific',
        path: '/financial-management/general-ledger/journals/allocations',
        icon: 'PieChart',
        description: 'Define and run allocation rules.',
        component: JournalAllocations,
        requiresSelection: false
    },
    {
        id: 'intercompany',
        name: 'Intercompany',
        type: 'Specific',
        path: '/financial-management/general-ledger/journals/intercompany',
        icon: 'Business',
        description: 'Manage intercompany transactions.',
        component: IntercompanyJournals,
        requiresSelection: false
    },
    {
        id: 'compliance',
        name: 'Compliance',
        type: 'General',
        path: '/financial-management/general-ledger/journals/compliance',
        icon: 'Policy',
        description: 'Ensure journal entry compliance.',
        component: JournalCompliance,
        requiresSelection: false
    },
    {
        id: 'reports',
        name: 'Reports',
        type: 'General',
        path: '/financial-management/general-ledger/journals/reports',
        icon: 'Assessment',
        description: 'Journal entry reports and logs.',
        component: JournalReports,
        requiresSelection: false
    },
    {
        id: 'admin',
        name: 'Administration',
        type: 'General',
        path: '/financial-management/general-ledger/journals/admin',
        icon: 'AdminPanelSettings',
        description: 'Journal settings and configuration.',
        component: JournalAdmin,
        requiresSelection: false
    },
    {
        id: 'create',
        name: 'Create Journal',
        type: 'Detail',
        path: '/financial-management/general-ledger/journals/create',
        icon: 'Add',
        description: 'Create a new journal entry.',
        component: JournalEntryManager,
        requiresSelection: false
    },
    {
        id: 'view',
        name: 'View Journal',
        type: 'Detail',
        path: '/financial-management/general-ledger/journals/view/:id',
        icon: 'Visibility',
        description: 'View journal entry details.',
        component: JournalEntryManager,
        requiresSelection: true
    },
    {
        id: 'edit',
        name: 'Edit Journal',
        type: 'Detail',
        path: '/financial-management/general-ledger/journals/edit/:id',
        icon: 'Edit',
        description: 'Edit existing journal entry.',
        component: JournalEntryManager,
        requiresSelection: true
    },
    {
        id: 'details',
        name: 'Journal Details',
        type: 'Detail',
        path: '/financial-management/general-ledger/journals/:id',
        icon: 'Article',
        description: 'Detailed view of journal entry.',
        component: JournalEntryManager,
        requiresSelection: true
    },
];

export default modules;
