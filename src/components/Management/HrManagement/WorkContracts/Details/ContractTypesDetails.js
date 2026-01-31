
export const fieldsConfig = {

  // --- ENRICHED BUSINESS FIELDS (Auto-Injected) ---

  // --- COMMON METADATA ---
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  priority: { label: 'Priority', type: 'select', options: [{id: 'low', label: 'Low'}, {id: 'medium', label: 'Medium'}, {id: 'high', label: 'High'}], faker: 'random.arrayElement' },
  status_detail: { label: 'Detail Status', type: 'select', options: [{id: 'pending', label: 'Pending'}, {id: 'verified', label: 'Verified'}, {id: 'rejected', label: 'Rejected'}], faker: 'random.arrayElement' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.recent' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },


  // --- LEGAL / COMPLIANCE FIELDS ---
  case_number: { label: 'Case Number', type: 'text', faker: 'datatype.string' },
  jurisdiction: { label: 'Jurisdiction', type: 'text', faker: 'address.country' },
  risk_level: { label: 'Risk Level', type: 'select', options: [{id: 'low', label: 'Low'}, {id: 'medium', label: 'Medium'}, {id: 'high', label: 'High'}], faker: 'random.arrayElement' },
  compliance_status: { label: 'Compliance Status', type: 'select', options: [{id: 'compliant', label: 'Compliant'}, {id: 'non_compliant', label: 'Non-Compliant'}], faker: 'random.arrayElement' },
  clause_reference: { label: 'Clause Ref', type: 'text', faker: 'lorem.word' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.recent' },
  expiry_date: { label: 'Expiry Date', type: 'date', faker: 'date.future' },
  counterparty: { label: 'Counterparty', type: 'text', faker: 'company.name' },
  regulatory_body: { label: 'Reg Body', type: 'text', faker: 'company.name' },
  audit_date: { label: 'Audit Date', type: 'date', faker: 'date.recent' },
  violation_type: { label: 'Violation Type', type: 'text', faker: 'lorem.word' },
  resolution_date: { label: 'Resolution Date', type: 'date', faker: 'date.future' },
  attorney_assigned: { label: 'Attorney', type: 'text', faker: 'name.fullName' },

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

export const entityName = 'Contract Types Details';
export const collectionName = 'contract_types_details';
