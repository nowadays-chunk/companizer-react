import React, { useState, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  IconButton,
  Button,
  Container
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

import { translate } from '../utils/translate';
import { useTranslation } from '../contexts/TranslationProvider';
import { useNavigate, useLocation } from 'react-router-dom';

import DrawerDashboard from './Drawer';
import { keyToLinkMap } from './keyToLinkMap';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    marginTop: 100,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin'),
    marginLeft: `-${drawerWidth}px`,
    ...(open && { marginLeft: 0 }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ open }) => ({
  transition: '0.3s',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
  }),
}));

// count /a/b/c format routes only
const isThreeSegmentRoute = (route) =>
  route.split('/').filter(Boolean).length === 3;

const validRoutes = Object.values(keyToLinkMap).filter(isThreeSegmentRoute);

const Dashboard = ({ children }) => {
  const theme = useTheme();
  const { language, toggleLanguage } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(true);
  const [currentAnalysisPage, setCurrentAnalysisPage] = useState(0);

  const [showAnalytics, setShowAnalytics] = useState(() => {
    const saved = localStorage.getItem('showAnalytics');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('showAnalytics', JSON.stringify(showAnalytics));
  }, [showAnalytics]);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // ✅ SIMPLE LOGOUT — NO AXIOS
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('organizationData');

    window.location.href = '/';
  };

  const toggleShowAnalytics = () => {
    setShowAnalytics(prev => !prev);
    setCurrentAnalysisPage(0);
  };

  const handleNextAnalysis = () => {
    const index = validRoutes.indexOf(location.pathname);
    if (index !== -1)
      navigate(validRoutes[(index + 1) % validRoutes.length]);
  };

  const handlePreviousAnalysis = () => {
    const index = validRoutes.indexOf(location.pathname);
    if (index !== -1)
      navigate(validRoutes[(index - 1 + validRoutes.length) % validRoutes.length]);
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

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Container sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={toggleShowAnalytics}
              sx={{ mr: 2 }}
            >
              {showAnalytics
                ? translate("Show Data", language)
                : translate("Show Analysis", language)
              }
            </Button>

            {showAnalytics && (
              <>
                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handlePreviousAnalysis}
                >
                  Previous
                </Button>

                <Button
                  variant="outlined"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handleNextAnalysis}
                >
                  Next
                </Button>
              </>
            )}

            <Button
              variant="outlined"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={toggleLanguage}
            >
              {translate("Switch Language", language)}
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              onClick={handleLogout}
            >
              {translate("Logout", language)}
            </Button>
          </Container>
        </Toolbar>
      </AppBar>

      <DrawerDashboard
        setShowAnalytics={setShowAnalytics}
        setCurrentAnalysisPage={setCurrentAnalysisPage}
      />

      <Main open={open} sx={{ marginLeft: '300px' }}>
        <Box>
          {React.cloneElement(children, {
            showAnalytics,
            currentAnalysisPage
          })}
        </Box>
      </Main>
    </Box>
  );
};

export default Dashboard;
