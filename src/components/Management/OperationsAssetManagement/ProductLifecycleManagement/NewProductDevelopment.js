import { modules } from './Modules/NewProductDevelopment';

export { modules };

export const fieldsConfig = {

    npd_id: { label: 'NPD ID', type: 'text', faker: 'datatype.uuid' },
    project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    concept_name: { label: 'Concept Name', type: 'text', faker: 'commerce.productName' },
    phase: { label: 'Phase', type: 'select', options: [{ id: 'ideation', label: 'Ideation' }, { id: 'feasibility', label: 'Feasibility' }, { id: 'development', label: 'Development' }, { id: 'testing', label: 'Testing' }, { id: 'launch', label: 'Launch' }], faker: 'random.arrayElement' },

    start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
    target_launch_date: { label: 'Target Launch Date', type: 'date', faker: 'date.future' },

    // Mandated
    // Extras
    budget: { label: 'Budget', type: 'number', faker: 'finance.amount' },
    lead_manager: { label: 'Lead Manager', type: 'text', faker: 'name.fullName' },
    market_potential: { label: 'Market Potential', type: 'text', faker: 'lorem.sentence' },
    risks: { label: 'Risks', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
    total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'New Product Development';
export const collectionName = 'new_product_development';
