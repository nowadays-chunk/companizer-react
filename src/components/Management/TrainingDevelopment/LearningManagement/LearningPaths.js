
export const fieldsConfig = {

  path_id: { label: 'Path ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  path_name: { label: 'Path Name', type: 'text', faker: 'lorem.words' },
  target_role: { label: 'Target Role', type: 'text', faker: 'name.jobTitle' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  course_count: { label: 'Course Count', type: 'number', faker: 'datatype.number' },
  estimated_duration_hours: { label: 'Duration (Hours)', type: 'number', faker: 'datatype.number' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  is_mandatory_for_role: { label: 'Is Mandatory', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Learning Paths';
export const collectionName = 'learning_paths';
