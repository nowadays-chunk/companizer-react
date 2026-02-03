// src/layout/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  IconButton,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { translate } from '../utils/translate';
import { useTranslation } from '../contexts/TranslationProvider';
import { usePageDescription } from '../contexts/PageDescriptionContext';
import { useNavigate, useLocation } from 'react-router-dom';

import DrawerDashboard from './Drawer';
import { keyToLinkMap } from './keyToLinkMap';
import { generateRandomDataAsync } from '../utils/dataGenerator';
import GenerationProgressModal from '../components/GenerationProgressModal';
import NotificationBar from '../components/Notifications/NotificationBar';

const expandedDrawerWidth = 300;
const collapsedDrawerWidth = 70;

// count /a/b/c format routes only
const isThreeSegmentRoute = (route) =>
  route.split('/').filter(Boolean).length === 3;

const validRoutes = Object.values(keyToLinkMap).filter(isThreeSegmentRoute);

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  marginTop: 50,
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create(['margin', 'width'], {
    duration: theme.transitions.duration.standard,
  }),
  marginLeft: open ? expandedDrawerWidth : collapsedDrawerWidth,
  [theme.breakpoints.down('md')]: {
    // still align with collapsed/expanded drawer, but smaller screens
    marginLeft: open ? expandedDrawerWidth : collapsedDrawerWidth,
    padding: theme.spacing(2),
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    duration: theme.transitions.duration.standard,
  }),
  zIndex: theme.zIndex.drawer + 1,
  ...(open && {
    width: `calc(100% - ${expandedDrawerWidth}px)`,
    marginLeft: `${expandedDrawerWidth}px`,
  }),
  ...(!open && {
    width: `calc(100% - ${collapsedDrawerWidth}px)`,
    marginLeft: `${collapsedDrawerWidth}px`,
  }),
}));

const Dashboard = ({ children, colorMode }) => {
  const theme = useTheme();
  const { language, toggleLanguage, t } = useTranslation();
  const { description } = usePageDescription();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [currentAnalysisPage, setCurrentAnalysisPage] = useState(0);

  // Generation Modal State
  const [genModalOpen, setGenModalOpen] = useState(false);
  const [genProgressLog, setGenProgressLog] = useState([]);
  const [genIsFinished, setGenIsFinished] = useState(false);

  const [showAnalytics, setShowAnalytics] = useState(() => {
    const saved = localStorage.getItem('showAnalytics');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('showAnalytics', JSON.stringify(showAnalytics));
  }, [showAnalytics]);

  const handleDrawerToggle = () => setOpen((prev) => !prev);

  // simple logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('organizationData');
    window.location.href = '/';
  };

  const toggleShowAnalytics = () => {
    setShowAnalytics((prev) => !prev);
    setCurrentAnalysisPage(0);
  };

  const handleNextAnalysis = () => {
    const index = validRoutes.indexOf(location.pathname);
    if (index !== -1) {
      navigate(validRoutes[(index + 1) % validRoutes.length]);
    }
  };

  const handlePreviousAnalysis = () => {
    const index = validRoutes.indexOf(location.pathname);
    if (index !== -1) {
      navigate(
        validRoutes[(index - 1 + validRoutes.length) % validRoutes.length]
      );
    }
  };

  const handleGenerateData = async () => {
    setGenModalOpen(true);
    setGenProgressLog([]);
    setGenIsFinished(false);

    await generateRandomDataAsync((log) => {
      setGenProgressLog(prev => [...prev, log]);
    });

    setGenIsFinished(true);
  };

  const handleCloseGenModal = () => {
    setGenModalOpen(false);
  };

  // keyboard shortcuts
  useEffect(() => {
    const handler = (event) => {
      if (event.shiftKey) {
        if (event.key === 'ArrowLeft') handlePreviousAnalysis();
        if (event.key === 'ArrowRight') handleNextAnalysis();
      } else if (event.ctrlKey && event.key === 'Enter') {
        navigate('/summary');
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [location.pathname, navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <GenerationProgressModal
        open={genModalOpen}
        onClose={handleCloseGenModal}
        isFinished={genIsFinished}
        progressLog={genProgressLog}
      />

      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            minHeight: 56,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Drawer toggle on left */}
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>

          {/* Right side controls */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 1,
              flexWrap: 'nowrap',
              overflowX: 'auto',
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={toggleShowAnalytics}
              sx={{ mr: 1, whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {showAnalytics
                ? translate('Show Data', language)
                : translate('Show Analysis', language)}
            </Button>

            {showAnalytics && (
              <>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  sx={{ mr: 1, whiteSpace: 'nowrap', flexShrink: 0 }}
                  onClick={handlePreviousAnalysis}
                >
                  Previous
                </Button>

                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  sx={{ mr: 1, whiteSpace: 'nowrap', flexShrink: 0 }}
                  onClick={handleNextAnalysis}
                >
                  Next
                </Button>
              </>
            )}

            <Button
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ mr: 1, whiteSpace: 'nowrap', flexShrink: 0 }}
              onClick={toggleLanguage}
            >
              {translate('Switch Language', language)}
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ mr: 1, whiteSpace: 'nowrap', flexShrink: 0 }}
              onClick={colorMode.toggleColorMode}
            >
              {colorMode.mode === 'dark' ? 'Light' : 'Dark'}
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              onClick={handleLogout}
            >
              {translate('Logout', language)}
            </Button>

            <NotificationBar />

            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ mr: 1, whiteSpace: 'nowrap', flexShrink: 0 }}
              onClick={handleGenerateData}
            >
              Generate Random Row
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <DrawerDashboard
        open={open}
        onToggleDrawer={handleDrawerToggle}
      />

      <Main open={open}>
        <Box mb={2}>
          <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 1 }}>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </Box>
        </Box>
        <Box>
          {React.cloneElement(children, {
            showAnalytics,
            currentAnalysisPage,
          })}
        </Box>
      </Main>
    </Box >
  );
};

export default Dashboard;
