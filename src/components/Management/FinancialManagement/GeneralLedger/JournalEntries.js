
export const fieldsConfig = {

  journal_id: { label: 'Journal ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  entry_date: { label: 'Entry Date', type: 'date', faker: 'date.recent' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  total_debit: { label: 'Total Debit', type: 'number', faker: 'finance.amount' },
  total_credit: { label: 'Total Credit', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  reference_number: { label: 'Reference Number', type: 'text', faker: 'finance.account' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'posted', label: 'Posted' }, { id: 'reversed', label: 'Reversed' }], faker: 'random.arrayElement' },
  period_id: { label: 'Period ID', type: 'text', faker: 'datatype.uuid' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Journal Entries';
export const collectionName = 'journal_entries';
