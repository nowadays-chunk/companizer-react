
import modules from './Modules/DebtorAging';

export const fieldsConfig = {
  // 1. Core Identification
  aging_id: { label: 'Aging ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
  customer_name: { label: 'Customer Name', type: 'text', faker: 'company.name' },
  parent_account: { label: 'Parent Account', type: 'text', faker: 'company.name' },

  // 1. Aging Buckets (Standard View)
  current_amount: { label: 'Current Amount', type: 'number', faker: 'finance.amount' },
  days_1_15_amount: { label: '1-15 Days', type: 'number', faker: 'finance.amount' },
  days_16_30_amount: { label: '16-30 Days', type: 'number', faker: 'finance.amount' },
  days_31_60_amount: { label: '31-60 Days', type: 'number', faker: 'finance.amount' },
  days_61_90_amount: { label: '61-90 Days', type: 'number', faker: 'finance.amount' },
  days_over_90: { label: 'Over 90 Days', type: 'number', faker: 'finance.amount' },

  // 2. Balance & Amount Calculations
  total_due: { label: 'Total Due', type: 'number', faker: 'finance.amount' },
  unapplied_cash: { label: 'Unapplied Cash', type: 'number', faker: 'finance.amount' },
  disputed_amount: { label: 'Disputed Amount', type: 'number', faker: 'finance.amount' },
  retentions_amount: { label: 'Retentions', type: 'number', faker: 'finance.amount' },
  on_hold_amount: { label: 'On-Hold Amount', type: 'number', faker: 'finance.amount' },

  // 4. Overdue & Risk
  days_past_due: { label: 'Max Days Past Due', type: 'number', faker: 'datatype.number' },
  weighted_avg_overdue: { label: 'Weighted Avg Overdue', type: 'number', faker: 'datatype.number' },
  risk_score: { label: 'Risk Score', type: 'number', faker: 'datatype.number' },

  // 8. Segmentation & Analysis
  industry_segment: { label: 'Industry', type: 'select', options: [{ id: 'Retail', label: 'Retail' }, { id: 'Tech', label: 'Technology' }, { id: 'Mfg', label: 'Manufacturing' }], faker: 'random.arrayElement' },
  customer_size: { label: 'Customer Size', type: 'select', options: [{ id: 'SMB', label: 'SMB' }, { id: 'Mid', label: 'Mid-Market' }, { id: 'Ent', label: 'Enterprise' }], faker: 'random.arrayElement' },
  currency: { label: 'Currency', type: 'text', faker: 'finance.currencyCode' },

  // Metadata
  report_date: { label: 'Report Date', type: 'date', faker: 'date.recent' },
  aging_policy_version: { label: 'Policy Version', type: 'text', defaultValue: 'v1.0' },

  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }, { 'id': 'final', 'label': 'Final' }], faker: 'random.arrayElement' },
};


export const entityName = 'Debtor Aging';
export const collectionName = 'debtor_aging';

export { modules };
