
export const fieldsConfig = {

  comm_id: { label: 'Comm ID', type: 'text', faker: 'datatype.uuid' },
  incident_id: { label: 'Incident ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  message_title: { label: 'Message Title', type: 'text', faker: 'lorem.sentence' },
  sent_date: { label: 'Sent Date', type: 'date', faker: 'date.recent' },

  recipient_group: { label: 'Recipient Group', type: 'select', options: [{ id: 'all_employees', label: 'All Employees' }, { id: 'execs', label: 'Execs' }, { id: 'safety_team', label: 'Safety Team' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  message_body: { label: 'Message Body', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },
  delivery_method: { label: 'Delivery Method', type: 'select', options: [{ id: 'sms', label: 'SMS' }, { id: 'email', label: 'Email' }, { id: 'pa_system', label: 'PA System' }], faker: 'random.arrayElement' },
  success_rate: { label: 'Success Rate (%)', type: 'number', faker: 'datatype.float' },
  sender_name: { label: 'Sender Name', type: 'text', faker: 'name.fullName' },
  acknowledgement_required: { label: 'Acknowledgement Required', type: 'checkbox', faker: 'datatype.boolean' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Emergency Communication';
export const collectionName = 'emergency_communication';
