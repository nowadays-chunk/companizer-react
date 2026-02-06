import LeadFunnel from './LeadFunnel';

export const modules = [
    {
        id: 'lead-funnel',
        name: 'Lead Funnel',
        description: 'Visual representation of lead conversion stages',
        icon: 'FilterList',
        component: LeadFunnel,
        group: 'CRM',
        type: 'Specific',
        path: '/sales-marketing/leads/lead-scoring/funnel',
        label: 'Funnel View',
        requiresSelection: false
    }
];
