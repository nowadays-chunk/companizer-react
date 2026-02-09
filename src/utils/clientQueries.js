// src/utils/orgApiHelpers.js
import api from "./apiClient";

// GET /api/subcollections/:subcollectionName
// GET /api/subcollections/:subcollectionName
export const fetchDocuments = async (subcollectionName, params = {}) => {
  try {
    const { data } = await api.get(`/subcollections/${subcollectionName}`, { params });
    return data;
  } catch (error) {
    console.error(`Error fetching documents from ${subcollectionName}:`, error);
    return [];
  }
};

// ✅ CREATE — keep the name: createDocument
// POST /api/subcollections/:subcollectionName
export const createDocument = async (subcollectionName, documentData) => {
  try {
    const { data } = await api.post(
      `/subcollections/${subcollectionName}`,
      documentData
    );
    return data.id; // backend sends { id: ... }
  } catch (error) {
    console.error(`Error creating document in ${subcollectionName}:`, error);
    throw new Error(`Could not create document in ${subcollectionName}`);
  }
};

// PUT /api/subcollections/:subcollectionName/:documentId
// Supports versioning: if is_versioned = true, creates new version instead of updating
export const updateDocument = async (
  subcollectionName,
  documentId,
  documentData,
  options = {}
) => {
  try {
    // Check if versioning is enabled for this row
    if (options.isVersioned && options.userId) {
      // Fetch current row to get version info
      const { data: currentRow } = await api.get(
        `/subcollections/${subcollectionName}/${documentId}`
      );

      if (currentRow.is_versioned) {
        // Create new version instead of updating
        const originalRowId = currentRow.original_row_id || currentRow.id;
        const newVersion = {
          ...documentData,
          version_number: currentRow.version_number + 1,
          version_date: new Date().toISOString(),
          version_author_id: options.userId,
          is_current_version: true,
          is_versioned: true,
          original_row_id: originalRowId,
        };

        // Mark current version as not current
        await api.put(
          `/subcollections/${subcollectionName}/${documentId}`,
          { is_current_version: false }
        );

        // Create new version
        const { data } = await api.post(
          `/subcollections/${subcollectionName}`,
          newVersion
        );
        return data.id;
      }
    }

    // Regular update (non-versioned or versioning disabled)
    await api.put(
      `/subcollections/${subcollectionName}/${documentId}`,
      documentData
    );
  } catch (error) {
    console.error(`Error updating document in ${subcollectionName}:`, error);
    throw new Error(`Could not update document in ${subcollectionName}`);
  }
};

// DELETE /api/subcollections/:subcollectionName/:documentId
// Supports versioning: soft delete for versioned rows
export const deleteDocument = async (subcollectionName, documentId, options = {}) => {
  try {
    // Check if versioning is enabled
    if (options.isVersioned) {
      const { data: currentRow } = await api.get(
        `/subcollections/${subcollectionName}/${documentId}`
      );

      if (currentRow.is_versioned) {
        // Soft delete: mark as not current
        await api.put(
          `/subcollections/${subcollectionName}/${documentId}`,
          {
            is_current_version: false,
            deleted_at: new Date().toISOString(),
            deleted_by: options.userId
          }
        );
        return;
      }
    }

    // Regular delete (hard delete)
    await api.delete(`/subcollections/${subcollectionName}/${documentId}`);
  } catch (error) {
    console.error(`Error deleting document from ${subcollectionName}:`, error);
    throw new Error(`Could not delete document from ${subcollectionName}`);
  }
};

// GET /api/subcollections/:relativeCollection/search-array?field=...&value=...
export const fetchDocumentsBySelectValue = async (
  relativeCollection,
  foreignKey,
  foreignValue
) => {
  try {
    const { data } = await api.get(
      `/subcollections/${relativeCollection}/search-array`,
      {
        params: { field: foreignKey, value: foreignValue },
      }
    );
    return data;
  } catch (error) {
    console.error(`Error fetching documents from ${relativeCollection}:`, error);
    return [];
  }
};

// GET /api/subcollections/:relativeCollection/search?field=...&value=...
export const fetchDocumentsByFieldValue = async (
  relativeCollection,
  fieldName,
  fieldValue
) => {
  try {
    const { data } = await api.get(
      `/subcollections/${relativeCollection}/search`,
      {
        params: { field: fieldName, value: fieldValue },
      }
    );
    return data;
  } catch (error) {
    console.error(`Error fetching documents from ${relativeCollection}:`, error);
    return [];
  }
};

