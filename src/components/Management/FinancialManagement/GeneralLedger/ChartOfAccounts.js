import { modules } from './Modules/ChartOfAccounts';

export const fieldsConfig = {
  // ==========================================
  // 1. ACCOUNT MASTER DATA
  // ==========================================

  account_id: { label: 'Account ID', type: 'text', faker: 'datatype.uuid', disabled: true },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid', disabled: true },

  // --- Core Account Information ---
  account_code: { label: 'Account Code', type: 'text', required: true, faker: 'finance.account' },
  account_name: { label: 'Account Name', type: 'text', required: true, faker: 'finance.accountName' },
  short_name: { label: 'Short Name', type: 'text', faker: 'company.catchPhrase' },
  reporting_name: { label: 'Reporting Name', type: 'text', faker: 'finance.accountName' },

  // --- Multilingual Support ---
  description_en: { label: 'Description (EN)', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description_fr: { label: 'Description (FR)', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description_de: { label: 'Description (DE)', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description_es: { label: 'Description (ES)', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  // --- Account Classification ---
  account_type: {
    label: 'Account Type',
    type: 'select',
    required: true,
    options: [
      { id: 'asset', label: 'Asset' },
      { id: 'liability', label: 'Liability' },
      { id: 'equity', label: 'Equity' },
      { id: 'revenue', label: 'Revenue' },
      { id: 'expense', label: 'Expense' }
    ],
    faker: 'random.arrayElement'
  },

  account_category: {
    label: 'Account Category',
    type: 'select',
    options: [
      { id: 'current_asset', label: 'Current Asset' },
      { id: 'fixed_asset', label: 'Fixed Asset' },
      { id: 'intangible_asset', label: 'Intangible Asset' },
      { id: 'current_liability', label: 'Current Liability' },
      { id: 'long_term_liability', label: 'Long-Term Liability' },
      { id: 'shareholders_equity', label: 'Shareholders Equity' },
      { id: 'operating_revenue', label: 'Operating Revenue' },
      { id: 'other_income', label: 'Other Income' },
      { id: 'operating_expense', label: 'Operating Expense' },
      { id: 'financial_expense', label: 'Financial Expense' }
    ],
    faker: 'random.arrayElement'
  },

  natural_balance: {
    label: 'Natural Balance',
    type: 'select',
    options: [
      { id: 'debit', label: 'Debit' },
      { id: 'credit', label: 'Credit' }
    ],
    defaultValue: 'debit',
    faker: 'random.arrayElement'
  },

  // --- Status & Dates ---
  is_active: { label: 'Active', type: 'checkbox', defaultValue: true, faker: 'datatype.boolean' },
  effective_start_date: { label: 'Effective Start Date', type: 'date', faker: 'date.past' },
  effective_end_date: { label: 'Effective End Date', type: 'date', faker: 'date.future' },

  // ==========================================
  // 2. CHART STRUCTURE & SEGMENTATION
  // ==========================================

  // --- Hierarchy ---
  parent_account_id: { label: 'Parent Account', type: 'related', collection: 'chart_of_accounts', displayField: 'account_name' },
  account_level: { label: 'Account Level', type: 'number', disabled: true, defaultValue: 1 },
  tree_path: { label: 'Tree Path', type: 'text', disabled: true, faker: 'datatype.string' },
  sort_order: { label: 'Sort Order', type: 'number', faker: 'datatype.number' },

  // --- Segmentation ---
  segment_company: { label: 'Segment: Company', type: 'text', faker: 'company.companySuffix' },
  segment_department: { label: 'Segment: Department', type: 'text', faker: 'commerce.department' },
  segment_cost_center: { label: 'Segment: Cost Center', type: 'text', faker: 'finance.account' },
  segment_project: { label: 'Segment: Project', type: 'text', faker: 'commerce.product' },
  segment_custom_1: { label: 'Custom Segment 1', type: 'text', faker: 'datatype.string' },
  segment_custom_2: { label: 'Custom Segment 2', type: 'text', faker: 'datatype.string' },

  account_string: { label: 'Full Account String', type: 'text', disabled: true, faker: 'finance.account' },
  alias_account_number: { label: 'Alias Account Number', type: 'text', faker: 'finance.account' },

  // ==========================================
  // 3. MULTI-ENTITY & MULTI-LEDGER
  // ==========================================

  is_global_account: { label: 'Global Group Account', type: 'checkbox', defaultValue: false },
  legal_entity_id: { label: 'Legal Entity', type: 'related', collection: 'legal_entities', displayField: 'name' },
  local_statutory_code: { label: 'Local Statutory Code', type: 'text', faker: 'finance.account' },

  ledger_types: {
    label: 'Available in Ledgers',
    type: 'multiselect',
    options: [
      { id: 'primary', label: 'Primary Ledger' },
      { id: 'ifrs', label: 'IFRS Ledger' },
      { id: 'local_gaap', label: 'Local GAAP' },
      { id: 'tax', label: 'Tax Ledger' },
      { id: 'management', label: 'Management Ledger' }
    ],
    defaultValue: ['primary']
  },

  // ==========================================
  // 4. POSTING CONTROLS
  // ==========================================

  posting_allowed: { label: 'Posting Allowed', type: 'checkbox', defaultValue: true },
  is_summary_account: { label: 'Summary Account', type: 'checkbox', defaultValue: false },
  account_open_date: { label: 'Account Open Date', type: 'date', faker: 'date.past' },
  account_close_date: { label: 'Account Close Date', type: 'date', faker: 'date.future' },

  manual_posting_restricted: { label: 'Manual Posting Restricted', type: 'checkbox', defaultValue: false },
  system_only_posting: { label: 'System Only Posting', type: 'checkbox', defaultValue: false },
  requires_approval: { label: 'Requires Approval', type: 'checkbox', defaultValue: false },

  is_suspense_account: { label: 'Suspense Account', type: 'checkbox', defaultValue: false },
  is_clearing_account: { label: 'Clearing Account', type: 'checkbox', defaultValue: false },
  is_intercompany_account: { label: 'Intercompany Account', type: 'checkbox', defaultValue: false },

  // ==========================================
  // 5. TAX & COMPLIANCE INTEGRATION
  // ==========================================

  default_tax_code: { label: 'Default Tax Code', type: 'text', faker: 'random.alphaNumeric' },
  tax_recoverable: { label: 'Tax Recoverable', type: 'checkbox', defaultValue: false },

  vat_designation: {
    label: 'VAT Designation',
    type: 'select',
    options: [
      { id: 'none', label: 'None' },
      { id: 'input', label: 'Input VAT' },
      { id: 'output', label: 'Output VAT' }
    ],
    defaultValue: 'none'
  },

  withholding_tax_relevant: { label: 'Withholding Tax Relevant', type: 'checkbox', defaultValue: false },
  reverse_charge_applicable: { label: 'Reverse Charge Applicable', type: 'checkbox', defaultValue: false },

  statutory_account_flag: { label: 'Statutory Account', type: 'checkbox', defaultValue: false },
  saft_mapping_code: { label: 'SAF-T Mapping Code', type: 'text', faker: 'random.alphaNumeric' },
  fec_code: { label: 'FEC Code', type: 'text', faker: 'random.alphaNumeric' },
  regulatory_classification: { label: 'Regulatory Classification', type: 'text', faker: 'lorem.word' },

  // ==========================================
  // 6. FINANCIAL STATEMENT MAPPING
  // ==========================================

  balance_sheet_line: { label: 'Balance Sheet Line', type: 'text', faker: 'finance.accountName' },
  pl_statement_line: { label: 'P&L Statement Line', type: 'text', faker: 'finance.accountName' },
  cash_flow_category: {
    label: 'Cash Flow Category',
    type: 'select',
    options: [
      { id: 'operating', label: 'Operating Activities' },
      { id: 'investing', label: 'Investing Activities' },
      { id: 'financing', label: 'Financing Activities' }
    ]
  },

  management_rollup_1: { label: 'Management Rollup 1', type: 'text', faker: 'finance.accountName' },
  management_rollup_2: { label: 'Management Rollup 2', type: 'text', faker: 'finance.accountName' },
  statutory_rollup: { label: 'Statutory Rollup', type: 'text', faker: 'finance.accountName' },

  // ==========================================
  // 7. INTERCOMPANY & CONSOLIDATION
  // ==========================================

  ic_due_to_account: { label: 'IC Due-To Account', type: 'related', collection: 'chart_of_accounts', displayField: 'account_name' },
  ic_due_from_account: { label: 'IC Due-From Account', type: 'related', collection: 'chart_of_accounts', displayField: 'account_name' },
  elimination_account: { label: 'Elimination Account', type: 'related', collection: 'chart_of_accounts', displayField: 'account_name' },

  transfer_pricing_account: { label: 'Transfer Pricing Account', type: 'checkbox', defaultValue: false },
  consolidation_adjustment: { label: 'Consolidation Adjustment', type: 'checkbox', defaultValue: false },
  minority_interest_mapping: { label: 'Minority Interest Mapping', type: 'text', faker: 'finance.account' },
  group_reporting_code: { label: 'Group Reporting Code', type: 'text', faker: 'finance.account' },

  // ==========================================
  // 8. CONTROLS, AUDIT & GOVERNANCE
  // ==========================================

  sox_control_account: { label: 'SOX Control Account', type: 'checkbox', defaultValue: false },
  audit_pack_id: { label: 'Audit Pack ID', type: 'text', hidden: true, faker: 'datatype.uuid' },

  version_number: { label: 'Version', type: 'number', disabled: true, defaultValue: 1 },
  is_current_version: { label: 'Current Version', type: 'checkbox', disabled: true, defaultValue: true },
  superseded_by_account_id: { label: 'Superseded By', type: 'text', disabled: true },

  approval_status: {
    label: 'Approval Status',
    type: 'select',
    options: [
      { id: 'draft', label: 'Draft' },
      { id: 'pending_approval', label: 'Pending Approval' },
      { id: 'approved', label: 'Approved' },
      { id: 'rejected', label: 'Rejected' }
    ],
    defaultValue: 'draft'
  },

  approved_by: { label: 'Approved By', type: 'text', disabled: true, faker: 'name.fullName' },
  approval_date: { label: 'Approval Date', type: 'date', disabled: true, faker: 'date.recent' },

  locked: { label: 'Record Locked', type: 'checkbox', defaultValue: false, disabled: true },

  // ==========================================
  // 9. TEMPLATES & INDUSTRY
  // ==========================================

  is_template: { label: 'Is Template', type: 'checkbox', defaultValue: false },
  template_industry: {
    label: 'Template Industry',
    type: 'select',
    options: [
      { id: 'manufacturing', label: 'Manufacturing' },
      { id: 'retail', label: 'Retail' },
      { id: 'services', label: 'Professional Services' },
      { id: 'technology', label: 'Technology' },
      { id: 'healthcare', label: 'Healthcare' },
      { id: 'financial', label: 'Financial Services' }
    ]
  },

  // ==========================================
  // 10. INTEGRATION WITH SUBLEDGERS
  // ==========================================

  default_ar_revenue: { label: 'Default AR Revenue', type: 'checkbox', defaultValue: false },
  default_ap_expense: { label: 'Default AP Expense', type: 'checkbox', defaultValue: false },
  default_ap_liability: { label: 'Default AP Liability', type: 'checkbox', defaultValue: false },
  asset_capitalization: { label: 'Asset Capitalization', type: 'checkbox', defaultValue: false },
  inventory_account: { label: 'Inventory Account', type: 'checkbox', defaultValue: false },
  payroll_account: { label: 'Payroll Account', type: 'checkbox', defaultValue: false },

  // ==========================================
  // 11. SECURITY & ACCESS CONTROL
  // ==========================================

  is_sensitive: { label: 'Sensitive Account', type: 'checkbox', defaultValue: false },
  is_restricted: { label: 'Restricted Access', type: 'checkbox', defaultValue: false },
  access_role_required: { label: 'Required Role', type: 'text', faker: 'name.jobTitle' },

  // ==========================================
  // 12. MIGRATION & CHANGE MANAGEMENT
  // ==========================================

  legacy_account_code: { label: 'Legacy Account Code', type: 'text', faker: 'finance.account' },
  migration_status: {
    label: 'Migration Status',
    type: 'select',
    options: [
      { id: 'not_migrated', label: 'Not Migrated' },
      { id: 'in_progress', label: 'In Progress' },
      { id: 'completed', label: 'Completed' },
      { id: 'verified', label: 'Verified' }
    ],
    defaultValue: 'not_migrated'
  },
  cutover_date: { label: 'Cutover Date', type: 'date', faker: 'date.future' },

  // --- Mandated Fields ---
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
};

export const entityName = 'Chart of Accounts';
export const collectionName = 'chart_of_accounts';

export { modules };