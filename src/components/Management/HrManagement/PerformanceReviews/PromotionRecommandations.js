
export const fieldsConfig = {
  recommendation_id: { label: 'Recommendation ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  current_role: { label: 'Current Role', type: 'text', faker: 'name.jobTitle' },
  recommended_role: { label: 'Recommended Role', type: 'text', faker: 'name.jobTitle' },

  reason: { label: 'Reason', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  submitted_by: { label: 'Submitted By', type: 'text', faker: 'name.fullName' },
  date_submitted: { label: 'Date Submitted', type: 'date', faker: 'date.recent' },
  status: { label: 'Status', type: 'select', options: [{ id: 'pending', label: 'Pending' }, { id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },
  approval_date: { label: 'Approval Date', type: 'date', faker: 'date.future' },
  salary_increase_proposed: { label: 'Salary Increase', type: 'number', faker: 'finance.amount' }
};

export const entityName = 'Promotion Recommendations';
export const collectionName = 'promotion_recommendations';
