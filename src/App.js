import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

// ⛔️ Removed Firebase + Stripe
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './utils/firebaseConfig';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

import Dashboard from './layout/Dashboard';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import Article from './pages/Article';
import ProtectedRoute from './components/Partials/ProtectedRoute';
import OrganizationRegistration from './components/Authentication/OrganizationRegistration';
import { TranslationProvider } from './contexts/TranslationProvider';
import { PageDescriptionProvider } from './contexts/PageDescriptionContext';
import GanttChart from './pages/GanttChart';
import Treasury from './pages/Treasury';
import Management from './pages/Management';
import Visualizer from './pages/UnitVisualizer';
import BilanComptable from './pages/BilanComptable';
import WorkflowRulesManager from './pages/WorkflowRulesManager';
import SummaryConfiguration from './pages/SummaryConfiguration';
import ConfigurablePdf from './pages/ConfigurablePdf';
import { OrganizationsPage, UsersPage, AuthorizationsPage } from './pages/RBACPages';
import { AuthProvider } from './contexts/AuthContext';
import AdminConsole from './pages/AdminConsole';
import TaskManager from './pages/TaskManager';
import AdminExport from './pages/AdminExport';
import BusinessRulesManager from './pages/BusinessRulesManager';
import InvoiceCaptureHub from './pages/Analysis/FinancialManagement/AccountsPayable/InvoiceCaptureHub';
import InvoiceMatchingWorkspace from './pages/Analysis/FinancialManagement/AccountsPayable/InvoiceMatchingWorkspace';
import InvoiceApprovalCenter from './pages/Analysis/FinancialManagement/AccountsPayable/InvoiceApprovalCenter';
import MarkdownViewer from './components/MarkdownViewer';
import PaymentTermsTestBench from './pages/PaymentTermsTestBench';
import PaymentTermsCalculator from './pages/PaymentTermsCalculator';
import AgingAnalysis from './components/Management/FinancialManagement/AccountsPayable/Modules/CreditorsLedger/AgingAnalysis';
import ReconciliationManager from './components/Management/FinancialManagement/AccountsPayable/Modules/CreditorsLedger/ReconciliationManager';
import CashForecast from './components/Management/FinancialManagement/AccountsPayable/Modules/CreditorsLedger/CashForecast';
import DPOAnalytics from './components/Management/FinancialManagement/AccountsPayable/Modules/CreditorsLedger/DPOAnalytics';
import DisputeManager from './components/Management/FinancialManagement/AccountsPayable/Modules/CreditorsLedger/DisputeManager';
import CustomerInvoicesDunningManager from './components/Management/FinancialManagement/AccountsReceivable/Modules/CustomerInvoices/DunningManager';
import CustomerInvoicesDisputeManager from './components/Management/FinancialManagement/AccountsReceivable/Modules/CustomerInvoices/DisputeManager';
import ARAging from './components/Management/FinancialManagement/AccountsReceivable/Modules/CustomerInvoices/ARAging';
import RevenueAnalytics from './components/Management/FinancialManagement/AccountsReceivable/Modules/CustomerInvoices/RevenueAnalytics';
import InvoiceGenerator from './components/Management/FinancialManagement/AccountsReceivable/Modules/CustomerInvoices/InvoiceGenerator';

import CreditDashboard from './components/Management/FinancialManagement/AccountsReceivable/Modules/CreditManagement/CreditDashboard';
import CreditProfiles from './components/Management/FinancialManagement/AccountsReceivable/Modules/CreditManagement/CreditProfiles';
import RiskEngine from './components/Management/FinancialManagement/AccountsReceivable/Modules/CreditManagement/RiskEngine';
import ExposureManager from './components/Management/FinancialManagement/AccountsReceivable/Modules/CreditManagement/ExposureManager';
import GovernanceConsole from './components/Management/FinancialManagement/AccountsReceivable/Modules/CreditManagement/GovernanceConsole';

import AgingDashboard from './components/Management/FinancialManagement/AccountsReceivable/Modules/DebtorAging/AgingDashboard';
// Renaming import to avoid conflict with CreditorsLedger/AgingAnalysis
import DebtorAgingAnalysis from './components/Management/FinancialManagement/AccountsReceivable/Modules/DebtorAging/AgingAnalysis';
import RiskAndCollections from './components/Management/FinancialManagement/AccountsReceivable/Modules/DebtorAging/RiskAndCollections';
// Renaming import to avoid conflict with CreditorsLedger/CashForecast
import DebtorCashForecast from './components/Management/FinancialManagement/AccountsReceivable/Modules/DebtorAging/CashForecast';
import AgingConfiguration from './components/Management/FinancialManagement/AccountsReceivable/Modules/DebtorAging/AgingConfiguration';

