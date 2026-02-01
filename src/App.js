import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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
import GanttChart from './pages/GanttChart';
import Treasury from './pages/Treasury';
import Management from './pages/Management';
import Visualizer from './pages/UnitVisualizer';
import BilanComptable from './pages/BilanComptable';
import WorkflowRulesManager from './pages/WorkflowRulesManager';
import SummaryConfiguration from './pages/SummaryConfiguration';
import ConfigurablePdf from './pages/ConfigurablePdf';

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
      <TranslationProvider>
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
      </TranslationProvider>
    </ThemeProvider>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
