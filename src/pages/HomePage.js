import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button, Container, Grid, Paper, Stack,
  List, ListItem, ListItemIcon, ListItemText, Link as MuiLink,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupIcon from '@mui/icons-material/Group';
import GavelIcon from '@mui/icons-material/Gavel';
import CampaignIcon from '@mui/icons-material/Campaign';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LoginDialog from '../components/Authentication/LoginDialog';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';

// --- STYLES & ANIMATIONS ---
const neonBlue = '#00f3ff';
const neonRed = '#ff0055';
const darkBg = '#050505';
const cardBg = '#0a0a0a';
const border = '1px solid #222';

const styles = {
  root: {
    backgroundColor: darkBg,
    minHeight: '100vh',
    color: '#fff',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    overflowX: 'hidden',
  },
  neonTextBlue: {
    textShadow: `0 0 5px ${neonBlue}, 0 0 10px ${neonBlue}, 0 0 20px ${neonBlue}`,
    color: '#fff',
  },
  neonTextRed: {
    textShadow: `0 0 5px ${neonRed}, 0 0 10px ${neonRed}, 0 0 20px ${neonRed}`,
    color: '#fff',
  },
  bentoBox: {
    backgroundColor: cardBg,
    border: border,
    borderRadius: '16px',
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: `0 0 20px rgba(0, 243, 255, 0.2)`,
      borderColor: neonBlue,
    },
    '&:hover .icon-blue': {
      color: neonBlue,
      filter: `drop-shadow(0 0 5px ${neonBlue})`,
    },
    '&:hover .icon-red': {
      color: neonRed,
      filter: `drop-shadow(0 0 5px ${neonRed})`,
    }
  },
  heroTitle: {
    fontWeight: 800,
    letterSpacing: '-2px',
    background: `linear-gradient(90deg, #fff 0%, #aaa 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
  },
  navButton: {
    color: '#fff',
    borderColor: '#333',
    '&:hover': {
      borderColor: neonBlue,
      color: neonBlue,
      boxShadow: `0 0 10px ${neonBlue}`,
    },
  },
  actionButton: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    borderRadius: '30px',
    padding: '10px 30px',
    '&:hover': {
      backgroundColor: neonBlue,
      color: 'black',
      boxShadow: `0 0 20px ${neonBlue}`,
    },
  },
  docLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#aaa',
    transition: 'color 0.3s',
    marginTop: 'auto',
    '&:hover': {
      color: neonRed,
    }
  }
};

const FeatureBox = ({ title, icon, description, delay, accent = 'blue' }) => (
  <Paper
    elevation={0}
    sx={{
      ...styles.bentoBox,
      animation: `fadeInUp 0.6s ease-out ${delay}s backwards`,
      '&:hover': {
        ...styles.bentoBox['&:hover'],
        borderColor: accent === 'red' ? neonRed : neonBlue,
        boxShadow: `0 0 20px rgba(${accent === 'red' ? '255, 0, 85' : '0, 243, 255'}, 0.2)`,
      },
    }}
  >
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 40, color: '#444', transition: '0.3s' }, className: `icon-${accent}` })}
        <ArrowForwardIcon sx={{ color: '#333', transform: 'rotate(-45deg)' }} />
      </Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#aaa', lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>
  </Paper>
);

const HomePage = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  // Animation Keyframes injection
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
       @keyframes pulseNeon {
        0% { box-shadow: 0 0 5px ${neonBlue}55; }
        50% { box-shadow: 0 0 20px ${neonBlue}aa; }
        100% { box-shadow: 0 0 5px ${neonBlue}55; }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <Box sx={styles.root}>
      {/* Navigation */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #222' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Logo Placeholder */}
              <Box sx={{ width: 40, height: 40, borderRadius: '8px', background: `linear-gradient(45deg, ${neonBlue}, ${neonRed})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                VI
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: '1px' }}>
                VAULT INSIGHT
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button onClick={handleLoginOpen} variant="outlined" sx={styles.navButton}>
                Log In
              </Button>
              <Button component={Link} to="/registration" variant="contained" sx={{ ...styles.actionButton, background: neonBlue, border: 'none' }}>
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />

      <Container maxWidth="xl" sx={{ pt: 8, pb: 12 }}>

        {/* HERO SECTION */}
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: '60vh', mb: 8 }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <Chip label="v2.0 REALEASE" sx={{ backgroundColor: 'rgba(255,255,255,0.1)', color: neonBlue, border: `1px solid ${neonBlue}`, mb: 3, fontWeight: 'bold' }} />
              <Typography variant="h1" sx={{ ...styles.heroTitle, fontSize: { xs: '3rem', md: '5rem' } }}>
                Enterprise <br />
                <span style={{ color: 'transparent', WebkitTextStroke: '1px white' }}>Intelligence.</span>
              </Typography>
              <Typography variant="h5" sx={{ color: '#888', maxWidth: '600px', mb: 5, lineHeight: 1.6 }}>
                The comprehensive ERP & CRM solution for modern businesses.
                Manage Finance, HR, Operations, and more in a unified,
                <span style={{ color: neonBlue }}> secure</span> environment.
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button component={Link} to="/registration" size="large" sx={styles.actionButton}>
                  Start Free Trial
                </Button>
                <Button
                  component={Link}
                  to="/documentation"
                  startIcon={<ArticleIcon />}
                  sx={{ color: '#fff', '&:hover': { color: neonRed } }}
                >
                  View Documentation
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            {/* Abstract Visual Representation */}
            <Box sx={{
              position: 'relative',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'float 6s ease-in-out infinite'
            }}>
              <Box sx={{
                position: 'absolute', width: '80%', height: '80%',
                border: `2px solid ${neonBlue}`,
                borderRadius: '50%',
                filter: `drop-shadow(0 0 20px ${neonBlue})`
              }} />
              <Box sx={{
                position: 'absolute', width: '60%', height: '60%',
                border: `2px solid ${neonRed}`,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                animation: 'float 4s ease-in-out infinite reverse',
                filter: `drop-shadow(0 0 20px ${neonRed})`
              }} />
              <Paper sx={{
                p: 3,
                background: 'rgba(20,20,20,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid #333',
                borderRadius: '16px',
                maxWidth: '300px',
                zIndex: 2
              }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <SecurityIcon sx={{ color: neonBlue }} />
                  <Typography variant="h6">Security First</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  AES-256 Encryption <br />
                  RBAC Architecture <br />
                  Audit Logging
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* BENTO GRID LAYOUT */}
        <Typography variant="h6" sx={{ color: neonBlue, mb: 2, textTransform: 'uppercase', letterSpacing: '3px' }}>
          System Modules
        </Typography>
        <Grid container spacing={3}>

          {/* Financial Management - Large Box */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ ...styles.bentoBox, minHeight: '300px', background: `linear-gradient(135deg, ${cardBg} 0%, #111 100%)` }}>
              <Box>
                <Chip label="Core Module" size="small" sx={{ bgcolor: neonBlue, color: '#000', fontWeight: 'bold', mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Financial Management
                </Typography>
                <Typography variant="body1" sx={{ color: '#aaa', maxWidth: '70%', mb: 4 }}>
                  Complete control over AP, AR, General Ledger, Banking, and Taxation.
                  Automated reconciliation and real-time cash flow forecasting.
                </Typography>
                <Grid container spacing={2}>
                  {['Accounts Payable', 'Accounts Receivable', 'General Ledger', 'Taxation', 'Treasury'].map((item) => (
                    <Grid item key={item}>
                      <Chip label={item} variant="outlined" sx={{ color: '#fff', borderColor: '#444' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <AccountBalanceIcon sx={{ position: 'absolute', right: -20, bottom: -20, fontSize: 300, opacity: 0.05, transform: 'rotate(-15deg)' }} />
            </Paper>
          </Grid>

          {/* Operations - Tall Box */}
          <Grid item xs={12} md={4}>
            <FeatureBox
              title="Operations"
              icon={<SpeedIcon />}
              description="Streamline supply chain, inventory, and asset management with precision tracking."
              delay={0.1}
              accent="red"
            />
          </Grid>

          {/* HR - Standard Box */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox
              title="Human Resources"
              icon={<GroupIcon />}
              description="Manage employee lifecycle, payroll, recruitment, and performance reviews in one place."
              delay={0.2}
              accent="blue"
            />
          </Grid>

          {/* Compliance - Standard Box */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox
              title="Legal & Compliance"
              icon={<GavelIcon />}
              description="Stay compliant with automated regulatory checks, contract management, and audit trails."
              delay={0.3}
              accent="red"
            />
          </Grid>

          {/* Analytics - Standard Box */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureBox
              title="Analytics & Insights"
              icon={<TrendingUpIcon />}
              description="Turn data into actionable insights with customizable dashboards and BI tools."
              delay={0.4}
              accent="blue"
            />
          </Grid>

          {/* Sales & Projects - Wide Box */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ ...styles.bentoBox, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Growth & Execution
                </Typography>
                <List>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon><CampaignIcon sx={{ color: neonRed }} /></ListItemIcon>
                    <ListItemText primary="Sales & Marketing: Lead scoring, campaigns, and opportunity tracking." primaryTypographyProps={{ color: '#aaa' }} />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><AssignmentIcon sx={{ color: neonBlue }} /></ListItemIcon>
                    <ListItemText primary="Projects: Task tracking, resource allocation, and milestone management." primaryTypographyProps={{ color: '#aaa' }} />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'block' }, p: 3, border: '1px dashed #333', borderRadius: '12px' }}>
                <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  +45%
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>Efficiency Boost</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Documentation Callout */}
          <Grid item xs={12} md={4}>
            <Paper
              component="a"
              href="/documentation.md"
              target="_blank"
              sx={{
                ...styles.bentoBox,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                textDecoration: 'none',
                border: '1px solid #333',
                background: '#000',
                '&:hover': {
                  borderColor: '#fff',
                  boxShadow: '0 0 30px rgba(255,255,255,0.1)'
                }
              }}
            >
              <ArticleIcon sx={{ fontSize: 60, color: '#fff', mb: 2 }} />
              <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>
                Read the Docs
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                Deep dive into system architecture and module details.
              </Typography>
            </Paper>
          </Grid>

        </Grid>

        {/* FOOTER */}
        <Box sx={{ mt: 15, borderTop: '1px solid #222', pt: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>VAULT INSIGHT</Typography>
              <Typography variant="body2" sx={{ color: '#666', maxWidth: '400px' }}>
                Empowering enterprises with next-generation resource planning and management tools. Built for scale, security, and speed.
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>Platform</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Login</MuiLink>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Registration</MuiLink>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Documentation</MuiLink>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>Legal</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Privacy Policy</MuiLink>
                <MuiLink href="#" sx={{ color: '#666', textDecoration: 'none', '&:hover': { color: '#fff' } }}>Terms of Service</MuiLink>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ color: '#444', mt: 8, textAlign: 'center' }}>
            © {new Date().getFullYear()} Vault Insight. All rights reserved.
          </Typography>
        </Box>

      </Container>

      <LoginDialog open={loginOpen} onClose={handleLoginClose} />
    </Box>
  );
};

export default HomePage;

