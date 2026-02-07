
import modules from './Modules/CustomerInvoices/';

export const fieldsConfig = {
  // ==========================================
  // 1. HEADER & IDENTITY
  // ==========================================
  invoice_id: { label: 'Invoice ID', type: 'text', faker: 'datatype.uuid', hidden: true },
  customer_id: { label: 'Customer', type: 'related', collection: 'customers', displayField: 'name', required: true, faker: 'datatype.uuid' },
  invoice_number: { label: 'Invoice Number', type: 'text', required: true, faker: 'finance.account' },
  invoice_date: { label: 'Invoice Date', type: 'date', required: true, faker: 'date.recent' },
  due_date: { label: 'Due Date', type: 'date', required: true, faker: 'date.future' },

  // Creation Source
  creation_source: {
    label: 'Source',
    type: 'select',
    options: [
      { id: 'manual', label: 'Manual' },
      { id: 'sales_order', label: 'Sales Order' },
      { id: 'shipment', label: 'Shipment' },
      { id: 'project_milestone', label: 'Project Milestone' },
      { id: 'timesheet', label: 'Timesheet' },
      { id: 'subscription', label: 'Subscription' },
      { id: 'api', label: 'API' },
      { id: 'self_billing', label: 'Self Billing' }
    ],
    defaultValue: 'manual',
    faker: 'random.arrayElement'
  },

  invoice_type: {
    label: 'Invoice Type',
    type: 'select',
    options: [
      { id: 'standard', label: 'Standard Invoice' },
      { id: 'proforma', label: 'Proforma Invoice' },
      { id: 'credit_note', label: 'Credit Note' },
      { id: 'debit_note', label: 'Debit Note' },
      { id: 'down_payment', label: 'Down Payment' },
      { id: 'final_invoice', label: 'Final Invoice' },
      { id: 'consolidated', label: 'Consolidated' }
    ],
    required: true,
    defaultValue: 'standard',
    faker: 'random.arrayElement'
  },

  // Linked Documents
  sales_order_id: { label: 'Sales Order ID', type: 'related', collection: 'sales_orders', displayField: 'order_number', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'related', collection: 'projects', displayField: 'name', faker: 'datatype.uuid' },
  subscription_id: { label: 'Subscription ID', type: 'related', collection: 'subscriptions', displayField: 'name', faker: 'datatype.uuid' },

  // ==========================================
  // 2. PRICING & FINANCIALS
  // ==========================================
  currency: { label: 'Currency', type: 'select', options: [{ id: 'USD', label: 'USD' }, { id: 'EUR', label: 'EUR' }, { id: 'GBP', label: 'GBP' }], required: true, faker: 'finance.currencyCode' },
  price_list_id: { label: 'Price List', type: 'related', collection: 'price_lists', displayField: 'name', faker: 'datatype.uuid' },

  total_amount_excl_tax: { label: 'Subtotal (Excl. Tax)', type: 'number', required: true, faker: 'finance.amount' },
  total_tax_amount: { label: 'Total Tax', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  total_amount_incl_tax: { label: 'Total Amount', type: 'number', required: true, faker: 'finance.amount' },

  total_discount_amount: { label: 'Total Discount', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  header_discount_percentage: { label: 'Header Discount %', type: 'number', faker: 'datatype.number' },

  surcharges_amount: { label: 'Surcharges', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  freight_amount: { label: 'Freight & Shipping', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  handling_fee: { label: 'Handling Fee', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  rounding_adjustment: { label: 'Rounding', type: 'number', defaultValue: 0, faker: 'finance.amount' },

  is_tax_inclusive: { label: 'Tax Inclusive Pricing', type: 'checkbox', faker: 'datatype.boolean' },

  // ==========================================
  // 3. TAX & COMPLIANCE
  // ==========================================
  tax_jurisdiction_code: { label: 'Tax Jurisdiction', type: 'text', faker: 'address.stateAbbr' },
  is_tax_exempt: { label: 'Tax Exempt', type: 'checkbox', faker: 'datatype.boolean' },
  tax_exemption_certificate: { label: 'Exemption Certificate #', type: 'text', faker: 'datatype.string' },

  is_reverse_charge: { label: 'Reverse Charge', type: 'checkbox', faker: 'datatype.boolean' },
  withholding_tax_amount: { label: 'Withholding Tax', type: 'number', defaultValue: 0, faker: 'finance.amount' },

  e_invoice_status: {
    label: 'E-Invoice Status',
    type: 'select',
    options: [
      { id: 'not_required', label: 'Not Required' },
      { id: 'pending', label: 'Pending Submission' },
      { id: 'submitted', label: 'Submitted' },
      { id: 'accepted', label: 'Accepted' },
      { id: 'rejected', label: 'Rejected' }
    ],
    defaultValue: 'not_required',
    faker: 'random.arrayElement'
  },
  fiscal_number: { label: 'Fiscal Number', type: 'text', faker: 'datatype.string' },
  digital_signature_hash: { label: 'Digital Signature', type: 'text', hidden: true, faker: 'datatype.uuid' },

  // ==========================================
  // 4. PAYMENT TERMS & SCHEDULE
  // ==========================================
  payment_term_id: { label: 'Payment Terms', type: 'related', collection: 'payment_terms', displayField: 'name', required: true, faker: 'datatype.uuid' },

  early_payment_discount_date: { label: 'Early Disc. Date', type: 'date', faker: 'date.future' },
  early_payment_discount_amount: { label: 'Early Disc. Amount', type: 'number', faker: 'finance.amount' },

  late_payment_interest_rate: { label: 'Late Interest Rate', type: 'number', faker: 'datatype.number' },
  is_installment_plan: { label: 'Installment Plan', type: 'checkbox', faker: 'datatype.boolean' },

  // ==========================================
  // 5. APPROVAL & CONTROLS
  // ==========================================
  approval_status: {
    label: 'Approval Status',
    type: 'select',
    options: [
      { id: 'draft', label: 'Draft' },
      { id: 'pending', label: 'Pending Approval' },
      { id: 'approved', label: 'Approved' },
      { id: 'rejected', label: 'Rejected' }
    ],
    defaultValue: 'draft',
    faker: 'random.arrayElement'
  },
  margin_percentage: { label: 'Margin %', type: 'number', faker: 'datatype.number' },
  is_margin_violation: { label: 'Low Margin Warning', type: 'checkbox', faker: 'datatype.boolean' },
  is_credit_limit_breach: { label: 'Credit Limit Breach', type: 'checkbox', faker: 'datatype.boolean' },

  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  approval_date: { label: 'Approval Date', type: 'date', faker: 'date.recent' },

  // ==========================================
  // 6. ACCOUNTING INTEGRATION
  // ==========================================
  gl_posting_status: {
    label: 'GL Posting',
    type: 'select',
    options: [
      { id: 'pending', label: 'Pending' },
      { id: 'posted', label: 'Posted' },
      { id: 'error', label: 'Error' }
    ],
    defaultValue: 'pending',
    faker: 'random.arrayElement'
  },
  gl_posting_date: { label: 'GL Posting Date', type: 'date', faker: 'date.recent' },

  revenue_recognition_rule: { label: 'Rev Rec Rule', type: 'text', faker: 'random.word' },
  deferred_revenue_amount: { label: 'Deferred Revenue', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  cost_center: { label: 'Cost Center', type: 'text', faker: 'finance.accountName' },

  is_intercompany: { label: 'Intercompany', type: 'checkbox', faker: 'datatype.boolean' },

  // ==========================================
  // 7. CREDIT & COLLECTIONS
  // ==========================================
  credit_status: {
    label: 'Credit Status',
    type: 'select',
    options: [
      { id: 'ok', label: 'OK' },
      { id: 'hold', label: 'Credit Hold' },
      { id: 'risk', label: 'High Risk' }
    ],
    defaultValue: 'ok',
    faker: 'random.arrayElement'
  },
  dunning_level: { label: 'Dunning Level', type: 'number', defaultValue: 0, faker: 'datatype.number' },
  last_dunning_date: { label: 'Last Reminder', type: 'date', faker: 'date.past' },

  collection_status: {
    label: 'Collection Status',
    type: 'select',
    options: [
      { id: 'current', label: 'Current' },
      { id: 'promise_to_pay', label: 'Promise to Pay' },
      { id: 'disputed', label: 'Disputed' },
      { id: 'legal', label: 'Legal Action' },
      { id: 'written_off', label: 'Written Off' }
    ],
    defaultValue: 'current',
    faker: 'random.arrayElement'
  },
  promise_to_pay_date: { label: 'Promise Date', type: 'date', faker: 'date.future' },

  // ==========================================
  // 9. PAYMENTS
  // ==========================================
  balance_due: { label: 'Balance Due', type: 'number', required: true, faker: 'finance.amount' },
  payment_status: {
    label: 'Payment Status',
    type: 'select',
    options: [
      { id: 'unpaid', label: 'Unpaid' },
      { id: 'partial', label: 'Partially Paid' },
      { id: 'paid', label: 'Paid' },
      { id: 'overpaid', label: 'Overpaid' }
    ],
    defaultValue: 'unpaid',
    faker: 'random.arrayElement'
  },
  last_payment_date: { label: 'Last Payment Date', type: 'date', faker: 'date.recent' },
  payment_method: { label: 'Payment Method', type: 'select', options: [{ id: 'card', label: 'Credit Card' }, { id: 'wire', label: 'Bank Transfer' }, { id: 'check', label: 'Check' }], faker: 'random.arrayElement' },

  // ==========================================
  // 10. CREDIT NOTES & DISPUTES
  // ==========================================
  is_disputed: { label: 'Disputed', type: 'checkbox', faker: 'datatype.boolean' },
  dispute_reason: { label: 'Dispute Reason', type: 'text', faker: 'lorem.sentence' },
  dispute_amount: { label: 'Disputed Amount', type: 'number', faker: 'finance.amount' },

  linked_credit_note_id: { label: 'Linked Credit Note', type: 'text', faker: 'datatype.uuid' },

  // ==========================================
  // 12. RECURRING & BILLING
  // ==========================================
  billing_cycle_start: { label: 'Cycle Start', type: 'date', faker: 'date.past' },
  billing_cycle_end: { label: 'Cycle End', type: 'date', faker: 'date.future' },
  is_recurring: { label: 'Recurring', type: 'checkbox', faker: 'datatype.boolean' },

  // ==========================================
  // 15. AUDIT & META
  // ==========================================
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  version: { label: 'Version', type: 'number', defaultValue: 1, faker: 'datatype.number' },
  is_immutable: { label: 'Immutable', type: 'checkbox', faker: 'datatype.boolean' },
  accountable_id: { label: 'Owner', type: 'text', hidden: true, faker: 'datatype.uuid' },

  notes: { label: 'Notes', type: 'text', multiline: true, rows: 3, faker: 'lorem.sentence' },
  billing_address: { label: 'Billing Address', type: 'text', multiline: true, rows: 3, faker: 'address.streetAddress' },
  shipping_address: { label: 'Shipping Address', type: 'text', multiline: true, rows: 3, faker: 'address.streetAddress' },
};


export const entityName = 'Customer Invoices';
export const collectionName = 'customer_invoices';

export { modules };
