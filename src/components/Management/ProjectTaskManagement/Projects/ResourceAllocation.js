
export const fieldsConfig = {

  allocation_id: { label: 'Allocation ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  resource_id: { label: 'Resource ID', type: 'text', faker: 'datatype.uuid' }, // Employee or Equipment
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  role: { label: 'Role', type: 'text', faker: 'name.jobTitle' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.future' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },

  hours_allocated: { label: 'Hours Allocated', type: 'number', faker: 'datatype.number' },
  utilization_percentage: { label: 'Utilization (%)', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Hourly cost

  // Extras
  status: { label: 'Status', type: 'select', options: [{ id: 'requested', label: 'Requested' }, { id: 'approved', label: 'Approved' }, { id: 'active', label: 'Active' }, { id: 'released', label: 'Released' }], faker: 'random.arrayElement' },
  cost_center_id: { label: 'Cost Center ID', type: 'text', faker: 'datatype.uuid' },
  manager_id: { label: 'Manager ID', type: 'text', faker: 'datatype.uuid' },
  skill_required: { label: 'Skill Required', type: 'text', faker: 'lorem.word' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Resource Allocation';
export const collectionName = 'resource_allocation';