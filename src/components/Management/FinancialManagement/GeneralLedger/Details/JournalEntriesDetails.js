
export const fieldsConfig = {
  // Main Header
  journal_number: { label: 'Journal #', type: 'text', readOnly: true },
  posting_date: { label: 'Posting Date', type: 'date', readOnly: true },
  status: { label: 'Status', type: 'text', readOnly: true },

  description: { label: 'Description', type: 'text', multiline: true, rows: 3 },

  total_debit: { label: 'Total Debit', type: 'number', readOnly: true },
  total_credit: { label: 'Total Credit', type: 'number', readOnly: true },
  currency_code: { label: 'Currency', type: 'text', readOnly: true },

  // Metadata
  created_by: { label: 'Created By', type: 'text', readOnly: true },
  posted_at: { label: 'Posted At', type: 'date', readOnly: true },
  posted_by: { label: 'Posted By', type: 'text', readOnly: true },
};

export const entityName = 'Journal Entries Details';
export const collectionName = 'journal_entries'; // Pointing to main collection as we don't separate details table currently

// Note: The specific Manager UI handles the lines complexity.
