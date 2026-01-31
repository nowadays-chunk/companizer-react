
export const fieldsConfig = {

  reminder_id: { label: 'Reminder ID', type: 'text', faker: 'datatype.uuid' },
  contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  reminder_date: { label: 'Reminder Date', type: 'date', faker: 'date.future' },
  message: { label: 'Message', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  // Extras
  recipient_email: { label: 'Recipient Email', type: 'email', faker: 'internet.email' },
  is_sent: { label: 'Is Sent', type: 'checkbox', faker: 'datatype.boolean' },
  days_before_expiry: { label: 'Days Before Expiry', type: 'number', faker: 'datatype.number' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Contract Renewal Reminders';
export const collectionName = 'contract_renewal_reminders';
