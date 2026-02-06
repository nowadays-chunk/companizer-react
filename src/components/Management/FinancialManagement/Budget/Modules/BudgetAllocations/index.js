import BudgetStructureDimensions from './BudgetStructureDimensions';
import AllocationRulesMethods from './AllocationRulesMethods';
import TimeBasedAllocation from './TimeBasedAllocation';
import BudgetControlEnforcement from './BudgetControlEnforcement';
import BudgetRevisionsAdjustments from './BudgetRevisionsAdjustments';
import ActualVsBudgetTracking from './ActualVsBudgetTracking';
import MultiEntityConsolidation from './MultiEntityConsolidation';
import BudgetApprovalWorkflow from './BudgetApprovalWorkflow';
import PlanningForecastingIntegration from './PlanningForecastingIntegration';
import BudgetReportingAnalytics from './BudgetReportingAnalytics';
import EncumbrancesCommitments from './EncumbrancesCommitments';
import BudgetCalendarsDeadlines from './BudgetCalendarsDeadlines';
import BudgetAuditControls from './BudgetAuditControls';
import BudgetAutomationEngine from './BudgetAutomationEngine';
import BudgetEntryProductivity from './BudgetEntryProductivity';
import BudgetSecurityPermissions from './BudgetSecurityPermissions';
import BudgetEcosystemIntegration from './BudgetEcosystemIntegration';
import AdvancedBudgetFeatures from './AdvancedBudgetFeatures';

import {
    AccountTree,
    Rule,
    Timeline,
    GppBad,
    Transform,
    CompareArrows,
    MergeType,
    Approval,
    Psychology,
    Analytics,
    Assignment,
    CalendarMonth,
    History,
    AutoMode,
    Speed,
    Security,
    Hub,
    Star
} from '@mui/icons-material';

