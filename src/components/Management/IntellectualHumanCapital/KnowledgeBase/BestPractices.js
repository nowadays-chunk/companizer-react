
export const fieldsConfig = {

  practice_id: { label: 'Practice ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  category: { label: 'Category', type: 'text', faker: 'commerce.department' },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  // Extras
  author: { label: 'Author', type: 'text', faker: 'name.fullName' },
  date_added: { label: 'Date Added', type: 'date', faker: 'date.past' },
  approval_status: { label: 'Approval Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'approved', label: 'Approved' }, { id: 'archived', label: 'Archived' }], faker: 'random.arrayElement' },
  tags: { label: 'Tags', type: 'text', faker: 'lorem.words' },
  rating: { label: 'Rating', type: 'number', faker: 'datatype.number' }, // 1-5
  type: 'number', faker: 'datatype.number',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Best Practices';
export const collectionName = 'best_practices';
