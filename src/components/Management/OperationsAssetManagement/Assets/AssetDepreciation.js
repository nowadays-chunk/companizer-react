
export const fieldsConfig = {
  record_id: { label: 'Record ID', type: 'text', faker: 'datatype.uuid' },
  asset_id: { label: 'Asset ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  fiscal_year: { label: 'Fiscal Year', type: 'number', faker: 'date.past' },
  depreciation_method: { label: 'Method', type: 'select', options: [{ id: 'straight_line', label: 'Straight Line' }, { id: 'declining_balance', label: 'Declining Balance' }], faker: 'random.arrayElement' },

  opening_book_value: { label: 'Opening Book Value', type: 'number', faker: 'finance.amount' },
  depreciation_expense: { label: 'Depreciation Expense', type: 'number', faker: 'finance.amount' },
  closing_book_value: { label: 'Closing Book Value', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  useful_life: { label: 'Useful Life (Years)', type: 'number', faker: 'datatype.number' },
  salvage_value: { label: 'Salvage Value', type: 'number', faker: 'finance.amount' },
  date_calculated: { label: 'Date Calculated', type: 'date', faker: 'date.recent' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' }
};

export const entityName = 'Asset Depreciation';
export const collectionName = 'asset_depreciation_ops';
