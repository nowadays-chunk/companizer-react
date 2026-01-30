
export const fieldsConfig = {
    investment_id: { label: 'Investment ID', type: 'text', faker: 'datatype.uuid' },
    accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

    initiative_name: { label: 'Initiative Name', type: 'text', faker: 'lorem.words' },
    amount_invested: { label: 'Amount', type: 'number', faker: 'finance.amount' },

    start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },

    // Mandated
    processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

    // Extras
    partner_org: { label: 'Partner Org', type: 'text', faker: 'company.name' },
    beneficiaries: { label: 'Beneficiaries', type: 'text', faker: 'lorem.sentence' },
    impact_description: { label: 'Impact', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
    status: { label: 'Status', type: 'select', options: [{ id: 'ongoing', label: 'Ongoing' }, { id: 'completed', label: 'Completed' }, { id: 'planned', label: 'Planned' }], faker: 'random.arrayElement' }
};

export const entityName = 'Community Investment';
export const collectionName = 'community_investment';