// GET /api/subcollections/:subcollectionName/:documentId
export const fetchDocumentById = async (subcollectionName, documentId) => {
  try {
    const { data } = await api.get(
      `/subcollections/${subcollectionName}/${documentId}`
    );
    return data;
  } catch (error) {
    console.error(
      `Error fetching document with ID ${documentId} from ${subcollectionName}:`,
      error
    );
    return null;
  }
};

// Convenience wrapper for tables
export const helpersWrapper = (collectionName) => {
  const tableName = collectionName.replaceAll("-", "_");

  const fetchItems = (params, includeAllVersions = false) => {
    return fetchDocuments(tableName, params).then(items => {
      // Filter to only current versions unless explicitly requested
      if (!includeAllVersions) {
        return items.filter(item => item.is_current_version !== false);
      }
      return items;
    });
  };

  const addItem = (item) => createDocument(tableName, item);
  const updateItem = (id, item, options = {}) => updateDocument(tableName, id, item, options);
  const deleteItem = (id, options = {}) => deleteDocument(tableName, id, options);
  const fetchItemById = (id) => fetchDocumentById(tableName, id);
  const fetchItemsByKeyByValue = (key, value) => fetchDocumentsByFieldValue(tableName, key, value);

  return {
    fetchItems,
    addItem,
    updateItem,
    deleteItem,
    fetchItemById,
    fetchItemsByKeyByValue
  };
};

// ==========================================
// FINANCIAL MANAGEMENT ACTIONS
// ==========================================

// --- Accounts Payable ---
export const apMatchInvoice = (data) => api.post('/financial/accounts-payable/vendor-invoices/match', data);
export const apCreatePaymentBatch = (data) => api.post('/financial/accounts-payable/vendor-invoices/create-payment-batch', data);
export const apMarkInvoicePaid = (id) => api.post(`/financial/accounts-payable/vendor-invoices/${id}/mark-paid`);

export const apApplyPaymentTerm = (data) => api.post('/financial/accounts-payable/payment-terms/apply-term', data);

export const apReconcileCreditorsLedger = (data) => api.post('/financial/accounts-payable/creditors-ledger/reconcile-ledger', data);
export const apGenerateCreditorStatement = (data) => api.post('/financial/accounts-payable/creditors-ledger/generate-statement', data);

// --- Accounts Receivable ---
export const arCalculateCreditRisk = (data) => api.post('/financial/accounts-receivable/credit-management/calculate-risk', data);
export const arApproveCreditProfile = (data) => api.post('/financial/accounts-receivable/credit-management/approve-profile', data);

export const arSendInvoiceReminder = (data) => api.post('/financial/accounts-receivable/customer-invoices/send-reminder', data);
export const arApplyLateFee = (data) => api.post('/financial/accounts-receivable/customer-invoices/apply-late-fee', data);

export const arFlagBadDebt = (data) => api.post('/financial/accounts-receivable/debtor-aging/flag-bad-debt', data);

// --- Bank Accounts ---
export const bankExecuteTransfer = (data) => api.post('/financial/bank-accounts/bank-transfers/execute-transfer', data);
export const bankTransferFunds = (data) => api.post('/financial/bank-accounts/bank-transfers/execute-transfer', data);
export const bankValidateIBAN = (data) => api.post('/financial/bank-accounts/bank-transfers/validate-iban', data);

export const bankMatchTransaction = (data) => api.post('/financial/bank-accounts/reconciliation/match-transaction', data);
export const bankImportFeed = (data) => api.post('/financial/bank-accounts/reconciliation/import-feed', data);
export const bankAutoReconcile = (data) => api.post('/financial/bank-accounts/reconciliation/auto-reconcile', data);
export const bankGenerateCashPosition = (data) => api.post('/financial/bank-accounts/reconciliation/cash-position', data);

export const bankUpdateExchangeRate = (data) => api.post('/financial/bank-accounts/foreign-currency/update-rate', data);

