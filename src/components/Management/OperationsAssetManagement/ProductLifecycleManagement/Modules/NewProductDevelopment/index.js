
import IdeaConcept from './IdeaConcept';
import StageGateWorkflow from './StageGateWorkflow';
import ProductConcept from './ProductConcept';
import TechnicalDesign from './TechnicalDesign';
import CostingProfitability from './CostingProfitability';
import PrototypePilot from './PrototypePilot';
import QualityCompliance from './QualityCompliance';
import ProjectResource from './ProjectResource';
import GoToMarket from './GoToMarket';
import NPDAnalytics from './NPDAnalytics';
import NPDWorkflow from './NPDWorkflow';
import MasterDataCreation from './MasterDataCreation';

export const modules = [
    {
        id: 'idea-concept',
        name: 'Idea & Concept',
        description: 'Innovation funnel & scoring',
        icon: 'Lightbulb',
        component: IdeaConcept,
        group: 'Phase 1: Innovation',
        type: 'General',
        path: '/operations/plm/npd/idea',
        label: 'Ideas',
        requiresSelection: false
    },
    {
        id: 'stage-gate',
        name: 'Stage-Gate',
        description: 'Lifecycle control & gates',
        icon: 'AccountTree',
        component: StageGateWorkflow,
        group: 'Governance',
        type: 'General',
        path: '/operations/plm/npd/stage-gate',
        label: 'Stage-Gate',
        requiresSelection: false
    },
    {
        id: 'product-concept',
        name: 'Concept Def',
        description: 'Value prop & target',
        icon: 'Description',
        component: ProductConcept,
        group: 'Phase 2: Definition',
        type: 'General',
        path: '/operations/plm/npd/concept',
        label: 'Concept',
        requiresSelection: false
    },
    {
        id: 'technical-design',
        name: 'Tech Design',
        description: 'Specs, BOM & CAD',
        icon: 'Architecture',
        component: TechnicalDesign,
        group: 'Phase 3: Development',
        type: 'Specific',
        path: '/operations/plm/npd/design',
        label: 'Design',
        requiresSelection: false
    },
    {
        id: 'costing-profitability',
        name: 'Costing',
        description: 'Margin analysis & ROI',
        icon: 'Calculate',
        component: CostingProfitability,
        group: 'Phase 2: Definition',
        type: 'Specific',
        path: '/operations/plm/npd/costing',
        label: 'Costing',
        requiresSelection: false
    },
    {
        id: 'prototype-pilot',
        name: 'Proto & Pilot',
        description: 'Validation & testing',
        icon: 'Science',
        component: PrototypePilot,
        group: 'Phase 3: Development',
        type: 'Specific',
        path: '/operations/plm/npd/prototype',
        label: 'Prototype',
        requiresSelection: false
    },
    {
        id: 'quality-compliance',
        name: 'Compliance',
        description: 'Risk (FMEA) & Regs',
        icon: 'VerifiedUser',
        component: QualityCompliance,
        group: 'Phase 3: Development',
        type: 'Specific',
        path: '/operations/plm/npd/compliance',
        label: 'Compliance',
        requiresSelection: false
    },
    {
        id: 'project-resource',
        name: 'Project Plan',
        description: 'Timeline & resources',
        icon: 'CalendarMonth',
        component: ProjectResource,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/plm/npd/project',
        label: 'Project',
        requiresSelection: false
    },
    {
        id: 'go-to-market',
        name: 'Launch (GTM)',
        description: 'Launch readiness',
        icon: 'RocketLaunch',
        component: GoToMarket,
        group: 'Phase 4: Launch',
        type: 'Specific',
        path: '/operations/plm/npd/launch',
        label: 'Launch',
        requiresSelection: false
    },
    {
        id: 'npd-analytics',
        name: 'Analytics',
        description: 'Pipeline & KPIs',
        icon: 'Insights',
        component: NPDAnalytics,
        group: 'Analytics',
        type: 'Specific',
        path: '/operations/plm/npd/analytics',
        label: 'Analytics',
        requiresSelection: false
    },
    {
        id: 'npd-workflow',
        name: 'Approvals',
        description: 'Governance log',
        icon: 'Rule',
        component: NPDWorkflow,
        group: 'Governance',
        type: 'Specific',
        path: '/operations/plm/npd/workflow',
        label: 'Approvals',
        requiresSelection: false
    },
    {
        id: 'master-data-creation',
        name: 'ERP Handoff',
        description: 'Create master data',
        icon: 'FactCheck',
        component: MasterDataCreation,
        group: 'Phase 4: Launch',
        type: 'Specific',
        path: '/operations/plm/npd/handoff',
        label: 'Handoff',
        requiresSelection: false
    }
];
