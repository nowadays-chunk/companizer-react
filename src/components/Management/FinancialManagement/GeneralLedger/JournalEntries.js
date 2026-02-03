
export const fieldsConfig = {
  // ==========================================
  // 1. JOURNAL ENTRY CORE STRUCTURE
  // ==========================================

  // --- Header Information ---
  journal_number: { label: 'Journal #', type: 'text', faker: 'datatype.uuid', disabled: true },
  posting_date: { label: 'Posting Date', type: 'date', required: true, faker: 'date.recent' },
  document_date: { label: 'Document Date', type: 'date', required: true, faker: 'date.recent' },

  journal_source: {
    label: 'Journal Source',
    type: 'select',
    options: [
      { id: 'manual', label: 'Manual' },
      { id: 'ar', label: 'Accounts Receivable' },
      { id: 'ap', label: 'Accounts Payable' },
      { id: 'payroll', label: 'Payroll' },
      { id: 'assets', label: 'Fixed Assets' },
      { id: 'inventory', label: 'Inventory' },
      { id: 'tax', label: 'Tax' },
      { id: 'bank', label: 'Bank & Cash' },
      { id: 'projects', label: 'Projects' },
      { id: 'system', label: 'System Generated' },
      { id: 'api', label: 'API/External' },
      { id: 'spreadsheet', label: 'Spreadsheet Upload' }
    ],
    defaultValue: 'manual',
    faker: 'random.arrayElement'
  },

  journal_category: {
    label: 'Journal Category',
    type: 'select',
    options: [
      { id: 'general', label: 'General' },
      { id: 'accrual', label: 'Accrual' },
      { id: 'adjustment', label: 'Adjustment' },
      { id: 'reclass', label: 'Reclassification' },
      { id: 'closing', label: 'Closing' },
      { id: 'opening', label: 'Opening' },
      { id: 'allocation', label: 'Allocation' },
      { id: 'elimination', label: 'Intercompany Elimination' },
      { id: 'reversal', label: 'Reversal' },
      { id: 'fx_reval', label: 'FX Revaluation' }
    ],
    defaultValue: 'general',
    faker: 'random.arrayElement'
  },

  description: { label: 'Description', type: 'text', multiline: true, rows: 2, required: true, faker: 'lorem.sentence' },
  reference_number: { label: 'Reference / Doc #', type: 'text', faker: 'finance.account' },

  // --- Entity & Ledger ---
  legal_entity_id: { label: 'Legal Entity', type: 'related', collection: 'legal_entities', displayField: 'name', required: true },
  ledger_type: {
    label: 'Ledger',
    type: 'select',
    options: [
      { id: 'primary', label: 'Primary Ledger' },
      { id: 'secondary', label: 'Secondary/Statutory' },
      { id: 'budget', label: 'Budget Ledger' }
    ],
    defaultValue: 'primary'
  },
  accounting_period: { label: 'Accounting Period', type: 'text', faker: 'datatype.string' }, // e.g. "2023-01"

  status: {
    label: 'Status',
    type: 'select',
    options: [
      { id: 'draft', label: 'Draft' },
      { id: 'submitted', label: 'Submitted for Approval' },
      { id: 'approved', label: 'Approved' },
      { id: 'posted', label: 'Posted' },
      { id: 'reversed', label: 'Reversed' },
      { id: 'error', label: 'Posting Error' }
    ],
    defaultValue: 'draft',
    faker: 'random.arrayElement'
  },

  // --- Currency & Amounts ---
  currency_code: { label: 'Transaction Currency', type: 'text', required: true, faker: 'finance.currencyCode' },
  exchange_rate: { label: 'Exchange Rate', type: 'number', defaultValue: 1, faker: 'finance.amount' },

  total_debit: { label: 'Total Debit', type: 'number', disabled: true, faker: 'finance.amount' },
  total_credit: { label: 'Total Credit', type: 'number', disabled: true, faker: 'finance.amount' },

  is_balanced: { label: 'Balanced', type: 'checkbox', disabled: true, defaultValue: false },

  // ==========================================
  // 5. REVERSALS & CORRECTIONS
  // ==========================================
  reversal_date: { label: 'Reversal Date', type: 'date', faker: 'date.future' },
  is_reversal: { label: 'Is Reversal', type: 'checkbox', defaultValue: false },
  original_journal_id: { label: 'Original Journal ID', type: 'text', hidden: true },
  reversal_reason_code: { label: 'Reversal Reason', type: 'text', faker: 'lorem.word' },

  // ==========================================
  // 6. RECURRING, ACCRUALS & DEFERRALS
  // ==========================================
  is_recurring: { label: 'Recurring Template', type: 'checkbox', defaultValue: false },
  recurrence_frequency: {
    label: 'Frequency',
    type: 'select',
    options: [
      { id: 'monthly', label: 'Monthly' },
      { id: 'quarterly', label: 'Quarterly' },
      { id: 'yearly', label: 'Yearly' }
    ],
    hidden: true // Visible only if is_recurring
  },
  next_run_date: { label: 'Next Run Date', type: 'date', hidden: true },

  is_accrual: { label: 'Accrual Entry', type: 'checkbox', defaultValue: false },
  auto_reverse: { label: 'Auto Reverse', type: 'checkbox', defaultValue: false },
  auto_reversal_date: { label: 'Auto Reversal Date', type: 'date', hidden: true },

  // ==========================================
  // 8. INTERCOMPANY ACCOUNTING
  // ==========================================
  is_intercompany: { label: 'Intercompany', type: 'checkbox', defaultValue: false },
  intercompany_partner_id: { label: 'IC Partner Entity', type: 'related', collection: 'legal_entities', displayField: 'name', hidden: true },

  // ==========================================
  // 3. APPROVAL & WORKFLOW
  // ==========================================
  approval_workflow_id: { label: 'Workflow ID', type: 'text', hidden: true },
  current_approver_id: { label: 'Current Approver', type: 'text', hidden: true },
  approved_by: { label: 'Approved By', type: 'text', disabled: true },
  approval_date: { label: 'Approval Date', type: 'date', disabled: true },

  // ==========================================
  // 11. AUDIT & COMPLIANCE
  // ==========================================
  created_by: { label: 'Created By', type: 'text', disabled: true, faker: 'name.fullName' },
  posted_by: { label: 'Posted By', type: 'text', disabled: true },
  posted_at: { label: 'Posted At', type: 'datetime', disabled: true },

  audit_pack_id: { label: 'Audit Pack ID', type: 'text', hidden: true },
  locked: { label: 'Record Locked', type: 'checkbox', defaultValue: false, disabled: true },
  accountable_id: { label: 'Accountable ID', type: 'text', hidden: true, faker: 'datatype.uuid' },
};

