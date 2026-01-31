
export const fieldsConfig = {

  newsletter_id: { label: 'Newsletter ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  subject: { label: 'Subject', type: 'text', faker: 'lorem.sentence' },
  send_date: { label: 'Send Date', type: 'date', faker: 'date.future' },

  // Mandated
  // Extras
  content_summary: { label: 'Content Summary', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  distribution_list: { label: 'List', type: 'text', faker: 'lorem.word' },
  open_rate: { label: 'Open Rate (%)', type: 'number', faker: 'datatype.float' },
  click_rate: { label: 'Click Rate (%)', type: 'number', faker: 'datatype.float' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Internal Newsletters';
export const collectionName = 'internal_newsletters';
