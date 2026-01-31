
export const fieldsConfig = {

  cms_id: { label: 'CMS ID', type: 'text', faker: 'datatype.uuid' },
  customer_id: { label: 'Customer ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  credit_limit: { label: 'Credit Limit', type: 'number', faker: 'finance.amount' },
  current_balance: { label: 'Current Balance', type: 'number', faker: 'finance.amount' },

  risk_score: { label: 'Risk Score', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  risk_category: { label: 'Risk Category', type: 'select', options: [{ id: 'low', label: 'Low' }, { id: 'medium', label: 'Medium' }, { id: 'high', label: 'High' }], faker: 'random.arrayElement' },
  last_review_date: { label: 'Last Review', type: 'date', faker: 'date.past' },
  next_review_date: { label: 'Next Review', type: 'date', faker: 'date.future' },
  payment_history_rating: { label: 'Payment History', type: 'select', options: [{ id: 'excellent', label: 'Excellent' }, { id: 'good', label: 'Good' }, { id: 'poor', label: 'Poor' }], faker: 'random.arrayElement' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Credit Management';
export const collectionName = 'credit_management';
