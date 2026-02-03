
export const fieldsConfig = {
  // --- Identity ---
  code: { label: 'Term Code', type: 'text', required: true, faker: 'random.alphaNumeric' }, // e.g., NET30
  term_name: { label: 'Term Name', type: 'text', required: true, faker: 'lorem.words' }, // e.g., Net 30 Days
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  is_active: { label: 'Active', type: 'checkbox', defaultValue: true },
  is_default: { label: 'Default Term', type: 'checkbox', defaultValue: false },

  // --- Validity ---
  effective_from: { label: 'Effective From', type: 'date', faker: 'date.past' },
  effective_to: { label: 'Effective To', type: 'date', faker: 'date.future' },

  // --- Due Date Calculation ---
  due_date_method: {
    label: 'Due Date Method',
    type: 'select',
    options: [
      { id: 'fixed_days', label: 'Fixed Days (Net X)' },
      { id: 'end_of_month', label: 'End of Month' },
      { id: 'day_of_month', label: 'Specific Day of Month' },
      { id: 'fixed_date', label: 'Fixed Calendar Date' }
    ],
    required: true,
    defaultValue: 'fixed_days'
  },
  due_date_basis: {
    label: 'Calculate From',
    type: 'select',
    options: [
      { id: 'invoice_date', label: 'Invoice Date' },
      { id: 'receipt_date', label: 'Goods Receipt Date' },
      { id: 'approval_date', label: 'Approval Date' }
    ],
    defaultValue: 'invoice_date'
  },
  days_due: { label: 'Days Offset', type: 'number', help: 'Number of days to add (e.g. 30)', faker: 'datatype.number' },
  cutoff_day: { label: 'EOM Cutoff Day', type: 'number', help: 'If invoice day > cutoff, move to next month', faker: 'datatype.number' },

  // --- Advanced Rules (JSON) ---
  discount_rules: {
    label: 'Discount Rules',
    type: 'json',
    help: 'Array of { days: number, percent: number }',
    hidden: true // Will be managed by custom UI
  },
  penalty_rules: {
    label: 'Penalty Rules',
    type: 'json',
    hidden: true
  },
  installment_plan: {
    label: 'Installment Plan',
    type: 'json',
    hidden: true
  },

  // --- Classification ---
  term_category: {
    label: 'Category',
    type: 'select',
    options: [
      { id: 'standard', label: 'Standard' },
      { id: 'promo', label: 'Promotional' },
      { id: 'contract', label: 'Contract Specific' }
    ]
  },
  accountable_id: { label: 'Owner', type: 'text', hidden: true, faker: 'datatype.uuid' },
};


export const entityName = 'Payment Terms';
export const collectionName = 'payment_terms';

export default {
  fieldsConfig,
  entityName,
  collectionName
};
