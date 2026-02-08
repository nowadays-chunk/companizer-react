import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Dashboard from './layout/Dashboard';
import ProtectedRoute from './components/Partials/ProtectedRoute';
import OrganizationRegistration from './components/Authentication/OrganizationRegistration';
import { TranslationProvider } from './contexts/TranslationProvider';
import { PageDescriptionProvider } from './contexts/PageDescriptionContext';
import { allModules } from './moduleRegistry';
import * as Pages from './pages';
import markdownRoutes from './data/markdownRoutes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme';

const AppRoutes = ({ colorMode }) => {
  const { loading } = useAuth();
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000', color: '#fff' }}>
        Loading...
      </div>
    );
  }

  return (
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
              path={`${module.path}`}
              element={
                <ProtectedRoute>
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
            path="/analysis/:entity"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.Analytics />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:component/configuration/create"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.UnitVisualizer mode="create" />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          {markdownRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<Pages.MarkdownViewer fileName={route.fileName} />}
            />
          ))}

          <Route
            path="/summary"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.PersonalizedDashboard />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.Blog language={language} switchLanguage={switchLanguage} />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/article/:slug"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.Article language={language} switchLanguage={switchLanguage} />
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
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.GanttChart />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/print/:main/:sub/:entity/view/:id"
            element={
              <ProtectedRoute>
                <Pages.ConfigurablePdf />
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:component/view/:id"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.UnitVisualizer mode="view" />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:component/create"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.UnitVisualizer mode="create" />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:component/edit/:id"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.UnitVisualizer mode="edit" />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:component"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.Management />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:targetEntity/configuration"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.WorkflowRulesManager />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:component/configuration/view/:id"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.UnitVisualizer mode="view" />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/:module/:subModule/:component/configuration/edit/:id"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.UnitVisualizer mode="edit" />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          {/* Business Rules Manager Route */}
          <Route
            path="/admin/business-rules"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.BusinessRulesManager />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          {/* Admin Console Route */}
          <Route
            path="/admin/console"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.AdminConsole />
                </Dashboard>
              </ProtectedRoute>
            }
          />

          {/* Admin Export Route */}
          <Route
            path="/admin/export"
            element={
              <ProtectedRoute>
                <Dashboard colorMode={colorMode}>
                  <Pages.AdminExport />
                </Dashboard>
              </ProtectedRoute>
            }
          />
        </Routes>
      </PageDescriptionProvider>
    </TranslationProvider>
  );
};

const App = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <AppRoutes colorMode={colorMode} />
      </AuthProvider>
    </ThemeProvider>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
