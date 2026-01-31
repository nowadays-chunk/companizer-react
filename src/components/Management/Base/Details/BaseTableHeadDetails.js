
export const fieldsConfig = {

  // --- ENRICHED BUSINESS FIELDS (Auto-Injected) ---

  // --- COMMON METADATA ---
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  priority: { label: 'Priority', type: 'select', options: [{id: 'low', label: 'Low'}, {id: 'medium', label: 'Medium'}, {id: 'high', label: 'High'}], faker: 'random.arrayElement' },
  status_detail: { label: 'Detail Status', type: 'select', options: [{id: 'pending', label: 'Pending'}, {id: 'verified', label: 'Verified'}, {id: 'rejected', label: 'Rejected'}], faker: 'random.arrayElement' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.recent' },


  // --- OPS / GENERAL FIELDS ---
  project_code: { label: 'Project Code', type: 'text', faker: 'datatype.string' },
  milestone_phase: { label: 'Phase', type: 'text', faker: 'lorem.word' },
  completion_percentage: { label: 'Completion %', type: 'number', faker: 'datatype.number' },
  resource_allocation: { label: 'Resource Alloc', type: 'number', faker: 'datatype.number' },
  quality_check: { label: 'QC Passed', type: 'checkbox', faker: 'datatype.boolean' },
  vendor_id: { label: 'Vendor ID', type: 'text', faker: 'datatype.uuid' },
  delivery_date: { label: 'Delivery Date', type: 'date', faker: 'date.future' },
  shipment_tracking: { label: 'Tracking #', type: 'text', faker: 'datatype.string' },
  warehouse_location: { label: 'Warehouse Loc', type: 'text', faker: 'address.zipCode' },
  serial_number: { label: 'Serial #', type: 'text', faker: 'datatype.string' },
  maintenance_due: { label: 'Maintenance Due', type: 'date', faker: 'date.future' },
  incident_report: { label: 'Incident Report', type: 'text', faker: 'lorem.sentence' },
  batch_number: { label: 'Batch #', type: 'text', faker: 'datatype.string' },

// -------------------------------------------------

    // Standard Detail Fields
    detail_id: { label: 'Detail ID', type: 'text', faker: 'datatype.uuid' },
    parent_id: { label: 'Parent ID', type: 'text', faker: 'datatype.uuid' }, // Generic FK
    
    item_name: { label: 'Item Name', type: 'text', faker: 'commerce.productName' },
    description: { label: 'Description', type: 'text', multiline: true, rows: 2, faker: 'commerce.productDescription' },
    
    quantity: { label: 'Quantity', type: 'number', faker: 'datatype.number' },
    unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount', decimals: 2 },
    total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount', decimals: 2 },
    
    created_at: { label: 'Created At', type: 'date', faker: 'date.past' }
};

export const entityName = 'BaseTableHead Details';
export const collectionName = 'base_table_head_details';
