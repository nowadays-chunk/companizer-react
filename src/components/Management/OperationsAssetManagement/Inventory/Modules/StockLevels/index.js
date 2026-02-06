import InventoryHeatmap from './InventoryHeatmap';

export const modules = [
    {
        id: 'inventory-heatmap',
        name: 'Inventory Heatmap',
        description: 'Visual distribution of stock value',
        icon: 'Apps',
        component: InventoryHeatmap,
        group: 'ERP',
        type: 'Specific',
        path: '/operations-asset-management/inventory/stock-levels/heatmap',
        label: 'Heatmap',
        requiresSelection: false
    }
];