// --- Budget ---
export const budgetAllocate = (data) => api.post('/financial/budget/allocations/allocate', data);
export const budgetApproveAllocation = (data) => api.post('/financial/budget/allocations/approve', data);
export const budgetTrackSpending = (data) => api.post('/financial/budget/allocations/track-spending', data);
export const budgetCreateBudget = (data) => api.post('/financial/budget/budgets/create', data);

export const budgetGenerateForecast = (data) => api.post('/financial/budget/forecasting/generate-forecast', data);
export const budgetForecast = (data) => api.post('/financial/budget/forecasting/generate-forecast', data);
export const budgetSaveScenario = (data) => api.post('/financial/budget/forecasting/save-scenario', data);

export const budgetCalculateVariance = (data) => api.post('/financial/budget/variance/calculate', data);

// --- Debts ---
export const debtsGenerateMaturitySchedule = (data) => api.post('/financial/debts/maturity/generate-schedule', data);
export const debtsCalculateInterest = (data) => api.post('/financial/debts/interest/calculate', data);
export const debtsValidateCovenants = (data) => api.post('/financial/debts/loan-agreements/validate-covenants', data);

// --- General Ledger ---
export const glValidateChartOfAccounts = () => api.post('/financial/general-ledger/chart-of-accounts/validate');
export const glCloseFiscalPeriod = (data) => api.post('/financial/general-ledger/fiscal-periods/close', data);
export const glOpenFiscalPeriod = (data) => api.post('/financial/general-ledger/fiscal-periods/open', data);

export const glPostJournalEntry = (data) => api.post('/financial/general-ledger/journal-entries/post', data);
export const glReverseJournalEntry = (data) => api.post('/financial/general-ledger/journal-entries/reverse', data);
export const glApproveJournalEntry = (data) => api.post('/financial/general-ledger/journal-entries/approve', data);

export const glGenerateTrialBalance = (data) => api.post('/financial/general-ledger/trial-balance/generate', data);

// --- Investments ---
export const invRecordEquityPurchase = (data) => api.post('/financial/investments/equity/record-purchase', data);
export const invUpdateEquityValuation = (data) => api.post('/financial/investments/equity/update-valuation', data);

export const invCalculateAccruedInterest = (data) => api.post('/financial/investments/fixed-income/calculate-accrued-interest', data);

export const invCalculateROI = (data) => api.post('/financial/investments/returns/calculate-roi', data);

// --- Taxation ---
export const taxInitiateAudit = (data) => api.post('/financial/taxation/audits/initiate', data);
export const taxLogAuditFinding = (data) => api.post('/financial/taxation/audits/log-finding', data);

export const taxCalculateCredit = (data) => api.post('/financial/taxation/credits/calculate', data);
export const taxApplyCredit = (data) => api.post('/financial/taxation/credits/apply', data);

export const taxGenerateFiling = (data) => api.post('/financial/taxation/filings/generate', data);
export const taxSubmitFiling = (data) => api.post('/financial/taxation/filings/submit', data);

export const taxGenerateVATReport = (data) => api.post('/financial/taxation/vat-gst/generate-report', data);
export const taxReconcileVAT = (data) => api.post('/financial/taxation/vat-gst/reconcile', data);

export const taxCalculateWithholding = (data) => api.post('/financial/taxation/withholding/calculate', data);

// --- Treasury Management ---
export const treasuryGenerateCashFlowForecast = (data) => api.post('/financial/treasury/cash-flow/generate-forecast', data);
export const treasuryCalculateLiquidityRatios = () => api.post('/financial/treasury/liquidity/calculate-ratios');

export const treasuryCreatePolicy = (data) => api.post('/financial/treasury/policies/create', data);
export const treasuryApprovePolicy = (data) => api.post('/financial/treasury/policies/approve', data);

// --- Payment Terms ---
export const calculatePaymentDueDate = (data) => api.post('/financial/accounts-payable/payment-terms/calculate-due-date', data);

// ==========================================
// EXTENDED FINANCIAL MANAGEMENT ACTIONS
// ==========================================