import AccountDetails from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/AccountDetails';
import AccountAudit from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/AccountAudit';
import IntercompanySettings from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/IntercompanySettings';

import JournalReports from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalReports';
import RecurringJournals from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/RecurringJournals';
import JournalApprovals from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalApprovals';
import JournalPosting from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalPosting';
import JournalReversals from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalReversals';
import JournalAllocations from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalAllocations';
import IntercompanyJournals from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/IntercompanyJournals';
import JournalCompliance from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalCompliance';
import JournalAnalytics from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalAnalytics';
import JournalAdmin from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalAdmin';
import JournalEntryManager from './components/Management/FinancialManagement/GeneralLedger/Modules/JournalEntries/JournalEntryManager';

// Chart of Accounts Modules
import AccountHierarchy from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/AccountHierarchy';
import SegmentConfiguration from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/SegmentConfiguration';
import AccountTemplates from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/AccountTemplates';
import PostingControls from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/PostingControls';
import StatementMapping from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/StatementMapping';
import SubledgerIntegration from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/SubledgerIntegration';
import CoAAdmin from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/CoAAdmin';
import CoAReports from './components/Management/FinancialManagement/GeneralLedger/Modules/ChartOfAccounts/CoAReports';

// Trial Balance Modules
import TrialBalanceStandard from './components/Management/FinancialManagement/GeneralLedger/Modules/TrialBalance/TrialBalanceStandard';
import TrialBalanceComparative from './components/Management/FinancialManagement/GeneralLedger/Modules/TrialBalance/TrialBalanceComparative';
import TrialBalanceClosing from './components/Management/FinancialManagement/GeneralLedger/Modules/TrialBalance/TrialBalanceClosing';
import TrialBalanceAudit from './components/Management/FinancialManagement/GeneralLedger/Modules/TrialBalance/TrialBalanceAudit';
import TrialBalanceConfig from './components/Management/FinancialManagement/GeneralLedger/Modules/TrialBalance/TrialBalanceConfig';


// Reconciliation Statements Modules
import ReconciliationDashboard from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/ReconciliationDashboard';
import BankReconciliation from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/BankReconciliation';
import ImportDataFeeds from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/ImportDataFeeds';
import MatchingRulesEngine from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/MatchingRulesEngine';
import ReconcilingItems from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/ReconcilingItems';
import IntercompanyReconciliation from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/IntercompanyReconciliation';
import BalanceSheetReconciliation from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/BalanceSheetReconciliation';
import ReconciliationWorkflow from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/ReconciliationWorkflow';
import ReconciliationReports from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/ReconciliationReports';
import ReconciliationSettings from './components/Management/FinancialManagement/BankAccounts/Modules/ReconciliationStatements/ReconciliationSettings';

// Bank Transfers Modules
import TransferDashboard from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/TransferDashboard';
import TransferEntry from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/TransferEntry';
import ApprovalWorkflow from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/ApprovalWorkflow';
import ExecutionConnectivity from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/ExecutionConnectivity';
import FXManager from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/FXManager';
import AccountingIntegration from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/AccountingIntegration';
import IntercompanyManager from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/IntercompanyManager';
import ReconciliationStatus from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/ReconciliationStatus';
import AutomationRules from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/AutomationRules';
import TransferHistory from './components/Management/FinancialManagement/BankAccounts/Modules/BankTransfers/TransferHistory';
import { modules as ForeignCurrencyModules } from './components/Management/FinancialManagement/BankAccounts/Modules/ForeignCurrencyAccounts';
import { modules as LoanAgreementModules } from './components/Management/FinancialManagement/Debts/Modules/LoanAgreements';
import { modules as InterestPaymentModules } from './components/Management/FinancialManagement/Debts/Modules/InterestPayments';
import { modules as DebtMaturityModules } from './components/Management/FinancialManagement/Debts/Modules/DebtMaturitySchedules';
import { modules as EquityInvestmentModules } from './components/Management/FinancialManagement/Investments/Modules/EquityInvestments';


// If you enable Stripe again later, restore this:
// const stripePromise = loadStripe(String(process.env.REACT_APP_STRIPE_PUBLIC_KEY));

