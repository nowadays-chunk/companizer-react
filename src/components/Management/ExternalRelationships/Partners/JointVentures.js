
export const fieldsConfig = {
  jv_id: { label: 'JV ID', type: 'text', faker: 'datatype.uuid' },
  partner_id: { label: 'Partner ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  venture_name: { label: 'Venture Name', type: 'text', faker: 'company.name' },
  formation_date: { label: 'Formation Date', type: 'date', faker: 'date.past' },
  dissolution_date: { label: 'Dissolution Date', type: 'date', faker: 'date.future' },

  equity_split: { label: 'Equity Split (%)', type: 'number', faker: 'datatype.number' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  capital_contribution: { label: 'Capital Contribution', type: 'number', faker: 'finance.amount' },
  primary_contact: { label: 'Primary Contact', type: 'text', faker: 'name.fullName' },
  governing_law: { label: 'Governing Law', type: 'text', faker: 'address.country' },
  operating_agreement_url: { label: 'Operating Agreement URL', type: 'text', faker: 'internet.url' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'inactive', label: 'Inactive' }, { id: 'dissolved', label: 'Dissolved' }], faker: 'random.arrayElement' },
  revenue_share: { label: 'Revenue Share', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Joint Ventures';
export const collectionName = 'joint_ventures';
