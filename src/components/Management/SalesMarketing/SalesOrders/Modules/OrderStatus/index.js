import OrderFlow from './OrderFlow';

export const modules = [
    {
        id: 'order-flow',
        name: 'Order Tracker',
        description: 'Step-by-step order status tracking',
        icon: 'LinearScale',
        component: OrderFlow,
        group: 'ERP',
        type: 'Specific',
        path: '/sales-marketing/sales-orders/order-status/tracker',
        label: 'Order Flow',
        requiresSelection: false
    }
];
