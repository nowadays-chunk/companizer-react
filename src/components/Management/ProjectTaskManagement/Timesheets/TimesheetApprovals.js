
export const fieldsConfig = {

  approval_id: { label: 'Approval ID', type: 'text', faker: 'datatype.uuid' },
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  approver_id: { label: 'Approver ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period_start_date: { label: 'Period Start Date', type: 'date', faker: 'date.past' },
  period_end_date: { label: 'Period End Date', type: 'date', faker: 'date.recent' },

  status: { label: 'Status', type: 'select', options: [{ id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }, { id: 'submitted', label: 'Submitted' }], faker: 'random.arrayElement' },

  total_hours: { label: 'Total Hours', type: 'number', faker: 'datatype.float' },

  // Mandated
  // Extras
  submitted_date: { label: 'Submitted Date', type: 'date', faker: 'date.recent' },
  approval_date: { label: 'Approval Date', type: 'date', faker: 'date.recent' },
  comments: { label: 'Comments', type: 'text', faker: 'lorem.sentence' },
  rejection_reason: { label: 'Rejection Reason', type: 'text', faker: 'lorem.sentence' },
  project_breakdown: { label: 'Project Breakdown', type: 'text', faker: 'lorem.sentence' },
  ype: 'checkbox', faker: 'datatype.boolean',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Project Timesheet Approvals';
export const collectionName = 'project_timesheet_approvals';