// --- Accounts Payable - Payment Terms (4 submodules) ---
export const apPaymentTermsList = (params) => api.get('/financial/accounts-payable/payment-terms', { params });
export const apPaymentTermsCreate = (data) => api.post('/financial/accounts-payable/payment-terms', data);
export const apPaymentTermsUpdate = (id, data) => api.put(`/financial/accounts-payable/payment-terms/${id}`, data);
export const apPaymentTermsDelete = (id) => api.delete(`/financial/accounts-payable/payment-terms/${id}`);
export const apPaymentTermsCalculateDueDate = (data) => api.post('/financial/accounts-payable/payment-terms/calculate-due-date', data);
export const apPaymentTermsApplyDiscount = (data) => api.post('/financial/accounts-payable/payment-terms/apply-discount', data);
export const apPaymentTermsManageInstallments = (data) => api.post('/financial/accounts-payable/payment-terms/manage-installments', data);
export const apPaymentTermsTestConfiguration = (data) => api.post('/financial/accounts-payable/payment-terms/test-configuration', data);

// --- Accounts Payable - Creditors Ledger (5 submodules) ---
export const apCreditorsLedgerReconcile = (data) => api.post('/financial/accounts-payable/creditors-ledger/reconcile', data);
export const apCreditorsLedgerCashForecast = (data) => api.post('/financial/accounts-payable/creditors-ledger/cash-forecast', data);
export const apCreditorsLedgerDPOAnalytics = (params) => api.get('/financial/accounts-payable/creditors-ledger/dpo-analytics', { params });
export const apCreditorsLedgerManageDisputes = (data) => api.post('/financial/accounts-payable/creditors-ledger/disputes', data);
export const apCreditorsLedgerAgingAnalysis = (params) => api.get('/financial/accounts-payable/creditors-ledger/aging-analysis', { params });

// --- Accounts Payable - Vendor Invoices (4 submodules) ---
export const apVendorInvoicesCapture = (data) => api.post('/financial/accounts-payable/vendor-invoices/capture', data);
export const apVendorInvoicesMatch = (data) => api.post('/financial/accounts-payable/vendor-invoices/match', data);
export const apVendorInvoicesPaymentRun = (data) => api.post('/financial/accounts-payable/vendor-invoices/payment-run', data);
export const apVendorInvoicesPortalAccess = (params) => api.get('/financial/accounts-payable/vendor-invoices/portal', { params });

// --- Accounts Receivable - Credit Management (5 submodules) ---
export const arCreditDashboard = (params) => api.get('/financial/accounts-receivable/credit-management/dashboard', { params });
export const arCreditProfilesManage = (data) => api.post('/financial/accounts-receivable/credit-management/profiles', data);
export const arCreditRiskAssess = (data) => api.post('/financial/accounts-receivable/credit-management/risk-assessment', data);
export const arCreditExposureManage = (data) => api.post('/financial/accounts-receivable/credit-management/exposure', data);
export const arCreditGovernance = (params) => api.get('/financial/accounts-receivable/credit-management/governance', { params });

// --- Accounts Receivable - Customer Invoices (5 submodules) ---
export const arCustomerInvoicesGenerate = (data) => api.post('/financial/accounts-receivable/customer-invoices/generate', data);
export const arCustomerInvoicesARAging = (params) => api.get('/financial/accounts-receivable/customer-invoices/ar-aging', { params });
export const arCustomerInvoicesRevenueAnalytics = (params) => api.get('/financial/accounts-receivable/customer-invoices/revenue-analytics', { params });
export const arCustomerInvoicesDunning = (data) => api.post('/financial/accounts-receivable/customer-invoices/dunning', data);
export const arCustomerInvoicesDisputes = (data) => api.post('/financial/accounts-receivable/customer-invoices/disputes', data);

// --- Accounts Receivable - Debtor Aging (5 submodules) ---
export const arDebtorAgingDashboard = (params) => api.get('/financial/accounts-receivable/debtor-aging/dashboard', { params });
export const arDebtorAgingAnalysis = (params) => api.get('/financial/accounts-receivable/debtor-aging/analysis', { params });
export const arDebtorAgingRiskCollections = (data) => api.post('/financial/accounts-receivable/debtor-aging/risk-collections', data);
export const arDebtorAgingCashForecast = (params) => api.get('/financial/accounts-receivable/debtor-aging/cash-forecast', { params });
export const arDebtorAgingConfiguration = (data) => api.post('/financial/accounts-receivable/debtor-aging/configuration', data);

