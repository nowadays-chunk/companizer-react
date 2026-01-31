
export const fieldsConfig = {

  approval_id: { label: 'Approval ID', type: 'text', faker: 'datatype.uuid' },
  timesheet_id: { label: 'Timesheet ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  approver_id: { label: 'Approver ID', type: 'text', faker: 'datatype.uuid' },
  approval_date: { label: 'Approval Date', type: 'date', faker: 'date.recent' },

  status: { label: 'Status', type: 'select', options: [{ id: 'approved', label: 'Approved' }, { id: 'rejected', label: 'Rejected' }, { id: 'pending', label: 'Pending' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  comments: { label: 'Comments', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  rejection_reason: { label: 'Rejection Reason', type: 'text', faker: 'lorem.sentence' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Timesheet Approvals (HR)';
export const collectionName = 'timesheet_approvals_hr';
