import modules from './Modules/CreditorsLedger/';
export { modules };

export const fieldsConfig = {
  creditor_id: { label: 'Creditor ID', type: 'text', faker: 'datatype.uuid', hidden: true },
  vendor_id: { label: 'Vendor', type: 'related', collection: 'vendors', displayField: 'name', required: true, faker: 'datatype.uuid' },
  creditor_name: { label: 'Creditor Name', type: 'text', required: true, faker: 'company.name' },
  creditor_account_number: { label: 'Account Number', type: 'text', faker: 'finance.account' },
  contact_number: { label: 'Contact Number', type: 'tel', faker: 'phone.number' },
  entity_code: { label: 'Entity Code', type: 'text', required: true, faker: 'datatype.string' },
  company_code: { label: 'Company Code', type: 'text', required: true, faker: 'datatype.string' },
  business_unit: { label: 'Business Unit', type: 'text', faker: 'commerce.department' },
  fiscal_year: { label: 'Fiscal Year', type: 'number', required: true, faker: 'date.future' },
  fiscal_period: { label: 'Fiscal Period', type: 'number', required: true, faker: 'datatype.number' },
  posting_date: { label: 'Posting Date', type: 'date', required: true, faker: 'date.recent' },
  document_date: { label: 'Document Date', type: 'date', required: true, faker: 'date.recent' },
  gl_control_account: { label: 'GL Control Account', type: 'text', required: true, faker: 'finance.account' },
  subledger_account: { label: 'Subledger Account', type: 'text', faker: 'finance.account' },
  ledger_mode: {
    label: 'Ledger Mode',
    type: 'select',
    options: [
      { id: 'open_item', label: 'Open Item' },
      { id: 'balance_forward', label: 'Balance Forward' }
    ],
    defaultValue: 'open_item',
    faker: 'random.arrayElement'
  },
  version_number: { label: 'Version', type: 'number', defaultValue: 1, faker: 'datatype.number' },
  is_current_version: { label: 'Current Version', type: 'checkbox', defaultValue: true },
  superseded_by: { label: 'Superseded By', type: 'text', hidden: true, faker: 'datatype.uuid' },
  immutable_record: { label: 'Immutable', type: 'checkbox', defaultValue: true, disabled: true },
  transaction_type: {
    label: 'Transaction Type',
    type: 'select',
    options: [
      { id: 'vendor_invoice', label: 'Vendor Invoice' },
      { id: 'credit_note', label: 'Credit Note' },
      { id: 'debit_note', label: 'Debit Note' },
      { id: 'manual_journal', label: 'Manual Journal' },
      { id: 'accrual', label: 'Accrual' },
      { id: 'prepaid', label: 'Prepaid Expense' },
      { id: 'intercompany', label: 'Intercompany AP' },
      { id: 'expense_claim', label: 'Expense Claim' },
      { id: 'po_accrual', label: 'PO Receipt Accrual' },
      { id: 'tax_payable', label: 'Tax Authority Payable' },
      { id: 'interest', label: 'Interest' },
      { id: 'penalty', label: 'Penalty' },
      { id: 'fx_revaluation', label: 'FX Revaluation' },
      { id: 'system_adjustment', label: 'System Adjustment' }
    ],
    required: true,
    faker: 'random.arrayElement'
  },
  source_document_type: { label: 'Source Doc Type', type: 'text', faker: 'random.word' },
  source_document_id: { label: 'Source Doc ID', type: 'text', faker: 'datatype.uuid' },
  source_document_number: { label: 'Source Doc Number', type: 'text', faker: 'finance.account' },

  is_intercompany: { label: 'Intercompany', type: 'checkbox', faker: 'datatype.boolean' },
  intercompany_partner: { label: 'IC Partner', type: 'text', faker: 'company.name' },

  is_accrual: { label: 'Accrual', type: 'checkbox', faker: 'datatype.boolean' },
  is_prepaid: { label: 'Prepaid', type: 'checkbox', faker: 'datatype.boolean' },
  accrual_reversal_date: { label: 'Accrual Reversal Date', type: 'date', faker: 'date.future' },

  is_fx_revaluation: { label: 'FX Revaluation', type: 'checkbox', faker: 'datatype.boolean' },
  revaluation_run_id: { label: 'Revaluation Run ID', type: 'text', faker: 'datatype.uuid' },

  is_system_generated: { label: 'System Generated', type: 'checkbox', faker: 'datatype.boolean' },
  posting_source: { label: 'Posting Source', type: 'text', faker: 'random.word' },
  open_item_id: { label: 'Open Item ID', type: 'text', faker: 'datatype.uuid' },
  open_item_status: {
    label: 'Open Item Status',
    type: 'select',
    options: [
      { id: 'open', label: 'Open' },
      { id: 'partial', label: 'Partially Cleared' },
      { id: 'cleared', label: 'Cleared' },
      { id: 'disputed', label: 'Disputed' },
      { id: 'on_hold', label: 'On Hold' }
    ],
    defaultValue: 'open',
    faker: 'random.arrayElement'
  },

  original_amount: { label: 'Original Amount', type: 'number', required: true, faker: 'finance.amount' },
  cleared_amount: { label: 'Cleared Amount', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  residual_amount: { label: 'Residual Amount', type: 'number', faker: 'finance.amount' },

  clearing_document_id: { label: 'Clearing Doc ID', type: 'text', faker: 'datatype.uuid' },
  clearing_document_number: { label: 'Clearing Doc Number', type: 'text', faker: 'finance.account' },
  clearing_date: { label: 'Clearing Date', type: 'date', faker: 'date.recent' },
  clearing_method: {
    label: 'Clearing Method',
    type: 'select',
    options: [
      { id: 'automatic', label: 'Automatic' },
      { id: 'manual', label: 'Manual' },
      { id: 'partial', label: 'Partial' }
    ],
    faker: 'random.arrayElement'
  },

  partial_payment_count: { label: 'Partial Payment Count', type: 'number', defaultValue: 0, faker: 'datatype.number' },
  settlement_group_id: { label: 'Settlement Group ID', type: 'text', faker: 'datatype.uuid' },

  is_disputed: { label: 'Disputed', type: 'checkbox', faker: 'datatype.boolean' },
  dispute_reason: { label: 'Dispute Reason', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  is_on_hold: { label: 'On Hold', type: 'checkbox', faker: 'datatype.boolean' },
  hold_reason: { label: 'Hold Reason', type: 'text', faker: 'lorem.words' },

  is_blocked_for_payment: { label: 'Blocked for Payment', type: 'checkbox', faker: 'datatype.boolean' },
  payment_block_reason: { label: 'Payment Block Reason', type: 'text', faker: 'lorem.words' },

  promise_to_pay_date: { label: 'Promise to Pay Date', type: 'date', faker: 'date.future' },

  due_date: { label: 'Due Date', type: 'date', required: true, faker: 'date.future' },
  baseline_date: { label: 'Baseline Date', type: 'date', faker: 'date.recent' },

  aging_bucket: {
    label: 'Aging Bucket',
    type: 'select',
    options: [
      { id: 'current', label: 'Current' },
      { id: '1_30', label: '1-30 Days' },
      { id: '31_60', label: '31-60 Days' },
      { id: '61_90', label: '61-90 Days' },
      { id: '90_plus', label: '90+ Days' }
    ],
    faker: 'random.arrayElement'
  },

  days_overdue: { label: 'Days Overdue', type: 'number', faker: 'datatype.number' },
  is_overdue: { label: 'Overdue', type: 'checkbox', faker: 'datatype.boolean' },

  weighted_avg_due_days: { label: 'Weighted Avg Due Days', type: 'number', faker: 'datatype.number' },
  dpo_contribution: { label: 'DPO Contribution', type: 'number', faker: 'datatype.number' },

  cash_requirement_date: { label: 'Cash Requirement Date', type: 'date', faker: 'date.future' },
  payment_priority_score: { label: 'Payment Priority Score', type: 'number', faker: 'datatype.number' },

  is_high_risk_overdue: { label: 'High Risk Overdue', type: 'checkbox', faker: 'datatype.boolean' },
  aging_snapshot_date: { label: 'Aging Snapshot Date', type: 'date', faker: 'date.recent' },

  reconciliation_status: {
    label: 'Reconciliation Status',
    type: 'select',
    options: [
      { id: 'unreconciled', label: 'Unreconciled' },
      { id: 'reconciled', label: 'Reconciled' },
      { id: 'out_of_balance', label: 'Out of Balance' },
      { id: 'pending_approval', label: 'Pending Approval' }
    ],
    defaultValue: 'unreconciled',
    faker: 'random.arrayElement'
  },

  last_reconciliation_date: { label: 'Last Reconciliation Date', type: 'date', faker: 'date.recent' },
  reconciliation_run_id: { label: 'Reconciliation Run ID', type: 'text', faker: 'datatype.uuid' },

  out_of_balance_amount: { label: 'Out of Balance Amount', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  clearing_difference: { label: 'Clearing Difference', type: 'number', defaultValue: 0, faker: 'finance.amount' },

  write_off_amount: { label: 'Write-off Amount', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  write_off_reason: { label: 'Write-off Reason', type: 'text', faker: 'lorem.words' },
  write_off_date: { label: 'Write-off Date', type: 'date', faker: 'date.recent' },

  tolerance_variance: { label: 'Tolerance Variance', type: 'number', faker: 'finance.amount' },
  is_within_tolerance: { label: 'Within Tolerance', type: 'checkbox', faker: 'datatype.boolean' },

  is_suspense_account: { label: 'Suspense Account', type: 'checkbox', faker: 'datatype.boolean' },
  suspense_reason: { label: 'Suspense Reason', type: 'text', faker: 'lorem.words' },

  reconciliation_approval_status: {
    label: 'Reconciliation Approval',
    type: 'select',
    options: [
      { id: 'pending', label: 'Pending' },
      { id: 'approved', label: 'Approved' },
      { id: 'rejected', label: 'Rejected' }
    ],
    faker: 'random.arrayElement'
  },

  audit_evidence_ids: { label: 'Audit Evidence IDs', type: 'text', hidden: true, faker: 'datatype.uuid' },

  transaction_currency: {
    label: 'Transaction Currency',
    type: 'select',
    options: [
      { id: 'USD', label: 'USD' },
      { id: 'EUR', label: 'EUR' },
      { id: 'GBP', label: 'GBP' },
      { id: 'JPY', label: 'JPY' },
      { id: 'CNY', label: 'CNY' }
    ],
    required: true,
    faker: 'finance.currencyCode'
  },
  transaction_amount: { label: 'Transaction Amount', type: 'number', required: true, faker: 'finance.amount' },

  local_currency: { label: 'Local Currency', type: 'text', faker: 'finance.currencyCode' },
  local_amount: { label: 'Local Amount', type: 'number', faker: 'finance.amount' },

  group_currency: { label: 'Group Currency', type: 'text', defaultValue: 'USD', faker: 'finance.currencyCode' },
  group_amount: { label: 'Group Amount', type: 'number', faker: 'finance.amount' },

  fx_rate: { label: 'FX Rate', type: 'number', faker: 'finance.amount' },
  fx_rate_date: { label: 'FX Rate Date', type: 'date', faker: 'date.recent' },
  fx_rate_type: {
    label: 'FX Rate Type',
    type: 'select',
    options: [
      { id: 'spot', label: 'Spot' },
      { id: 'average', label: 'Average' },
      { id: 'fixed', label: 'Fixed' }
    ],
    faker: 'random.arrayElement'
  },

  realized_fx_gain_loss: { label: 'Realized FX Gain/Loss', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  unrealized_fx_revaluation: { label: 'Unrealized FX Revaluation', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  fx_difference_account: { label: 'FX Difference Account', type: 'text', faker: 'finance.account' },

  vat_payable_amount: { label: 'VAT Payable', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  vat_code: { label: 'VAT Code', type: 'text', faker: 'datatype.string' },

  withholding_tax_amount: { label: 'Withholding Tax', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  withholding_tax_code: { label: 'WHT Code', type: 'text', faker: 'datatype.string' },

  is_reverse_charge: { label: 'Reverse Charge', type: 'checkbox', faker: 'datatype.boolean' },
  reverse_charge_amount: { label: 'Reverse Charge Amount', type: 'number', faker: 'finance.amount' },

  tax_authority_creditor_id: { label: 'Tax Authority ID', type: 'text', faker: 'datatype.uuid' },

  is_statutory_reporting: { label: 'Statutory Reporting', type: 'checkbox', faker: 'datatype.boolean' },
  statutory_report_id: { label: 'Statutory Report ID', type: 'text', faker: 'datatype.uuid' },

  tax_reconciliation_status: {
    label: 'Tax Reconciliation',
    type: 'select',
    options: [
      { id: 'pending', label: 'Pending' },
      { id: 'reconciled', label: 'Reconciled' },
      { id: 'variance', label: 'Variance' }
    ],
    faker: 'random.arrayElement'
  },

  dispute_status: {
    label: 'Dispute Status',
    type: 'select',
    options: [
      { id: 'none', label: 'No Dispute' },
      { id: 'raised', label: 'Dispute Raised' },
      { id: 'under_review', label: 'Under Review' },
      { id: 'resolved', label: 'Resolved' },
      { id: 'escalated', label: 'Escalated' }
    ],
    defaultValue: 'none',
    faker: 'random.arrayElement'
  },

  dispute_reason_code: { label: 'Dispute Reason Code', type: 'text', faker: 'datatype.string' },
  dispute_amount: { label: 'Dispute Amount', type: 'number', faker: 'finance.amount' },
  dispute_workflow_stage: { label: 'Dispute Workflow Stage', type: 'text', faker: 'random.word' },
  dispute_raised_date: { label: 'Dispute Raised Date', type: 'date', faker: 'date.recent' },
  dispute_resolved_date: { label: 'Dispute Resolved Date', type: 'date', faker: 'date.recent' },

  exception_type: {
    label: 'Exception Type',
    type: 'select',
    options: [
      { id: 'none', label: 'None' },
      { id: 'pricing', label: 'Pricing Issue' },
      { id: 'quantity', label: 'Quantity Issue' },
      { id: 'quality', label: 'Quality Issue' },
      { id: 'delivery', label: 'Delivery Issue' },
      { id: 'documentation', label: 'Documentation Issue' }
    ],
    defaultValue: 'none',
    faker: 'random.arrayElement'
  },

  hold_reason_code: { label: 'Hold Reason Code', type: 'text', faker: 'datatype.string' },
  legal_hold: { label: 'Legal Hold', type: 'checkbox', faker: 'datatype.boolean' },
  vendor_risk_hold: { label: 'Vendor Risk Hold', type: 'checkbox', faker: 'datatype.boolean' },
  compliance_hold: { label: 'Compliance Hold', type: 'checkbox', faker: 'datatype.boolean' },
  quality_issue_hold: { label: 'Quality Issue Hold', type: 'checkbox', faker: 'datatype.boolean' },

  risk_indicator: {
    label: 'Risk Indicator',
    type: 'select',
    options: [
      { id: 'low', label: 'Low Risk' },
      { id: 'medium', label: 'Medium Risk' },
      { id: 'high', label: 'High Risk' },
      { id: 'critical', label: 'Critical Risk' }
    ],
    faker: 'random.arrayElement'
  },

  payment_proposal_id: { label: 'Payment Proposal ID', type: 'text', faker: 'datatype.uuid' },
  payment_batch_id: { label: 'Payment Batch ID', type: 'text', faker: 'datatype.uuid' },
  payment_run_date: { label: 'Payment Run Date', type: 'date', faker: 'date.future' },

  settlement_posting_date: { label: 'Settlement Posting Date', type: 'date', faker: 'date.recent' },
  settlement_document_id: { label: 'Settlement Doc ID', type: 'text', faker: 'datatype.uuid' },

  overpayment_amount: { label: 'Overpayment Amount', type: 'number', defaultValue: 0, faker: 'finance.amount' },
  credit_balance_carryforward: { label: 'Credit Balance Carryforward', type: 'number', faker: 'finance.amount' },

  netting_settlement_id: { label: 'Netting Settlement ID', type: 'text', faker: 'datatype.uuid' },
  is_netting_eligible: { label: 'Netting Eligible', type: 'checkbox', faker: 'datatype.boolean' },

  bank_reconciliation_status: {
    label: 'Bank Reconciliation',
    type: 'select',
    options: [
      { id: 'pending', label: 'Pending' },
      { id: 'reconciled', label: 'Reconciled' },
      { id: 'variance', label: 'Variance' }
    ],
    faker: 'random.arrayElement'
  },

  failed_payment_indicator: { label: 'Failed Payment', type: 'checkbox', faker: 'datatype.boolean' },
  payment_failure_reason: { label: 'Payment Failure Reason', type: 'text', faker: 'lorem.words' },
  payment_reversal_id: { label: 'Payment Reversal ID', type: 'text', faker: 'datatype.uuid' },

  // ==========================================
  // 10. AUDIT & COMPLIANCE
  // ==========================================

  audit_trail_reference: { label: 'Audit Trail Reference', type: 'text', faker: 'datatype.uuid' },
  sox_control_flag: { label: 'SOX Control', type: 'checkbox', faker: 'datatype.boolean' },

  posting_approval_status: {
    label: 'Posting Approval',
    type: 'select',
    options: [
      { id: 'draft', label: 'Draft' },
      { id: 'pending_approval', label: 'Pending Approval' },
      { id: 'approved', label: 'Approved' },
      { id: 'rejected', label: 'Rejected' }
    ],
    defaultValue: 'draft',
    faker: 'random.arrayElement'
  },

  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  approval_date: { label: 'Approval Date', type: 'date', faker: 'date.recent' },

  period_locked: { label: 'Period Locked', type: 'checkbox', faker: 'datatype.boolean' },
  period_lock_date: { label: 'Period Lock Date', type: 'date', faker: 'date.recent' },

  // ==========================================
  // LEGACY & COMMON FIELDS
  // ==========================================

  balance: { label: 'Current Balance', type: 'number', faker: 'finance.amount' },
  credit_limit: { label: 'Credit Limit', type: 'number', faker: 'finance.amount' },

  last_payment_date: { label: 'Last Payment Date', type: 'date', faker: 'date.past' },
  last_payment_amount: { label: 'Last Payment Amount', type: 'number', faker: 'finance.amount' },

  status: {
    label: 'Status',
    type: 'select',
    options: [
      { id: 'active', label: 'Active' },
      { id: 'blocked', label: 'Blocked' },
      { id: 'inactive', label: 'Inactive' }
    ],
    faker: 'random.arrayElement'
  },

  notes: { label: 'Notes', type: 'text', multiline: true, rows: 3, faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'text', faker: 'random.word' },
  accountable_id: { label: 'Accountable ID', type: 'text', hidden: true, faker: 'datatype.uuid' },

  // Computed/Display Fields
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Creditors Ledger';
export const collectionName = 'creditors_ledger';
