

export const fieldsConfig = {
  // ==========================================
  // LINE-ITEM TRACKING FIELDS
  // ==========================================

  // --- Identity & Linkage ---
  detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid', hidden: true },
  parent_id: { label: 'Parent Ledger ID', type: 'text', faker: 'datatype.uuid', hidden: true },
  line_number: { label: 'Line Number', type: 'number', faker: 'datatype.number', required: true },

  // --- Item Description ---
  item_description: { label: 'Item Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription', required: true },
  item_category: {
    label: 'Item Category',
    type: 'select',
    options: [
      { id: 'goods', label: 'Goods' },
      { id: 'services', label: 'Services' },
      { id: 'freight', label: 'Freight' },
      { id: 'tax', label: 'Tax' },
      { id: 'other', label: 'Other' }
    ],
    faker: 'random.arrayElement'
  },

  // --- Quantity & Pricing ---
  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number', decimals: 3 },
  unit_of_measure: { label: 'Unit of Measure', type: 'text', faker: 'random.word' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount', decimals: 4 },
  net_amount: { label: 'Net Amount', type: 'number', faker: 'finance.amount', decimals: 2, required: true },
  tax_amount: { label: 'Tax Amount', type: 'number', faker: 'finance.amount', decimals: 2 },
  gross_amount: { label: 'Gross Amount', type: 'number', faker: 'finance.amount', decimals: 2 },

  // ==========================================
  // GL DISTRIBUTION
  // ==========================================

  gl_account: { label: 'GL Account', type: 'text', faker: 'finance.account', required: true },
  gl_account_description: { label: 'GL Account Description', type: 'text', faker: 'finance.accountName' },
  cost_center: { label: 'Cost Center', type: 'text', faker: 'finance.accountName' },
  profit_center: { label: 'Profit Center', type: 'text', faker: 'finance.accountName' },
  business_unit: { label: 'Business Unit', type: 'text', faker: 'company.name' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  project_code: { label: 'Project Code', type: 'text', faker: 'datatype.uuid' },
  product_line: { label: 'Product Line', type: 'text', faker: 'commerce.product' },

  // --- Segment Allocation ---
  segment_1: { label: 'Segment 1', type: 'text', faker: 'random.alphaNumeric' },
  segment_2: { label: 'Segment 2', type: 'text', faker: 'random.alphaNumeric' },
  segment_3: { label: 'Segment 3', type: 'text', faker: 'random.alphaNumeric' },
  segment_4: { label: 'Segment 4', type: 'text', faker: 'random.alphaNumeric' },

  // --- Intercompany ---
  intercompany_entity: { label: 'Intercompany Entity', type: 'text', faker: 'company.name' },
  intercompany_account: { label: 'Intercompany Account', type: 'text', faker: 'finance.account' },

  // ==========================================
  // TAX LINE-ITEM DETAILS
  // ==========================================

  tax_code: { label: 'Tax Code', type: 'text', faker: 'random.alphaNumeric' },
  tax_rate: { label: 'Tax Rate (%)', type: 'number', faker: 'datatype.number', decimals: 2 },
  tax_jurisdiction: { label: 'Tax Jurisdiction', type: 'text', faker: 'address.state' },
  tax_type: {
    label: 'Tax Type',
    type: 'select',
    options: [
      { id: 'vat', label: 'VAT' },
      { id: 'sales_tax', label: 'Sales Tax' },
      { id: 'gst', label: 'GST' },
      { id: 'withholding', label: 'Withholding Tax' },
      { id: 'excise', label: 'Excise Duty' }
    ],
    faker: 'random.arrayElement'
  },
  is_tax_deductible: { label: 'Tax Deductible', type: 'checkbox', faker: 'datatype.boolean' },
  tax_base_amount: { label: 'Tax Base Amount', type: 'number', faker: 'finance.amount', decimals: 2 },

  // --- Reverse Charge ---
  is_reverse_charge: { label: 'Reverse Charge', type: 'checkbox', faker: 'datatype.boolean' },
  reverse_charge_tax_code: { label: 'Reverse Charge Tax Code', type: 'text', faker: 'random.alphaNumeric' },

  // --- Withholding Tax ---
  withholding_tax_amount: { label: 'Withholding Tax Amount', type: 'number', faker: 'finance.amount', decimals: 2 },
  withholding_tax_rate: { label: 'Withholding Tax Rate (%)', type: 'number', faker: 'datatype.number', decimals: 2 },
  withholding_tax_code: { label: 'Withholding Tax Code', type: 'text', faker: 'random.alphaNumeric' },

  // ==========================================
  // COST ALLOCATION
  // ==========================================

  allocation_method: {
    label: 'Allocation Method',
    type: 'select',
    options: [
      { id: 'direct', label: 'Direct' },
      { id: 'percentage', label: 'Percentage' },
      { id: 'headcount', label: 'Headcount' },
      { id: 'revenue', label: 'Revenue-based' },
      { id: 'custom', label: 'Custom' }
    ],
    faker: 'random.arrayElement'
  },
  allocation_percentage: { label: 'Allocation %', type: 'number', faker: 'datatype.number', decimals: 2 },
  allocation_key: { label: 'Allocation Key', type: 'text', faker: 'random.alphaNumeric' },

  // --- Multi-Entity Allocation ---
  allocated_entity_1: { label: 'Allocated Entity 1', type: 'text', faker: 'company.name' },
  allocated_amount_1: { label: 'Allocated Amount 1', type: 'number', faker: 'finance.amount', decimals: 2 },
  allocated_entity_2: { label: 'Allocated Entity 2', type: 'text', faker: 'company.name' },
  allocated_amount_2: { label: 'Allocated Amount 2', type: 'number', faker: 'finance.amount', decimals: 2 },
  allocated_entity_3: { label: 'Allocated Entity 3', type: 'text', faker: 'company.name' },
  allocated_amount_3: { label: 'Allocated Amount 3', type: 'number', faker: 'finance.amount', decimals: 2 },

  // ==========================================
  // PAYMENT APPLICATION
  // ==========================================

  payment_applied_amount: { label: 'Payment Applied', type: 'number', faker: 'finance.amount', decimals: 2 },
  payment_applied_date: { label: 'Payment Applied Date', type: 'date', faker: 'date.recent' },
  payment_reference: { label: 'Payment Reference', type: 'text', faker: 'finance.account' },
  discount_taken: { label: 'Discount Taken', type: 'number', faker: 'finance.amount', decimals: 2 },
  residual_amount: { label: 'Residual Amount', type: 'number', faker: 'finance.amount', decimals: 2 },

  // ==========================================
  // MATCHING & VERIFICATION
  // ==========================================

  purchase_order_number: { label: 'PO Number', type: 'text', faker: 'finance.account' },
  purchase_order_line: { label: 'PO Line', type: 'number', faker: 'datatype.number' },
  goods_receipt_number: { label: 'GR Number', type: 'text', faker: 'finance.account' },
  goods_receipt_line: { label: 'GR Line', type: 'number', faker: 'datatype.number' },

  matching_status: {
    label: 'Matching Status',
    type: 'select',
    options: [
      { id: 'matched', label: 'Matched' },
      { id: 'unmatched', label: 'Unmatched' },
      { id: 'partially_matched', label: 'Partially Matched' },
      { id: 'variance', label: 'Variance' }
    ],
    faker: 'random.arrayElement'
  },
  matching_variance: { label: 'Matching Variance', type: 'number', faker: 'finance.amount', decimals: 2 },
  variance_reason: { label: 'Variance Reason', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },

  // ==========================================
  // ASSET & INVENTORY TRACKING
  // ==========================================

  asset_number: { label: 'Asset Number', type: 'text', faker: 'datatype.uuid' },
  asset_class: { label: 'Asset Class', type: 'text', faker: 'random.word' },
  is_capitalizable: { label: 'Capitalizable', type: 'checkbox', faker: 'datatype.boolean' },
  inventory_item_code: { label: 'Inventory Item Code', type: 'text', faker: 'random.alphaNumeric' },
  warehouse_location: { label: 'Warehouse Location', type: 'text', faker: 'address.city' },

  // ==========================================
  // METADATA & AUDIT
  // ==========================================

  notes: { label: 'Line Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName', hidden: true },
  created_date: { label: 'Created Date', type: 'datetime', faker: 'date.past', hidden: true },
  modified_by: { label: 'Modified By', type: 'text', faker: 'name.fullName', hidden: true },
  modified_date: { label: 'Modified Date', type: 'datetime', faker: 'date.recent', hidden: true },

  // --- Workflow ---
  processing_step: {
    label: 'Processing Step',
    type: 'select',
    options: [
      { id: 'draft', label: 'Draft' },
      { id: 'verified', label: 'Verified' },
      { id: 'approved', label: 'Approved' },
      { id: 'posted', label: 'Posted' }
    ],
    faker: 'random.arrayElement'
  },

  is_disputed: { label: 'Disputed', type: 'checkbox', faker: 'datatype.boolean' },
  dispute_reason: { label: 'Dispute Reason', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  accountable_id: { label: 'Accountable ID', type: 'text', hidden: true, faker: 'datatype.uuid' },

};

export const entityName = 'Creditors Ledger Details';
export const collectionName = 'creditors_ledger_details';