import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme'; // Changed import

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en'); // Default language

  // Theme Mode State
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode],
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  // ✅ New auth bootstrap: read from localStorage (set by axios login / registration)
  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const rawUser = localStorage.getItem('userData');

      if (token && rawUser) {
        const parsedUser = JSON.parse(rawUser);
        setUser(parsedUser);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error('Error reading auth data from localStorage:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider value={{ user, setUser, loading }}>
        <TranslationProvider>
          <PageDescriptionProvider>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />

              <Route
                path="/summary"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Treasury />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/summary/configuration"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <SummaryConfiguration />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/bilan-comptable"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <BilanComptable />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* RBAC Routes - Must come before generic /:module/:subModule/:component */}

              {/* Organizations Routes */}
              <Route
                path="/management/organizations"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <OrganizationsPage />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/organizations/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="view" config={require('./components/RBAC/Organizations')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/organizations/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="edit" config={require('./components/RBAC/Organizations')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/organizations/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="create" config={require('./components/RBAC/Organizations')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Users Routes */}
              <Route
                path="/management/users"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <UsersPage />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/users/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="view" config={require('./components/RBAC/Users')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/users/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="edit" config={require('./components/RBAC/Users')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/users/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="create" config={require('./components/RBAC/Users')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Authorizations Routes */}
              <Route
                path="/management/users/authorizations"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AuthorizationsPage />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/users/authorizations/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="view" config={require('./components/RBAC/Authorizations')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/users/authorizations/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="edit" config={require('./components/RBAC/Authorizations')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/management/users/authorizations/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="create" config={require('./components/RBAC/Authorizations')} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Admin Console Route */}
              <Route
                path="/admin/console"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AdminConsole />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Admin Export Route */}
              <Route
                path="/admin/export"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AdminExport />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Vendor Invoice Capture Hub */}
              <Route
                path="/apps/vendor-invoices/capture"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <InvoiceCaptureHub />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Vendor Invoice Match Workspace */}
              <Route
                path="/apps/vendor-invoices/match/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <InvoiceMatchingWorkspace />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Vendor Invoice Approval Center */}
              <Route
                path="/apps/vendor-invoices/approvals"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <InvoiceApprovalCenter />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Vendor Invoice Payments */}
              <Route
                path="/apps/vendor-invoices/payments"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/AccountsPayable/Modules/VendorInvoices/PaymentRunManager')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Payment Terms Test Bench */}
              <Route
                path="/apps/payment-terms/test-bench/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <PaymentTermsTestBench />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Payment Terms Calculator */}
              <Route
                path="/apps/payment-terms/calculator"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <PaymentTermsCalculator />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Creditors Ledger - Aging Analysis */}
              <Route
                path="/apps/creditors-ledger/aging-analysis"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AgingAnalysis />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Creditors Ledger - Reconciliation Manager */}
              <Route
                path="/apps/creditors-ledger/reconciliation"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ReconciliationManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Creditors Ledger - Cash Forecast */}
              <Route
                path="/apps/creditors-ledger/cash-forecast"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <CashForecast />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Creditors Ledger - DPO Analytics */}
              <Route
                path="/apps/creditors-ledger/dpo-analytics"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <DPOAnalytics />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />


              {/* Creditors Ledger - Dispute Manager */}
              <Route
                path="/apps/creditors-ledger/disputes"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <DisputeManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* General Ledger - Journal Entries */}
              <Route
                path="/apps/general-ledger/journals"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Management module="financial-management" subModule="general-ledger" component="journal-entries" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/recurring"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <RecurringJournals />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/approvals"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalApprovals />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/posting"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalPosting />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/:id/reversals"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalReversals />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/allocations"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalAllocations />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/intercompany"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <IntercompanyJournals />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/compliance"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalCompliance />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/apps/general-ledger/journals/reports"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalReports />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/admin"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalAdmin />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalEntryManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalEntryManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalEntryManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/journals/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <JournalEntryManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* General Ledger - Trial Balance */}
              <Route
                path="/apps/general-ledger/trial-balance/standard"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TrialBalanceStandard />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/trial-balance/comparative"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TrialBalanceComparative />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/trial-balance/closing"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TrialBalanceClosing />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/trial-balance/audit"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TrialBalanceAudit />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/general-ledger/trial-balance/config"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TrialBalanceConfig />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* General Ledger - Chart of Accounts */}
              <Route
                path="/apps/chart-of-accounts/hierarchy"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AccountHierarchy />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/segments"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <SegmentConfiguration />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/templates"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AccountTemplates />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/posting-controls"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <PostingControls />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/statements"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <StatementMapping />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/subledgers"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <SubledgerIntegration />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/admin"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <CoAAdmin />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/:id/details"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AccountDetails />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/:id/audit"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AccountAudit />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/:id/intercompany"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <IntercompanySettings />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/chart-of-accounts/reports"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <CoAReports />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* ========================================================= */}
              {/* Bank Accounts - Reconciliation Statements                 */}
              {/* ========================================================= */}
              <Route
                path="/apps/bank-accounts/reconciliation/dashboard"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ReconciliationDashboard />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/matching"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <BankReconciliation />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/import"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ImportDataFeeds />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/rules"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <MatchingRulesEngine />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/items"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ReconcilingItems />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/intercompany"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <IntercompanyReconciliation />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/balance-sheet"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <BalanceSheetReconciliation />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/workflow"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ReconciliationWorkflow />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/reports"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ReconciliationReports />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/reconciliation/settings"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ReconciliationSettings />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* ========================================================= */}
              {/* Bank Accounts - Bank Transfers                            */}
              {/* ========================================================= */}
              <Route
                path="/apps/bank-accounts/transfers/dashboard"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TransferDashboard />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/entry"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TransferEntry />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/approvals"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ApprovalWorkflow />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/execution"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ExecutionConnectivity />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/fx"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <FXManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/accounting"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AccountingIntegration />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/intercompany"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <IntercompanyManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/reconciliation"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ReconciliationStatus />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/automation"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AutomationRules />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/bank-accounts/transfers/history"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <TransferHistory />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />


              {/* ========================================================= */}
              {/* Bank Accounts - Foreign Currency Accounts                 */}
              {/* ========================================================= */}
              {ForeignCurrencyModules.map((module) => (
                <Route
                  key={module.id}
                  path={module.path}
                  element={
                    <ProtectedRoute user={user}>
                      <Dashboard colorMode={colorMode}>
                        <React.Suspense fallback={<CircularProgress />}>
                          <module.component />
                        </React.Suspense>
                      </Dashboard>
                    </ProtectedRoute>
                  }
                />
              ))}


              {/* ========================================================= */}
              {/* Customer Invoices (Accounts Receivable) Modules           */}
              {/* ========================================================= */}

              {/* Invoice Generator */}
              <Route
                path="/apps/customer-invoices/generate"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <InvoiceGenerator />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* ========================================================= */}
              {/* Fiscal Periods (Financial Management) Modules             */}
              {/* ========================================================= */}

              <Route
                path="/apps/fiscal-periods/calendar-setup"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/FiscalCalendarSetup')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/period-definition"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/FiscalPeriodDefinition')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/status-manager"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/PeriodStatusManager')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/posting-controls"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/PostingControls')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/close-process"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/CloseProcessManager')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/adjustment-periods"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/AdjustmentPeriods')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/multi-entity"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/MultiEntityPeriods')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/parallel-ledgers"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/ParallelLedgers')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/security"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/PeriodSecurity')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/automation"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/PeriodAutomation')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/apps/fiscal-periods/reporting"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <React.Suspense fallback={<CircularProgress />}>
                        {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/GeneralLedger/Modules/FiscalPeriods/FiscalReporting')))}
                      </React.Suspense>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* AR Aging */}
              <Route
                path="/apps/customer-invoices/aging"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ARAging />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Revenue Analytics */}
              <Route
                path="/apps/customer-invoices/revenue"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <RevenueAnalytics />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Collections & Dunning */}
              <Route
                path="/apps/customer-invoices/dunning"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <CustomerInvoicesDunningManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* AR Disputes */}
              <Route
                path="/apps/customer-invoices/disputes"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <CustomerInvoicesDisputeManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* ========================================================= */}
              {/* Credit Management Modules                                 */}
              {/* ========================================================= */}

              {/* Credit Dashboard */}
              <Route
                path="/apps/credit-management/dashboard"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <CreditDashboard />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Credit Profiles */}
              <Route
                path="/apps/credit-management/profiles"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <CreditProfiles />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Risk Engine */}
              <Route
                path="/apps/credit-management/risk-engine"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <RiskEngine />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Exposure Manager */}
              <Route
                path="/apps/credit-management/exposure"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <ExposureManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Governance Console */}
              <Route
                path="/apps/credit-management/governance"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <GovernanceConsole />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* ========================================================= */}
              {/* Debtor Aging Modules                                      */}
              {/* ========================================================= */}

              {/* Aging Dashboard */}
              <Route
                path="/apps/debtor-aging/dashboard"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AgingDashboard />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Aging Analysis */}
              <Route
                path="/apps/debtor-aging/analysis"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <DebtorAgingAnalysis />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Risk & Collections */}
              <Route
                path="/apps/debtor-aging/risk"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <RiskAndCollections />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Cash Forecast */}
              <Route
                path="/apps/debtor-aging/forecast"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <DebtorCashForecast />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Aging Configuration */}
              <Route
                path="/apps/debtor-aging/configuration"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <AgingConfiguration />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* ========================================================= */}
              {/* Debts - Loan Agreements Modules                           */}
              {/* ========================================================= */}
              {LoanAgreementModules.map((module) => (
                <Route
                  key={module.id}
                  path={module.path}
                  element={
                    <ProtectedRoute user={user}>
                      <Dashboard colorMode={colorMode}>
                        <React.Suspense fallback={<CircularProgress />}>
                          <module.component />
                        </React.Suspense>
                      </Dashboard>
                    </ProtectedRoute>
                  }
                />
              ))}

              {/* ========================================================= */}
              {/* Debts - Interest Payments Modules                         */}
              {/* ========================================================= */}
              {InterestPaymentModules.map((module) => (
                <Route
                  key={module.id}
                  path={module.path}
                  element={
                    <ProtectedRoute user={user}>
                      <Dashboard colorMode={colorMode}>
                        <React.Suspense fallback={<CircularProgress />}>
                          <module.component />
                        </React.Suspense>
                      </Dashboard>
                    </ProtectedRoute>
                  }
                />
              ))}


              {/* ========================================================= */}
              {/* Debts - Debt Maturity Schedules Module                    */}
              {/* ========================================================= */}
              {DebtMaturityModules.map((module) => (
                <Route
                  key={module.id}
                  path={module.path}
                  element={
                    <ProtectedRoute user={user}>
                      <Dashboard colorMode={colorMode}>
                        <React.Suspense fallback={<CircularProgress />}>
                          <module.component />
                        </React.Suspense>
                      </Dashboard>
                    </ProtectedRoute>
                  }
                />
              ))}

              {/* ========================================================= */}
              {/* Investments - Equity Investments Modules                  */}
              {/* ========================================================= */}
              {EquityInvestmentModules.map((module) => (
                <Route
                  key={module.id}
                  path={module.path}
                  element={
                    <ProtectedRoute user={user}>
                      <Dashboard colorMode={colorMode}>
                        <React.Suspense fallback={<CircularProgress />}>
                          <module.component />
                        </React.Suspense>
                      </Dashboard>
                    </ProtectedRoute>
                  }
                />
              ))}

              {/* Business Rules Manager Route */}
              <Route
                path="/admin/business-rules"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <BusinessRulesManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/:module/:subModule/:component"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Management />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/:module/:subModule/:targetEntity/configuration"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <WorkflowRulesManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/:module/:subModule/:component/configuration/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="view" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Vendor Portal */}
              <Route
                path="/portal/vendor"
                element={
                  <Dashboard colorMode={colorMode}>
                    <React.Suspense fallback={<CircularProgress />}>
                      {React.createElement(React.lazy(() => import('./components/Management/FinancialManagement/AccountsPayable/Modules/VendorInvoices/VendorPortalHome')))}
                    </React.Suspense>
                  </Dashboard>
                  // Note: Typically portals have a different layout without the main admin sidebar
                }
              />

              <Route
                path="/:module/:subModule/:component/configuration/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="edit" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/:module/:subModule/:component/configuration/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="create" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              {/* Blog and documentation */}
              <Route
                path="/documentation"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <MarkdownViewer fileName="documentation.md" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Blog language={language} switchLanguage={switchLanguage} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/article/:slug"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Article language={language} switchLanguage={switchLanguage} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Authentication */}
              <Route
                path="/registration"
                element={<OrganizationRegistration />}
              />

              <Route
                path="/gantt-chart"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <GanttChart />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/:main/:sub/:entity/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="view" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/:main/:sub/:entity/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="edit" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/:main/:sub/:entity/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="create" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* DETAILS ROUTES (Nested URL structure) */}
              <Route
                path="/:main/:sub/:entity/details/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="view" isDetail={true} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/:main/:sub/:entity/details/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="edit" isDetail={true} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/:main/:sub/:entity/details/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Visualizer mode="create" isDetail={true} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/print/:main/:sub/:entity/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <ConfigurablePdf />
                  </ProtectedRoute>
                }
              />

            </Routes>
          </PageDescriptionProvider>
        </TranslationProvider>
      </AuthProvider >
    </ThemeProvider >
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
