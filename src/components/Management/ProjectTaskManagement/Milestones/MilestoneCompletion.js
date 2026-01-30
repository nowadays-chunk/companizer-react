
export const fieldsConfig = {
  completion_id: { label: 'Completion ID', type: 'text', faker: 'datatype.uuid' },
  milestone_id: { label: 'Milestone ID', type: 'text', faker: 'datatype.uuid' },
  project_id: { label: 'Project ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.recent' },
  is_approved: { label: 'Is Approved', type: 'checkbox', faker: 'datatype.boolean' },

  approved_by: { label: 'Approved By', type: 'text', faker: 'name.fullName' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' }, // Payout on completion?

  // Extras
  deliverables_url: { label: 'Deliverables URL', type: 'text', faker: 'internet.url' },
  quality_check_passed: { label: 'Quality Check Passed', type: 'checkbox', faker: 'datatype.boolean' },
  client_signoff: { label: 'Client Signoff', type: 'checkbox', faker: 'datatype.boolean' },
  signoff_date: { label: 'Signoff Date', type: 'date', faker: 'date.recent' },
  remarks: { label: 'Remarks', type: 'text', faker: 'lorem.sentence' },
  delay_variance_days: { label: 'Delay Variance (Days)', type: 'number', faker: 'datatype.number' },
  payment_released: { label: 'Payment Released', type: 'checkbox', faker: 'datatype.boolean' }
};

export const entityName = 'Milestone Completion';
export const collectionName = 'milestone_completion';
