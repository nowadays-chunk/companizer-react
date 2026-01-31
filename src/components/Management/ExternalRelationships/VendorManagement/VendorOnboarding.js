
export const fieldsConfig = {

  onboarding_id: { label: 'Onboarding ID', type: 'text', faker: 'datatype.uuid' },
  vendor_id: { label: 'Vendor ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  completion_date: { label: 'Completion Date', type: 'date', faker: 'date.future' },

  status: { label: 'Status', type: 'select', options: [{ id: 'in_progress', label: 'In Progress' }, { id: 'pending_docs', label: 'Pending Docs' }, { id: 'completed', label: 'Completed' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  documents_submitted: { label: 'Documents Submitted', type: 'checkbox', faker: 'datatype.boolean' },
  bank_details_verified: { label: 'Bank Details Verified', type: 'checkbox', faker: 'datatype.boolean' },
  nda_signed: { label: 'NDA Signed', type: 'checkbox', faker: 'datatype.boolean' },
  compliance_check_passed: { label: 'Compliance Check Passed', type: 'checkbox', faker: 'datatype.boolean' },
  onboarding_manager: { label: 'Onboarding Manager', type: 'text', faker: 'name.fullName' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Vendor Onboarding';
export const collectionName = 'vendor_onboarding';