// --- Bank Accounts - Bank Transfers (10 submodules) ---
export const bankTransfersDashboard = (params) => api.get('/financial/bank-accounts/bank-transfers/dashboard', { params });
export const bankTransfersCreate = (data) => api.post('/financial/bank-accounts/bank-transfers/create', data);
export const bankTransfersApproval = (data) => api.post('/financial/bank-accounts/bank-transfers/approval', data);
export const bankTransfersExecute = (data) => api.post('/financial/bank-accounts/bank-transfers/execute', data);
export const bankTransfersFXManage = (data) => api.post('/financial/bank-accounts/bank-transfers/fx-manage', data);
export const bankTransfersAccountingIntegration = (data) => api.post('/financial/bank-accounts/bank-transfers/accounting-integration', data);
export const bankTransfersIntercompany = (data) => api.post('/financial/bank-accounts/bank-transfers/intercompany', data);
export const bankTransfersReconciliationStatus = (params) => api.get('/financial/bank-accounts/bank-transfers/reconciliation-status', { params });
export const bankTransfersAutomation = (data) => api.post('/financial/bank-accounts/bank-transfers/automation', data);
export const bankTransfersHistory = (params) => api.get('/financial/bank-accounts/bank-transfers/history', { params });

// --- Bank Accounts - Foreign Currency (7 submodules) ---
export const bankForeignCurrencyDashboard = (params) => api.get('/financial/bank-accounts/foreign-currency/dashboard', { params });
export const bankForeignCurrencyPositionManager = (params) => api.get('/financial/bank-accounts/foreign-currency/position-manager', { params });
export const bankForeignCurrencyRevaluation = (data) => api.post('/financial/bank-accounts/foreign-currency/revaluation', data);
export const bankForeignCurrencyHedgeAccounting = (data) => api.post('/financial/bank-accounts/foreign-currency/hedge-accounting', data);
export const bankForeignCurrencyRateManagement = (data) => api.post('/financial/bank-accounts/foreign-currency/rate-management', data);
export const bankForeignCurrencyTranslationImpact = (params) => api.get('/financial/bank-accounts/foreign-currency/translation-impact', { params });
export const bankForeignCurrencyAnalytics = (params) => api.get('/financial/bank-accounts/foreign-currency/analytics', { params });

// --- Bank Accounts - Reconciliation (6 submodules) ---
export const bankReconciliationDashboard = (params) => api.get('/financial/bank-accounts/reconciliation/dashboard', { params });
export const bankReconciliationAutoMatch = (data) => api.post('/financial/bank-accounts/reconciliation/auto-match', data);
export const bankReconciliationManualMatch = (data) => api.post('/financial/bank-accounts/reconciliation/manual-match', data);
export const bankReconciliationVarianceInvestigation = (params) => api.get('/financial/bank-accounts/reconciliation/variance-investigation', { params });
export const bankReconciliationReports = (params) => api.get('/financial/bank-accounts/reconciliation/reports', { params });
export const bankReconciliationBankFeedManager = (data) => api.post('/financial/bank-accounts/reconciliation/bank-feed-manager', data);

// --- Budget - Budget Allocations (18 submodules) ---
export const budgetAllocationsStructure = (data) => api.post('/financial/budget/allocations/structure', data);
export const budgetAllocationsRules = (data) => api.post('/financial/budget/allocations/rules', data);
export const budgetAllocationsTimeBased = (data) => api.post('/financial/budget/allocations/time-based', data);
export const budgetAllocationsControls = (data) => api.post('/financial/budget/allocations/controls', data);
export const budgetAllocationsRevisions = (data) => api.post('/financial/budget/allocations/revisions', data);
export const budgetAllocationsTracking = (params) => api.get('/financial/budget/allocations/tracking', { params });
export const budgetAllocationsConsolidation = (data) => api.post('/financial/budget/allocations/consolidation', data);
export const budgetAllocationsWorkflow = (data) => api.post('/financial/budget/allocations/workflow', data);
export const budgetAllocationsPlanningIntegration = (data) => api.post('/financial/budget/allocations/planning-integration', data);
export const budgetAllocationsAnalytics = (params) => api.get('/financial/budget/allocations/analytics', { params });
export const budgetAllocationsEncumbrances = (data) => api.post('/financial/budget/allocations/encumbrances', data);
export const budgetAllocationsCalendar = (params) => api.get('/financial/budget/allocations/calendar', { params });
export const budgetAllocationsAudit = (params) => api.get('/financial/budget/allocations/audit', { params });
export const budgetAllocationsAutomation = (data) => api.post('/financial/budget/allocations/automation', data);
export const budgetAllocationsProductivity = (data) => api.post('/financial/budget/allocations/productivity', data);
export const budgetAllocationsSecurity = (data) => api.post('/financial/budget/allocations/security', data);
export const budgetAllocationsIntegration = (data) => api.post('/financial/budget/allocations/integration', data);
export const budgetAllocationsAdvanced = (data) => api.post('/financial/budget/allocations/advanced', data);

