import ActivityTimeline from './ActivityTimeline';

export const modules = [
    {
        id: 'activity-timeline',
        name: 'Activity Timeline',
        description: 'Chronological view of customer interactions',
        icon: 'Timeline',
        component: ActivityTimeline,
        group: 'CRM',
        type: 'Specific',
        path: '/sales-marketing/clients-customers/customer-history/timeline',
        label: 'Timeline',
        requiresSelection: false
    }
];
