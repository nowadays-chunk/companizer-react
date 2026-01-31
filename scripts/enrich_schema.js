const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.resolve(__dirname, '../src/components/Management');

// --- FIELD DEFINITIONS ---

const GLOBAL_COMMON_FIELDS = `
  // --- COMMON METADATA ---
  notes: { label: 'Notes', type: 'text', multiline: true, rows: 2, faker: 'lorem.sentence' },
  description: { label: 'Description', type: 'text', multiline: true, rows: 3, faker: 'lorem.paragraph' },
  priority: { label: 'Priority', type: 'select', options: [{id: 'low', label: 'Low'}, {id: 'medium', label: 'Medium'}, {id: 'high', label: 'High'}], faker: 'random.arrayElement' },
  status_detail: { label: 'Detail Status', type: 'select', options: [{id: 'pending', label: 'Pending'}, {id: 'verified', label: 'Verified'}, {id: 'rejected', label: 'Rejected'}], faker: 'random.arrayElement' },
  effective_date: { label: 'Effective Date', type: 'date', faker: 'date.recent' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },
`;

const FINANCE_FIELDS = `
  // --- FINANCIAL FIELDS ---
  transaction_date: { label: 'Transaction Date', type: 'date', faker: 'date.recent' },
  due_date: { label: 'Due Date', type: 'date', faker: 'date.future' },
  currency: { label: 'Currency', type: 'select', options: [{id: 'USD', label: 'USD'}, {id: 'EUR', label: 'EUR'}], faker: 'finance.currencyCode' },
  exchange_rate: { label: 'Exchange Rate', type: 'number', faker: 'finance.amount' },
  tax_amount: { label: 'Tax Amount', type: 'number', faker: 'finance.amount' },
  net_amount: { label: 'Net Amount', type: 'number', faker: 'finance.amount' },
  payment_method: { label: 'Payment Method', type: 'select', options: [{id: 'bank', label: 'Bank'}, {id: 'card', label: 'Card'}], faker: 'finance.transactionType' },
  invoice_reference: { label: 'Invoice Ref', type: 'text', faker: 'finance.account' },
  cost_center: { label: 'Cost Center', type: 'text', faker: 'finance.accountName' },
  bank_account: { label: 'Bank Account', type: 'text', faker: 'finance.account' },
  ledger_code: { label: 'Ledger Code', type: 'text', faker: 'finance.bic' },
  approval_code: { label: 'Approval Code', type: 'text', faker: 'datatype.string' },
  is_reimbursable: { label: 'Reimbursable', type: 'checkbox', faker: 'datatype.boolean' },
  receipt_url: { label: 'Receipt URL', type: 'text', faker: 'internet.url' },
`;

const HR_FIELDS = `
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
`;

const LEGAL_FIELDS = `
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
`;

const OPS_FIELDS = `
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
`;


function getDomainFields(filePath) {
  if (filePath.includes('FinancialManagement')) return FINANCE_FIELDS;
  if (filePath.includes('HumanResources') || filePath.includes('Employees')) return HR_FIELDS;
  if (filePath.includes('ComplianceLegal') || filePath.includes('IntellectualProperty') || filePath.includes('Contracts')) return LEGAL_FIELDS;
  // Default to Ops/General for others (Corporate Comms, Crisis, Innovation, etc.)
  return OPS_FIELDS;
}

function processFiles() {
  // Scan ALL files in Management to ensure Parents also get accountable_id if missing
  const allFiles = glob.sync('**/*.js', { cwd: SRC_DIR, absolute: true });
  console.log(`Scanning ${allFiles.length} files...`);

  allFiles.forEach(file => {
    try {
      // Exclude Config, Base, etc.
      if (file.includes('/Config/') || file.includes('\\Config\\') ||
        file.includes('/Base/') || file.includes('\\Base\\') ||
        file.includes('configRegistry.js') || file.includes('entity_comments_history.js') ||
        file.includes('manager_action_logs.js') || // Already has it or manual
        file.endsWith('Config.js')) {
        return;
      }

      let content = fs.readFileSync(file, 'utf8');

      if (!content.includes('export const fieldsConfig = {')) return;

      const isDetailTable = file.includes('/Details/') || file.includes('\\Details\\');

      if (isDetailTable) {
        // --- DETAILS LOGIC (Enrichment Block) ---
        const domainFields = getDomainFields(file);
        // GLOBAL_COMMON_FIELDS now includes accountable_id
        const fieldsToInject = `${GLOBAL_COMMON_FIELDS}\n${domainFields}`;

        const startMarker = '// --- ENRICHED BUSINESS FIELDS (Auto-Injected) ---';
        const endMarker = '// -------------------------------------------------';

        const startIndex = content.indexOf(startMarker);
        const endIndex = content.indexOf(endMarker);

        if (startIndex !== -1 && endIndex !== -1) {
          // Replace existing block
          const before = content.substring(0, startIndex);
          const after = content.substring(endIndex + endMarker.length);
          content = before + startMarker + '\n' + fieldsToInject + '\n' + endMarker + after;
          // console.log(`Re-Enriched: ${path.basename(file)}`);
        } else {
          // Inject for first time
          content = content.replace(
            'export const fieldsConfig = {',
            `export const fieldsConfig = {\n${startMarker}\n${fieldsToInject}\n${endMarker}\n`
          );
          console.log(`Enriched (New): ${path.basename(file)}`);
        }
      } else {
        // --- PARENT LOGIC (Simple Injection) ---
        // Check if accountable_id exists
        if (!content.includes('accountable_id:')) {
          console.log(`Injecting accountable_id into Parent: ${path.basename(file)}`);
          content = content.replace(
            'export const fieldsConfig = {',
            `export const fieldsConfig = {\n  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },`
          );
        }
      }

      fs.writeFileSync(file, content);

    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  });
}

processFiles();
