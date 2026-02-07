import React from 'react';

const BudgetStructureDimensions = React.lazy(() => import('./BudgetStructureDimensions'));
const AllocationRulesMethods = React.lazy(() => import('./AllocationRulesMethods'));
const TimeBasedAllocation = React.lazy(() => import('./TimeBasedAllocation'));
const BudgetControlEnforcement = React.lazy(() => import('./BudgetControlEnforcement'));
const BudgetRevisionsAdjustments = React.lazy(() => import('./BudgetRevisionsAdjustments'));
const ActualVsBudgetTracking = React.lazy(() => import('./ActualVsBudgetTracking'));
const MultiEntityConsolidation = React.lazy(() => import('./MultiEntityConsolidation'));
const BudgetApprovalWorkflow = React.lazy(() => import('./BudgetApprovalWorkflow'));
const PlanningForecastingIntegration = React.lazy(() => import('./PlanningForecastingIntegration'));
const BudgetReportingAnalytics = React.lazy(() => import('./BudgetReportingAnalytics'));
const EncumbrancesCommitments = React.lazy(() => import('./EncumbrancesCommitments'));
const BudgetCalendarsDeadlines = React.lazy(() => import('./BudgetCalendarsDeadlines'));
const BudgetAuditControls = React.lazy(() => import('./BudgetAuditControls'));
const BudgetAutomationEngine = React.lazy(() => import('./BudgetAutomationEngine'));
const BudgetEntryProductivity = React.lazy(() => import('./BudgetEntryProductivity'));
const BudgetSecurityPermissions = React.lazy(() => import('./BudgetSecurityPermissions'));
const BudgetEcosystemIntegration = React.lazy(() => import('./BudgetEcosystemIntegration'));
const AdvancedBudgetFeatures = React.lazy(() => import('./AdvancedBudgetFeatures'));

export const modules = [
    {
        id: 'structure',
        name: 'Structure & Dimensions',
        type: 'General',
        path: '/apps/budget-allocations/structure',
        icon: 'AccountTree',
        description: 'Define budget hierarchy and dimensions.',
        component: BudgetStructureDimensions,
        requiresSelection: false
    },
    {
        id: 'rules',
        name: 'Allocation Rules',
        type: 'General',
        path: '/apps/budget-allocations/rules',
        icon: 'Rule',
        description: 'Set rules for distributing budget funds.',
        component: AllocationRulesMethods,
        requiresSelection: false
    },
    {
        id: 'time-based',
        name: 'Time-Based Allocation',
        type: 'Specific',
        path: '/apps/budget-allocations/time-based',
        icon: 'DateRange',
        description: 'Allocate budget across time periods.',
        component: TimeBasedAllocation,
        requiresSelection: false
    },
    {
        id: 'controls',
        name: 'Control & Enforcement',
        type: 'General',
        path: '/apps/budget-allocations/controls',
        icon: 'GppGood',
        description: 'Enforce budget limits and spending controls.',
        component: BudgetControlEnforcement,
        requiresSelection: false
    },
    {
        id: 'revisions',
        name: 'Revisions & Adjustments',
        type: 'Specific',
        path: '/apps/budget-allocations/revisions',
        icon: 'EditNote',
        description: 'Manage budget changes and transfers.',
        component: BudgetRevisionsAdjustments,
        requiresSelection: false
    },
    {
        id: 'tracking',
        name: 'Actual vs Budget',
        type: 'General',
        path: '/apps/budget-allocations/tracking',
        icon: 'TrackChanges',
        description: 'Track spending against budget.',
        component: ActualVsBudgetTracking,
        requiresSelection: false
    },
    {
        id: 'consolidation',
        name: 'Consolidation',
        type: 'General',
        path: '/apps/budget-allocations/consolidation',
        icon: 'CallMerge',
        description: 'Consolidate budgets across entities.',
        component: MultiEntityConsolidation,
        requiresSelection: false
    },
    {
        id: 'workflow',
        name: 'Approval Workflow',
        type: 'General',
        path: '/apps/budget-allocations/workflow',
        icon: 'Approval',
        description: 'Budget approval processes.',
        component: BudgetApprovalWorkflow,
        requiresSelection: false
    },
    {
        id: 'planning',
        name: 'Planning Integration',
        type: 'General',
        path: '/apps/budget-allocations/planning',
        icon: 'NextPlan',
        description: 'Link planning to budget execution.',
        component: PlanningForecastingIntegration,
        requiresSelection: false
    },
    {
        id: 'analytics',
        name: 'Reporting & Analytics',
        type: 'General',
        path: '/apps/budget-allocations/analytics',
        icon: 'Analytics',
        description: 'Budget performance analysis.',
        component: BudgetReportingAnalytics,
        requiresSelection: false
    },
    {
        id: 'encumbrances',
        name: 'Encumbrances',
        type: 'Specific',
        path: '/apps/budget-allocations/encumbrances',
        icon: 'Lock',
        description: 'Track committed funds.',
        component: EncumbrancesCommitments,
        requiresSelection: false
    },
    {
        id: 'calendars',
        name: 'Budget Calendar',
        type: 'General',
        path: '/apps/budget-allocations/calendars',
        icon: 'CalendarMonth',
        description: 'Manage budget cycle deadlines.',
        component: BudgetCalendarsDeadlines,
        requiresSelection: false
    },
    {
        id: 'audit',
        name: 'Audit Controls',
        type: 'General',
        path: '/apps/budget-allocations/audit',
        icon: 'FactCheck',
        description: 'Audit trails for budget changes.',
        component: BudgetAuditControls,
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation',
        type: 'General',
        path: '/apps/budget-allocations/automation',
        icon: 'AutoMode',
        description: 'Automate budget updates.',
        component: BudgetAutomationEngine,
        requiresSelection: false
    },
    {
        id: 'productivity',
        name: 'Entry Productivity',
        type: 'General',
        path: '/apps/budget-allocations/productivity',
        icon: 'Speed',
        description: 'Tools for faster budget entry.',
        component: BudgetEntryProductivity,
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security',
        type: 'General',
        path: '/apps/budget-allocations/security',
        icon: 'Security',
        description: 'Budget access permissions.',
        component: BudgetSecurityPermissions,
        requiresSelection: false
    },
    {
        id: 'integration',
        name: 'Integration',
        type: 'General',
        path: '/apps/budget-allocations/integration',
        icon: 'IntegrationInstructions',
        description: 'External system connectors.',
        component: BudgetEcosystemIntegration,
        requiresSelection: false
    },
    {
        id: 'advanced',
        name: 'Advanced Features',
        type: 'General',
        path: '/apps/budget-allocations/advanced',
        icon: 'Stars',
        description: 'Advanced budgeting tools.',
        component: AdvancedBudgetFeatures,
        requiresSelection: false
    },
];

export default modules;