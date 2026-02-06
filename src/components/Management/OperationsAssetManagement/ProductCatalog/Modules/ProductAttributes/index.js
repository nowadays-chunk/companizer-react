
import AttributeMasterData from './AttributeMasterData';
import ProductAssignment from './ProductAssignment';
import DataValidation from './DataValidation';
import PricingAttributes from './PricingAttributes';
import ComplianceAttributes from './ComplianceAttributes';
import LogisticsAttributes from './LogisticsAttributes';
import VariantConfig from './VariantConfig';
import AttributeAnalytics from './AttributeAnalytics';
import AttributeWorkflow from './AttributeWorkflow';
import AttributeChannels from './AttributeChannels';

export const modules = [
    {
        id: 'attribute-master-data',
        name: 'Master Data',
        description: 'Core attribute definition',
        icon: 'Tune',
        component: AttributeMasterData,
        group: 'Definition',
        type: 'General',
        path: '/operations/product-catalog/attributes/master-data',
        label: 'Master Data',
        requiresSelection: false
    },
    {
        id: 'product-assignment',
        name: 'Assignments',
        description: 'Link to products & categories',
        icon: 'Link',
        component: ProductAssignment,
        group: 'Definition',
        type: 'General',
        path: '/operations/product-catalog/attributes/assignments',
        label: 'Assignments',
        requiresSelection: false
    },
    {
        id: 'data-validation',
        name: 'Validation Rules',
        description: 'Data types and constraints',
        icon: 'FactCheck',
        component: DataValidation,
        group: 'Quality',
        type: 'General',
        path: '/operations/product-catalog/attributes/validation',
        label: 'Validation',
        requiresSelection: false
    },
    {
        id: 'variant-config',
        name: 'Variants',
        description: 'Configuration rules',
        icon: 'Style',
        component: VariantConfig,
        group: 'Configuration',
        type: 'Specific',
        path: '/operations/product-catalog/attributes/variants',
        label: 'Variants',
        requiresSelection: false
    },
    {
        id: 'pricing-attributes',
        name: 'Pricing Impact',
        description: 'Cost and price adjustments',
        icon: 'AttachMoney',
        component: PricingAttributes,
        group: 'Financials',
        type: 'Specific',
        path: '/operations/product-catalog/attributes/pricing',
        label: 'Pricing',
        requiresSelection: false
    },
    {
        id: 'compliance-attributes',
        name: 'Compliance',
        description: 'Tax and regulatory flags',
        icon: 'Gavel',
        component: ComplianceAttributes,
        group: 'Financials',
        type: 'Specific',
        path: '/operations/product-catalog/attributes/compliance',
        label: 'Compliance',
        requiresSelection: false
    },
    {
        id: 'logistics-attributes',
        name: 'Logistics',
        description: 'Physical dimensions & handling',
        icon: 'LocalShipping',
        component: LogisticsAttributes,
        group: 'Logistics',
        type: 'Specific',
        path: '/operations/product-catalog/attributes/logistics',
        label: 'Logistics',
        requiresSelection: false
    },
    {
        id: 'attribute-channels',
        name: 'Channels',
        description: 'Multi-channel visibility',
        icon: 'Public',
        component: AttributeChannels,
        group: 'Sales',
        type: 'Specific',
        path: '/operations/product-catalog/attributes/channels',
        label: 'Channels',
        requiresSelection: false
    },
    {
        id: 'attribute-analytics',
        name: 'Analytics',
        description: 'Usage statistics',
        icon: 'Insights',
        component: AttributeAnalytics,
        group: 'Analytics',
        type: 'Specific',
        path: '/operations/product-catalog/attributes/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'attribute-workflow',
        name: 'Workflow',
        description: 'Audit trail and governance',
        icon: 'Rule',
        component: AttributeWorkflow,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/product-catalog/attributes/workflow',
        label: 'Workflow',
        requiresSelection: false
    }
];
