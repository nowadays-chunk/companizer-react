import React from 'react';

const FiscalCalendarSetup = React.lazy(() => import('./FiscalCalendarSetup'));
const FiscalPeriodDefinition = React.lazy(() => import('./FiscalPeriodDefinition'));
const PeriodStatusManager = React.lazy(() => import('./PeriodStatusManager'));
const PostingControls = React.lazy(() => import('./PostingControls'));
const CloseProcessManager = React.lazy(() => import('./CloseProcessManager'));
const AdjustmentPeriods = React.lazy(() => import('./AdjustmentPeriods'));
const MultiEntityPeriods = React.lazy(() => import('./MultiEntityPeriods'));
const ParallelLedgers = React.lazy(() => import('./ParallelLedgers'));
const PeriodSecurity = React.lazy(() => import('./PeriodSecurity'));
const PeriodAutomation = React.lazy(() => import('./PeriodAutomation'));
const FiscalReporting = React.lazy(() => import('./FiscalReporting'));

export const modules = [
    {
        id: 'calendar-setup',
        name: 'Calendar Setup',
        type: 'General',
        path: '/financial-management/general-ledger/fiscal-periods/calendar-setup',
        icon: 'EventNote',
        description: 'Setup fiscal years and calendars.',
        component: FiscalCalendarSetup,
        requiresSelection: false
    },
    {
        id: 'period-definition',
        name: 'Period Definition',
        type: 'General',
        path: '/financial-management/general-ledger/fiscal-periods/period-definition',
        icon: 'DateRange',
        description: 'Define fiscal periods.',
        component: FiscalPeriodDefinition,
        requiresSelection: false
    },
    {
        id: 'status-manager',
        name: 'Status Manager',
        type: 'Specific',
        path: '/financial-management/general-ledger/fiscal-periods/status-manager',
        icon: 'Flaky',
        description: 'Open or close fiscal periods.',
        component: PeriodStatusManager,
        requiresSelection: false
    },
    {
        id: 'posting-controls',
        name: 'Posting Controls',
        type: 'Specific',
        path: '/financial-management/general-ledger/fiscal-periods/posting-controls',
        icon: 'Lock',
        description: 'Control posting to periods.',
        component: PostingControls,
        requiresSelection: false
    },
    {
        id: 'close-process',
        name: 'Close Process',
        type: 'Specific',
        path: '/financial-management/general-ledger/fiscal-periods/close-process',
        icon: 'FactCheck',
        description: 'Manage period end closing.',
        component: CloseProcessManager,
        requiresSelection: false
    },
    {
        id: 'adjustment-periods',
        name: 'Adjustment Periods',
        type: 'Specific',
        path: '/financial-management/general-ledger/fiscal-periods/adjustment-periods',
        icon: 'Tune',
        description: 'Manage special adjustment periods.',
        component: AdjustmentPeriods,
        requiresSelection: false
    },
    {
        id: 'multi-entity',
        name: 'Multi-Entity',
        type: 'General',
        path: '/financial-management/general-ledger/fiscal-periods/multi-entity',
        icon: 'Business',
        description: 'Manage periods across entities.',
        component: MultiEntityPeriods,
        requiresSelection: false
    },
    {
        id: 'parallel-ledgers',
        name: 'Parallel Ledgers',
        type: 'General',
        path: '/financial-management/general-ledger/fiscal-periods/parallel-ledgers',
        icon: 'ViewWeek',
        description: 'Manage periods for parallel ledgers.',
        component: ParallelLedgers,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security',
        type: 'General',
        path: '/financial-management/general-ledger/fiscal-periods/security',
        icon: 'Security',
        description: 'Access control for periods.',
        component: PeriodSecurity,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation',
        type: 'General',
        path: '/financial-management/general-ledger/fiscal-periods/automation',
        icon: 'AutoMode',
        description: 'Automate period opening/closing.',
        component: PeriodAutomation,
        requiresSelection: false
    },
    {
        id: 'reporting',
        name: 'Reporting',
        type: 'General',
        path: '/financial-management/general-ledger/fiscal-periods/reporting',
        icon: 'Assessment',
        description: 'Fiscal period status reports.',
        component: FiscalReporting,
        requiresSelection: false
    },
];

export default modules;
