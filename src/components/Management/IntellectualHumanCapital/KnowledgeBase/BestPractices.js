
export const fieldsConfig = {
  practice_id: { label: 'Practice ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  category: { label: 'Category', type: 'text', faker: 'commerce.department' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  author: { label: 'Author', type: 'text', faker: 'name.fullName' },
  date_added: { label: 'Date Added', type: 'date', faker: 'date.past' },
  approval_status: { label: 'Approval Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'approved', label: 'Approved' }, { id: 'archived', label: 'Archived' }], faker: 'random.arrayElement' },
  tags: { label: 'Tags', type: 'text', faker: 'lorem.words' },
  rating: { label: 'Rating', type: 'number', faker: 'datatype.number' }, // 1-5
  view_count: { label: 'View Count', type: 'number', faker: 'datatype.number' }
};

export const entityName = 'Best Practices';
export const collectionName = 'best_practices';
