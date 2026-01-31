
export const fieldsConfig = {

  announcement_id: { label: 'Announcement ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },
  message: { label: 'Message', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  priority: { label: 'Priority', type: 'select', options: [{ id: 'normal', label: 'Normal' }, { id: 'high', label: 'High' }, { id: 'urgent', label: 'Urgent' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  date_posted: { label: 'Date Posted', type: 'date', faker: 'date.recent' },
  target_audience: { label: 'Target Audience', type: 'text', faker: 'lorem.words' }, // All, HR, Sales
  posted_by: { label: 'Posted By', type: 'text', faker: 'name.fullName' },
  bel: 'Read Confirm', type: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Internal Announcements';
export const collectionName = 'internal_announcements';
