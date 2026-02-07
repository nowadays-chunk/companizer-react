import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { AuthProvider } from './contexts/AuthContext';

import Dashboard from './layout/Dashboard';

import ProtectedRoute from './components/Partials/ProtectedRoute';
import OrganizationRegistration from './components/Authentication/OrganizationRegistration';

import { TranslationProvider } from './contexts/TranslationProvider';
import { PageDescriptionProvider } from './contexts/PageDescriptionContext';
import { allModules } from './moduleRegistry';
import * as Pages from './pages';
import markdownRoutes from './data/markdownRoutes';

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
                element={<Pages.HomePage />}
              />

              {allModules.map((module) => (
                <Route
                  key={module.id}
                  path={`/tailored_bridge/#${module.path}`}
                  element={
                    <ProtectedRoute user={user}>
                      <Dashboard colorMode={colorMode}>
                        <React.Suspense fallback={<CircularProgress />}>
                          {module.component ? <module.component /> : <div>Component not found</div>}
                        </React.Suspense>
                      </Dashboard>
                    </ProtectedRoute>
                  }
                />
              ))}

              {/* Generic Analytics Route */}
              <Route
                path="/tailored_bridge/#/analysis/:entity"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.Analytics />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/:module/:subModule/:component/configuration/create"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.UnitVisualizer mode="create" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              {/* Blog and documentation */}
              {/* Dynamic Markdown Pages */}
              {/* Dynamic Markdown Pages - Public & Standalone */}
              {markdownRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={`/tailored_bridge/#${route.path}`}
                  element={<Pages.MarkdownViewer fileName={route.fileName} />}
                />
              ))}

              <Route
                path="/tailored_bridge/#/summary"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.PersonalizedDashboard />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/blog"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.Blog language={language} switchLanguage={switchLanguage} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/article/:slug"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.Article language={language} switchLanguage={switchLanguage} />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Authentication */}
              <Route
                path="/tailored_bridge/#/registration"
                element={<OrganizationRegistration />}
              />

              <Route
                path="/tailored_bridge/#/gantt-chart"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.GanttChart />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/print/:main/:sub/:entity/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Pages.ConfigurablePdf />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/:module/:subModule/:component/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.UnitVisualizer mode="view" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/:module/:subModule/:component"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.Management />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/:module/:subModule/:targetEntity/configuration"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.WorkflowRulesManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/:module/:subModule/:component/configuration/view/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.UnitVisualizer mode="view" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/tailored_bridge/#/:module/:subModule/:component/configuration/edit/:id"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.UnitVisualizer mode="edit" />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Business Rules Manager Route */}
              <Route
                path="/tailored_bridge/#/admin/business-rules"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.BusinessRulesManager />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Admin Console Route */}
              <Route
                path="/tailored_bridge/#/admin/console"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.AdminConsole />
                    </Dashboard>
                  </ProtectedRoute>
                }
              />

              {/* Admin Export Route */}
              <Route
                path="/tailored_bridge/#/admin/export"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard colorMode={colorMode}>
                      <Pages.AdminExport />
                    </Dashboard>
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
