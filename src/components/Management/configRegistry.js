// Auto-generated Config Registry
// This file imports all Config files and makes them available for dynamic loading

// Financial Management - Accounts Payable
import * as VendorInvoicesConfig from './FinancialManagement/AccountsPayable/Config/VendorInvoicesConfig.js';
import * as PaymentTermsConfig from './FinancialManagement/AccountsPayable/Config/PaymentTermsConfig.js';
import * as CreditorsLedgerConfig from './FinancialManagement/AccountsPayable/Config/CreditorsLedgerConfig.js';

// Add more imports as needed...
// This is a starter - you can generate the full list with a script

export const configRegistry = {
    'VendorInvoices': VendorInvoicesConfig,
    'PaymentTerms': PaymentTermsConfig,
    'CreditorsLedger': CreditorsLedgerConfig,
    // Add more mappings...
};

export function getConfig(entityName) {
    return configRegistry[entityName] || null;
}
