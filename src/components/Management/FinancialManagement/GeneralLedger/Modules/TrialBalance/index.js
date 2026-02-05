
import TrialBalanceStandard from './TrialBalanceStandard';
import TrialBalanceComparative from './TrialBalanceComparative';
import TrialBalanceClosing from './TrialBalanceClosing';
import TrialBalanceAudit from './TrialBalanceAudit';
import TrialBalanceConfig from './TrialBalanceConfig';

export const modules = [
    {
        name: 'Standard Trial Balance',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/standard',
        icon: 'TableView',
        description: 'Generate standard trial balances with hierarchical view and filtering.',
        component: TrialBalanceStandard
    },
    {
        name: 'Comparative Analysis',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/comparative',
        icon: 'CompareArrows',
        description: 'Multi-period and multi-currency comparison analysis.',
        component: TrialBalanceComparative
    },
    {
        name: 'Closing & Adjustments',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/closing',
        icon: 'FactCheck',
        description: 'Manage period closing, adjustments, and reconciliations.',
        component: TrialBalanceClosing
    },
    {
        name: 'Audit & Snapshots',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/audit',
        icon: 'HistoryEdu',
        description: 'View audit trails, snapshots, and version history.',
        component: TrialBalanceAudit
    },
    {
        name: 'Configuration',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/config',
        icon: 'Settings',
        description: 'Configure display settings, validation rules, and export preferences.',
        component: TrialBalanceConfig
    }
];

export default modules;
