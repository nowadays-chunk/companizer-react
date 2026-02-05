import JournalEntryManager from './JournalEntryManager';
import RecurringJournals from './RecurringJournals';
import JournalApprovals from './JournalApprovals';
import JournalPosting from './JournalPosting';
import JournalReversals from './JournalReversals';
import JournalAllocations from './JournalAllocations';
import IntercompanyJournals from './IntercompanyJournals';
import JournalCompliance from './JournalCompliance';
import JournalReports from './JournalReports';
import JournalAdmin from './JournalAdmin';

export const modules = [
    {
        name: 'Edit Journal',
        type: 'Specific',
        path: '/apps/general-ledger/journals/:id',
        icon: 'Description',
        description: 'Create, edit, and manage manual and system journal entries.',
        component: JournalEntryManager
    },
    {
        name: 'Recurring Journals',
        type: 'General',
        path: '/apps/general-ledger/journals/recurring',
        icon: 'Repeat',
        description: 'Manage recurring journal schedules, accruals, and deferrals.',
        component: RecurringJournals
    },
    {
        name: 'Journal Approvals',
        type: 'General',
        path: '/apps/general-ledger/journals/approvals',
        icon: 'AssignmentTurnedIn',
        description: 'Review and approve journals pending authorization.',
        component: JournalApprovals
    },
    {
        name: 'Period Close & Posting',
        type: 'General',
        path: '/apps/general-ledger/journals/posting',
        icon: 'LockClock',
        description: 'Manage accounting periods, batch posting, and soft/hard closes.',
        component: JournalPosting
    },
    {
        name: 'Reversals & Corrections',
        type: 'Specific',
        path: '/apps/general-ledger/journals/:id/reversals',
        icon: 'History',
        description: 'Handle reversals, corrections, and audit trail of changes.',
        component: JournalReversals
    },
    {
        name: 'Allocations',
        type: 'General',
        path: '/apps/general-ledger/journals/allocations',
        icon: 'PieChart',
        description: 'Cost and revenue allocation cycles and distributions.',
        component: JournalAllocations
    },
    {
        name: 'Intercompany',
        type: 'General',
        path: '/apps/general-ledger/journals/intercompany',
        icon: 'Business',
        description: 'Intercompany settlements, eliminations, and reconciliation.',
        component: IntercompanyJournals
    },
    {
        name: 'Compliance & Audit',
        type: 'General',
        path: '/apps/general-ledger/journals/compliance',
        icon: 'VerifiedUser',
        description: 'SOX compliance, audit trails, and journal certification.',
        component: JournalCompliance
    },
    {
        name: 'Admin Console',
        type: 'General',
        path: '/apps/general-ledger/journals/admin',
        icon: 'Settings',
        description: 'Configuration of journal sources, approval matrices, and rules.',
        component: JournalAdmin
    }
];

export default modules;
