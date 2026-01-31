
export const fieldsConfig = {

  investment_id: { label: 'Investment ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  initiative_name: { label: 'Initiative Name', type: 'text', faker: 'lorem.words' },
  amount_invested: { label: 'Amount', type: 'number', faker: 'finance.amount' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },

  // Mandated
  // Extras
  partner_org: { label: 'Partner Org', type: 'text', faker: 'company.name' },
  beneficiaries: { label: 'Beneficiaries', type: 'text', faker: 'lorem.sentence' },
  impact_description: { label: 'Impact', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Community Investment';
export const collectionName = 'community_investment';
