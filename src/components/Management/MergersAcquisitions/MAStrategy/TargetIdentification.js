
export const fieldsConfig = {

  target_id: { label: 'Target ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  target_company_name: { label: 'Target Company Name', type: 'text', faker: 'company.name' },
  industry: { label: 'Industry', type: 'text', faker: 'commerce.department' },

  region: { label: 'Region', type: 'text', faker: 'address.country' },

  // Mandated
  // Extras
  revenue: { label: 'Revenue', type: 'number', faker: 'finance.amount' },
  ebitda: { label: 'EBITDA', type: 'number', faker: 'finance.amount' },
  strategic_fit: { label: 'Strategic Fit', type: 'select', options: [{ id: 'high', label: 'High' }, { id: 'medium', label: 'Medium' }, { id: 'low', label: 'Low' }], faker: 'random.arrayElement' },
  contact_person: { label: 'Contact Person', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'identified', label: 'Identified' }, { id: 'contacted', label: 'Contacted' }, { id: 'negotiating', label: 'Negotiating' }, { id: 'acquired', label: 'Acquired' }, { id: 'passed', label: 'Passed' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Target Identification';
export const collectionName = 'target_identification';