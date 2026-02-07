
// Financial Management
// ... (Import configs as needed)

// Sales & Marketing
import { fieldsConfig as OrderStatusConfig, collectionName as OrderStatusCollection } from './components/Management/SalesMarketing/SalesOrders/OrderStatus';
import { fieldsConfig as LeadScoringConfig, collectionName as LeadScoringCollection } from './components/Management/SalesMarketing/Leads/LeadScoring';

// Map entity slugs (from URL) to their configuration
const analysisRegistry = {
    // Sales & Marketing
    'order-status': {
        fieldsConfig: OrderStatusConfig,
        collectionName: OrderStatusCollection,
        title: 'Order Status Analytics'
    },
    'lead-scoring': {
        fieldsConfig: LeadScoringConfig,
        collectionName: LeadScoringCollection,
        title: 'Lead Scoring Analytics'
    },

    // Add more mappings here as we migrate them...
};

export default analysisRegistry;