export const entityName = 'Journal Entries';
export const collectionName = 'journal_entries';

export const modules = [
  {
    name: 'Journal Entry Manager',
    type: 'Specific',
    path: '/apps/general-ledger/journals',
    icon: 'Description',
    description: 'Create, edit, and manage manual and system journal entries.'
  },
  {
    name: 'Recurring Journals',
    type: 'Specific',
    path: '/apps/general-ledger/journals/recurring',
    icon: 'Repeat',
    description: 'Manage recurring journal schedules, accruals, and deferrals.'
  },
  {
    name: 'Journal Approvals',
    type: 'Specific',
    path: '/apps/general-ledger/journals/approvals',
    icon: 'AssignmentTurnedIn',
    description: 'Review and approve journals pending authorization.'
  },
  {
    name: 'Period Close & Posting',
    type: 'Specific',
    path: '/apps/general-ledger/journals/posting',
    icon: 'LockClock',
    description: 'Manage accounting periods, batch posting, and soft/hard closes.'
  },
  {
    name: 'Reversals & Corrections',
    type: 'Specific',
    path: '/apps/general-ledger/journals/reversals',
    icon: 'History',
    description: 'Handle reversals, corrections, and audit trail of changes.'
  },
  {
    name: 'Allocations',
    type: 'Specific',
    path: '/apps/general-ledger/journals/allocations',
    icon: 'PieChart',
    description: 'Cost and revenue allocation cycles and distributions.'
  },
  {
    name: 'Intercompany',
    type: 'Specific',
    path: '/apps/general-ledger/journals/intercompany',
    icon: 'Business',
    description: 'Intercompany settlements, eliminations, and reconciliation.'
  },
  {
    name: 'Compliance & Audit',
    type: 'Specific',
    path: '/apps/general-ledger/journals/compliance',
    icon: 'VerifiedUser',
    description: 'SOX compliance, audit trails, and journal certification.'
  },
  {
    name: 'Journal Analytics',
    type: 'Specific',
    path: '/apps/general-ledger/journals/analytics',
    icon: 'Analytics',
    description: 'Reporting, drill-down analysis, and anomaly detection.'
  },
  {
    name: 'Admin Console',
    type: 'Specific',
    path: '/apps/general-ledger/journals/admin',
    icon: 'Settings',
    description: 'Configuration of journal sources, approval matrices, and rules.'
  }
];
