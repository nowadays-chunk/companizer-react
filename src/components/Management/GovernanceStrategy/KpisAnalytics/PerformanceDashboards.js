
export const fieldsConfig = {
  dashboard_id: { label: 'Dashboard ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  dashboard_name: { label: 'Dashboard Name', type: 'text', faker: 'hacker.noun' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' },

  department_id: { label: 'Department ID', type: 'text', faker: 'datatype.uuid' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  url: { label: 'URL', type: 'text', faker: 'internet.url' },
  owner: { label: 'Owner', type: 'text', faker: 'name.fullName' },
  refresh_rate: { label: 'Refresh Rate', type: 'text', faker: 'lorem.word' }, // e.g. Real-time, Daily
  widgets_count: { label: 'Widgets Count', type: 'number', faker: 'datatype.number' },
  is_public: { label: 'Is Public', type: 'checkbox', faker: 'datatype.boolean' },
  last_accessed: { label: 'Last Accessed', type: 'date', faker: 'date.recent' },
  tags: { label: 'Tags', type: 'text', faker: 'lorem.words' }
};

export const entityName = 'Performance Dashboards';
export const collectionName = 'performance_dashboards';