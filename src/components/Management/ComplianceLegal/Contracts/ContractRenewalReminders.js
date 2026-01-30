
export const fieldsConfig = {
  reminder_id: { label: 'Reminder ID', type: 'text', faker: 'datatype.uuid' },
  contract_id: { label: 'Contract ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  reminder_date: { label: 'Reminder Date', type: 'date', faker: 'date.future' },
  message: { label: 'Message', type: 'text', faker: 'lorem.sentence' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  recipient_email: { label: 'Recipient Email', type: 'email', faker: 'internet.email' },
  is_sent: { label: 'Is Sent', type: 'checkbox', faker: 'datatype.boolean' },
  days_before_expiry: { label: 'Days Before Expiry', type: 'number', faker: 'datatype.number' },
  action_required: { label: 'Action Required', type: 'select', options: [{ id: 'review', label: 'Review' }, { id: 'negotiate', label: 'Negotiate' }, { id: 'cancel', label: 'Cancel' }], faker: 'random.arrayElement' }
};

export const entityName = 'Contract Renewal Reminders';
export const collectionName = 'contract_renewal_reminders';
