import AssetMasterIntegration from './AssetMasterIntegration';
import DepreciationMethods from './DepreciationMethods';
import DepreciationSchedule from './DepreciationSchedule';
import MultiEntityDepreciation from './MultiEntityDepreciation';
import AssetRevaluation from './AssetRevaluation';
import GLIntegration from './GLIntegration';
import AssetLifecycle from './AssetLifecycle';
import DepreciationAnalytics from './DepreciationAnalytics';
import TaxDepreciation from './TaxDepreciation';
import AdjustmentGovernance from './AdjustmentGovernance';
import DepreciationAutomation from './DepreciationAutomation';
import SecurityPermissions from './SecurityPermissions';

export const modules = [
    {
        name: 'Asset Master Data',
        type: 'General',
        path: '/apps/assets/depreciation/master',
        icon: 'Business',
        description: 'Asset records and parameters',
        component: AssetMasterIntegration
    },
    {
        name: 'Depreciation Methods',
        type: 'General',
        path: '/apps/assets/depreciation/methods',
        icon: 'Functions',
        description: 'SL, DDB, Units of Production',
        component: DepreciationMethods
    },
    {
        name: 'Depreciation Schedule',
        type: 'General',
        path: '/apps/assets/depreciation/schedule',
        icon: 'CalendarToday',
        description: 'Monthly/Yearly runs and postings',
        component: DepreciationSchedule
    },
    {
        name: 'Multi-Entity Assets',
        type: 'General',
        path: '/apps/assets/depreciation/multi-entity',
        icon: 'Language',
        description: 'International & Consolidated',
        component: MultiEntityDepreciation
    },
    {
        name: 'Revaluation & Adjustments',
        type: 'General',
        path: '/apps/assets/depreciation/revaluation',
        icon: 'TrendingUp',
        description: 'Value changes and impairments',
        component: AssetRevaluation
    },
    {
        name: 'GL Integration',
        type: 'General',
        path: '/apps/assets/depreciation/gl-integration',
        icon: 'AccountBalance',
        description: 'Journal Entries & Mapping',
        component: GLIntegration
    },
    {
        name: 'Asset Lifecycle',
        type: 'General',
        path: '/apps/assets/depreciation/lifecycle',
        icon: 'Timeline',
        description: 'Acquisition to Disposal',
        component: AssetLifecycle
    },
    {
        name: 'Analytics',
        type: 'General',
        path: '/apps/assets/depreciation/analytics',
        icon: 'Assessment',
        description: 'NBV reports and insights',
        component: DepreciationAnalytics
    },
    {
        name: 'Tax Compliance',
        type: 'General',
        path: '/apps/assets/depreciation/tax',
        icon: 'AccountBalanceWallet',
        description: 'MACRS & Statutory reporting',
        component: TaxDepreciation
    },
    {
        name: 'Governance',
        type: 'General',
        path: '/apps/assets/depreciation/governance',
        icon: 'Gavel',
        description: 'Approvals & Audit Trails',
        component: AdjustmentGovernance
    },
    {
        name: 'Automation',
        type: 'General',
        path: '/apps/assets/depreciation/automation',
        icon: 'AutoFixHigh',
        description: 'Auto-posting settings',
        component: DepreciationAutomation
    },
    {
        name: 'Security',
        type: 'General',
        path: '/apps/assets/depreciation/security',
        icon: 'Security',
        description: 'Permissions & Access',
        component: SecurityPermissions
    }
];

export default modules;
