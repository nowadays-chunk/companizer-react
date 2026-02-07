import React from 'react';

const TrialBalanceStandard = React.lazy(() => import('./TrialBalanceStandard'));
const TrialBalanceComparative = React.lazy(() => import('./TrialBalanceComparative'));
const TrialBalanceClosing = React.lazy(() => import('./TrialBalanceClosing'));
const TrialBalanceAudit = React.lazy(() => import('./TrialBalanceAudit'));
const TrialBalanceConfig = React.lazy(() => import('./TrialBalanceConfig'));

export const modules = [
    {
        id: 'standard',
        name: 'Standard Trial Balance',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/standard',
        icon: 'TableChart',
        description: 'View standard trial balance.',
        component: TrialBalanceStandard,
        requiresSelection: false
    },
    {
        id: 'comparative',
        name: 'Comparative TB',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/comparative',
        icon: 'Compare',
        description: 'Compare trial balances across periods.',
        component: TrialBalanceComparative,
        requiresSelection: false
    },
    {
        id: 'closing',
        name: 'Closing TB',
        type: 'Specific',
        path: '/apps/general-ledger/trial-balance/closing',
        icon: 'DoneAll',
        description: 'Trial balance for closing periods.',
        component: TrialBalanceClosing,
        requiresSelection: false
    },
    {
        id: 'audit',
        name: 'Audit View',
        type: 'Specific',
        path: '/apps/general-ledger/trial-balance/audit',
        icon: 'Plagiarism',
        description: 'Trial balance with audit details.',
        component: TrialBalanceAudit,
        requiresSelection: false
    },
    {
        id: 'config',
        name: 'Configuration',
        type: 'General',
        path: '/apps/general-ledger/trial-balance/config',
        icon: 'Settings',
        description: 'Trial balance settings.',
        component: TrialBalanceConfig,
        requiresSelection: false
    },
];

export default modules;