export const modules = [
    {
        id: 'budget-structure',
        name: 'Budget Structure & Dimensions',
        description: 'Define fiscal years, scenarios, and hierarchy dimensions.',
        icon: AccountTree,
        component: BudgetStructureDimensions,
        group: 'Core',
        type: 'General',
        path: '/apps/budget-allocations/structure',
        label: 'Structure',
        requiresSelection: false
    },
    {
        id: 'allocation-rules',
        name: 'Allocation Rules & Methods',
        description: 'Configure top-down, driver-based, and rule-based allocations.',
        icon: Rule,
        component: AllocationRulesMethods,
        group: 'Core',
        type: 'General',
        path: '/apps/budget-allocations/rules',
        label: 'Rules',
        requiresSelection: false
    },
    {
        id: 'time-allocation',
        name: 'Time-Based Allocation',
        description: 'Manage periodization, seasonality, and rolling budgets.',
        icon: Timeline,
        component: TimeBasedAllocation,
        group: 'Core',
        type: 'General',
        path: '/apps/budget-allocations/time-based',
        label: 'Timeline',
        requiresSelection: false
    },
    {
        id: 'budget-control',
        name: 'Control & Enforcement',
        description: 'Set thresholds, blocking rules, and soft/hard limits.',
        icon: GppBad,
        component: BudgetControlEnforcement,
        group: 'Controls',
        type: 'General',
        path: '/apps/budget-allocations/control',
        label: 'Controls',
        requiresSelection: false
    },
    {
        id: 'budget-revisions',
        name: 'Revisions & Adjustments',
        description: 'Handle transfers, amendments, and reforecasting.',
        icon: Transform,
        component: BudgetRevisionsAdjustments,
        group: 'Management',
        type: 'General',
        path: '/apps/budget-allocations/revisions',
        label: 'Revisions',
        requiresSelection: false
    },
    {
        id: 'actual-vs-budget',
        name: 'Actual vs Budget Tracking',
        description: 'Real-time variance analysis and consumption tracking.',
        icon: CompareArrows,
        component: ActualVsBudgetTracking,
        group: 'Analytics',
        type: 'General',
        path: '/apps/budget-allocations/tracking',
        label: 'Tracking',
        requiresSelection: false
    },
    {
        id: 'consolidation',
        name: 'Multi-Entity & Consolidation',
        description: 'Group-level budgets and intercompany allocations.',
        icon: MergeType,
        component: MultiEntityConsolidation,
        group: 'Enterprise',
        type: 'General',
        path: '/apps/budget-allocations/consolidation',
        label: 'Consolidation',
        requiresSelection: false
    },
    {
        id: 'approval-workflow',
        name: 'Approval Workflow',
        description: 'Manage budget submissions, approvals, and overrides.',
        icon: Approval,
        component: BudgetApprovalWorkflow,
        group: 'Controls',
        type: 'General',
        path: '/apps/budget-allocations/workflow',
        label: 'Workflow',
        requiresSelection: false
    },
    {
        id: 'planning-forecasting',
        name: 'Planning & Forecasting',
        description: 'Integrate with strategic planning and what-if scenarios.',
        icon: Psychology,
        component: PlanningForecastingIntegration,
        group: 'Strategic',
        type: 'General',
        path: '/apps/budget-allocations/planning',
        label: 'Planning',
        requiresSelection: false
    },
    {
        id: 'reporting-analytics',
        name: 'Reporting & Analytics',
        description: 'Visual dashboards, heatmaps, and drill-down reports.',
        icon: Analytics,
        component: BudgetReportingAnalytics,
        group: 'Analytics',
        type: 'General',
        path: '/apps/budget-allocations/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'encumbrances',
        name: 'Encumbrances & Commitments',
        description: 'Track procurement commitments and accruals.',
        icon: Assignment,
        component: EncumbrancesCommitments,
        group: 'Procurement',
        type: 'General',
        path: '/apps/budget-allocations/encumbrances',
        label: 'Encumbrances',
        requiresSelection: false
    },
    {
        id: 'calendars-deadlines',
        name: 'Calculators & Deadlines',
        description: 'Manage budget cycles, deadlines, and freeze periods.',
        icon: CalendarMonth,
        component: BudgetCalendarsDeadlines,
        group: 'Management',
        type: 'General',
        path: '/apps/budget-allocations/calendars',
        label: 'Calendars',
        requiresSelection: false
    },
    {
        id: 'audit-controls',
        name: 'Controls & Audit Trail',
        description: 'Full history of changes and audit-ready logs.',
        icon: History,
        component: BudgetAuditControls,
        group: 'Controls',
        type: 'General',
        path: '/apps/budget-allocations/audit',
        label: 'Audit',
        requiresSelection: false
    },
    {
        id: 'automation',
        name: 'Automation Engine',
        description: 'Auto-allocate, roll forward, and trigger notifications.',
        icon: AutoMode,
        component: BudgetAutomationEngine,
        group: 'Automation',
        type: 'General',
        path: '/apps/budget-allocations/automation',
        label: 'Automation',
        requiresSelection: false
    },
    {
        id: 'productivity',
        name: 'UX & Productivity',
        description: 'Bulk tools, templates, and Excel import/export.',
        icon: Speed,
        component: BudgetEntryProductivity,
        group: 'UX',
        type: 'General',
        path: '/apps/budget-allocations/productivity',
        label: 'Productivity',
        requiresSelection: false
    },
    {
        id: 'security',
        name: 'Security & Permissions',
        description: 'Role-based access and sensitive data masking.',
        icon: Security,
        component: BudgetSecurityPermissions,
        group: 'Security',
        type: 'General',
        path: '/apps/budget-allocations/security',
        label: 'Security',
        requiresSelection: false
    },
    {
        id: 'integration',
        name: 'Ecosystem Integration',
        description: 'Connect with GL, AP, Payroll, and Projects.',
        icon: Hub,
        component: BudgetEcosystemIntegration,
        group: 'Integration',
        type: 'General',
        path: '/apps/budget-allocations/integration',
        label: 'Integration',
        requiresSelection: false
    },
    {
        id: 'advanced-features',
        name: 'Advanced Features',
        description: 'Zero-based budgeting, CapEx, and fund accounting.',
        icon: Star,
        component: AdvancedBudgetFeatures,
        group: 'Advanced',
        type: 'General',
        path: '/apps/budget-allocations/advanced',
        label: 'Advanced',
        requiresSelection: false
    }
];

export default modules;