import FiscalCalendarSetup from './FiscalCalendarSetup';
import FiscalPeriodDefinition from './FiscalPeriodDefinition';
import PeriodStatusManager from './PeriodStatusManager';
import PostingControls from './PostingControls';
import CloseProcessManager from './CloseProcessManager';
import AdjustmentPeriods from './AdjustmentPeriods';
import MultiEntityPeriods from './MultiEntityPeriods';
import ParallelLedgers from './ParallelLedgers';
import PeriodSecurity from './PeriodSecurity';
import PeriodAutomation from './PeriodAutomation';
import FiscalReporting from './FiscalReporting';

export const modules = [
    // GENERAL MODULES
    {
        id: 'fiscal_calendar_setup',
        name: 'Fiscal Calendar Setup',
        type: 'General',
        path: '/apps/fiscal-periods/calendar-setup',
        icon: 'Event',
        description: 'Define fiscal years, 4-4-5 calendars, and templates',
        component: FiscalCalendarSetup,
        requiresSelection: false
    },
    {
        id: 'fiscal_period_definition',
        name: 'Fiscal Period Definition',
        type: 'General',
        path: '/apps/fiscal-periods/period-definition',
        icon: 'DateRange',
        description: 'Manage monthly/quarterly periods and status definitions',
        component: FiscalPeriodDefinition,
        requiresSelection: false
    },
    {
        id: 'period_status_manager',
        name: 'Period Status Management',
        type: 'General',
        path: '/apps/fiscal-periods/status-manager',
        icon: 'LockClock',
        description: 'Control period status (Open, Soft Close, Hard Close) and workflow',
        component: PeriodStatusManager,
        requiresSelection: false
    },
    {
        id: 'multi_entity_periods',
        name: 'Multi-Entity & Parallel Books',
        type: 'General',
        path: '/apps/fiscal-periods/multi-entity',
        icon: 'Domain',
        description: 'Manage fiscal periods across multiple entities',
        component: MultiEntityPeriods,
        requiresSelection: false
    },
    {
        id: 'parallel_ledgers',
        name: 'Parallel Ledgers',
        type: 'General',
        path: '/apps/fiscal-periods/parallel-ledgers',
        icon: 'MenuBook',
        description: 'Independent period closing for Statutory vs Management ledgers',
        component: ParallelLedgers,
        requiresSelection: false
    },

    // SPECIFIC MODULES
    {
        id: 'posting_controls',
        name: 'Posting Controls',
        type: 'Specific',
        path: '/apps/fiscal-periods/posting-controls',
        icon: 'Rule',
        description: 'Configure grace periods, backdating rules, and overrides',
        component: PostingControls,
        requiresSelection: false
    },
    {
        id: 'close_process_manager',
        name: 'Close Process Integration',
        type: 'Specific',
        path: '/apps/fiscal-periods/close-process',
        icon: 'FactCheck',
        description: 'Closing checklists, sub-ledger reconciliation, and readiness checks',
        component: CloseProcessManager,
        requiresSelection: false
    },
    {
        id: 'adjustment_periods',
        name: 'Adjustment & Special Periods',
        type: 'Specific',
        path: '/apps/fiscal-periods/adjustment-periods',
        icon: 'EditCalendar',
        description: 'Manage Period 13/14 and audit adjustment windows',
        component: AdjustmentPeriods,
        requiresSelection: false
    },
    {
        id: 'period_security',
        name: 'Security & Permissions',
        type: 'Specific',
        path: '/apps/fiscal-periods/security',
        icon: 'Security',
        description: 'Define who can close, reopen, or post to closed periods',
        component: PeriodSecurity,
        requiresSelection: false
    },
    {
        id: 'period_automation',
        name: 'Automation & Scheduling',
        type: 'Specific',
        path: '/apps/fiscal-periods/automation',
        icon: 'Schedule',
        description: 'Auto-close scheduling, SLA timers, and notifications',
        component: PeriodAutomation,
        requiresSelection: false
    },
    {
        id: 'fiscal_reporting',
        name: 'Fiscal Reporting',
        type: 'Specific',
        path: '/apps/fiscal-periods/reporting',
        icon: 'Assessment',
        description: 'View period snapshots and locked financial reports',
        component: FiscalReporting,
        requiresSelection: false
    }
];

export default modules;
