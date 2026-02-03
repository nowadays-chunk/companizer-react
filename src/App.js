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
import PersonalizedDashboard from './pages/PersonalizedDashboard';
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

              {/* ========================================================= */}
              {/* Customer Invoices (Accounts Receivable) Modules           */}
              {/* ========================================================= */}

              {/* Invoice Generator */}
              <Route
                path="/apps/customer-invoices/generator"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <InvoiceGenerator />
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
      </AuthProvider>
    </ThemeProvider >
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
