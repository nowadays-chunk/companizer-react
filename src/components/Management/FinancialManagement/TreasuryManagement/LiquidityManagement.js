
export const fieldsConfig = {
  liquidity_id: { label: 'Liquidity ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  report_date: { label: 'Report Date', type: 'date', faker: 'date.recent' },

  current_ratio: { label: 'Current Ratio', type: 'number', faker: 'datatype.float' },
  quick_ratio: { label: 'Quick Ratio', type: 'number', faker: 'datatype.float' },

  cash_on_hand: { label: 'Cash on Hand', type: 'number', faker: 'finance.amount' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  net_working_capital: { label: 'Net Working Capital', type: 'number', faker: 'finance.amount' },
  days_sales_outstanding: { label: 'DSO', type: 'number', faker: 'datatype.float' },
  days_payable_outstanding: { label: 'DPO', type: 'number', faker: 'datatype.float' },
  status: { label: 'Status', type: 'select', options: [{ id: 'healthy', label: 'Healthy' }, { id: 'warning', label: 'Warning' }, { id: 'critical', label: 'Critical' }], faker: 'random.arrayElement' }
};

export const entityName = 'Liquidity Management';
export const collectionName = 'liquidity_management';
