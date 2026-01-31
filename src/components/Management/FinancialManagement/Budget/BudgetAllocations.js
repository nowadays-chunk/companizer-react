
export const fieldsConfig = {

  allocation_id: { label: 'Allocation ID', type: 'text', faker: 'datatype.uuid' },
  department_id: { label: 'Department ID', type: 'text', faker: 'datatype.uuid' }, // or cost center
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  fiscal_year: { label: 'Fiscal Year', type: 'number', faker: 'date.past' },
  category: { label: 'Category', type: 'text', faker: 'commerce.department' },

  allocated_amount: { label: 'Allocated Amount', type: 'number', faker: 'finance.amount' },

  // Mandated
  // Extras
  spent_amount: { label: 'Spent Amount', type: 'number', faker: 'finance.amount' },
  remaining_amount: { label: 'Remaining Amount', type: 'number', faker: 'finance.amount' },
  status: { label: 'Status', type: 'select', options: [{ id: 'active', label: 'Active' }, { id: 'frozen', label: 'Frozen' }, { id: 'closed', label: 'Closed' }], faker: 'random.arrayElement' },
  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Budget Allocations';
export const collectionName = 'budget_allocations';
