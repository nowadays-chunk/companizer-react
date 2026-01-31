
export const fieldsConfig = {

  // --- ENRICHED BUSINESS FIELDS (Auto-Injected) ---

  // --- COMMON METADATA ---
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  priority: { label: 'Priority', type: 'select', options: [{id: 'low', label: 'Low'}, {id: 'medium', label: 'Medium'}, {id: 'high', label: 'High'}], faker: 'random.arrayElement' },
  status_detail: { label: 'Detail Status', type: 'select', options: [{id: 'pending', label: 'Pending'}, {id: 'verified', label: 'Verified'}, {id: 'rejected', label: 'Rejected'}], faker: 'random.arrayElement' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.recent' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },


  // --- FINANCIAL FIELDS ---
  transaction_date: { label: 'Transaction Date', type: 'date', faker: 'date.recent' },
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  currency: { label: 'Currency', type: 'select', options: [{id: 'USD', label: 'USD'}, {id: 'EUR', label: 'EUR'}], faker: 'finance.currencyCode' },
  exchange_rate: { label: 'Exchange Rate', type: 'number', faker: 'finance.amount' },
  tax_amount: { label: 'Tax Amount', type: 'number', faker: 'finance.amount' },
  net_amount: { label: 'Net Amount', type: 'number', faker: 'finance.amount' },
  payment_method: { label: 'Payment Method', type: 'select', options: [{id: 'bank', label: 'Bank'}, {id: 'card', label: 'Card'}], faker: 'finance.transactionType' },
  invoice_reference: { label: 'Invoice Ref', type: 'text', faker: 'finance.account' },
  cost_center: { label: 'Cost Center', type: 'text', faker: 'finance.accountName' },
  bank_account: { label: 'Bank Account', type: 'text', faker: 'finance.account' },
  ledger_code: { label: 'Ledger Code', type: 'text', faker: 'finance.bic' },
  approval_code: { label: 'Approval Code', type: 'text', faker: 'datatype.string' },
  is_reimbursable: { label: 'Reimbursable', type: 'checkbox', faker: 'datatype.boolean' },
  receipt_url: { label: 'Receipt URL', type: 'text', faker: 'internet.url' },

// -------------------------------------------------

  // Standard Detail Fields
  detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
  parent_id: { label: 'Parent ID', type: 'text', faker: 'datatype.uuid' }, // Foreign key to parent entity

  item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },

  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' }
};

export const entityName = 'Variance Analysis Details';
export const collectionName = 'variance_analysis_details';
