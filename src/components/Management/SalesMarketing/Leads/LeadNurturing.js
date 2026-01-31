
export const fieldsConfig = {

  nurture_id: { label: 'Nurture ID', type: 'text', faker: 'datatype.uuid' },
  lead_id: { label: 'Lead ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  activity_type: { label: 'Activity Type', type: 'select', options: [{ id: 'email_sequence', label: 'Email Sequence' }, { id: 'webinar', label: 'Webinar' }, { id: 'call', label: 'Call' }], faker: 'random.arrayElement' },
  activity_date: { label: 'Activity Date', type: 'date', faker: 'date.recent' },

  engagement_score: { label: 'Engagement Score', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  campaign_step: { label: 'Campaign Step', type: 'number', faker: 'datatype.number' },
  content_id: { label: 'Content ID', type: 'text', faker: 'datatype.uuid' }, // Whitepaper, video, etc.
  response_received: { label: 'Response Received', type: 'checkbox', faker: 'datatype.boolean' },
  next_action_date: { label: 'Next Action Date', type: 'date', faker: 'date.future' },
  assigned_rep_id: { label: 'Assigned Rep ID', type: 'text', faker: 'datatype.uuid' },
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  email_opened: { label: 'Email Opened', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Lead Nurturing';
export const collectionName = 'lead_nurturing';