
export const fieldsConfig = {

  csr_id: { label: 'CSR ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  program_name: { label: 'Program Name', type: 'text', faker: 'lorem.words' },
  focus_area: { label: 'Focus Area', type: 'select', options: [{ id: 'community', label: 'Community' }, { id: 'environment', label: 'Environment' }, { id: 'workplace', label: 'Workplace' }], faker: 'random.arrayElement' },

  budget_allocated: { label: 'Budget Allocated', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  start_year: { label: 'Start Year', type: 'number', faker: 'date.past' },
  program_manager: { label: 'Program Manager', type: 'text', faker: 'name.fullName' },
  partners: { label: 'Partners', type: 'text', faker: 'company.name' }, // CSV
  goals: { label: 'Goals', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  achievements: { label: 'Achievements', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  website_url: { label: 'Website URL', type: 'text', faker: 'internet.url' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Corporate Social Responsibility';
export const collectionName = 'environmental_social_governance_csr';
