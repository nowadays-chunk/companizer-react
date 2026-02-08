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