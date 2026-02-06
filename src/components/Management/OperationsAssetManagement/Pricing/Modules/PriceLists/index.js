
import PriceListMasterData from './PriceListMasterData';
import PriceAssignment from './PriceAssignment';
import PricingRules from './PricingRules';
import PricingAdjustments from './PricingAdjustments';
import PriceHistory from './PriceHistory';
import PriceListTax from './PriceListTax';
import PromotionCampaigns from './PromotionCampaigns';
import ChannelPricing from './ChannelPricing';
import PriceWorkflow from './PriceWorkflow';
import PriceAnalytics from './PriceAnalytics';
import AutomationRules from './AutomationRules';
import DataIntegrity from './DataIntegrity';

export const modules = [
    {
        id: 'price-list-master',
        name: 'Master Data',
        description: 'Core price list definition',
        icon: 'RequestQuote',
        component: PriceListMasterData,
        group: 'Definition',
        type: 'General',
        path: '/operations/pricing/price-lists/master-data',
        label: 'Master Data',
        requiresSelection: false
    },
    {
        id: 'price-assignment',
        name: 'Assignments',
        description: 'Target audience & scope',
        icon: 'GroupWork',
        component: PriceAssignment,
        group: 'Definition',
        type: 'General',
        path: '/operations/pricing/price-lists/assignment',
        label: 'Assignments',
        requiresSelection: false
    },
    {
        id: 'pricing-rules',
        name: 'Rules & Tiers',
        description: 'Volume tiers & logic',
        icon: 'Gavel',
        component: PricingRules,
        group: 'Calculation',
        type: 'General',
        path: '/operations/pricing/price-lists/rules',
        label: 'Rules',
        requiresSelection: false
    },
    {
        id: 'pricing-adjustments',
        name: 'Adjustments',
        description: 'Modifiers & surcharges',
        icon: 'Tune',
        component: PricingAdjustments,
        group: 'Calculation',
        type: 'General',
        path: '/operations/pricing/price-lists/adjustments',
        label: 'Adjustments',
        requiresSelection: false
    },
    {
        id: 'promotion-campaigns',
        name: 'Promotions',
        description: 'Campaigns & discounts',
        icon: 'Campaign',
        component: PromotionCampaigns,
        group: 'Sales',
        type: 'Specific',
        path: '/operations/pricing/price-lists/promotions',
        label: 'Promotions',
        requiresSelection: false
    },
    {
        id: 'price-list-tax',
        name: 'Tax Compliance',
        description: 'VAT/GST inclusion',
        icon: 'AccountBalance',
        component: PriceListTax,
        group: 'Compliance',
        type: 'Specific',
        path: '/operations/pricing/price-lists/tax',
        label: 'Tax',
        requiresSelection: false
    },
    {
        id: 'channel-pricing',
        name: 'Channels',
        description: 'Multi-channel & currency',
        icon: 'Public',
        component: ChannelPricing,
        group: 'Sales',
        type: 'Specific',
        path: '/operations/pricing/price-lists/channels',
        label: 'Channels',
        requiresSelection: false
    },
    {
        id: 'price-analytics',
        name: 'Analytics',
        description: 'Margins & impact',
        icon: 'Insights',
        component: PriceAnalytics,
        group: 'Analytics',
        type: 'Specific',
        path: '/operations/pricing/price-lists/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'price-workflow',
        name: 'Workflow',
        description: 'Approval process',
        icon: 'Rule',
        component: PriceWorkflow,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/pricing/price-lists/workflow',
        label: 'Workflow',
        requiresSelection: false
    },
    {
        id: 'automation-rules',
        name: 'Automation',
        description: 'Auto-updates & sync',
        icon: 'AutoMode',
        component: AutomationRules,
        group: 'Automation',
        type: 'Specific',
        path: '/operations/pricing/price-lists/automation',
        label: 'Automation',
        requiresSelection: false
    },
    {
        id: 'data-integrity',
        name: 'Data Integrity',
        description: 'Controls & safeguards',
        icon: 'VerifiedUser',
        component: DataIntegrity,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/pricing/price-lists/integrity',
        label: 'Integrity',
        requiresSelection: false
    },
    {
        id: 'price-history',
        name: 'History',
        description: 'Audit & versions',
        icon: 'History',
        component: PriceHistory,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/pricing/price-lists/history',
        label: 'History',
        requiresSelection: false
    }
];