// --- Budget - Forecasting (6 submodules) ---
export const budgetForecastingDashboard = (params) => api.get('/financial/budget/forecasting/dashboard', { params });
export const budgetForecastingScenarioPlanner = (data) => api.post('/financial/budget/forecasting/scenario-planner', data);
export const budgetForecastingDriverBased = (data) => api.post('/financial/budget/forecasting/driver-based', data);
export const budgetForecastingRolling = (data) => api.post('/financial/budget/forecasting/rolling', data);
export const budgetForecastingAccuracy = (params) => api.get('/financial/budget/forecasting/accuracy', { params });
export const budgetForecastingCollaboration = (data) => api.post('/financial/budget/forecasting/collaboration', data);

// --- Budget - Variance Analysis (6 submodules) ---
export const budgetVarianceDashboard = (params) => api.get('/financial/budget/variance/dashboard', { params });
export const budgetVarianceBudgetVsActual = (params) => api.get('/financial/budget/variance/budget-vs-actual', { params });
export const budgetVarianceForecastVsActual = (params) => api.get('/financial/budget/variance/forecast-vs-actual', { params });
export const budgetVarianceDecomposition = (params) => api.get('/financial/budget/variance/decomposition', { params });
export const budgetVarianceTrendAnalysis = (params) => api.get('/financial/budget/variance/trend-analysis', { params });
export const budgetVarianceAlerts = (data) => api.post('/financial/budget/variance/alerts', data);

// --- Debts - Debt Maturity Schedules (4 submodules) ---
export const debtsMaturityDashboard = (params) => api.get('/financial/debts/maturity/dashboard', { params });
export const debtsMaturityScheduleManager = (data) => api.post('/financial/debts/maturity/schedule-manager', data);
export const debtsMaturityRefinancingPlanner = (data) => api.post('/financial/debts/maturity/refinancing-planner', data);
export const debtsMaturityCovenantTracker = (params) => api.get('/financial/debts/maturity/covenant-tracker', { params });

// --- Debts - Interest Payments (4 submodules) ---
export const debtsInterestDashboard = (params) => api.get('/financial/debts/interest/dashboard', { params });
export const debtsInterestCalculationEngine = (data) => api.post('/financial/debts/interest/calculation-engine', data);
export const debtsInterestAccrualManager = (data) => api.post('/financial/debts/interest/accrual-manager', data);
export const debtsInterestPaymentScheduler = (data) => api.post('/financial/debts/interest/payment-scheduler', data);

// --- Debts - Loan Agreements (3 submodules) ---
export const debtsLoanAgreementRepository = (params) => api.get('/financial/debts/loan-agreements/repository', { params });
export const debtsLoanCovenantMonitor = (params) => api.get('/financial/debts/loan-agreements/covenant-monitor', { params });
export const debtsLoanAmendmentTracker = (data) => api.post('/financial/debts/loan-agreements/amendment-tracker', data);

// --- General Ledger - Chart of Accounts (5 submodules) ---
export const glChartAccountHierarchy = (params) => api.get('/financial/general-ledger/chart-of-accounts/hierarchy', { params });
export const glChartAccountMaintenance = (data) => api.post('/financial/general-ledger/chart-of-accounts/maintenance', data);
export const glChartMappingManager = (data) => api.post('/financial/general-ledger/chart-of-accounts/mapping-manager', data);
export const glChartSegmentRules = (data) => api.post('/financial/general-ledger/chart-of-accounts/segment-rules', data);
export const glChartAccountAnalytics = (params) => api.get('/financial/general-ledger/chart-of-accounts/analytics', { params });

