
import RealTimeInventory from './RealTimeInventory';
import WarehouseMgmt from './WarehouseMgmt';
import StockStatus from './StockStatus';
import ReorderPlanning from './ReorderPlanning';
import Traceability from './Traceability';
import MultiEntityStock from './MultiEntityStock';
import Reservations from './Reservations';
import QualityCompliance from './QualityCompliance';
import InventoryValuation from './InventoryValuation';
import StockAlerts from './StockAlerts';
import DemandSignals from './DemandSignals';
import Transfers from './Transfers';
import StockReporting from './StockReporting';

export const modules = [
    {
        id: 'real-time-inventory',
        name: 'Real-Time View',
        description: 'ATP, On-Hand, Reserved',
        icon: 'Inventory',
        component: RealTimeInventory,
        group: 'Core Visibility',
        type: 'General',
        path: '/operations/inventory/levels/realtime',
        label: 'Stock',
        requiresSelection: false
    },
    {
        id: 'warehouse-mgmt',
        name: 'Warehouses',
        description: 'Bins, Zones, Locations',
        icon: 'Warehouse',
        component: WarehouseMgmt,
        group: 'Core Visibility',
        type: 'General',
        path: '/operations/inventory/levels/warehouses',
        label: 'Locations',
        requiresSelection: false
    },
    {
        id: 'stock-status',
        name: 'Status Control',
        description: 'Blocked, QC, Scrap',
        icon: 'Block',
        component: StockStatus,
        group: 'Control',
        type: 'Specific',
        path: '/operations/inventory/levels/status',
        label: 'Status',
        requiresSelection: false
    },
    {
        id: 'reorder-planning',
        name: 'Reorder Planning',
        description: 'Min/Max, EOQ, Safety Stock',
        icon: 'Timeline',
        component: ReorderPlanning,
        group: 'Planning',
        type: 'Specific',
        path: '/operations/inventory/levels/planning',
        label: 'Reorder',
        requiresSelection: false
    },
    {
        id: 'traceability',
        name: 'Traceability',
        description: 'Lot, Batch, Serial',
        icon: 'QrCodeScanner',
        component: Traceability,
        group: 'Control',
        type: 'Specific',
        path: '/operations/inventory/levels/traceability',
        label: 'Trace',
        requiresSelection: false
    },
    {
        id: 'multi-entity',
        name: 'Multi-Entity',
        description: 'Ownership & Consignment',
        icon: 'Business',
        component: MultiEntityStock,
        group: 'Core Visibility',
        type: 'Specific',
        path: '/operations/inventory/levels/entity',
        label: 'Entity',
        requiresSelection: false
    },
    {
        id: 'reservations',
        name: 'Reservations',
        description: 'Allocations & Backorders',
        icon: 'Assignment',
        component: Reservations,
        group: 'Control',
        type: 'Specific',
        path: '/operations/inventory/levels/reservations',
        label: 'Reserve',
        requiresSelection: false
    },
    {
        id: 'quality-compliance',
        name: 'Quality',
        description: 'Inspection & Holds',
        icon: 'VerifiedUser',
        component: QualityCompliance,
        group: 'Control',
        type: 'Specific',
        path: '/operations/inventory/levels/quality',
        label: 'QC',
        requiresSelection: false
    },
    {
        id: 'valuation',
        name: 'Valuation',
        description: 'Finance & Costing',
        icon: 'AttachMoney',
        component: InventoryValuation,
        group: 'Finance',
        type: 'Specific',
        path: '/operations/inventory/levels/valuation',
        label: 'Value',
        requiresSelection: false
    },
    {
        id: 'alerts',
        name: 'Alerts',
        description: 'Stock Warnings',
        icon: 'NotificationsActive',
        component: StockAlerts,
        group: 'Planning',
        type: 'General',
        path: '/operations/inventory/levels/alerts',
        label: 'Alerts',
        requiresSelection: false
    },
    {
        id: 'demand',
        name: 'Demand',
        description: 'Forecast Signals',
        icon: 'ShowChart',
        component: DemandSignals,
        group: 'Planning',
        type: 'Specific',
        path: '/operations/inventory/levels/demand',
        label: 'Demand',
        requiresSelection: false
    },
    {
        id: 'transfers',
        name: 'Transfers',
        description: 'Rebalancing & Moves',
        icon: 'LocalShipping',
        component: Transfers,
        group: 'Execution',
        type: 'Specific',
        path: '/operations/inventory/levels/transfers',
        label: 'Transfers',
        requiresSelection: false
    },
    {
        id: 'reporting',
        name: 'Reporting',
        description: 'KPI Dashboard',
        icon: 'Assessment',
        component: StockReporting,
        group: 'Reporting',
        type: 'General',
        path: '/operations/inventory/levels/reporting',
        label: 'Report',
        requiresSelection: false
    }
];
