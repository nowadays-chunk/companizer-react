
export const fieldsConfig = {

  course_id: { label: 'Course ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.words' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  delivery_method: { label: 'Delivery Method', type: 'select', options: [{ id: 'online_self_paced', label: 'Online Self-Paced' }, { id: 'instructor_led', label: 'Instructor Led' }, { id: 'hybrid', label: 'Hybrid' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  duration_minutes: { label: 'Duration (Min)', type: 'number', faker: 'datatype.number' },
  provider: { label: 'Provider', type: 'text', faker: 'company.name' }, // Internal or External
  skill_level: { label: 'Skill Level', type: 'select', options: [{ id: 'beginner', label: 'Beginner' }, { id: 'intermediate', label: 'Intermediate' }, { id: 'advanced', label: 'Advanced' }], faker: 'random.arrayElement' },
  rating: { label: 'Rating', type: 'number', faker: 'datatype.float' },
  type: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Course Catalog';
export const collectionName = 'course_catalog';