// --- General Ledger - Fiscal Periods (4 submodules) ---
export const glFiscalPeriodCalendar = (params) => api.get('/financial/general-ledger/fiscal-periods/calendar', { params });
export const glFiscalPeriodStatus = (data) => api.post('/financial/general-ledger/fiscal-periods/status', data);
export const glFiscalYearEndClose = (data) => api.post('/financial/general-ledger/fiscal-periods/year-end-close', data);
export const glFiscalPeriodAnalytics = (params) => api.get('/financial/general-ledger/fiscal-periods/analytics', { params });

// --- General Ledger - Journal Entries (5 submodules) ---
export const glJournalEntryDashboard = (params) => api.get('/financial/general-ledger/journal-entries/dashboard', { params });
export const glJournalManualEntry = (data) => api.post('/financial/general-ledger/journal-entries/manual-entry', data);
export const glJournalRecurringEntries = (data) => api.post('/financial/general-ledger/journal-entries/recurring', data);
export const glJournalApprovalWorkflow = (data) => api.post('/financial/general-ledger/journal-entries/approval-workflow', data);
export const glJournalEntryAnalytics = (params) => api.get('/financial/general-ledger/journal-entries/analytics', { params });

// --- General Ledger - Trial Balance (4 submodules) ---
export const glTrialBalanceReport = (params) => api.get('/financial/general-ledger/trial-balance/report', { params });
export const glTrialBalanceAdjustingEntries = (data) => api.post('/financial/general-ledger/trial-balance/adjusting-entries', data);
export const glTrialBalanceReconciliation = (data) => api.post('/financial/general-ledger/trial-balance/reconciliation', data);
export const glTrialBalancePeriodComparison = (params) => api.get('/financial/general-ledger/trial-balance/period-comparison', { params });

// --- Investments - Equity Investments (4 submodules) ---
export const investmentsEquityPortfolioDashboard = (params) => api.get('/financial/investments/equity/portfolio-dashboard', { params });
export const investmentsEquityPositionManager = (data) => api.post('/financial/investments/equity/position-manager', data);
export const investmentsEquityValuationEngine = (data) => api.post('/financial/investments/equity/valuation-engine', data);
export const investmentsEquityPerformanceAnalytics = (params) => api.get('/financial/investments/equity/performance-analytics', { params });

// --- Investments - Fixed Income (4 submodules) ---
export const investmentsFixedIncomeBondPortfolio = (params) => api.get('/financial/investments/fixed-income/bond-portfolio', { params });
export const investmentsFixedIncomeYieldCalculator = (data) => api.post('/financial/investments/fixed-income/yield-calculator', data);
export const investmentsFixedIncomeMaturityLadder = (params) => api.get('/financial/investments/fixed-income/maturity-ladder', { params });
export const investmentsFixedIncomeCreditRiskMonitor = (params) => api.get('/financial/investments/fixed-income/credit-risk-monitor', { params });

// --- Investments - Investment Returns (3 submodules) ---
export const investmentsReturnsDashboard = (params) => api.get('/financial/investments/returns/dashboard', { params });
export const investmentsReturnsROICalculator = (data) => api.post('/financial/investments/returns/roi-calculator', data);
export const investmentsReturnsPerformanceAttribution = (params) => api.get('/financial/investments/returns/performance-attribution', { params });

// --- Taxation - Tax Audits (4 submodules) ---
export const taxAuditsDashboard = (params) => api.get('/financial/taxation/audits/dashboard', { params });
export const taxAuditsManager = (data) => api.post('/financial/taxation/audits/manager', data);
export const taxAuditsDocumentationRepository = (params) => api.get('/financial/taxation/audits/documentation-repository', { params });
export const taxAuditsFindingsTracker = (data) => api.post('/financial/taxation/audits/findings-tracker', data);

// --- Taxation - Tax Credits (4 submodules) ---
export const taxCreditsDashboard = (params) => api.get('/financial/taxation/credits/dashboard', { params });
export const taxCreditsCalculator = (data) => api.post('/financial/taxation/credits/calculator', data);
export const taxCreditsTracker = (params) => api.get('/financial/taxation/credits/tracker', { params });
export const taxCreditsCarryforwardManager = (data) => api.post('/financial/taxation/credits/carryforward-manager', data);

