
import modules from './Modules/CreditManagement';

export const fieldsConfig = {
  // 1. Credit Master Data
  cms_id: { label: 'CMS ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
  parent_entity_id: { label: 'Parent Entity', type: 'text', faker: 'datatype.uuid' },
  credit_responsibility_owner: { label: 'Credit Owner', type: 'text', faker: 'name.findName' },

  credit_currency: { label: 'Credit Currency', type: 'select', options: [{ id: 'USD', label: 'USD' }, { id: 'EUR', label: 'EUR' }, { id: 'GBP', label: 'GBP' }], faker: 'finance.currencyCode' },
  credit_segment: { label: 'Segment', type: 'select', options: [{ id: 'retail', label: 'Retail' }, { id: 'wholesale', label: 'Wholesale' }, { id: 'enterprise', label: 'Enterprise' }], faker: 'random.arrayElement' },
  credit_category: { label: 'Category', type: 'select', options: [{ id: 'standard', label: 'Standard' }, { id: 'high_risk', label: 'High Risk' }, { id: 'strategic', label: 'Strategic' }], faker: 'random.arrayElement' },
  effective_date: { label: 'Effective From', type: 'date', faker: 'date.past' },
  version_id: { label: 'Version ID', type: 'text', readOnly: true },

  // 2. Credit Limits & Structures
  credit_limit: { label: 'Global Credit Limit', type: 'number', faker: 'finance.amount' },
  temp_credit_limit: { label: 'Temporary Limit', type: 'number', faker: 'finance.amount' },
  temp_limit_expiry: { label: 'Temp Limit Expiry', type: 'date', faker: 'date.future' },
  seasonal_limit: { label: 'Seasonal Limit', type: 'number', faker: 'finance.amount' },
  insurance_limit: { label: 'Insured Limit', type: 'number', faker: 'finance.amount' },

  // 3. Credit Exposure (Calculated Fields)
  current_balance: { label: 'Total Exposure', type: 'number', faker: 'finance.amount', readOnly: true },
  open_invoices_amount: { label: 'Open Invoices', type: 'number', faker: 'finance.amount', readOnly: true },
  open_orders_amount: { label: 'Open Orders', type: 'number', faker: 'finance.amount', readOnly: true },
  disputed_amount: { label: 'Disputed Amount', type: 'number', faker: 'finance.amount', readOnly: true },
  credit_utilization: { label: 'Utilization %', type: 'number', faker: 'datatype.number', readOnly: true },

  // 5. Risk Scoring
  risk_score: { label: 'Internal Risk Score', type: 'number', faker: 'datatype.number' },
  external_rating: { label: 'External Rating', type: 'text' },
  risk_class: { label: 'Risk Class', type: 'select', options: [{ id: 'A', label: 'A (Low)' }, { id: 'B', label: 'B (Medium)' }, { id: 'C', label: 'C (High)' }, { id: 'D', label: 'D (Critical)' }], faker: 'random.arrayElement' },

  // 6. Insurance & Guarantees
  insurance_provider: { label: 'Insurance Provider', type: 'text' },
  policy_number: { label: 'Policy Number', type: 'text' },
  coverage_percent: { label: 'Coverage %', type: 'number' },
  guarantee_type: { label: 'Guarantee Type', type: 'select', options: [{ id: 'bank', label: 'Bank Guarantee' }, { id: 'parent', label: 'Parent Guarantee' }, { id: 'none', label: 'None' }] },
  guarantee_amount: { label: 'Guarantee Amount', type: 'number' },
  guarantee_expiry: { label: 'Guarantee Expiry', type: 'date' },

  // 10. Status & Monitoring
  credit_status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'soft_block', label: 'Soft Block' }, { id: 'hard_block', label: 'Hard Block' }], faker: 'random.arrayElement' },
  last_review_date: { label: 'Last Review', type: 'date', faker: 'date.past' },
  next_review_date: { label: 'Next Review', type: 'date', faker: 'date.future' },
  payment_history_rating: { label: 'Payment Behavior', type: 'select', options: [{ id: 'prompt', label: 'Prompt' }, { id: 'slow', label: 'Slow' }, { id: 'delinquent', label: 'Delinquent' }], faker: 'random.arrayElement' },

  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }, { 'id': 'approved', 'label': 'Approved' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Value', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Credit Management';
export const collectionName = 'credit_management';

export { modules };
