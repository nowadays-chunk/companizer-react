
export const fieldsConfig = {

  // --- ENRICHED BUSINESS FIELDS (Auto-Injected) ---

  // --- COMMON METADATA ---
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  priority: { label: 'Priority', type: 'select', options: [{id: 'low', label: 'Low'}, {id: 'medium', label: 'Medium'}, {id: 'high', label: 'High'}], faker: 'random.arrayElement' },
  status_detail: { label: 'Detail Status', type: 'select', options: [{id: 'pending', label: 'Pending'}, {id: 'verified', label: 'Verified'}, {id: 'rejected', label: 'Rejected'}], faker: 'random.arrayElement' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.recent' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },


  // --- HR / PEOPLE FIELDS ---
  employee_id: { label: 'Employee ID', type: 'text', faker: 'datatype.uuid' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  job_title: { label: 'Job Title', type: 'text', faker: 'name.jobTitle' },
  manager_id: { label: 'Manager ID', type: 'text', faker: 'datatype.uuid' },
  start_date: { label: 'Start Date', type: 'date', faker: 'date.past' },
  end_date: { label: 'End Date', type: 'date', faker: 'date.future' },
  contract_type: { label: 'Contract Type', type: 'select', options: [{id: 'full_time', label: 'Full Time'}, {id: 'part_time', label: 'Part Time'}], faker: 'random.arrayElement' },
  skill_set: { label: 'Skills', type: 'text', faker: 'lorem.words' },
  certification_status: { label: 'Cert Status', type: 'select', options: [{id: 'active', label: 'Active'}, {id: 'expired', label: 'Expired'}], faker: 'random.arrayElement' },
  shift_pattern: { label: 'Shift Pattern', type: 'text', faker: 'lorem.word' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  emergency_contact_name: { label: 'Emergency Contact', type: 'text', faker: 'name.fullName' },
  emergency_contact_phone: { label: 'Emergency Phone', type: 'text', faker: 'phone.number' },

// -------------------------------------------------

  // Standard Detail Fields
  detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
  parent_id: { label: 'Parent ID', type: 'text', faker: 'datatype.uuid' }, // Foreign key to parent entity

  item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },

  quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' }
};

export const entityName = 'Employees List Details';
export const collectionName = 'employees_list_details';