// --- Taxation - Tax Filings (4 submodules) ---
export const taxFilingsDashboard = (params) => api.get('/financial/taxation/filings/dashboard', { params });
export const taxFilingsPreparation = (data) => api.post('/financial/taxation/filings/preparation', data);
export const taxFilingsSubmissionManager = (data) => api.post('/financial/taxation/filings/submission-manager', data);
export const taxFilingsCalendar = (params) => api.get('/financial/taxation/filings/calendar', { params });

// --- Taxation - VAT/GST Records (4 submodules) ---
export const taxVATDashboard = (params) => api.get('/financial/taxation/vat-gst/dashboard', { params });
export const taxVATCalculator = (data) => api.post('/financial/taxation/vat-gst/calculator', data);
export const taxVATReturnPreparation = (data) => api.post('/financial/taxation/vat-gst/return-preparation', data);
export const taxVATReconciliation = (data) => api.post('/financial/taxation/vat-gst/reconciliation', data);

// --- Taxation - Withholding Taxes (4 submodules) ---
export const taxWithholdingDashboard = (params) => api.get('/financial/taxation/withholding/dashboard', { params });
export const taxWithholdingRateManager = (data) => api.post('/financial/taxation/withholding/rate-manager', data);
export const taxWithholdingCertificateTracker = (params) => api.get('/financial/taxation/withholding/certificate-tracker', { params });
export const taxWithholdingComplianceMonitor = (params) => api.get('/financial/taxation/withholding/compliance-monitor', { params });

// --- Treasury Management - Cash Flow Forecasts (8 submodules) ---
export const treasuryCashFlowDashboard = (params) => api.get('/financial/treasury/cash-flow/dashboard', { params });
export const treasuryCashFlowDirectMethod = (data) => api.post('/financial/treasury/cash-flow/direct-method', data);
export const treasuryCashFlowIndirectMethod = (data) => api.post('/financial/treasury/cash-flow/indirect-method', data);
export const treasuryCashFlowScenarioManager = (data) => api.post('/financial/treasury/cash-flow/scenario-manager', data);
export const treasuryCashFlowAdjustments = (data) => api.post('/financial/treasury/cash-flow/adjustments', data);
export const treasuryCashFlowVarianceAnalysis = (params) => api.get('/financial/treasury/cash-flow/variance-analysis', { params });
export const treasuryCashFlowFXExposure = (params) => api.get('/financial/treasury/cash-flow/fx-exposure', { params });
export const treasuryCashFlowIntegrationHub = (data) => api.post('/financial/treasury/cash-flow/integration-hub', data);

// --- Treasury Management - Liquidity Management (7 submodules) ---
export const treasuryLiquidityDashboard = (params) => api.get('/financial/treasury/liquidity/dashboard', { params });
export const treasuryLiquidityCashPositioning = (params) => api.get('/financial/treasury/liquidity/cash-positioning', { params });
export const treasuryLiquidityFundingGapAnalysis = (params) => api.get('/financial/treasury/liquidity/funding-gap-analysis', { params });
export const treasuryLiquidityCashPooling = (data) => api.post('/financial/treasury/liquidity/cash-pooling', data);
export const treasuryLiquidityStressTest = (data) => api.post('/financial/treasury/liquidity/stress-test', data);
export const treasuryLiquiditySurplusManagement = (data) => api.post('/financial/treasury/liquidity/surplus-management', data);
export const treasuryLiquidityBankRiskSummary = (params) => api.get('/financial/treasury/liquidity/bank-risk-summary', { params });

// --- Treasury Management - Treasury Policies (7 submodules) ---
export const treasuryPoliciesDashboard = (params) => api.get('/financial/treasury/policies/dashboard', { params });
export const treasuryPoliciesManager = (data) => api.post('/financial/treasury/policies/manager', data);
export const treasuryPoliciesLibrary = (params) => api.get('/financial/treasury/policies/library', { params });
export const treasuryPoliciesComplianceMonitor = (params) => api.get('/financial/treasury/policies/compliance-monitor', { params });
export const treasuryPoliciesLimitManagement = (data) => api.post('/financial/treasury/policies/limit-management', data);
export const treasuryPoliciesExceptionWorkflows = (data) => api.post('/financial/treasury/policies/exception-workflows', data);
export const treasuryPoliciesAuditLog = (params) => api.get('/financial/treasury/policies/audit-log', { params });
