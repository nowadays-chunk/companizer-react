import PipelineKanban from './PipelineKanban';

export const modules = [
    {
        id: 'pipeline-kanban',
        name: 'Pipeline Board',
        description: 'Kanban view of opportunity stages',
        icon: 'ViewKanban',
        component: PipelineKanban,
        group: 'CRM',
        type: 'Specific',
        path: '/sales-marketing/opportunities/sales-forecasting/kanban',
        label: 'Kanban Board',
        requiresSelection: false
    }
];
