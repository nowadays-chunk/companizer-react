
export const fieldsConfig = {

  // --- Header Information ---
  invoice_id: { label: 'Internal ID', type: 'text', faker: 'datatype.uuid', hidden: true },
  vendor_id: { label: 'Vendor', type: 'related', collection: 'vendors', displayField: 'name', faker: 'datatype.uuid' },
  invoice_number: { label: 'Invoice Number', type: 'text', required: true, faker: 'finance.account' },
  invoice_date: { label: 'Invoice Date', type: 'date', required: true, faker: 'date.past' },
  due_date: { label: 'Due Date', type: 'date', required: true, faker: 'date.future' },
  posting_date: { label: 'Posting Date', type: 'date', faker: 'date.recent' },

  // --- Financials ---
  currency: { label: 'Currency', type: 'select', options: [{ id: 'USD', label: 'USD' }, { id: 'EUR', label: 'EUR' }, { id: 'GBP', label: 'GBP' }], faker: 'finance.currencyCode' },
  total_amount: { label: 'Total Amount', type: 'number', required: true, faker: 'finance.amount' },
  tax_amount: { label: 'Tax Total', type: 'number', faker: 'finance.amount' },
  net_amount: { label: 'Net Amount', type: 'number', faker: 'finance.amount' },
  discount_amount: { label: 'Discount', type: 'number', faker: 'finance.amount' },

  // --- Matching & PO ---
  po_number: { label: 'PO Number', type: 'related', collection: 'purchase_orders', displayField: 'po_number', faker: 'finance.account' },
  grn_number: { label: 'Goods Receipt (GRN)', type: 'text', faker: 'datatype.number' },
  match_status: {
    label: 'Match Status', type: 'select', options: [
      { id: 'unmatched', label: 'Unmatched' },
      { id: '2_way_match', label: '2-Way Matched' },
      { id: '3_way_match', label: '3-Way Matched' },
      { id: 'variance_hold', label: 'Variance Hold' }
    ], faker: 'random.arrayElement'
  },
  variance_amount: { label: 'Variance Amount', type: 'number', faker: 'finance.amount' },

  // --- Payment & Terms ---
  payment_terms: { label: 'Payment Terms', type: 'select', options: [{ id: 'net30', label: 'Net 30' }, { id: 'net60', label: 'Net 60' }, { id: 'immediate', label: 'Immediate' }], faker: 'random.arrayElement' },
  payment_method: { label: 'Payment Method', type: 'select', options: [{ id: 'check', label: 'Check' }, { id: 'wire', label: 'Wire' }, { id: 'ach', label: 'ACH' }], faker: 'random.arrayElement' },
  payment_status: { label: 'Payment Status', type: 'select', options: [{ id: 'unpaid', label: 'Unpaid' }, { id: 'partial', label: 'Partial' }, { id: 'paid', label: 'Paid' }], faker: 'random.arrayElement' },
  early_payment_discount_date: { label: 'Early Disc. Date', type: 'date', faker: 'date.future' },

  // --- Classification & GL ---
  gl_account: { label: 'GL Account', type: 'text', faker: 'finance.account' },
  cost_center: { label: 'Cost Center', type: 'text', faker: 'finance.accountName' },
  project_code: { label: 'Project Code', type: 'text', faker: 'datatype.string' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  is_intercompany: { label: 'Intercompany', type: 'checkbox', faker: 'datatype.boolean' },

  // --- Capture & Audit ---
  source: { label: 'Source', type: 'select', options: [{ id: 'manual', label: 'Manual' }, { id: 'ocr', label: 'OCR' }, { id: 'email', label: 'Email' }, { id: 'edi', label: 'EDI' }, { id: 'portal', label: 'Vendor Portal' }], faker: 'random.arrayElement' },
  ocr_confidence: { label: 'OCR Confidence', type: 'number', hidden: true, faker: 'datatype.number' },

  // --- Workflow ---
  status: {
    label: 'Status', type: 'select', options: [
      { id: 'draft', label: 'Draft' },
      { id: 'ocr_processing', label: 'Processing' },
      { id: 'under_review', label: 'Under Review' },
      { id: 'finance_review', label: 'Finance Review' },
      { id: 'approved', label: 'Approved' },
      { id: 'ready_for_payment', label: 'Ready for Pay' },
      { id: 'paid', label: 'Paid' },
      { id: 'disputed', label: 'Disputed' },
      { id: 'rejected', label: 'Rejected' },
      { id: 'archived', label: 'Archived' }
    ], faker: 'random.arrayElement'
  },

  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  processing_step: { label: 'Workflow Step', type: 'text', hidden: true, faker: 'random.arrayElement' },
  accountable_id: { label: 'Owner', type: 'text', hidden: true, faker: 'datatype.uuid' },


};

export const entityName = 'Vendor Invoices';
export const collectionName = 'vendor_invoices';
