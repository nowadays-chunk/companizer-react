
export const fieldsConfig = {

  dashboard_id: { label: 'Dashboard ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  dashboard_name: { label: 'Dashboard Name', type: 'text', faker: 'hacker.noun' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  department_id: { label: 'Department ID', type: 'text', faker: 'datatype.uuid' },

  // Mandated
  // Extras
  url: { label: 'URL', type: 'text', faker: 'internet.url' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  refresh_rate: { label: 'Refresh Rate', type: 'text', faker: 'lorem.word' }, // e.g. Real-time, Daily
  widgets_count: { label: 'Widgets Count', type: 'number', faker: 'datatype.number' },
  is_public: { label: 'Is Public', type: 'checkbox', faker: 'datatype.boolean' },
  last_accessed: { label: 'Last Accessed', type: 'date', faker: 'date.recent' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Performance Dashboards';
export const collectionName = 'performance_dashboards';